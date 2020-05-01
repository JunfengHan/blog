/*
 * @Description: Header Style
 */
import styled from 'styled-components';
import iconSearch from '../../statics/iconfont/search.svg';
import iconWrite from '../../statics/iconfont/write.svg';

export const HeaderWrapper = styled.div`
  height: 56px;
  background: #f08775;
  color: #ffffff;
  font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  a {
    color: #ffffff;
    :hover {
      color: #ffffff;
    }
    span.linkContainer {
      display: inline-block;
      width: 100%;
      height: 56px;
      padding: 0 15px;
    }
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 160px;
  height: 56px;
  line-height: 56px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
`;

export const Nav = styled.div`
  min-width: 960px;
  height: 100%;
  padding-left: 160px;
  padding-right: 240px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  height: 56px;
  line-height: 56px;
  /* padding: 0 15px; */
  font-size: 16px;
  box-sizing: border-box;
  cursor: pointer;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.navActive {
    background: #ea6f5a;
  }
`;

export const SearchWraper = styled.div`
  float: right;
  margin-right: 130px;
  position: relative;
  .searchSlide-enter {
    transition: all .2s ease-out;
  }
  .searchSlide-enter-active {
    width: 240px;
  }
  .searchSlide-exit {
    transition: all .2s ease-out;
  }
  .searchSlide-exit-active {
    width: 160px;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: 'Search'
})`
  float: right;
  width: 160px;
  height: 38px;
  padding: 0 35px 0 20px;
  margin-top: 9px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #777;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
    
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
  cursor:pointer;
  &.focused {
    background-color: #dddddd;
    color: #fff;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
  cursor:pointer;
`;

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-left: 10px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  cursor:pointer;
  &.write {
    background: #ec6149;
    padding-left: 0;
    padding-right: 10px;
    a {
    color: #ffffff;
    :hover {
      color: #ffffff;
    }
    span.linkWrite {
      display: inline-block;
      height: 34px;
      padding-left: 34px;
      background-image: url(${iconWrite});
      background-repeat: no-repeat;
      background-size: 26px;
      background-position: 6px;
    }
  }
  }
`;