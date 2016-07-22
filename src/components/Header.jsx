import React from 'react';

import { Link } from 'react-router';

const Header = React.createClass({
	render() {
		return (
			<h1 id="title">
				<Link to="/">
					Claire Durand
				</Link>
			</h1>
		);
	}
})

export default Header;
