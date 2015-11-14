import React from 'react';
import CSSModules from 'react-css-modules';
import Flex from '../../util/flexbox/flex';
import CenteredColumn from '../../util/flexbox/centered_column';
import style from './style';

const Home = React.createClass({
	render() {
		return (
			<CenteredColumn styleName='container'>
				<h1 styleName='h1'>My sweet home page</h1>
			</CenteredColumn>
		)
	}
});

export default CSSModules(Home, style);