import { createGlobalStyle } from 'styled-components';
import theme from '@styles/theme';

const { colors, fonts } = theme;

const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    font-size: 10px;
  }


  body {
    background-color: ${colors.navy};
    color: ${colors.grey};
    font-family: ${fonts.Calibre};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4 {
    margin: 0;
    color: ${colors.white}
  }

  h1 {
    font-size: 3.2rem;
  }

  h2 {
    font-size: 2.8rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 1em;
  }

  a {
    color: ${colors.cyan};
    text-decoration: none;
    font-weight: 600;
  }

  p, ul, li {
    margin-top: 0;
    font-size: 2rem;
  }
`;

GlobalStyles.displayName = 'GlobalStyles';

export default GlobalStyles;
