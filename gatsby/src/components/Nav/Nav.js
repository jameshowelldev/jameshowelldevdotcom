import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import theme from '@styles/theme';

const { colors, fonts } = theme;

const NavListStyles = styled.ol`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: ${fonts.SFMono};
  color: ${colors.white};

  li {
    counter-increment: item 1;
    margin: 0 5px;

    a {
      padding: 0 10px;
      text-decoration: none;
      color: ${colors.white};

      &:hover {
        color: ${colors.cyan};
      }

      &:before {
        content: '0' counter(item) '.';
        margin-right: 5px;
        font-size: 0.8em;
        color: ${colors.cyan};
      }
    }
  }
`;

export const Nav = () => (
  <nav>
    <NavListStyles>
      <li>
        <Link to="#about">About</Link>
      </li>
      <li>
        <Link to="#experience">Experience</Link>
      </li>
      <li>
        <Link to="#recommendations">Recommendations</Link>
      </li>
      <li>
        <Link to="#blog">Blog</Link>
      </li>
      <li>
        <Link to="#contact">Contact</Link>
      </li>
    </NavListStyles>
  </nav>
);
