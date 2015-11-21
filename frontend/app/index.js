import 'style/index.css';
import React from 'react';
import { render } from 'react-dom';
import Root from 'containers/Root';
import StoreUtil from 'redux/store.js';
import Actions from 'redux/actions.js';

const store = StoreUtil.configureStore();

store.dispatch(Actions.initiateSocket());

render(
	<Root store={store} />,
	document.getElementById('root')
)
