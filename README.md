# Y4EmergingTechnologies
## Year 4 project Digit Reader for Emerging technologies

# 1. Intro

This project is to be developed for the 4th year of Computing in Software Development course as part of the Emerging Technologies Module in GMIT. The purpose of this is to use the MNIST dataset to train a neural network to recognise hand written digits via a web app where the user will draw the digits.
The model wil be made in python using Keras in Jupyter Notebook. HTML, JavaScript and CSS are used to create the web app while the model will be connected via a python Flask server file.

# 2. Environment

There are a few necessary installs to be made in order to be able to run:

* Anaconda which can be installed from [here](https://www.anaconda.com/distribution/)(3.7 or newer)

* Tensorflow/ Keras can be installed by entering the following into the command line:
            conda install -c conda-forge keras tensorflow
            
* OpenCV which can be installed by entering pip install opencv-python onto the command line

# 3. How to run

* Download This repository by copying the repository link and in your command promt type in git clone followed by the repository link.

* Once it has been cloned, cd into the project folder, then cd into the 'Web-App' folder and type 'python app.py' to run
*The server application will be listening on http://127.0.0.1:5000/ so copy and paste that into your browser.
*On the canvas, draw a digit (0-9) and then select the blue Submit button which should then show you a predicted number.
*Click the reset button to clear the canvas and draw a new digit to get predicted.

# References

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
https://palletsprojects.com/p/flask/
http://yann.lecun.com/exdb/mnist/
https://nbviewer.jupyter.org/github/ianmcloughlin/jupyter-teaching-notebooks/blob/master/mnist.ipynb
https://web.microsoftstream.com/video/f6bd0f1c-802c-4c0a-bc54-211bc9d85ba5?referrer=https:%2F%2Flearnonline.gmit.ie%2Fcourse%2Fview.php%3Fid%3D135
https://nbviewer.jupyter.org/github/ianmcloughlin/jupyter-teaching-notebooks/blob/master/learning.ipynb
