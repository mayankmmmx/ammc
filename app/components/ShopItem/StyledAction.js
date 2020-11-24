import React from 'react';
import styled from 'styled-components';
import NotifySrc from '../../images/notify.png';

const Container = styled.div`
  display: block;
  font-size: 1.2em;
  padding-top: 1em;
`;

const StyledImage = styled.img`
  width: 10%;
  padding-left: 1em;
`;

export default function StyledAction() {
  return (
    <Container>
      OUT OF STOCK
      <StyledImage src={NotifySrc} />
    </Container>
  );
}
