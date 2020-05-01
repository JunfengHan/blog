// 文章详情页面
import React, { Component } from 'react';
import axios from 'axios';
import { ApiUserCreate } from '../../config/api';

const instance = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        "Access-Control-Allow-Credentials": true,
    }
});

class Technology extends Component {
    render () {
        return (
            <div>
                Technology
            </div>
        )
    }
    // 组件挂载完成后加载数据
    componentDidMount() {
        instance.post(ApiUserCreate, {
            title: 'han',
            phone: 123456
        }).then((res) => {
            if (res.data.success && res.data.data.length > 0) {
                this.setState({
                    articleData: res.data.data
                });
            }
        }).catch((msg) => {
            console.log("axios_get_error,url:", msg);
        });
    }
}

export default Technology;