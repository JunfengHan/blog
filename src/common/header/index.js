/*
 * @Description: Header Component
 */
import React from 'react';
// connect方法 连接容器组件和 store
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
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

import {
	SEARCH_FOCUS,
	SEARCH_BLUR,
	NAV_ACTIVE_HOME,
	NAV_ACTIVE_TECHNOLOGY,
	NAV_ACTIVE_PROJECT,
	NAV_ACTIVE_PHOTO,
} from './store/actionTypes';

// 没有state的无状态组件，性能更好
const Header = (props) => {
	return (
		<HeaderWrapper>
			<Logo>legendBlog</Logo>
			<Nav>
				<NavItem className = { props.home ? 'navActive left' : 'left'} onClick = { props.handleNavActiveHome }>Home</NavItem>
				<NavItem className = { props.technology ? 'navActive left' : 'left' } onClick = { props.handleNavActiveTechnology }>Technology</NavItem>
				<NavItem className = { props.project ? 'navActive left' : 'left'} onClick = { props.handleNavActiveProject }>Project</NavItem>
				<NavItem className = { props.photo ? 'navActive left' : 'left'} onClick = { props.handleNavActivePhoto }>Photo&Video</NavItem>
				<SearchWraper>
					<IconSearch className = { props.focused ? 'focused' : ''}></IconSearch>
					<CSSTransition
						in = { props.focused }
						timeout = { 200 }
						classNames = "searchSlide"
					>
						<NavSearch
							className = { props.focused ? 'focused' : ''}
							onFocus = { props.handleInputFocus }
							onBlur = { props.handleInputBlur}
						></NavSearch>
					</CSSTransition>
				</SearchWraper>
			</Nav>
			<Addition>
				<Button className="">Sign Up</Button>
				<Button className="">Sign In</Button>
				<Button className="write">Write</Button>
			</Addition>
		</HeaderWrapper>
	)
}

// action 的生成器，用于生成 action
const actionCreator = (actionType, dispatch) => {
	return () => {
		const action = {
			type: actionType,
		};
		dispatch(action);
	}
}

// 将 store 里的 state 映射到当前组件的 props 
const mapStateToProps = (state) => {
	return {
		focused: state.focusReducer.focused,
		home: state.navActiveReducer.home,
		technology: state.navActiveReducer.technology,
		project: state.navActiveReducer.project,
		photo: state.navActiveReducer.photo
	}
}

// dispatch 发送 action 到 props 的映射
const mapDispatchToProps = (dispatch) => {
	return {
		// handleInputFocus: actionCreator(SEARCH_FOCUS, dispatch),
		// handleInputBlur: actionCreator(SEARCH_BLUR, dispatch),
		handleNavActiveHome: actionCreator(NAV_ACTIVE_HOME, dispatch),
		handleNavActiveTechnology: actionCreator(NAV_ACTIVE_TECHNOLOGY, dispatch),
		handleNavActiveProject: actionCreator(NAV_ACTIVE_PROJECT, dispatch),
		handleNavActivePhoto: actionCreator(NAV_ACTIVE_PHOTO, dispatch),
		handleInputFocus: () => dispatch({ type: SEARCH_FOCUS }),
		handleInputBlur: () => dispatch({ type: SEARCH_BLUR }),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
