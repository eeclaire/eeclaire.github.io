import React from 'react';

const About =  React.createClass({
	render() {
		return (
			<div className="intro">
				<div><img className="medaillon" src="/src/img/brunch.jpg"/></div>
				<p>Hi there! My name is Claire and I am a grad student at Columbia working towards a Masters in Electrical Engineering.</p>
				<p>I'm also currently a fellow on <a href="http://mashable.com/">Mashable's</a> Data Science team, where I primarily work on optimizing vector representations of images. We can use those vectors to build machine learning models that will reasonably predict the success of an article.</p>
				<div>
					<span><p>As a thanks for reading this far, here's a gif my friend Alice made of us at PennApps</p></span>
					<span><img id="pennapps" align="middle" src="/src/img/pennapps.gif"/></span>
				</div>
			</div>
		);
	}
});

export default About;