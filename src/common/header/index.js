/*
 * @Author: han
 * @Date: 2020-03-29 20:02:13
 * @LastEditTime: 2020-03-29 23:32:42
 * @Description: Header Component
 * @FilePath: /blog/src/common/header/index.js
 */

import React, { Component } from 'react';
import {
	HeaderWrapper,
	Logo
} from './style';

class Header extends Component {
	render() {
		return (
			<HeaderWrapper>
				<Logo></Logo>
			</HeaderWrapper>
		);
	}
}

export default Header;
