// 整合管理所有组件的 reducer
import { combineReducers } from 'redux';
import { reducer as headerReducer } from '../common/header/store';

// 使用 ES6 的对象字面量简写方式定义对象结构
export const reducer = combineReducers(
	Object.assign({},
		headerReducer
	)
);