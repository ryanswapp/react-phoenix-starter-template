import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import MainMenu from './app/menus/main_menu';

const App = ({children}) => (
	<div>
	  <MainMenu />
		{children}
	</div>
)

export default App;