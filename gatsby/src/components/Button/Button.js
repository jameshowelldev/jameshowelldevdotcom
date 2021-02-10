import React from 'react';
import styled, { css } from 'styled-components';
import theme from '@styles/theme';
import PropTypes from 'prop-types';

const { colors } = theme;

const ButtonStyles = styled.button`
  appearance: none;
  border-width: 1px;
  border-style: solid;
  padding: 11px 20px;
  border-radius: 999px;
  background-color: transparent;

  ${(props) =>
    props.variant === 'primary' &&
    css`
      border-color: ${colors.white};
      color: ${colors.white};
    `}
  ${(props) =>
    props.variant === 'secondary' &&
    css`
      border-color: ${colors.cyan};
      color: ${colors.cyan};
    `}
`;

const Button = ({ children, variant }) => (
  <ButtonStyles type="button" variant={variant}>
    {children}
  </ButtonStyles>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};
