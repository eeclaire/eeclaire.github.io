import React from 'react';
import { Link } from 'react-router';

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
							<img src="/src/img/github.svg" />
						</a>
						<a href="https://twitter.com/_eeclaire">
							<img src="/src/img/twitter.svg" />
						</a>
					</span>
				</h1>

			</div>
		);
	}
})

export default Header;
