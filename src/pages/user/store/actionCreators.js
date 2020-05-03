import { ApiUser } from '../../../config/api';
import * as actionTypes from './actionTypes';
import { axiosInstance } from '../../../plugins/axios';
import { message } from 'antd';

const changeLoginStatus = (name) => ({
  type: actionTypes.CHANGE_LOGIN_STATUS,
  userInfo: name,
  loginStatus: 3
});

// 用户注册、修改
export const signUpConfirm = (account, password) => {
  const key = 'signUp';
  const messageNotice = 'E-mail Exist, Login Please!';
  message.loading({ content: 'SignUp...', key, duration: 0 });

  return (dispatch) => {
    axiosInstance.post(ApiUser, {
      actionType: 'signUp',
      email: account,
      password: password
    }).then((res) => {
      const res_data = res.data;

      if (!res_data.code) {
        // 发送登录状态改变消息, reducer 接收该消息
        dispatch(changeLoginStatus(res_data.result.Name));
        // 注册成功提示
        message.success({ content: 'Sign Up Success, and Login!', key, duration: 2 });
      } else {
        message.error({ content: messageNotice , duration: 3, key });
      }
    }).catch((err) => {
        console.log("signUp Error", err);
    });
  }
}

// 登录
export const loginConfirm = (account, password) => {
  const key = 'login';
  let messageNotice = 'Error: Check your Account or Password Please!';
  message.loading({ content: 'Login...', key, duration: 0 });

  return (dispatch) => {
    axiosInstance.post(ApiUser, {
      actionType: 'login',
      email: account,
      password: password,
    }).then((res) => {
      const res_data = res.data;

      if (res_data.success) {
        // 发送登录状态改变消息, reducer 接收该消息
        dispatch(changeLoginStatus(res_data.result.Name));
        // 登录成功提示
        message.success({ content: 'Login Success!', key, duration: 2 });
      } else if (res_data.code === 12201) {
        messageNotice = 'E-mail is Not Exist, Sign Up Please!';
        message.error({ content: messageNotice, duration: 3, key });
      } else if (res_data.code === 12202) {
        message.error({content: res_data.message, duration: 3, key});
      }
    }).catch((err) => {
        console.log("login Error:", err);
    });
  }
}