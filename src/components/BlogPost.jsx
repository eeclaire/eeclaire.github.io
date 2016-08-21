import React from 'react';


const BlogPost = React.createClass({
	render() {
		return(
			<div className="blogPost">
				<p className="blogTitle">{this.props.blog_title}</p>
				<p className="blogDate">{this.props.blog_date}</p>
				<p className="blogContent">{this.props.blog_content}</p>
			</div>
		);
	}
});

export default BlogPost;
