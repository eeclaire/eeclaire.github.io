import React from 'react';


const PhotoComponent = React.createClass({
	render() {
		return(
			<div className="photoPost">
				<img src={this.props.photo_url} className="photos"/>
				<p className="photoTitle">{this.props.photo_title}</p>
				<p className="photoDate">{this.props.photo_date}</p>
			</div>
		);
	}
})

export default PhotoComponent;