/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LogoSrc from '../../images/ammc.png';

const Title = styled.button`
  padding-top: 0.5em;
  font-size: 2em;
  text-align: center;
  color: palevioletred;
  border: none;
  background: none;
  &:hover {
    color: dodgerblue;
  }
`;

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  background: black;
  text-align: center;
`;

const InnerComponents = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Logo = styled.img`
  display: block;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
`;

export default function Welcome() {
  return (
    <Wrapper>
      <InnerComponents>
        <Logo src={LogoSrc} />
        <Link to="/shop">
          <Title> enter. </Title>
        </Link>
      </InnerComponents>
    </Wrapper>
  );
}
