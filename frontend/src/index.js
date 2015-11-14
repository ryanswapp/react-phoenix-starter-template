import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import { createHistory, useBasename } from 'history';

// Components
import App from './components/App';
import About from './components/about';

const history = useBasename(createHistory)({
	basename: '/'
});

render((
	<Router history={history}>
		<Route path="/" component={App}>
			<Route path="about" component={About} />
		</Route>
	</Router>
), document.getElementById('root'));