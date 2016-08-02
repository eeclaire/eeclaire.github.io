import React from 'react';


const PhotoComponent = React.createClass({
	render() {
		return(
			<div>
				<img src={this.props.photo_url} className="photos"/>
				<p className="photoTitle">{this.props.photo_title}</p>
			</div>
		);
	}
})

export default PhotoComponent;