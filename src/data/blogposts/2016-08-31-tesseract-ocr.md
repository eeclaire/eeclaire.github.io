# Using Tesseract and Python for OCR


I was recently asked whether it's possible to obtain text from an image - in this case, in from screencaps of a Snapchat story such as the one below. I considered how I might implement this from scratch for a second and, emboldened by the moderate success of my previous work project, very confidently replied "Yeah, definitely!" I figured out pretty quickly that my initial idea - nested loops within nested loops within loops... with a little bit of fun bit-masking - was probably not that efficient, and that somebody else had probably already come up with a better solution. Luckily for me, a friend suggested looking into OCR. OCR stands for **Optical Character Recognition** and, as it turns out, some of the clever minds at Google had already tackled this problem and opened up [Tesseract OCR](https://github.com/tesseract-ocr/tesseract) to the pubilc.


### Setup

* Python 2.7
* tesseract-ocr
* pytesseract 0.1.6
* OpenCV 2
* Pillow (a maintained fork of PIL)

I used Python 2.7. In order to accomplish the actual character recognition, I used [pytesseract wrapper](https://pypi.python.org/pypi/pytesseract/0.1). But you need to install tesseract ocr before you can handle the pytesseract wrapper. OpenCV2 and Pillow were used in order to perform preprocessing on the image in order to prep it for the character recognition.

Since I was working with Mac OS X and I could just use homebrew to install tesseract-ocr as shown
</br>
```
$ brew install tesseract
```
</br>
There are more installation instructions [here](https://github.com/tesseract-ocr/tesseract/wiki#installation) if you're working wiht Linux or Windows. Note that in this blog post I'll be using "$" to indicated commands that can be entered into your terminal.

Once that's done, I can use Python's package manager to install the wrapper pytesseract with
</br>
```
$ pip install Pillow
```
</br>
Install OpenCV2 either using homebrew (if you're using Mac OSX) or from source (if you're using Linux). You can install PIL using the Python package manager with
</br>
```
$ pip install Pillow
```
</br>
Once you've got that, you're ready to go!

### Preprocessing
Sure, you can just run the tesseract ocr on the original image, but you might not get the kind of results you could easily get with just a little bit of preprocessing.

You can read in the image using the `cv2.imread()` function.
