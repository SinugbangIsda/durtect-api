from flask import Flask, request, jsonify
import torch
import os 
model = torch.hub.load('ML/yolov5-master', 'custom', path = 'ML/weights/jesus.pt', source = "local")

app = Flask(__name__)

@app.route('/api/v1/detect', methods = ['POST'])
def detect():
    image = request.files['image']
    file_name = image.filename
    image.save(file_name)
    results = model(file_name)                                                                                                                                                                                                                                                                                                    
    results.save()
    gege = results.pandas().xyxy[0].to_json()
    os.remove(file_name)
    print(gege)
    return gege

if __name__ == "__main__":
    app.run(host = "0.0.0.0", port = 5000, debug = True) 