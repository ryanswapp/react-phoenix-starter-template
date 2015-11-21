import React from 'react';
import { connect } from 'react-redux';
import Actions from 'redux/actions.js';
import { Link } from 'react-router';

const LoggedOutLinks = React.createClass({
	render() {
		return (
			<ul className="nav navbar-nav navbar-right">
	      <li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/signup'>Signup</Link>
				</li>
				<li>
					<Link to='/login'>Login</Link>
				</li>
	    </ul>
    )
	}
});

export default LoggedOutLinks;