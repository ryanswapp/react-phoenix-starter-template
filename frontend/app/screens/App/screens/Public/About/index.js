import React from 'react';
import CSSModules from 'react-css-modules';
import style from './style';

const About = React.createClass({
	render() {
		return (
			<div className='container'>
				  <h1 styleName='h1'>
				    What's the deal honey buns?
			    </h1>
			    <iframe width="853" height="480" src="https://www.youtube.com/embed/umDBRQ8GfEQ" frameborder="0" allowfullscreen></iframe>
			</div>
		)
	}
});

export default CSSModules(About, style);