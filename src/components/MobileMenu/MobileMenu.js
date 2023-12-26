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
      <Content aria-label="Menu">
        <ButtonWrapper onClick={onDismiss}>
            <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </ButtonWrapper>

       
        <Filler />
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
       
      </Content>
    </Overlay>
    </div>
  );
};



const ButtonWrapper = styled(UnstyledButton)`
  top: 16px;
  right: 0;
  padding: 16px;
  position: absolute;
  align-self: flex-end;
`;



const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > a {
    text-decoration: none;
    font-size: calc( 18 / 16)rem;
    text-transform: uppercase;
    font-weight: var(--font-weight-medium);
    color: var(--color-gray-900);
  }

  & > a:first-child {
    color: var(--color-secondary);
  }
`;

const FooterWrapper = styled.footer`
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
  & > a {
    text-decoration: none;
    font-weight:  var(--font-weight-normal);
    font-size: calc( 14 / 16)rem;
    color: var(--color-gray-700);
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;


const Content = styled(DialogContent)`
  position: relative;
  background-color: var(--color-white);
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
`;


const Filler = styled.div`
flex:1`;

export default MobileMenu;
