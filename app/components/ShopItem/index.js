/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React from 'react';

import Wrapper from './Wrapper';
import StyledItem from './StyledItem';
import StyledAction from './StyledAction';
import ShirtSrc from '../../images/ammc-tshirt.png';

function ShopItem() {
  return (
    <Wrapper>
      <StyledItem src={ShirtSrc} itemName="ammc tee" />
      <StyledAction />
    </Wrapper>
  );
}

export default ShopItem;
