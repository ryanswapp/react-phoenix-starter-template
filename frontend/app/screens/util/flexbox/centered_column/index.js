import React from 'react';
import Flex from '../flex';


const CenteredColumn = ({children, ...props}) =>
  <Flex direction='column' align='center' { ...props }>
    { children }
  </Flex>

export default CenteredColumn;