import React from 'react';
import LogoSvg from '@images/logo3.inline.svg';
import styled from 'styled-components';

const LogoLinkStyles = styled.a`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const LogoSvgStyles = styled(LogoSvg)`
  width: 65px;
  height: 65px;
`;

const Logo = () => (
  <LogoLinkStyles href="/">
    <LogoSvgStyles />
  </LogoLinkStyles>
);

export default Logo;
