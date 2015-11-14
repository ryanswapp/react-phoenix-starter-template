import React from 'react';
import CSSModules from 'react-css-modules';
import style from './style';
import CenteredColumn from '../../util/flexbox/centered_column';
import Flex from '../../util/flexbox/flex';

const About = React.createClass({
	render() {
		return (
			<div>
				<CenteredColumn styleName='container'>
				  <h1 styleName='h1'>
				    What's the deal honey buns
			    </h1>
			    <p>
			    	Hello, my name is Ryan.
			    </p>
			    
			  </CenteredColumn>
			</div>
		)
	}
});

export default CSSModules(About, style);