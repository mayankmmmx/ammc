import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
  text-size: 1em;
  font-weight: bold;
`;

const StyledImage = styled.img`
  display: block;
  width: 20%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1em;
`;

function StyledItem(props) {
  return (
    <Container>
      <StyledImage src={props.src} />
      {props.itemName}
    </Container>
  );
}

StyledItem.propTypes = {
  itemName: PropTypes.string,
  src: PropTypes.string,
};

export default StyledItem;
