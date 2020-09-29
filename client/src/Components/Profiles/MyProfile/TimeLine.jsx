import React from 'react';
import SiderProfile from './SiderProfile.jsx';
import Post from './Post.jsx';
import {Row, Col} from 'antd';
import CreatePost from './../../NewFeed/CreatePost.jsx';
import { StickyContainer, Sticky } from 'react-sticky';

function TimeLine(){
  return(
    <>
    <Row>
      <SiderProfile/ >
      <Col span={16} style={{paddingLeft: '20px'}}>
        <CreatePost />
        <Post />
      </Col>
    </Row>
    </>
  )
}

export default TimeLine;
