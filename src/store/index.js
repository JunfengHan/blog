/*
 * store 存储整个应用的状态
 */

import { createStore, combineReducers, compose } from 'redux';
import {focusReducer, navActiveReducer} from './reducer';

// 使用 ES6 的对象字面量简写方式定义对象结构
const reducerList = combineReducers({
    focusReducer,
    navActiveReducer
});

// 添加chrome 的 redux devtools 配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store 需要知道 reducer 才能在 dispactch 方法触发时执行 reducer，因此把 reducer 传递给 store
const store = createStore(reducerList, composeEnhancers());

export default store;