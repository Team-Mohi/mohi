import React from 'react';
import { Layout } from 'antd';
import './NewFeed.css';
import PostNewFeed from './PostNewFeed.jsx';
import CreatePost from './CreatePost.jsx';
import {  useSelector, useDispatch } from 'react-redux';

function NewFeed({ posts }) {
    const { Content } = Layout;
    const listPosts = useSelector(state => state.posts);

    return (
        <Content className="pl-3 pr-3">
            <CreatePost />
            {listPosts.map((post, index) => <PostNewFeed key={index} post={post} />)}
        </Content>
    )
}

export default NewFeed;
