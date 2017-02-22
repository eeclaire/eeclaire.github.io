During my hackNY interview last year, I was asked about Markov Chains. Ever since that, I’ve wanted to implement a Markov-Chain from scratch. And this past Friday, I finally did!  
A Markov Chain can be described as a set of states. Moving between each state has a particular probability. A sequence of states is created by moving from one state to another according to the probabilities that link the current state to the other states in the set. The probabilities from one state are conditionally independent from those in past states. In other words, if I move from state A to state B, the probability of moving from B to state C is not affected by my past in state A.  
I recommend checking out http://setosa.io/ev/markov-chains/ if you’re unfamiliar with how Markov Chains work!

I split my work up into “Pre-processing the text”, “Building the Markov Chain Graph”, and “Traversing the Markov Chain.” 

### Pre-processing
It’s easier to operate with a list of words than with a string of characters, so before I can do anything with the Markov Chain itself, I need to do some pre-processing. Since I’m using Python, it’s pretty easy: all I have to do is call the `split()` method on the input string. By default this will split up the string using space as a delimiter. The string “Hello world. Goodnight moon.” becomes [“Hello”, “world.”, “Goodnight”, “moon.”].  
However I’m worried about having capital letters in the middle of a sentence, and I’d really like to be able to use periods as an end-of-sentence marker. So, before splitting my string, I convert the entire thing to lowercase using the `.lower()` method and I add spaces around periods using replace to make sure they’ll be isolated. The command ultimately looks like
```
sentences = text_raw.lower().replace('.', ' . ').split()
```
Cool. Now my “Hello world. Goodnight moon.” string ends up like [“hello”, “world”, “.”, “goodnight”, “moon”, “.”] which feels pretty good. I’m ready to Markov the Chain out of this list!

### Building the Markov Chain
Markov Chains are basically a directed graph where the edges have a weight that is inversely proportional to their probability (as long as I remember how graphs work). There are a few different ways of representing graphs, but I’m going to go with an adjacency list, and because I’m in Python, I’m going to use a dictionary! :tada:  <span>&#x1F389</span>
What’s more, I’m going to make a Markov class, because I want to practice my Object-Oriented Programming skills! So I create my class, and upon initializing it, I’m going to give it a dictionary attribute, which, in the example below, I call chain.
```
class Markov:
    def __init__(self):
        self.chain = {}
```
Eyyy! Each key in this dictionary should be a possible current word, and each value will be a list of words that possibly follow this current word. So if I have the text “Goodnight room. Goodnight moon.” my dictionary should look like
```
{
“goodnight”: [“room”, “moon”],
“room”: [“.”],
“moon”: [“.”],
“.”: [“goodnight”]
}
```
Notice that as we decided earlier, the period counts as its own word. This is useful, because not all words make sense at the beginning of a sentence! By keeping track of words that follow a period, we can maintain some kind of grammatical logic. Heck yeah sentences!  
Now that I’ve decided that, I just have to go through the list of words and add them all!
First I’m going to practice adding words one at a time. Assuming I’m given the current word and the next word in the text (such as “goodnight” and “moon”), I can check if the current word already exists as a key in the dictionary. If it does, I can add the next word to the list of possible following words, and if it doesn’t, I can create that key-value pair. In the following code sample, the `.get()` method returns None if the “word” key doesn’t exist yet, so using that is an easy and clean way of checking whether I have that word in the dictionary yet.
```
def add_next_word(self, word, next_word):
    if self.chain.get(word) is None:
        self.chain[word] = [next_word]
    else:
        self.chain[word].append(next_word)
```
This is a naive implementation where I keep adding words to the list of possible next words, regardless of whether I’ve seen them before or not, in order to maintain some sort of probability. It’s not super memory efficient, but I don’t like the idea of re-calculating the probability for each word in the list of possible next words _every time_ I add a word, so YOLO.  
In any case, since I have the logic to add a pair of words into my dictionary, now I can iterate through a full text and insert all of it into my dictionary to form a graph! Since I’ve decided periods should be the marker before the first word in a sentence, so I’m going to call my add_next_word function with it:
```
self.add_next_word('.', word_list[0])
```
After that, I’m free to iterate through the rest of the text. I’m going to stop my loop before the last word, which should be a period by the way, so that I don’t get an index error when I try to access the last “next word.” So here we go!
```
def add_text(self, word_list):
    self.add_next_word('.', word_list[0])   # sentences begin after a '.'
    for i in range(0, len(word_list) - 1):
        self.add_next_word(word_list[i], word_list[i + 1])
```
Cool beans! And with these two functions, I can populate a Markov Chain! Next up is traversing it in order to generate sentences.

### Traversing the Markov Chain
So we created this graph. But it’s pretty useless unless I’m actually getting something out of it. The good news is that traversing the graph is pretty easy. I can give it a starting point, and _let it run wild_.  Basically, if I specify a starting word, I can make a random selection from the list of next possible words using `random.choice()`, then set that word as my current word, and pick a word from _its_  list of next possible words. So if I pick up my example dictionary from earlier
```
{
“goodnight”: [“room”, “moon”],
“room”: [“.”],
“moon”: [“.”],
“.”: [“goodnight”]
}
```
I would start with “.”. Since “goodnight” is the only word in that list, “goodnight” becomes the new current word. So now I’ll have to randomly pick from “room” and “moon”, and so on and so forth.  
In code world, this looks a little like the following, but with a loop that repeats the logic
```
next_word = random.choice(self.chain[current_word])
generated_text = generated_text + “ “ + next_word
current_word = next_word
```
However, this could easily go on forever. So I want to create some kind of limit on my loop to indicate where I want sentences to end. One logical place is to end a sentence is a period. So if I come across a period, I can append it to the text and return the sentence I’ve created. Like so
```
next_word = random.choice(self.chain[current_word])
            if next_word == '.':
                generated_text = generated_text + "."
                return generated_text
```
But I don’t want to just rely on happening across a “.” to end a sentence because long sentences can get really tedious to parse, especially when they’re not saying anything particularly meaningful and maybe you’re wondering where they’re going with this and okay you get the message.   
So maybe I want to stop traversing through the graph after `n` words. I can institute a word_count that I iterate after every word I add and control my loop using that. If I get past those `n` words, then I can just say “close enough”, throw a period at the end of the text, and return it. This might look a little like
```
while(word_count < n):
    next_word = random.choice(self.chain[current_word])
    if next_word == '.':
        generated_text = generated_text + "."
        return generated_text
    else:
        generated_text = generated_text + " " + next_word
        current_word = next_word
        word_count += 1

# Make sure each sentence ends with a period
if generated_text[-1] != '.':
    generated_text = generated_text + '.'

return generated_text

```
I do want to make sure that the starting point for each sentence is the period. Because I want to make sure to start my sentence with a word that has started a sentence before (who has leadership experience, if you will). I’m going to count that period as my first word, because I like to cheat.  
After adding that into my code, I get a sentence-generating method for my Markov Chain that looks like this.
```
def generate_sentence(self, n):
    # Come up with the first word by using a possible word after a period
    current_word = random.choice(self.chain['.'])
    generated_text = current_word
    word_count = 1

    # Iterate through the markov chain until you hit a period
    # or the max number of words in a sentence
    while(word_count < n):
        next_word = random.choice(self.chain[current_word])
        if next_word == '.':
            generated_text = generated_text + "."
            return generated_text
        else:
            generated_text = generated_text + " " + next_word
            current_word = next_word
            word_count += 1

    # Make sure each sentence ends with a period
    if generated_text[-1] != '.':
        generated_text = generated_text + '.'

    return generated_text
```
Now that I’ve got all of this, I can write a script that reads in some text, instantiates my Markov Chain class, and calls in a little function that will call the generate_sentence method an `n_sentences` number of times. I did this with the first chapter of 1984 by Georges Orwell, and it’s generated some of the following paragraphs:

_10 max words per sentence and 5 sentences_  
“people simply an electric current was nearly a place in. the shut window-pane, the little sandy-haired woman who seemed to. you were bound to one of his face on with. actually flinched backwards in the telescreen was a tremulous murmur. a voluntary act of children with a thick neck.”

_10 max words per sentence and 10 sentences_  
“for a thick, quarto-sized blank book was illegal, since he. it was one seemed to tear out of the book. with the thing of places away about three other incident. it not turned pink and the ministry of boiled cabbage. their seats but childish handwriting as the future, for perhaps. but the screen. it was merely to him through a kind that the. better than before, moreover, so completely did happen winston had. it had any pretence was the thought police. the orators of about that every record of manner.”

_20 max words per sentence and 10 sentences_  
“he had never crossed his back the thought her arms could you. there was demanding the people, less. you saw the hand. at o'brien was impossible to pin down in the whole room, it did not perfect. winston kept his chin nuzzled into the author and for perhaps not strictly kept, because she extended her and bounced. he had exchanged an eighteenth-century nobleman offering his body merely a small, sandy-haired woman putting her and it guiltily home. but no, the flat a great fuzzy aureole of goldstein at present the very good one of parody of goldstein. big brother is watching you, the meagreness of civilization. the four of being spoken to, came from a dulled mirror which was a sheep, and was merely to wear. but this time he had happened -- minitrue, minipax, miniluv, and the thought her from very fair, his powerful chest.”

This feels like it’s gone on long enough, but tasks I could accomplish next include building logic for punctuation other than periods, or adding in capital letters for the first words in each sentence of my output.
If you’re interested in the full code, it’s on Github, at https://github.com/eeclaire/data-structures/tree/master/markov-chain
