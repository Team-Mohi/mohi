import React, {useCallback, useRef, useState, useEffect} from 'react';
import { Layout } from 'antd';
import './NewFeed.css';
import {PostNewFeed} from './PostNewFeed.jsx';
import CreatePostContainer from './../../Containers/CreatePostContainer.jsx';
import Story from './Story.jsx';
import NewPost from './NewPost.jsx';
import { useSelector, useDispatch } from 'react-redux';
import {skeletonPostNewFeed} from './../Skeleton/index.jsx';
import {setCurrentPage} from './../../Actions/index.jsx';
import {PUBLIC_URL} from './../../Constants/public.jsx';

function NewFeed(props, { posts }) {
    const { Content } = Layout;
    const dispatch = useDispatch();
    const observer = useRef();
    const { listPosts, loading, error, hasMore, loadingAddComment } = useSelector(state => state.posts);
    const [newPost, setNewPost] = useState([]);
    const [isNewPost, setIsNewPost] = useState(false);
    const [errPost, setErrPost] = useState(false);

    const lastNewFeed = useCallback(node => {
      if(loading) return
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
          if(entries[0].isIntersecting && hasMore){
            dispatch(setCurrentPage())
          }
        })
      if(node) observer.current.observe(node)
    }, [loading, hasMore])

    const sendReactionPost = (reaction, postId) => {
      props.sendReactionPost(reaction, postId)
    }

    const onSubmitComment = (value, idPost) => {
      props.onSubmitComment(value, idPost)
    }

    const loadingSendRequestSetting = (type, idPost, idUser) => {
      props.loadingSendRequestSetting(type, idPost, idUser)
      if(type === 'hidePost' || type === 'hideAllPost'){
        // let a = list.filter(i => i.id !== idPost)
        // setList(a)
      }
    }

    const NoPost = () => {
        return(
          <React.Fragment>
            <div className="new-feed-empty content-hello">
              <p>Mohi</p>
              <img src={PUBLIC_URL + `images/nopost.jpg`} alt="Bảng tin không có bài viết" />
            <div style={{color: 'rgba(0,128,128)', fontSize: '15px', fontWeight: '600'}}>Hãy kết bạn để nhận được nhiều bài viết hơn từ bạn bè</div>
            </div>
          </React.Fragment>
        )
    }

    const successCreatePost = (data) => {
      if(data.newPost.length){
        setNewPost(prevList =>{
          return [...new Set([...prevList, data])]
        })
        setIsNewPost(true)
      }
    }

    const errorCreatePost = () => {
      setErrPost(true)
      setIsNewPost(true)
    }

    return (
        <Content className="pl-3 pr-3">
            <CreatePostContainer errorCreatePost={errorCreatePost} successCreatePost={successCreatePost}/>
            <Story />
            {isNewPost && <NewPost newPost={newPost} errPost={errPost}/>}
            {listPosts.map((post, index) => <PostNewFeed  key={index} post={post} ref={lastNewFeed} sendReactionPost={sendReactionPost} onSubmitComment={onSubmitComment} loadingAddComment={loadingAddComment} loadingSendRequestSetting={loadingSendRequestSetting} loadingSetting={props.loadingSetting}/> )}
            {loading && skeletonPostNewFeed}
            {!loading && !listPosts.length  && <NoPost/>}
            {error && <div>Đã xảy ra lỗi không mong muốn vui lòng tải lại trang</div>}
        </Content>
    )
}

export default NewFeed;
