import React from 'react';
import { Layout } from 'antd';
import './NewFeed.css';
import PostNewFeed from './PostNewFeed.jsx';
import CreatePost from './CreatePost.jsx';

function NewFeed() {
    const { Content } = Layout;
    return (
        <Content className="pl-3 pr-3">
            <CreatePost />
            <PostNewFeed />
        </Content>
    )
}

export default NewFeed;
