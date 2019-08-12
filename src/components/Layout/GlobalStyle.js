import { createGlobalStyle } from 'styled-components';
import nprogressStyle from './nprogressStyle';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
    line-height: 1.15;
    -webkit-font-smoothing: antialiased;
  }

  body {
    position: relative;
    background-color: white;
  }
  
  button {
    cursor: pointer;
    
    :focus:not(:focus-visible) {
      outline: none;
    }
  }
  
  a {
    text-decoration: none;
  }
  
  div {
    box-sizing: border-box;
  }
  
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  
  ${nprogressStyle}
`;

export default GlobalStyle;
