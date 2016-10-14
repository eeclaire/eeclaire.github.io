	import React from 'react';

import { Link } from 'react-router';


const BlogSnippet = React.createClass({
	render() {
		return(
			<Link to={`/blogpost/${this.props.blog_fileref}`}>
				<div className="blogPost">
					<p className="blogTitle">{this.props.blog_title}</p>
					<p className="blogDate">{this.props.blog_date}</p>
					<p className="blogDescription">{this.props.blog_description}</p>
				</div>
			</Link>
		);
	}
});

export default BlogSnippet;
