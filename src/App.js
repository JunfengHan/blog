/*
 * @Description: App Component
 */
import React, { Component } from 'react';
// Provider 将 store 存储的 state 提供给容器
import { Provider } from 'react-redux';
import Header from './common/header'
import store from './store';

class App extends Component {
  render () {
    return (
      <Provider store = { store } >
        <Header />
      </Provider>
    );
  }
}

export default App;
