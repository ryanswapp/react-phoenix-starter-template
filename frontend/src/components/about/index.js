import React from 'react';
import CSSModules from 'react-css-modules';
import style from './style.css';
import Flex from '../util/flexbox';


const CenteredColumn = ({children, ...props}) =>
  <Flex direction='column' align='center' { ...props }>
    { children }
  </Flex>

const About = React.createClass({
	render() {
		return (
			<CenteredColumn styleName='container'>
			  <h1 styleName='h1'>
			    What's the deal honey buns
		    </h1>
		  </CenteredColumn>
		)
	}
});

export default CSSModules(About, style);