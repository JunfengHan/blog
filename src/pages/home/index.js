import React, { Component } from 'react';
import axios from 'axios';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';
import List from './component/list';
import Tags from '../../common/tags';
import PageList from '../../common/pageList';

import { ApiHomeList, ApiTagsList } from '../../config/api';
import kobe from '../../statics/img/kobe.jpeg';

class Home extends Component {
    constructor (props) {
        super(props);

        this.state = {
            articleData: []
        }
    }

    render() {
        return (
            <HomeWrapper className="homeWrapper">
                <img className="banner-img" alt="kobe" src={kobe}></img>
                <HomeLeft className="homeLeft">
                    <List className="articleList"
                        data={this.state.articleData}
                    ></List>
                    <PageList 
                        className="pageList"
                        pages={12}
                    ></PageList>
                </HomeLeft>
                <HomeRight className="homeRight">
                    <Tags 
                        className="tags"
                        clickTagItem = { this.onClickTag.bind(this)}
                        url = {ApiTagsList}
                    ></Tags>
                </HomeRight>
            </HomeWrapper>
        )
    }

    // 组件挂载完成后加载数据
    componentDidMount() {
        axios.get(ApiHomeList).then((res) => {
            if (res.data.success && res.data.data.length > 0) {
                this.setState({
                    articleData: res.data.data
                });
            }
        }).catch((msg) => {
            console.log("axios_get_error,url:", msg);
        });
    }

    // 标签点击事件回调
    onClickTag (id) {
        console.log('id:', id);
    }
}

export default Home;