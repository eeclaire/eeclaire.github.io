import React from 'react';
import markdown from 'markdown';

const BlogPost = React.createClass({
	//componentDidMount(){
	//	var fileref = this.props.params.value;
	//	console.log(fileref);
	//},
	render() {
		var fileref = this.props.params.value;
		var html = require("html!markdown!../data/blogposts/"+fileref);
		console.log(html)
		return(
			<div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }}>
			</div>
		);
	}
});

export default BlogPost;