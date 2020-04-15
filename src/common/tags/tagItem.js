import React, { Component } from 'react';
import { TagsItem } from './style';

class TagItem extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isActice: false
    }
  }

  render () {
    return (
      <TagsItem
        onClick={ this.clickTag.bind(this, this.props.id)}
        className={this.state.isActice ? 'active' : ''}
      >
        <span>{this.props.name}</span>
        <span>({this.props.count})</span>
      </TagsItem>
    )
  }

  clickTag (id) {
    console.log('id111:', id);
    // 设置激活样式
    this.setState({
      isActice: !this.state.isActice
    });
    console.log('clickTagItem', this.props.clickTagItem);
    // 发送点击事件给父组件
    this.props.clickTagItem(id);
  }
}

export default TagItem;