import React, { Component } from 'react';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';
import List from './component/List';
import Tags from '../../common/tags';
import PageList from '../../common/pageList';

import kobe from '../../statics/img/kobe.jpeg';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <img className="banner-img" alt="kobe" src={kobe}></img>
                <HomeLeft className="homeLeft">
                    <List className="articleList"></List>
                </HomeLeft>
                <HomeRight className="homeRight">
                    <Tags 
                        className="tags"
                        clickTagItem = { this.onClickTag.bind(this)}
                        url = "/api/tagsList.json"
                    ></Tags>
                </HomeRight>
                <PageList></PageList>
            </HomeWrapper>
        )
    }

    // 标签点击事件回调
    onClickTag (id) {
        console.log('id:', id);
    }
}

export default Home;