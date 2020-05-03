/*
 * reducer 用来计算数据如何变化
 * 从Store 接收一个state，计算后返回新的 state
 */
import { fromJS } from 'immutable';
import { actionTypes } from './index';

// 定义不可改变的对象
const loginState = fromJS({
  loginStatus: 1, //登陆状态: 1待登陆，2待注册，3已登陆，默认为1
  userInfo: '',
});

export const loginReducer = (state = loginState, action) => {
  // 接收index.js 中 mapDispatch 发出的dispatch 消息
  switch(action.type) {
    case actionTypes.CHANGE_LOGIN_STATUS:
      return Object.assign({}, state, {
        userInfo: action.userInfo,
        loginStatus: !action.loginStatus ? state.loginStatus : action.loginStatus,
      });
    default:
      return state;
  }
}
