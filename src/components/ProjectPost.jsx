import React from 'react';


const ProjectPost = React.createClass({
	render() {
		return(
			<div className="projectPost">
				<p className="projectTitle">{this.props.project_title}</p>
				<p className="projectDescript">{this.props.project_description}</p>
				<img src={this.props.project_image} className="photos"/>
				<a href={this.props.project_link}>{this.props.project_link}</a>
			</div>
		);
	}
});

export default ProjectPost;
