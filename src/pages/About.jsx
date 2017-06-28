import React from 'react';

const About =  React.createClass({
	render() {
		return (
			<div className="text-content text-content-markdown">
				<img className="medaillon" src="/src/img/brunch.jpg"/><p id="hullo">Hello!</p>
				<p>My name is Claire Durand. </p>
				<br/>
				<p>I recently finished a batch at the <a href="https://www.recurse.com/">Recurse Center</a>, where I focused on data engineering and visualization.
				Before that I completed a six-month fellowship on <a href="http://mashable.com/">Mashable's</a> Data Science team, where I worked on optimizing vector representations of images and building a machine learning model that could recreate a given aesthetic style.
				Even before that, I participated in the <a href="http://hackny.org/fellows/">hackNY fellowship</a> - a ten week internship program that matches students with NYC startups, houses them with other fellows, and provides tech talks from speakers such as <a href="https://twitter.com/michaelpryor">Michael Pryor</a> and <a href="http://craigconnects.org/about">Craig Newmark.</a></p>
				<br/>
			</div>
		);
	}
});

export default About;