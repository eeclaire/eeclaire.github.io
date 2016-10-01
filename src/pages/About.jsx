import React from 'react';

const About =  React.createClass({
	render() {
		return (
			<div className="text-content text-content-markdown">
				<div><img className="medaillon" src="/src/img/brunch.jpg"/></div>
				<p>Hi there! My name is Claire Durand. I just graduated from Temple University in Philadelphia and as of this fall, I am a graduate student at Columbia University in New York. 
				I'm working towards a Masters in Electrical Engineering, focusing on signal processing and data analytics.</p>
				<br/>
				<p>I'm also currently a fellow on <a href="http://mashable.com/">Mashable's</a> Data Science team, where I primarily work on optimizing vector representations of images. We use those vectors to build machine learning models that will reasonably predict the success of an article.</p>
				<br/>
				<p>I recently completed the <a href="http://hackny.org/fellows/">hackNY fellowship</a> - a ten week internship program that matches students with NYC startups, houses them with other fellows, and provides tech talks from speakers such as <a href="https://twitter.com/michaelpryor">Michael Pryor</a> and <a href="http://craigconnects.org/about">Craig Newmark.</a></p>
				<br/>
				<p>As a thanks for reading this far, here's a gif my friend Alice made of us at PennApps</p>
				<div id="pennappsContainer"><img id="pennapps" src="/src/img/pennapps.gif"/></div>
			</div>
		);
	}
});

export default About;