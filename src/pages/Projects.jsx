import React from 'react';

import ProjectPost from '../components/ProjectPost'
import projectList from '../data/projects'

const Projects =  React.createClass({
	render() {
		const projectNodes = projectList.map(project => {
			return(
				<ProjectPost key={project.id} project_title={project.title} project_image={project.image} project_description={project.description} project_link={project.link}/>
			)
		});
		return (
			<div>
				{ projectNodes }
			</div>
		);
	}
});

export default Projects;