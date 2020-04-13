import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PageNumWrapper, PageNumItem, PageButton, PageNumList } from './style';

class List extends Component {
  constructor(props) {
    super(props);
    this.changeActivePage = this.changeActivePage.bind(this);

    this.state = {
      actviePre: false, // 上一页是否激活
      actvieNext: false, // 下一页是否激活
      hasHomePage: false, // TODO 是否有首页
      hasEndPage: false, // TODO 是否有尾页
      width: this.props.width, //组件宽度
      pages: this.props.pages, // 页数
      activePage: 1, // 当前所在页数，默认为第一页
      pause: false, // 暂停，防止连续快速点击
    }
  };

	render () {
    const wrapperStyle = {
      width: this.state.width && this.state.width + 'px' || '100%'
    };

    // 页数列表组件
    const pagesLength = this.state.pages;
    const PageList = () => {
      let Pagecontent = [];
      
      for (let i = 1; i <= pagesLength; i++) {
        Pagecontent.push(i);
      }

      // 判断页数长度，设置不同样式
      let typeA = [1, 2, 3, 4, '...', pagesLength - 3, pagesLength - 2, pagesLength - 1, pagesLength];
      let typeB = [1, '...', this.state.activePage - 2, this.state.activePage - 1, this.state.activePage, this.state.activePage + 1, this.state.activePage + 2, '....', pagesLength];
      if (pagesLength >= 8 && this.state.activePage > 4) {
        let newPageContent;
        if (this.state.activePage + 3 <= pagesLength) {
          newPageContent = typeB;
        } else {
          newPageContent = typeA;
        }
        Pagecontent = newPageContent;
      } else {
        let newPageContent = typeA;
        Pagecontent = newPageContent;
      }

      const pageCot = Pagecontent.map((item) => {
        return (
          <PageNumItem 
            className = { this.state.activePage === item ? 'pageActive' : ''}
            key={item}
            onClick={ this.changeActivePage.bind(this, item) }
          >
            <span>{item}</span>
          </PageNumItem>
        );
      });

      return pageCot;
    }

		return (
			<PageNumWrapper style={ wrapperStyle }>
        <PageButton onClick={this.clickPageBtn.bind(this, 'last')}>上一页</PageButton>
        <PageNumList>
          <PageList></PageList>
        </PageNumList>
        <PageButton onClick={this.clickPageBtn.bind(this, 'next')}>下一页</PageButton>
			</PageNumWrapper>
		);
  }

  // 切换页数
  changeActivePage (page) {
    if (page === this.state.activePage) {
      return false;
    } else {
      this.setState({
        activePage: page
      });
    }

  }
  
  // 翻页按钮点击事件
  clickPageBtn (name) {
    if (this.state.pause) {
      return false;
    }

    if (name === 'last') {
      this.setState({
        activePage: this.state.activePage - 1 || 1
      });
    } else {
      let activePageNum = this.state.activePage + 1 >= this.state.pages ? this.state.pages: this.state.activePage + 1;
      this.setState({
        activePage: activePageNum
      });
    };

    this.setState({
      pause: true
    });

    this.timeout = setTimeout(()=> {
      this.setState({
        pause: false
      });
    }, 500);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
}

// props 数据类型验证
List.propTypes = {
  pages: PropTypes.number,
  width: PropTypes.number
};

export default List;