import React from 'react';
import {Router, IndexRoute, Route, Link, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

import About from  '../pages/About';
import Base from '../pages/Base';
import Blog from '../pages/Blog';
import Photo from  '../pages/Photo';
import Projects from  '../pages/Projects';
import Resume from  '../pages/Resume';


import '../css/style.scss';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Base}>
			<IndexRoute component={About}/>
			<Route path="blog" component={Blog}/>
			<Route path="photo" component={Photo}/>
			<Route path="projects" component={Projects}/>
			<Route path="resume" component={Resume}/>
		</Route>
	</Router>,
	document.getElementById('container')
);
