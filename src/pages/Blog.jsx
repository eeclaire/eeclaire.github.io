import React from 'react';

import BlogSnippet from '../components/BlogSnippet'
import blogList from '../data/blogs'


const Blog = React.createClass({
	render() {
		const blogSnippets = blogList.map(blog => {
			return (
				<BlogSnippet key={blog.id} blog_title={blog.title} blog_date={blog.date} blog_description={blog.description} blog_fileref={blog.fileref} />
			)
		});
		return (
			<div>
				{ blogSnippets }
			</div>
		);
	}
});

export default Blog;
