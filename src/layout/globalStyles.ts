import { breakpoint } from '@theme/breakpoints';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily.primary}, sans-serif;
    background: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.gray};
    font-weight: ${({ theme }) => theme.fontWeight.primary.medium};
    line-height: normal;
  }
  
  h1, h2, h3, h4, h5 {
    margin: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
    
  * {
    box-sizing: border-box;
  }

  .container {
    max-width: ${({ theme }) => theme.breakpoints.xl}px;
    margin: 0 0.5rem;
    position: relative;
    width: calc(100% - 1rem);
    width: 100%;
  
    ${breakpoint('xl')`
      margin: auto;
    `};
  }
`;

export default GlobalStyle;
