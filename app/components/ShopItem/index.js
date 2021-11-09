/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React from 'react';
import styled from 'styled-components';

import StyledItem from './StyledItem';
import StyledAction from './StyledAction';
import PropTypes from 'prop-types';


const Wrapper = styled.div`
  width: 100%;
  font-family: ocr-a-std, monospace;
`;


function ShopItem(props) {
  return (
    <Wrapper>
      <StyledItem src={props.src} itemName={props.itemName} />
      <br />
      {props.itemDescription}
    </Wrapper>
  );
}

ShopItem.propTypes = {
  itemName: PropTypes.string,
  src: PropTypes.string,
};

export default ShopItem;
