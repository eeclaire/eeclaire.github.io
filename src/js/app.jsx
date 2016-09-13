import React from 'react';
import {Router, IndexRoute, Route, Link, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

import About from  '../pages/About';
import Base from '../pages/Base';
import Blog from '../pages/Blog';
import BlogPost from '../components/BlogPost';
import Photo from  '../pages/Photo';
import Projects from  '../pages/Projects';

import '../css/style.scss';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Base}>
			<IndexRoute component={About}/>
			<Route path="blog" component={Blog}/>
			<Route path="blogpost/:value" component={BlogPost}/>
			<Route path="photo" component={Photo}/>
			<Route path="projects" component={Projects}/>
		</Route>
	</Router>,
	document.getElementById('container')
);
