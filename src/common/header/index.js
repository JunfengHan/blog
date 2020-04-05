/*
 * @Author: han
 * @Date: 2020-03-29 20:02:13
 * @LastEditTime: 2020-03-31 23:26:59
 * @Description: Header Component
 * @FilePath: /blog/src/common/header/index.js
 */

import React, { Component } from 'react';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWraper,
	NavSearch,
	IconSearch,
	Addition,
	Button
} from './style';

class Header extends Component {
	render() {
		return (
			<HeaderWrapper>
				<Logo/>
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载App</NavItem>
					<SearchWraper>
						<IconSearch></IconSearch>
						<NavSearch></NavSearch>
					</SearchWraper>
				</Nav>
				<Addition>
					<Button className="logIn">登陆</Button>
					<Button className="signIn">注册</Button>
					<Button className="write">写文章</Button>
				</Addition>
			</HeaderWrapper>
		);
	}
}

export default Header;
