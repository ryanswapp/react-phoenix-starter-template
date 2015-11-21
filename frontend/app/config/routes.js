import React from 'react';
import { Route, Link, IndexRoute } from 'react-router';

// Components
import App from 'screens/App';
import Home from 'screens/App/screens/Public/Home';
import About from 'screens/App/screens/Public/About';
import UsersList from 'screens/App/screens/Users/UsersList';
import UsersNew from 'screens/App/screens/Users/UsersNew';
import UsersLogin from 'screens/App/screens/Users/UsersLogin';

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="about" component={About} />
		<Route path="users" component={UsersList} />
		<Route path="signup" component={UsersNew} />
		<Route path="login" component={UsersLogin} />
	</Route>
);

export default routes;