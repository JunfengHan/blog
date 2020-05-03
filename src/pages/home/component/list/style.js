import styled from 'styled-components';

import read from '../../../../statics/iconfont/read.svg';
import likeActive from '../../../../statics/iconfont/like.svg';
import like from '../../../../statics/iconfont/likeActive.svg';
import comment from '../../../../statics/iconfont/comment.svg';
import updateTime from '../../../../statics/iconfont/updateTime.svg';

export const ListWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

export const ListItem = styled.div`
  padding: 18px 0px;
  border-bottom: 1px solid #f0f0f0;
  .title {
    font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    color: #333333;
    display: inherit;
    /* &:visited {
      color: #969696;
    } */
    &:hover {
      text-decoration-line: underline;
    }
  }
  .articleDesc {
    font-size: 13px;
    line-height: 24px;
    color: #999;
    margin: 8px 0px;
  }
`;

export const ArticleInfo = styled.div`
  color: #999999;
  height: 36px;
  a {
    color: #999999;
  }
  span {
    display: inline-block;
    margin-right: 16px;
    line-height: 36px;
    font-size: 13px;
  }
  i {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 4px;
    margin-top: -4px;
    background-size: 16px 16px;
    background-repeat: no-repeat;
    vertical-align: middle;
    &.iconRead {
      background-image: url(${read});
    }
    &.iconLike {
      background-image: url(${like});
      &.active {
        background-image: url(${likeActive});    
      }
    }
    &.iconComment {
      background-image: url(${comment});
    }
    &.iconUpdate {
      background-image: url(${updateTime});
    }
  }
`;

export const ArticleInfoLeft = styled.div`
  float: left;
`;

export const ArticleInfoRight = styled.div`
  float: right;
`;