/*
 * @Description: Main Entry File
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './globalStyle.js';
import App from './App';
import GlobalStyle from './globalStyle.js';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);