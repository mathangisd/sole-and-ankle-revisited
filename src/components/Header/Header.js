import React from 'react';
import styled from 'styled-components/macro';


import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import {QUERIES} from '../../constants';
import UnstyledButtons from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

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
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileWrapper>
          <ShoppingBagButton>
            <Icon id='shopping-bag'/>  
            <VisuallyHidden>
              Open cart
            </VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButtons> 
            <Icon id='search'/>  
            <VisuallyHidden>
              Search
            </VisuallyHidden>
          </UnstyledButtons>
           <UnstyledButtons onClick={() => setShowMobileMenu(true)}> 
              <Icon id='menu' />   
            <VisuallyHidden>
              Menu
            </VisuallyHidden>
          </UnstyledButtons>
            <MobileMenu
            isOpen={showMobileMenu}
            onDismiss={() => setShowMobileMenu(false)}
            />        
        </MobileWrapper> 
        <Filler />
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;

  border-bottom: 1px solid var(--color-gray-300);

  overflow: auto;
  @media ${QUERIES.tabletAndSmaller} {
    border-top: 4px solid var(--color-gray-900);
    justify-content: space-between;
    align-items: center;
  }
  
  @media ${QUERIES.phoneAndSmaller} {
      padding-left: 16px;
      padding-right: 16px;
  }

`;

const Nav = styled.nav`

  display: flex;
  gap: clamp(
    1rem,
    9.2vw - 4.5rem,
    3.5rem
  );
  margin: 0px 48px;
 
  @media ${QUERIES.tabletAndSmaller} {
      display: none;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;
const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
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

  @media ${QUERIES.tabletAndSmaller} {
  display: flex;
  gap: 32px;
  }
  
  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
  display: none;
`;

const ShoppingBagButton = styled(UnstyledButtons)`
  transform: translateX(-2px);
`;

export default Header;
