import style from './style';
import React, { PropTypes } from 'react';
import cn from 'classnames';
import CSSModules from 'react-css-modules';

const Flexbox = ({tag = 'div', children, direction, wrap, justify, align, ...props}) => {
	const Tag = tag;
	return (

		<Tag { ...props } styleName={cn('Flex', {
			[`Direction-${direction}`]: !!direction,
			[`Wrap-${wrap}`]: !!wrap,
			[`Justify-${justify}`]: !!justify,
			[`Align-${align}`]: !!align
		})}>

		{ children }

		</Tag>
	)
}

Flexbox.propTypes = {
  direction: PropTypes.oneOf(['column', 'row', 'row-reverse']),
  wrap: PropTypes.oneOf(['wrap', 'wrap-reverse']),
  justify: PropTypes.oneOf(['end', 'center', 'space-between']),
  align: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
  tag: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.object
  ])
}

export default CSSModules(Flexbox, style, {
  allowMultiple: true,
  errorWhenNotFound: false
});