/*
 * 公共标签组件
 * 采用 stateless Component 写法，主要用于展示数据
 * 因为需要使用 axios 异步获取数据，所以不适合采用无状态组件
 */
import React, { Component } from 'react';
import { TagsWrapper, TagsItem } from './style';
import axios from 'axios';

const TagsContent = (props) => {
  return (
    <TagsItem></TagsItem>
  )
};

const Tags = () => {
  return (
    <TagsWrapper>
      <TagsContent></TagsContent>
    </TagsWrapper>
  );
};

export default Tags;
