# Using Tesseract and Python for OCR


I was recently asked whether it's possible to obtain text from an image - in this case, in from screencaps of a Snapchat story such as the one below. I considered how I might implement this from scratch for a second and, emboldened by the moderate success of my previous work project, very confidently replied "Yeah, definitely!" I figured out pretty quickly that my initial idea - nested loops within nested loops within loops... with a little bit of fun bit-masking - was probably not that efficient, and that somebody else had probably already come up with a better solution. Luckily for me, a friend suggested looking into OCR. OCR stands for **Optical Character Recognition** and, as it turns out, some of the clever minds at Google had already tackled this problem and opened up [Tesseract OCR](https://github.com/tesseract-ocr/tesseract) to the pubilc.


### Setup

* Python 2.7
* tesseract-ocr
* pytesseract 0.1.6
* OpenCV 2
* PIL

I used Python 2.7 (ADD IN WHERE YOU CAN GET THAT) and the [pytesseract wrapper](https://pypi.python.org/pypi/pytesseract/0.1). Note that you still need to install tesseract.

Since I was working with Mac OS X and have homebrew, I could just type in
```
$ brew install tesseract
```
but there are more installation instructions [here](https://github.com/tesseract-ocr/tesseract/wiki#installation) if you're working wiht Linux or Windows. Note that in this blog post I'll be using "$" to indicated commands that can be entered into your terminal.

Once that's done, I can use Python's package manager to install the wrapper pytesseract with
```
$ pip install pytesseract
```