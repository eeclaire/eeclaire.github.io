import React from 'react';


const BlogPost = React.createClass({
	render() {
		return(
			<div>
				<p>{this.props.blog_title}</p>
				<p>{this.props.blog_date}</p>
				<p>{this.props.blog_content}</p>
			</div>
		);
	}
});

export default BlogPost;
