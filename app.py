from flask import Flask, request, render_template, jsonify
from PIL import Image
import numpy as np
from decimal import Decimal
import tensorflow as tf  # Make sure to import TensorFlow

app = Flask(__name__)

def preprocessing(image):
    image = Image.open(image)
    image = image.resize((224,224))
    image_arr = np.array(image.convert('RGB'))
    image_arr = np.expand_dims(image_arr, axis=0)  # Add batch dimension
    return image_arr.astype(np.float32)  # Ensure float32 dtype for tf.lite.Interpreter

model_path="best_model_eff.tflite"
# Initialize the TensorFlow Lite Interpreter with the model
interpreter = tf.lite.Interpreter(model_path=model_path)
interpreter.allocate_tensors()
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

classes = ['Acne and Rosacea Photos','Eczema Photos','Exanthems and Drug Eruptions','Scabies Lyme Disease and other Infestations and Bites','Tinea Ringworm Candidiasis and other Fungal Infections','Vasculitis Photos']
thresholds =[Decimal('.99'), Decimal('.99'), Decimal('.99'), Decimal('.9999'), Decimal('.99'), Decimal('.99')]


@app.route('/')
def index():
    return render_template('index.html', appName="Skin Disease Recognition Application")

def model_predict(image_arr):
    interpreter.set_tensor(input_details[0]['index'], image_arr)
    interpreter.invoke()
    result = interpreter.get_tensor(output_details[0]['index'])
    return result

@app.route('/predictApi', methods=["POST"])
def api():
    try:
        if 'fileup' not in request.files:
            return jsonify({'Error': "Please try again. The Image doesn't exist"})
        image = request.files.get('fileup')
        image_arr = preprocessing(image)
        result = model_predict(image_arr)
        ind = np.argmax(result)
        max_prob = Decimal(str(result[0, ind]))
        if max_prob < thresholds[ind]:
            return jsonify({'Error': 'No disease detected or normal skin.'})
        prediction = classes[ind]
        return jsonify({'prediction': prediction})
    except Exception as e:
        return jsonify({'Error': 'An error occurred', 'Message': str(e)})

@app.route('/predict', methods=['GET', 'POST'])
def predict():
    if request.method == 'POST':
        try:
            image = request.files['fileup']
            image_arr = preprocessing(image)
            result = model_predict(image_arr)
            ind = np.argmax(result)
            max_prob = Decimal(str(result[0, ind]))
            if max_prob < thresholds[ind]:
                prediction = "No disease detected or normal skin."
            else:
                prediction = classes[ind]
            return render_template('index.html', prediction=prediction, image='../static/IMG/018.jpg', appName="Skin Disease Recognition Application")
        except Exception as e:
            return render_template('index.html', prediction='Error: ' + str(e), appName="Skin Disease Recognition Application")
    else:
        return render_template('index.html', appName="Skin Disease Recognition Application")

if __name__ == '__main__':
    app.run(debug=True)


