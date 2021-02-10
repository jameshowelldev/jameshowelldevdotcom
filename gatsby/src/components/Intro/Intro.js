import React from 'react';
import styled from 'styled-components';
import Section from '@components/Section/Section';
import theme from '@styles/theme';
import PropTypes from 'prop-types';

const { colors, fonts } = theme;

const IntroStyles = styled(Section)`
  h1 {
    font-size: 80px;
    line-height: 1;
    margin-bottom: 0;

    &:before,
    &:after {
      content: none;
    }
  }

  h2 {
    font-size: 20px;
    font-family: ${fonts.SFMono};
    color: ${colors.cyan};
    font-weight: 300;
    margin: 0 0 15px 0;
  }

  h3 {
    font-size: 70px;
    color: rgba(255, 255, 255, 0.6);

    span {
      font-size: 26px;
    }
  }

  p {
    max-width: 700px;
  }
`;

const Intro = ({ children }) => <IntroStyles>{children}</IntroStyles>;

Intro.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Intro;
