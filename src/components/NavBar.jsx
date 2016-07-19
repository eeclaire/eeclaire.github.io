import React from 'react';


const NavBar =  React.createClass({
	render() {
		return (
			<nav>
			  <ul>
			    <li><a href="#">Projects</a></li>
			    <li><a href="#">Resume</a></li>
			    <li><a href="#">Blog</a></li>
			    <li><a href="#">Photo</a></li>
			  </ul>
			</nav>
		);
	}
});

export default NavBar;