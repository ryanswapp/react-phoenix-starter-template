import './style/index.css';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { createHistory, useBasename } from 'history';

// Components
import App from './components/App';
import Home from './components/app/home';
import About from './components/app/about';

const history = useBasename(createHistory)({
	basename: '/'
});

render((
	<Router history={history}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="about" component={About} />
		</Route>
	</Router>
), document.getElementById('root'));