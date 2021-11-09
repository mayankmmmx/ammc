/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import styled from 'styled-components';

import ShopItem from '../../components/ShopItem';
import LogoSrc from '../../images/science-is-real.png';
import ShirtSrc from '../../images/ammc-tshirt.png';
import AntiVaxxerAntiMaskerSrc from '../../images/anti-vaxxer-anti-masker-mask.png';
import AntiMaskersOnlySrc from '../../images/anti-maskers-only-mask.png';
import GovernmentDroneSrc from '../../images/government-drone-mask.png';
import Slugs4SaltSrc from '../../images/slugs-4-salt-mask.png';
import AMMCSrc from '../../images/ammc-mask.png';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  background: white;
  text-align: center;
`;

const Logo = styled.img`
  display: block;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1em;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 1em;
  padding-bottom: 1em;
`;

const Col = styled.div`
  width: 450px;
  padding: 1em;
`;

const Footer = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  font-family: ocr-a-std, monospace;
  padding-bottom: 1em;
`;

const description1 = 'Rooted in science, but thriving in contradiction.';
const description2 = 'Are you a follower?';
const description3 = 'Self explanatory.';
const description4 = 'Open your eyes.';
const description5 = 'Join the club.';
const description6 = 'One of us.';

export default function ShopPage() {
  return (
    <Wrapper>
      <Logo src={LogoSrc} />
      <Row>
        <Col>
          <ShopItem
            src={AntiVaxxerAntiMaskerSrc}
            itemName="anti-vaxxer anti-masker mask"
            itemDescription={description1}
          />
        </Col>
        <Col>
          <ShopItem
            src={Slugs4SaltSrc}
            itemName="slugs 4 salt mask"
            itemDescription={description2}
          />
        </Col>
        <Col>
          <ShopItem
            src={AntiMaskersOnlySrc}
            itemName="anti-maskers only mask"
            itemDescription={description3}
          />
        </Col>
        <Col>
          <ShopItem
            src={GovernmentDroneSrc}
            itemName="government drone mask"
            itemDescription={description4}
          />
        </Col>
        <Col>
          <ShopItem
            src={ShirtSrc}
            itemName="ammc tee"
            itemDescription={description5}
          />
        </Col>
        <Col>
          <ShopItem
            src={AMMCSrc}
            itemName="ammc mask"
            itemDescription={description6}
          />
        </Col>
      </Row>

      <Footer>&#169; anti masking masking club, 2021</Footer>
    </Wrapper>
  );
}
