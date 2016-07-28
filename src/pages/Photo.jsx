import React from 'react';

import PhotoComponent from '../components/PhotoComponent'
import photoList from '../data/photos'


const Photo =  React.createClass({
	render() {
		const photoNodes = photoList.map(photo => {
			return (
				<PhotoComponent photo_url={photo.url} photo_title={photo.title} key={photo.id} />
			)
		});
		return (
			<div>
				{ photoNodes }
			</div>
		);
	}
});

export default Photo;