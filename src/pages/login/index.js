import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginContainer } from './style';
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

class LogIn extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      buttonName: '登陆'
    }
  }
  
  render () {
    return (
      <LoginContainer>
        <Input className="user" placeholder="用户名或邮件" prefix={<UserOutlined />} />
        <Input.Password className="password" placeholder="密码" prefix={<UserOutlined />} />
        <Button className="submit" type="primary" block>{this.state.buttonName}</Button>
      </LoginContainer>
    )
  }
}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(LogIn);