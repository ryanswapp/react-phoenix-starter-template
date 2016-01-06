import React from 'react';
import { connect } from 'react-redux';
import Actions from 'redux/actions.js';
import style from './style';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';

import LoggedInLinks from './screens/LoggedInLinks';
import LoggedOutLinks from './screens/LoggedOutLinks';

const MainMenu = React.createClass({
	componentDidMount() {
		const { currentUser, dispatch } = this.props;

		if (!currentUser) {
			dispatch(Actions.getCurrentUser());
		}
	},
	render() {
		return (
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand" href="#">React + Phoenix</a>
			    </div>

			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						{ !!this.props.currentUser ? (
							<LoggedInLinks />
						) : (
							<LoggedOutLinks />
						) }
          </div>
        </div>
      </nav>
		)
	}
});

function mapStateToProps(state) {
  return { 
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(CSSModules(MainMenu, style));