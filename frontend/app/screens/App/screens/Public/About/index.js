import React from 'react';
import CSSModules from 'react-css-modules';
import style from './style';
import CenteredColumn from 'screens/util/flexbox/centered_column';
import Flex from 'screens/util/flexbox/flex';

const About = React.createClass({
	render() {
		return (
			<div>
				<CenteredColumn styleName='container'>
				  <h1 styleName='h1'>
				    What's the deal honey buns?
			    </h1>
			    <iframe width="853" height="480" src="https://www.youtube.com/embed/umDBRQ8GfEQ" frameborder="0" allowfullscreen></iframe>
			  </CenteredColumn>
			</div>
		)
	}
});

export default CSSModules(About, style);