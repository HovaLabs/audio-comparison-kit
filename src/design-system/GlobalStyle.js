import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  @font-face {
    font-family: 'europa';
    src: local('europa'), url('./fonts/europa/Europa-Regular.otf');
  }

  html, body, body > div {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    font-family: europa;
  }

  input, textarea, select, button {
    font-family: europa;
  }
`