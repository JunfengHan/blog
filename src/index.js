/*
 * @Description: Main Entry File
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import App from './App';
import GlobalStyle from './style.js';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);