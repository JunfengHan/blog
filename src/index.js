/*
 * @Author: han
 * @Date: 2020-03-29 17:52:31
 * @LastEditTime: 2020-03-29 19:59:51
 * @Description: Main Entry File
 * @FilePath: /blog/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import App from './App';
import GlobalStyle from './style.js';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/ >
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);