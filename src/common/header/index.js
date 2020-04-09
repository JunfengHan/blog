/*
 * @Description: Header Component
 */
import React, { Component } from 'react';
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

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			focused: false,
			navActive: {
				home: true,
				technology: false,
				project: false,
				photo: false
			}
		}
		this.handleInputFocus = this.handleInputFocus.bind(this)
		this.handleInputBlur = this.handleInputBlur.bind(this)
		this.handleNavActiveHome = this.handleNavActiveHome.bind(this)
		this.handleNavActiveTechnology = this.handleNavActiveTechnology.bind(this)
		this.handleNavActiveProject = this.handleNavActiveProject.bind(this)
		this.handleNavActivePhoto = this.handleNavActivePhoto.bind(this)
	}

	render() {
		return (
			<HeaderWrapper>
				<Logo>legendBlog</Logo>
				<Nav>
					<NavItem className = { this.state.navActive.home ? 'navActive left' : 'left'} onClick = { this.handleNavActiveHome }>Home</NavItem>
					<NavItem className = { this.state.navActive.technology ? 'navActive left' : 'left' } onClick = { this.handleNavActiveTechnology }>Technology</NavItem>
					<NavItem className = { this.state.navActive.project ? 'navActive left' : 'left'} onClick = { this.handleNavActiveProject }>Project</NavItem>
					<NavItem className = { this.state.navActive.photo ? 'navActive left' : 'left'} onClick = { this.handleNavActivePhoto }>Photo&Video</NavItem>
					<SearchWraper>
						<IconSearch className = { this.state.focused ? 'focused' : ''}></IconSearch>
						<CSSTransition
							in = { this.state.focused }
							timeout = { 200 }
							classNames = "searchSlide"
						>
							<NavSearch 
								className = { this.state.focused ? 'focused' : ''}
								onFocus = { this.handleInputFocus }
								onBlur = { this.handleInputBlur}
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
		);
	}

	handleInputFocus () {
		this.setState({
			focused: true
		})
	}

	handleInputBlur () {
		this.setState({
			focused: false
		})
	}

	handleNavActiveHome () {
		this.setState({
			navActive: {
				home: true,
				technology: false,
				project: false,
				photo: false
			}
		})
	}

	handleNavActiveTechnology () {
		this.setState({
			navActive: {
				home: false,
				technology: true,
				project: false,
				photo: false
			}
		})
	}

	handleNavActiveProject () {
		this.setState({
			navActive: {
				home: false,
				technology: false,
				project: true,
				photo: false
			}
		})
	}

	handleNavActivePhoto () {
		this.setState({
			navActive: {
				home: false,
				technology: false,
				project: false,
				photo: true
			}
		})
	}
	
}

export default Header;
