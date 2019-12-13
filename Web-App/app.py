# Cian Doyle 
# G00335783

# Python Flask App that reads input from a webpage which in turn passes it to a trained model.

import flask as fl 
# Encoding/Decoding data
import base64
# Plots data
import numpy as np

# Library of python bindings for visual problems
import cv2
# Imports from Python Image Library
from PIL import Image, ImageOps
from keras.models import load_model

model = load_model('../trained_model.h5')

app = fl.Flask(__name__)
# Variables for the image
height = 28
width = 28
size = height, width

@app.route('/')
def home():
    return fl.render_template('web-app.html')


@app.route('/prediction', methods=['POST'])
def convertImage():
    # get the image from the request
    encoded = fl.request.values[('imgBase64')]

    # decode the dataURL
    # remove the added part of the url start from the 22nd index of the image array
    decoded = base64.b64decode(encoded[22:])

    # save image
    with open('image.png', 'wb') as f:
        f.write(decoded)

    # Open the recently created image
    drawnImage = Image.open("image.png")

    newImage = ImageOps.fit(drawnImage, size, Image.ANTIALIAS)
    newImage.save('resizedImage.png')

    # cv2 loads the new images
    imageCv2 = cv2.imread("resizedImage.png")

    # Setting to a grey scale
    grayScaleImage = cv2.cvtColor(imageCv2, cv2.COLOR_BGR2GRAY)

    # passes the image to array using numpy
    # converts float32 to and divides by 255
    grayScaleArray = np.array(grayScaleImage, dtype=np.float32).reshape(1, 784)
    grayScaleArray /= 255

    # setter and getter to return predicition
    setPrediction = model.predict(grayScaleArray)
    getPrediction = np.array(setPrediction[0])

    # np.argmax returns what should be the same as the digit passed
    predictedNumber = str(np.argmax(getPrediction))
    print(predictedNumber)

    #returns predicted number passed to Javascript file
    return predictedNumber

app.run(threaded = False)