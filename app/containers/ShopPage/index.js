/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import styled from 'styled-components';

import LogoSrc from '../../images/science-is-real.png';
import ShopItem from '../../components/ShopItem';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  background: white;
  text-align: center;
`;

const Logo = styled.img`
  display: block;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1em;
`;

export default function ShopPage() {
  return (
    <Wrapper>
      <Logo src={LogoSrc} />
      <ShopItem />
    </Wrapper>
  );
}
