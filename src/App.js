/*
 * @Description: App Component
 */
import React, { Component } from 'react';
// Provider 将 store 存储的 state 提供给容器
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header'
import Home from './pages/home';
import Article from './pages/article';
import store from './store';

class App extends Component {
  render () {
    return (
      <Provider store = { store } >
        <Header />
        <BrowserRouter>
          <Route path='/' exact component={ Home }></Route>
          <Route path='/article' exact component={ Article }></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
