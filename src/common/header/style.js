/*
 * @Author: han
 * @Date: 2020-03-29 20:44:20
 * @LastEditTime: 2020-04-05 22:24:48
 * @Description: Header Style
 * @FilePath: /blog/src/common/header/style.js
 */
import styled from 'styled-components';
import iconSearch from '../../statics/iconfont/search.svg';
import iconWrite from '../../statics/iconfont/write.svg';

export const HeaderWrapper = styled.div`
  height: 56px;
`;

export const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: orange;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 16px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    background: #ea6f5a;
  }
`;

export const SearchWraper = styled.div`
  float: right;
  margin-right: 130px;
  position: relative;
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  float: right;
  width: 160px;
  height: 38px;
  padding: 0 20px;
  margin-top: 9px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
`;

export const IconSearch = styled.i`
  position: absolute;
  right: 0;
  width: 38px;
  height: 38px;
  margin-top: 9px;
  border-radius: 19px;
  background-image: url(${iconSearch});
  background-repeat: no-repeat;
  background-size: 26px;
  background-position: center;
  background-color: green;
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.signIn {
    color: #ec6149;
  }
  &.logIn {
    color: #ec6149;
  }
  &.write {
    color: #fff;
    padding-left: 34px;
    background: #ec6149;
    background-image: url(${iconWrite});
    background-repeat: no-repeat;
    background-size: 26px;
    background-position: 6px;
  }
`;