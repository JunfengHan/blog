/*
 * store 存储整个应用的状态
 */

import { createStore, compose } from 'redux';
import { reducer } from './reducer';

// 添加chrome 的 redux devtools 配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store 需要知道 reducer 才能在 dispactch 方法触发时执行 reducer，因此把 reducer 传递给 store
const store = createStore(reducer, composeEnhancers());

export default store;