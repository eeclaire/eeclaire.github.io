import React from 'react';

import { Link } from 'react-router';


const NavBar =  React.createClass({
	render() {
		return (
			<nav>
			  <ul>
			    <li><Link to="projects">Projects</Link></li>
			    <li><a href="CV_Durand_Claire.pdf">Resume</a></li>
			    <li><Link to="blog">Blog</Link></li>
			    <li><Link to="photo">Photo</Link></li>
			  </ul>
			</nav>
		);
	}
});

export default NavBar;