import React from 'react';
import styled from 'styled-components';
import theme from '@styles/theme';
import PropTypes from 'prop-types';

const { colors, fonts } = theme;

const SectionStyles = styled.section`
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  counter-increment: item 1;
  display: flex;
  align-items: center;
  height: 100vh;

  h1,
  h2 {
    position: relative;
    display: flex;
    align-items: center;

    &:before {
      content: '0' counter(item) '. ';
      font-family: ${fonts.SFMono};
      color: ${colors.cyan};
      font-size: 0.6em;
      margin-right: 20px;
    }

    &:after {
      content: '';
      width: 200px;
      display: block;
      height: 1px;
      background-color: ${colors.grey};
      top: -4px;
      margin-left: 20px;
      position: relative;
    }
  }

  h1 {
    margin-bottom: 1em;
  }

  h2 {
    margin-bottom: 0.6em;
  }

  p {
    color: ${colors.grey};
  }
`;

const SectionWrapperStyles = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
`;

const SectionContentStyles = styled.div`
  padding-left: 30px;
`;

const Section = ({ children, className, id, title }) => (
  <SectionStyles className={className} id={id}>
    <SectionWrapperStyles>
      <h1 className="numbered-title">{ title }</h1>
      {children}
    </SectionWrapperStyles>
  </SectionStyles>
);

export const SectionContent = ({ children }) => (
  <SectionContentStyles>{ children }</SectionContentStyles>
);

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Section;
