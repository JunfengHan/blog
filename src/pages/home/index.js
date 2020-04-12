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
                    <Tags className="tags"></Tags>
                </HomeRight>
                <PageList></PageList>
            </HomeWrapper>
        )
    }
}

export default Home;