import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledNotify from './StyledNotify';

const Container = styled.div`
  display: block;
  font-size: 1.2em;
  padding-top: 1em;
`;

const StyledImage = styled.img`
  width: 25%;
  padding-left: 1em;
`;

function StyledAction(props) {
  return (
    <Container>
      SOLD OUT
      <StyledNotify itemName={props.itemName} />
    </Container>
  );
}

StyledAction.propTypes = {
  itemName: PropTypes.string,
};

export default StyledAction;