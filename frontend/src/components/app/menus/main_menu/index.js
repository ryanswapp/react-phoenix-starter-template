import React from 'react';
import style from './style';
import CSSModules from 'react-css-modules';
import Flex from '../../../util/flexbox/flex';
import { Link } from 'react-router';

const MainMenu = React.createClass({
	render() {
		return (
			<Flex direction='row' aligned='left' styleName="main-menu">
				<div styleName='item'>
					<Link to='/'>Home</Link>
				</div>
				<div styleName='item'>
					<Link to='/about'>About</Link>
				</div>
			</Flex>
		)
	}
});

export default CSSModules(MainMenu, style);