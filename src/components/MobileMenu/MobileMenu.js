/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

import { X } from "react-feather";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div>    
    <Overlay
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <Content>
        <ButtonWrapper>
          <button onClick={onDismiss}><X /></button>
          <VisuallyHidden>Close</VisuallyHidden>
        </ButtonWrapper>
        <LinkWrapper>
          <NavWrapper>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </NavWrapper>
          <FooterWrapper>
              <a href="/terms">Terms and Conditions</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/contact">Contact Us</a>
          </FooterWrapper>
        </LinkWrapper>
      </Content>
    </Overlay>
    </div>
  );
};



const ButtonWrapper = styled.div`
  align-self: flex-end;
`;

const LinkWrapper = styled.div`
  padding-left: 32px;
  display: flex;
  flex-direction: column;
  height: 100dvh;
`;


const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 15dvh;
  gap: 22px;

  & > a {
    text-decoration: none;
    font-size: calc( 18 / 16)rem;
    text-transform: uppercase;
    font-weight: var(--font-weight-medium);
    color: var(--colors-gray-900);
  }
`;

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  gap: 8px;
  & > a {
    text-decoration: none;
    font-weight:  var(--font-weight-normal);
    font-size: calc( 14 / 16)rem;
    color: var(--colors-gray-700);
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-grayA-700);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;


const Content = styled(DialogContent)`
  position: relative;
  background-color: var(--color-white);
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

export default MobileMenu;
