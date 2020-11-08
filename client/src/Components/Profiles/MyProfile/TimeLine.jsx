import React from 'react';
import SiderProfile from './SiderProfile.jsx';
import Post from './Post.jsx';
import { Row, Col } from 'antd';
import CreatePost from './CreatePost.jsx';
import { useSelector, useDispatch } from 'react-redux';

function TimeLine({ posts }) {
  const listPosts = useSelector(state => state.posts);
  return (
    <>
      <Row>
        <SiderProfile />
        <Col span={16} style={{ paddingLeft: '20px' }}>
          <CreatePost />
          {listPosts.map((post, index) => <Post key={index} post={post} />)}
        </Col>
      </Row>
    </>
  )
}

export default TimeLine;
