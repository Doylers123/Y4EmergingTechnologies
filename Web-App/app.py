# Cian Doyle 
# G00335783

# Pyhton Flask App that reads input from a webpage which in turn passes it to a trained model.

import flask as fl 

# Encoding/Decoding data
import base64

# Plots data
import numpy as np

import keras as kr

import tensorflow as tf

# Library of python bindings for visual problems
import cv2

# Imports from Python Image Library
from PIL import Image, ImageOps

from keras.models import load_model

model = load_model('../model.h5')

app = fl.Flask(__name__)
