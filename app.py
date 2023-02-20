from flask import Flask, request
import torch
import os 
import shutil
import json
from dotenv import load_dotenv
import pyrebase

app = Flask(__name__)

load_dotenv()
FIREBASE_API_KEY = os.getenv("FIREBASE_API_KEY")
FIREBASE_AUTH_DOMAIN = os.getenv("FIREBASE_AUTH_DOMAIN")
FIREBASE_DATABASE_URL = os.getenv("FIREBASE_DATABASE_URL")
FIREBASE_PROJECT_ID = os.getenv("FIREBASE_PROJECT_ID")
FIREBASE_STORAGE_BUCKET = os.getenv("FIREBASE_STORAGE_BUCKET")
FIREBASE_MESSENGER_SENDER_ID = os.getenv("FIREBASE_MESSENGER_SENDER_ID")
FIREBASE_APP_ID = os.getenv("FIREBASE_APP_ID")
FIREBASE_MEASUREMENT_ID = os.getenv("FIREBASE_MEASUREMENT_ID")

firebase_config = {
  "apiKey": FIREBASE_API_KEY,
  "authDomain": FIREBASE_AUTH_DOMAIN,
  "databaseURL": FIREBASE_DATABASE_URL,
  "projectId": FIREBASE_PROJECT_ID,
  "storageBucket": FIREBASE_STORAGE_BUCKET,
  "messagingSenderId": FIREBASE_MESSENGER_SENDER_ID,
  "appId": FIREBASE_APP_ID,
  "measurementId": FIREBASE_MEASUREMENT_ID,
  "serviceAccount": "serviceAccount.json"
}

@app.route("/d", methods = ["POST"])
def detect():
    image = request.files["image"]
    timestamp = request.form.get("timestamp")
    user_id = request.form.get("user_id")
    file_name = image.filename
    image.save(file_name)
    detect = model(file_name)
    results = detect.pandas().xyxy[0].to_json()
    os.remove(file_name)
    results_json = json.loads(results)
    results_json["timestamp"] = timestamp

    if results_json["class"] == {}:
        results_json["status"] = "null"
        results_json["image_uri"] = "null"
        results_json = { "something": results_json }
    else:
        detect.save()
        file_name = file_name.replace(".jpeg", ".jpg")
        local_path = "runs/detect/exp/" + file_name
        cloud_path = "images/" + file_name
        storage.child(cloud_path).put(local_path)
        image_uri = storage.child(cloud_path).get_url(None)
        results_json["image_uri"] = image_uri
        results_json["status"] = "OK"
        entry = db.child("detections").child(user_id).push(results_json)
        data_id = entry["name"]
        results_json = { data_id: results_json}
        shutil.rmtree("runs")
    final_response = json.dumps(results_json)
    print(final_response)
    return final_response    

@app.route("/rh", methods = ["POST"])
def get_recent_logs():
    user_id = request.form.get("user_id")
    data = db.child("detections").child(user_id).order_by_child("timestamp").limit_to_first(5).get()
    if data.val() == None:
        response = { "message": "empty"}
        return response
    else:
        return data.val()

@app.route("/ah", methods = ["POST"])
def get_all_logs():
    user_id = request.form.get("user_id")
    data = db.child("detections").child(user_id).order_by_child("timestamp").get()
    if data.val() == None:
        response = { "message": "empty"}
        return response
    else:
        return data.val()

@app.route("/dl", methods = ["POST"])
def delete_log():
    user_id = request.form.get("user_id")
    entry_id = request.form.get("entry_id")
    db.child("detections").child(user_id).child(entry_id).remove()
    response = { "message": "deleted"}
    return response

@app.route("/dal", methods = ["POST"])
def delete_all_logs():
    user_id = request.form.get("user_id")
    db.child("detections").child(user_id).remove()
    response = { "message": "deleted"}
    return response

if __name__ == "__main__":
    model = torch.hub.load("ultralytics/yolov5", "custom", path = "ML/weights/jesus.pt")
    firebase = pyrebase.initialize_app(firebase_config)
    auth = firebase.auth()
    db = firebase.database()
    storage = firebase.storage()
    app.run(host = "0.0.0.0", port = 5000, debug = True) 
