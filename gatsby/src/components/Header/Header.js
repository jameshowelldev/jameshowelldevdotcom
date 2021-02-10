import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import { Nav } from '../Nav/Nav';

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  align-items: center;
  width: 100%;
  position: fixed;
  box-sizing: border-box;
`;

const Header = () => (
  <HeaderStyles>
    <Logo />
    <Nav />
  </HeaderStyles>
);

Header.displayName = 'Header';

export { Header };
