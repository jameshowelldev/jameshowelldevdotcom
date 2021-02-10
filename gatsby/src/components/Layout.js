import React from 'react';
import GlobalStyles from '@styles/GlobalStyles';
import Typography from '@styles/Typography';
import PropTypes from 'prop-types';
import { Header } from './Header/Header';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <Header />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
