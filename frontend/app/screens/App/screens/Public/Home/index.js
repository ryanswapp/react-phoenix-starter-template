import React from 'react';
import CSSModules from 'react-css-modules';
import Flex from 'screens/util/flexbox/flex';
import CenteredColumn from 'screens/util/flexbox/centered_column';
import style from './style';

const Home = React.createClass({
	getInitialState() {
		return {
			features: [
				"React, Redux",
				"React/Redux Router",
				"CSS Modules, CSSNext, PostCSS",
				"Phoenix API",
				"Authentication"
			]
		}
	},
	render() {
		const { features } = this.state;
		return (
			<div className='container'>
				<h1 styleName='h1'>React/Phoenix Starter Template</h1>
				<ul className="list-group">
						{ features.map((feature, i) => 
							<li key={i} className="list-group-item">{ i + 1}) { feature }</li>
						)}
				</ul>
			</div>
		)
	}
});

export default CSSModules(Home, style);