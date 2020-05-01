/*
 * @Description: Header Component
 */
import React from 'react';
// connect方法 连接容器组件和 store
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreator, actionTypes } from './store';
import { Link } from 'react-router-dom';
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


// 没有state的无状态组件，性能更好
const Header = (props) => {
	return (
		<HeaderWrapper>
			<Logo onClick = { props.handleNavActiveHome }>
				<Link to="/">
					<span className="linkContainer" onClick = { props.handleNavActiveHome }>legendBlog</span>			
				</Link>
			</Logo>
			<Nav>
				<NavItem className = { props.home ? 'navActive left' : 'left'}>
					<Link to="/">
						<span className="linkContainer" onClick = { props.handleNavActiveHome }>Home</span>
					</Link>
				</NavItem>
				<NavItem className = { props.technology ? 'navActive left' : 'left' } >
					<Link to="/technology">
						<span className="linkContainer" onClick = { props.handleNavActiveTechnology }>Technology</span>
					</Link>
				</NavItem>
				<NavItem className = { props.project ? 'navActive left' : 'left'} >
					<Link to="/project">
						<span className="linkContainer" onClick = { props.handleNavActiveProject }>Project</span>
					</Link>
				</NavItem>
				<NavItem className = { props.photo ? 'navActive left' : 'left'} >
					<Link to="/photo">
						<span className="linkContainer" onClick = { props.handleNavActivePhoto }>Photo&Video</span>
					</Link>
				</NavItem>
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
				{
					props.isLogin ? 
						<Button className="">Log Out</Button> :
						<Button className=""><Link to="/login">Log In</Link></Button>
				}
				<Button className="write">
					<Link to="/write">
						<span className="linkWrite">Write</span>
					</Link>
				</Button>
			</Addition>
		</HeaderWrapper>
	)
}

// 将 store 里的 state 映射到当前组件的 props 
const mapStateToProps = (state) => {
	return {
		focused: state.focusReducer.focused,
		home: state.navActiveReducer.home,
		technology: state.navActiveReducer.technology,
		project: state.navActiveReducer.project,
		photo: state.navActiveReducer.photo,
		isLogin: state.loginReducer.isLogin
	}
}

// dispatch 发送 action 到 props 的映射
const mapDispatchToProps = (dispatch) => {
	return {
		// handleInputFocus: actionCreator(SEARCH_FOCUS, dispatch),
		// handleInputBlur: actionCreator(SEARCH_BLUR, dispatch),
		handleNavActiveHome: actionCreator(actionTypes.NAV_ACTIVE_HOME, dispatch),
		handleNavActiveTechnology: actionCreator(actionTypes.NAV_ACTIVE_TECHNOLOGY, dispatch),
		handleNavActiveProject: actionCreator(actionTypes.NAV_ACTIVE_PROJECT, dispatch),
		handleNavActivePhoto: actionCreator(actionTypes.NAV_ACTIVE_PHOTO, dispatch),
		handleInputFocus: () => dispatch({ type: actionTypes.SEARCH_FOCUS }),
		handleInputBlur: () => dispatch({ type: actionTypes.SEARCH_BLUR }),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
