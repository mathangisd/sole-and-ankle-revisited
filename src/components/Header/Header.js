import React from 'react';
import styled from 'styled-components/macro';


import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';



const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MobileWrapper>
          <Icon id='search'/>  
          <Icon id='shopping-bag'/>  
            <button onClick={() => setShowMobileMenu(true)}>   
                <Icon id='menu' />  
            </button>   
            <MobileMenu
            isOpen={showMobileMenu}
            onDismiss={() => setShowMobileMenu(false)}
            />        
        </MobileWrapper>
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;

  border-bottom: 1px solid var(--colors-gray-300);
  
  @media (max-width: 59.375rem) {
    border-top: 4px solid var(--colors-gray-300);
    gap: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    2vw + 1rem,
    3rem
  );
  margin: 0px 48px;
  overflow: scroll;
  @media (max-width: 59.375rem) {
      display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary)};
`;


const MobileWrapper = styled.div`

  @media (max-width: 59.375rem) {
  display: flex;
  flex: 1;
  flex-basis: 75px;
  justify-content: space-around;
  gap: 8px;
  }
  display: none;
`;




export default Header;
