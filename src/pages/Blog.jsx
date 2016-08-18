import React from 'react';

import BlogPost from '../components/BlogPost'
import blogList from '../data/blogs'


const Blog = React.createClass({
	render() {
		const blogNodes = blogList.map(blog => {
			return (
				<BlogPost key={blog.id} blog_title={blog.title} blog_date={blog.date} blog_content={blog.content} />
			)
		});
		return (
			<div>
				{ blogNodes }
			</div>
		);
	}
});

export default Blog;
