/*
 * 公共标签组件
 * 这里是 class 组件写法
 */
import React, { Component } from 'react';
import { TagsWrapper, TagsItem } from './style';
import axios from 'axios';

class Tags extends Component {
    constructor (props) {
        super(props);

        this.state = {
            data: props.data || [],
            url: props.url || '', // ajax方式获取数据地址
        }
    }

    render () {
        return (
            <TagsWrapper>
                {
                    this.state.data.map((item) => {
                        return (
                            <TagsItem key={item._id} onClick={ this.props.clickTagItem.bind(this, item._id) }>
                                <span>{item.name}</span>
                                <span>({item.count})</span>
                            </TagsItem>
                        )
                    })
                }
            </TagsWrapper>
        );
    }

    // 生命周期函数，在组件挂载（插入到DOM树）后立即调用
    // 如需通过网络请求获取数据，此处是实例化请求的好地方
    componentDidMount () {
        this.getData();
    }

    // 获取数据
    getData () {
        let data = [];
        if (this.state.data && this.state.data.length > 0) {
            this.setData(this.state.data);
        } else if (this.state.url) {
            axios.get(this.state.url).then((res) => {
                if (res.status === 200 && res.data.success === true) {
                    data = res.data.data;
                    this.setData(data);
                };
            }).catch((msg) => {
                console.log(msg);
            });
        }

        return data;
    }

    // 设置数据
    setData (data) {
        this.setState({
            data: data
        });
    }
};

export default Tags;