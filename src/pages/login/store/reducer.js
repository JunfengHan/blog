/*
 * reducer 用来计算数据如何变化
 * 从Store 接收一个state，计算后返回新的 state
 */
import { fromJS } from 'immutable';
// import * as constants from './contants';

// 定义不可改变的对象
const defaultState = fromJS({
  isLogin: false
});

export const loginReducer = (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}