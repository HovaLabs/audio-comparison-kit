import React, { Fragment}  from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from "styled-components"
import { App } from './App';
import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`
  html, body, body > div {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
`

ReactDOM.render(<Fragment><App /><GlobalStyle/></Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
