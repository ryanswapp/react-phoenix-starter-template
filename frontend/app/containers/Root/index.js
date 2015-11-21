import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

const Root = React.createClass({
	render() {
		const { store } = this.props;
		return (
			<Provider store={store}>
			  <div>
			    <ReduxRouter />
			  </div>
			</Provider>
		)
	}
});

export default Root;