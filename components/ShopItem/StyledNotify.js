import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Popup from 'reactjs-popup';

import NotifySrc from '../../images/notify.png';
import ComingSoonSrc from '../../images/coming-soon.png';
import { appendSpreadsheet } from '../../utils/sheet-writer';

const fadeIn = keyframes`
  0% {
    transform: scale(1) translateY(0px);
    opacity: 0;
    box-shadow: 0 0 0 rgba(241, 241, 241, 0);
  }
  1% {
    transform: scale(0.96) translateY(10px);
    opacity: 0;
    box-shadow: 0 0 0 rgba(241, 241, 241, 0);
  }
  100% {
    transform: scale(1) translateY(0px);
    opacity: 1;
    box-shadow: 0 0 500px rgba(241, 241, 241, 0);
  }
`;

const Content = styled.div`
  animation: ${fadeIn} 1s linear;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  background-color: #fcfce8;
  width: 30em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ocr-a-std, monospace;
`;

const HeaderImage = styled.img`
  display: block;
  width: 65%;
`;

const Message = styled.div`
  display: block;
  font-size: 1em;
  flex: 0 0 100%;
  margin-top: 1em;
`;

const StyledPopup = styled(Popup)``;

const StyledNotifyButton = styled.img`
  width: 25%;
  padding-left: 1em;
`;

const EmailInput = styled.input`
  type: 'email';
  color: black;
  font-size: 0.9em;
  border: 2px solid black;
  border-radius: 3px;
  margin-top: 1em;
  width: 60%;
`;

const ErrorText = styled.div`
  font-size: 0.75em;
  flex: 0 0 100%;
  margin-top: 1em;
  color: red;
`;

const ButtonsDiv = styled.div`
  flex: 0 1 100%;
  margin-top: 1em;
`;

const Button = styled.button`
  color: ${props => (props.cancel ? 'palevioletred' : '#69e043')};
  border: ${props =>
    props.cancel ? '2px solid palevioletred' : '2px solid #69e043'};
  background: #fcfce8;
  font-size: 0.9em;
  border-radius: 3px;
  padding: 0.5em;
  margin-right: 1em;
  margin-left: 1em;

  &:hover {
    background: ${props => (props.cancel ? 'palevioletred' : '#69e043')};
    color: #fcfce8;
  }
`;

function StyledNotify(props) {
  const [emailTextInput, setEmailTextInput] = useState('');
  const [emailErrorText, setEmailErrorText] = useState('');
  const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  function test(close) {
    if (validateEmail(emailTextInput)) {
      appendSpreadsheet({
        Email: emailTextInput,
        Interest: props.itemName,
        Timestamp: new Date().toLocaleString(),
      });
      setEmailErrorText('');
      alert("thanks for submitting your email, we'll be in touch!");
      close();
    } else {
      console.log('not nice');
      setEmailErrorText('not nice');
    }
  }

  return (
    <StyledPopup trigger={<StyledNotifyButton src={NotifySrc} />} modal nested>
      {close => (
        <Container>
          <Content>
            <HeaderImage src={ComingSoonSrc} />
            <Message>
              unfortunately, we are sold out of the <b>{props.itemName}</b>.
              Please enter your email so we can notify you for the next drop.
            </Message>
            <EmailInput
              placeholder="your email"
              value={emailTextInput}
              onChange={e => setEmailTextInput(e.target.value)}
            />
            <ErrorText>{emailErrorText}</ErrorText>
            <ButtonsDiv>
              <Button
                cancel 
                onClick={() => {
                  close();
                }}
              >
                {' '}
                cancel
              </Button>
              <Button
                onClick= { () => {
                  test(close);
                }
                }
                submit{' '}
              </Button>
            </ButtonsDiv>
          </Content>
        </Container>
      )}
    </StyledPopup>
  );
}

StyledNotify.propTypes = {
  itemName: PropTypes.string,
};

export default StyledNotify;
