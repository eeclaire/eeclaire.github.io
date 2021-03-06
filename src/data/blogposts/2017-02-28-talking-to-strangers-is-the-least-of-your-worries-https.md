## Talking to Strangers is the Least of Your Worries - HTTPS

Security on the internet is scary. There’s a lot to the internet, and it seems like a lot about security is written assuming that readers already know more about it than I do. Since I still _don’t really_ understand how the internet works, my general attitude about infosec used to be that the scariest part about it was how little I knew about it. As the saying goes, “ignorance is bliss.” I had an anti-virus, I had passwords that I changed semi-frequently (every time I forgot one), and I delete emails from addresses I don’t know, ESPECIALLY if there’s an attachment. Sorry `viagra420@hotmail.com`, I think you’ve got the wrong email address, I get my performance enhancement drugs from `hotsinglesnearyou@yahoo.com`.

However, since I’ve started at the [Recurse Center](https://www.recurse.com/) (RC) I’ve met people who not only care about infosec, but who are also knowledgeable on the subject. It’s cool because they have strong feelings about that, and they like to share their knowledge. The trouble is that they like to share everything that’s wrong or broken in their field. It’s like watching a trainwreck, except you live in a country where there is no ER, and the only firefighters around are your 14 year old neighbors who mostly train by spraying the hose at their pet Golden Retriever.

I’m still no expert in security by any definition of the word, but I’m a little less ignorant than I was, and my forays into the interwebs are no longer blissful, which is unfortunate since my desired career path as a software engineer is probably going to include quite a bit of internetting. The good news is that I learned about some tools to protect myself, which is good since my high school computer and internet safety course included about as much about protection as a sex ed class in Alabama. That is to say none. _Real_ internet users wait until the internet is fixed.

Since starting at RC, I’ve had one terrifying discussion after another, including about HTTPS, ad-trackers, and the fact that software is inherently broken.

### HTTPS
I blame HTTPS for all of this, really, because I was just having lunch peacefully in a side room when a bunch of RC’ers came in for a workshop on HTTPS. I knew of the recent advent of HTTPS, so I decided to stick around “while I finished eating.” Yeah, right. An hour and a half later, I was very afraid of browsing the internet.  

As it turns out, the ‘S’ in [HTTPS stands for “Shitshow”](https://strugee.net/presentation-https-deployment/ ) but the worst part is that _HTTPS IS STILL A GAZILLION TIMES BETTER THAN HTTP._

Generally, you want to protect yourself from two kinds of attacks, passive and active. Passive attacks are akin to someone listening in on your phone conversation on a third line, or casually watching as you send your banking information to make a transaction, which is creepy enough. Active attacks involve someone modifying the information you send and/or receive. If they change information on the page that you’re seeing, that’s an active attack. 

Under HTTPS, there are a few different factors that determine whether your browsing is safe: *confidentiality*, *integrity*, and *authenticity*.  Confidentiality measures whether anyone can see what you’re doing - this concerns itself with whether you are the victim of a passive attack. Integrity indicates whether anyone can interfere with your actions  - specifically whether anyone is tampering with the transmitted  encrypted data . Authenticity is on a next level entirely. It tells you whether you’re even talking to who _you think_ you’re talking to. It protects you from thinking you’re on your bank’s website when you’re actually at some malicious IP address masquerading as your bank’s website.

HTTPS’ solution to guaranteeing authenticity is Certificate Authorities. Basically, when you navigate to a page on the interwebs, that page exists at an IP address. When you type a URL like https://www.nasa.gov/ into your searchbar, your browser finds out what IP address corresponds to the URL you entered by looking it up in what amounts to a giant dictionary of domain names (URLs) called a DNS server. However, DNS servers can be compromised, and if that happens, #hack3r5 can redirect you to their IP address, even if the link in the search bar is still correct. With HTTPS, you can theoretically verify the page you’re accessing using Certificate Authorities (CAs). 

CAs are trusted third parties that will verify the identity of the webserver at the IP address at which you ended up. When your browser goes to that IP address, with HTTPS, your browser asks the webserver for a certificate signed by a trusted CA. The webserver should already have this. There’s this one-time process where the webserver is like “oh shit, I guess I should do this” and reaches out to the CA with its fancy, cryptographically magic key (I am a Very Professional Software Person who knows these things), and asks the CA to co-sign on it. Once the CA verifies it through some more computer magic (have I mentioned I am a Very Knowledgeable Software Person?), it fills out a form (the certificate) with the webserver’s key. The CA signs off on it using its own CA key that the webserver doesn’t know, and passes along the certificate to the webserver. The webserver is now as proud as a 16-year old who just got their driver’s license, and shows it off to the browser, who sees the CA’s key, and _does_ have a key to verify that the CA’s key is legit. Since the browser can see that the certificate was indeed signed by the CA, it decides it can trust the cryptographic magic key that the webserver wanted to give it all along.
This works because of public-private key pairs. There is more to it (like several layers of CAs that interact with each other because there are A LOT of domains) but that’s the general gist. If a valid certificate can’t be obtained for an HTTPS page, your browser will most likely give you an error.


“Well that sounds pretty good,” I said. “That seems safe. Let’s move on to ad-trackers, blog-writer Claire.” Not so fast, student Claire, why don’t you finish up that sandwich and keep listening.

As it turns out, you can’t even (fully) trust CAs. 

I should mention that each browser has a list of trusted CAs. In Chrome, you can go to `Settings`>`HTTPS/SSL`>`Authorities` to check out which certificate authorities Google trusts. However, there can be many layers of CAs that _can certify each other._ Whenever your browser receives a certificate, it probably hasn’t been directly signed by a root CA that is in your browser’s list of trustworthy CAs, but instead has been signed by a smaller CA that has been signed by another CA that has been signed by another CA that has been signed by … that has been signed by the root CA in your browser. Your browser has to form this chain of trust in order to verify each website.  It’s great because that means the entire system is only as strong as the weakest link. This inspires confidence already.

Some of the main issues are as follows:
* CAs can be, and are, compromised. If the CA is hacked, attackers can gain enough access to the CA database magic to start issuing arbitrary certificates. Which means random people now might have the certificate for, I don’t know, gmail.com, and your browser will be like “yeah, that’s totally good” even if it’s garbage. [1](#1)
* Not all CAs are created equal. Some are more vulnerable to hacking than others, yet through the CA process, they are trusted equally as long as they are a part of the trust chain. And just like any other hack, there is no guarantee that any particular CA has not already been compromised.
* CAs, like any piece of software, are subject to bugs. The problem here is the impact. There are many cases of certificates issued to webservers that shouldn’t qualify. Well-intentioned as they may be, this begs the question of how trustworthy CAs really are.
* Monopolies exist in the CA sphere also. Because of the chain of trust, certain CAs are key to the validation of such a large portion of the internet that browsers have no choice but to whitelist them no matter how badly they screw up, lest ⅓ of the internet became inaccessible to its users.
* Oh by the way, the entire idea of certificates and CAs was created as “a bit of a hand-wave” back in 1994 to protect against a still theoretical man-in-the-middle attack. I still feel good about this, do you feel good about this?

The internet is terrifying.

And hey, at least that’s HTTPS, where you even try to verify the website you’re on, and encrypt the information. If you think the shortcomings of HTTPS are bad, just imagine all of the fun you can have on plain old HTTP. Wahoo!

Under HTTP, you run the risk of being led to a malicious webserver even if the URL in the search bar is correct. The malicious attacker will often interact with the website you meant to visit for you. To you it just looks like you’re interacting with the website as if nothing is wrong, but the hacker sits in the middle, exchanging security information between and the website you meant to reach, all the while maintaining control over what does occur.

I wish I could offer tools to help with this, but my understanding is that the inertia of the CA industry as it is makes it hard to move in any other direction. The EFF is doing good work toward improving internet health in general. There are tools like HTTPS Everywhere, that aim to replace any regular HTTP with the appropriate HTTPS alternative, as long as it exists and the website supports it. But that requires that websites support it, and even still these might break websites.

  
  

Shoutout to [AJ](https://github.com/strugee) and [Jason](https://github.com/jasonaowen) for telling me more about security than I wanted to know. If I can't sleep at night now, it's your fault. Thank you espcially to AJ for fact-checking this post.
  

  
#### 1
I’m being a bit disingenuous here. Some high profile websites employ additional security tools such as OCSP stapling or public key pinning. Moreover, there are usually blacklists that revoke certain certificates that are known to have been falsely given or maliciously obtained. If a domain is important enough (and one would hope that google.com fits in that group), these compromised certificates will be included in your browser’s blacklist of “seemingly-okay-certificates-that-are-actually-not-to-be-trusted". However, that does assume the certificate is _known_ to be compromised first.
