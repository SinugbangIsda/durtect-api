from flask import Flask, request, jsonify
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
    uid = request.form.get("uid")
    file_name = image.filename
    image.save(file_name)
    detect = model(file_name)                                                                                                                                                                                                                                                                                                    
    detect.save()
    results = detect.pandas().xyxy[0].to_json()
    os.remove(file_name)
    results_json = json.loads(results)

    if results_json["class"] == {}:
        results_json["status"] = "NULL"
    else:
        local_path = "runs/detect/exp/" + file_name
        cloud_path = "images/" + file_name
        storage.child(cloud_path).put(local_path)
        image_uri = storage.child(cloud_path).get_url(None)
        results_json["image_uri"] = image_uri
        results_json["status"] = "OK"
        results_json["timestamp"] = 2
        results_json["uid"] = uid
        db.child("detections").push(results_json)
        
    shutil.rmtree("runs")
    result = json.dumps(results_json)
    return result    

@app.route("/rh", methods = ["GET"])
def get_recent_history():
    data = db.child("detections").get()
    return data.val()

@app.route("/h/<detection_id>", methods = ["GET"])
def get_result():
    return

@app.route("/r", methods = ["POST"])
def register_user():
    email = request.form.get("email")
    password = request.form.get("password")
    print(email, password)
    auth.create_user_with_email_and_password(email, password)
    return "success"

@app.route("/l", methods = ["POST"])
def login_user():
    email = request.form.get("email")
    password = request.form.get("password")
    auth.sign_in_with_email_and_password(email, password)
    return "success"

if __name__ == "__main__":
    model = torch.hub.load("ultralytics/yolov5", "custom", path = "ML/weights/jesus.pt")
    firebase = pyrebase.initialize_app(firebase_config)
    auth = firebase.auth()
    db = firebase.database()
    storage = firebase.storage()
    app.run(host = "0.0.0.0", port = 5000, debug = True) 
