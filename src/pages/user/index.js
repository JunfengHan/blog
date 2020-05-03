import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginContainer } from './style';
import { Form, Input, Button } from 'antd';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const onFinish = values => {
  console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
// 相当于Redux 工作流中的 React Component
class User extends PureComponent {
  render () {
    if (!this.props.loginStatus) {
      return (
        <LoginContainer>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input ref={(input) => {this.account = input}}/>
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input type="password" ref={(input) => {this.password = input}}/>
            </Form.Item>
            {
              this.props.signUpStatus ?
              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject('The two passwords that you entered do not match!');
                    },
                  }),
                ]}
              >
                <Input type="password"/>
              </Form.Item>:
              ''
            }
            <Form.Item {...tailLayout}>
              {
                this.props.signUpStatus ?
                  <Button
                    className="submit"
                    type="primary"
                    htmlType="submit"
                    block
                    onClick={() => this.props.handleSignUpConfirm(this.account, this.password)}
                  >注册</Button>:
                  <Button
                    className="submit"
                    type="primary"
                    block
                    onClick={() => this.props.handleLoginConfirm(this.account, this.password)}
                  >登录</Button>
              }
            </Form.Item>
          </Form>
        </LoginContainer>
      )
    } else {
      // 登录后重定向
      return <Redirect to='/'></Redirect>
    }
  }
}

// state相当于 Redux 工作流中的 Store
// state一般在 reducer 里定义并计算
// 将 store 里的 state 映射到当前组件的 props 
const mapStateToProps = (state) => {
  return {
    loginStatus: state.loginReducer.loginStatus,
    signUpStatus: state.signUpReducer.signUpStatus,
  }
};

// dispatch 就是 Redux 工作流中的 dispatch
// dispatch 发送 action 到 props 的映射
const mapDispatch = (dispatch) => {
  return {
    handleSignUpConfirm: (accountElem, passwordElem) => {
      // 执行dispatch 方法，发出 action
      actionCreators.signUpConfirm(accountElem.state.value, passwordElem.state.value)(dispatch);
    },
    handleLoginConfirm: (accountElem, passwordElem) => {
      // 执行dispatch 方法，发出 action
      actionCreators.loginConfirm(accountElem.state.value, passwordElem.state.value)(dispatch);
    }
  }
};

export default connect(mapStateToProps, mapDispatch)(User);