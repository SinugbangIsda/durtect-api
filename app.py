from flask import Flask, request, jsonify
import torch
import os 
import io
from PIL import Image
import shutil

app = Flask(__name__)

@app.route('/api/v1/detect', methods = ['POST'])
def detect():
    image = request.files['image']
    file_name = image.filename
    image.save(file_name)
    detect = model(file_name)                                                                                                                                                                                                                                                                                                    
    # detect.save()
    # generated_image_directory = "runs/detect/exp"
    data = detect.pandas().xyxy[0].to_json()
    os.remove(file_name)
    # shutil.rmtree("runs")
    print(data)
    return data

if __name__ == "__main__":
    model = torch.hub.load('ultralytics/yolov5', 'custom', path = 'ML/weights/jesus.pt')
    app.run(host = "0.0.0.0", port = 5000, debug = True) 
