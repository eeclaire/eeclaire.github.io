import React from 'react';


const PhotoComponent = React.createClass({
	render() {
		return(
			<div>
				<img src={this.props.photo_url}></img>
				<p>{this.props.photo_title}</p>
			</div>
		);
	}
})

export default PhotoComponent;