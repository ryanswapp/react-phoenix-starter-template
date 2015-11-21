import React from 'react';
import { connect } from 'react-redux';
import Actions from 'redux/actions.js';
import { Link } from 'react-router';

const LoggedInLinks = React.createClass({
	logout() {
		this.props.dispatch(Actions.logout());
	},
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
					<Link to='/users'>Users</Link>
				</li>
	      <li className="dropdown">
	        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.props.currentUser.email} <span className="caret"></span></a>
	        <ul className="dropdown-menu">
	          <li><a href="#" onClick={this.logout}>Logout</a></li>
	        </ul>
	      </li>
	    </ul>
		)
	}
});

function mapStateToProps(state) {
	return { 
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(LoggedInLinks);