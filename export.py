import torch
import torch.onnx

# Load your custom YOLOv5 model from the PyTorch weights file
model = torch.hub.load('ultralytics/yolov5', 'custom', path = 'ML/weights/jesus.pt')
model.eval()

# Export the model to the ONNX format
dummy_input = torch.randn(1, 3, 320, 320)
torch.onnx.export(model, dummy_input, "gege.onnx")