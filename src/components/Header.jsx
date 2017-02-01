import React from 'react';

import { Link } from 'react-router';


var githubIcon = require('../img/github.svg');
var twitterIcon = require('../img/twitter.svg');

const Header = React.createClass({
	render() {
		return (
			<div>
				<h1 id="title">
					<Link to="/">
						Claire Durand
					</Link>
					<span className="icons">
						<a href="https://github.com/eeclaire">
							<img src={githubIcon} />
						</a>
						<a href="https://twitter.com/_eeclaire">
							<img src={twitterIcon} />
						</a>
					</span>
				</h1>

			</div>
		);
	}
})

export default Header;
