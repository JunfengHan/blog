/*
 * @Description: App Component
 */
import React, { Component } from 'react';
// Provider 将 store 存储的 state 提供给容器
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './common/header'
import Home from './pages/home';
import Technology from './pages/technology';
import Project from './pages/project';
import Photo from './pages/photo';
import Write from './pages/write';
import LogIn from './pages/login';
import store from './store';

class App extends Component {
  render () {
    return (
      <Provider store = { store } >
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path='/' exact component={ Home }></Route>
            <Route path='/technology' exact component={ Technology }></Route>
            <Route path='/project' exact component={ Project }></Route>
            <Route path='/photo' exact component={ Photo }></Route>
            <Route path='/login' exact component={ LogIn }></Route>
            <Route path='/write' exact component={ Write }></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
