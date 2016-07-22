import React from 'react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';

const Base =  React.createClass({
	render() {
		return (
			<div>
				<Header/>
				<NavBar/>
				{this.props.children}
			</div>
		);
	}
});

export default Base;