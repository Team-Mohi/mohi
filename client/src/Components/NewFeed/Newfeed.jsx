import React, {useCallback, useRef, useState, useEffect} from 'react';
import { Layout } from 'antd';
import './NewFeed.css';
import {PostNewFeed} from './PostNewFeed.jsx';
import CreatePost from './CreatePost.jsx';
import Story from './Story.jsx';
import {  useSelector, useDispatch } from 'react-redux';
import InfiniteScrolling from './InfiniteScrolling.jsx';
import {skeletonPostNewFeed} from './../Skeleton/index.jsx';

function NewFeed({ posts }) {
    const { Content } = Layout;
    const listPosts = useSelector(state => state.posts);
    const [pageNumber, setPageNumber] = useState(1)
    const { loading, error, books, hasMore } = InfiniteScrolling(pageNumber)

    const observer = useRef();
    const lastNewFeed = useCallback(node => {
      if(loading) return
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
          if(entries[0].isIntersecting && hasMore){
            setPageNumber(nextPageNumber => nextPageNumber + 1)
          }
        })
      if(node) observer.current.observe(node)
    }, [loading, hasMore])

    return (
        <Content className="pl-3 pr-3">
            <CreatePost />
            <Story />
            {listPosts.map((post, index) => <PostNewFeed key={index} post={post} ref={lastNewFeed}/>)}
            {loading && skeletonPostNewFeed}
            {error && <div>error</div>}
        </Content>
    )
}

export default NewFeed;
