import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';

export default {
  title: 'Components/Button',
};

const Template = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

Template.propTypes = {
  children: PropTypes.string.isRequired,
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary Button',
};
Primary.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
};
Secondary.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
