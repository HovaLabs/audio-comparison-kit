import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'europa';
    src: local('europa'), url('./fonts/europa/Europa-Regular.otf');
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin:0;
    padding: 0;
    font-family: europa;
  }
  
  input, textarea, select, button {
    font-family: europa;
  }

`