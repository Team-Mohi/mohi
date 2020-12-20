import React, {useEffect, useState} from 'react';
import NewFeed from './../Components/NewFeed/Newfeed.jsx';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { fetchPosts } from './../Actions/index.jsx';
import { responsePosts } from './../Actions/index.jsx';
import { fetchMorePosts } from './../Actions/index.jsx';
import { responseMorePosts } from './../Actions/index.jsx';
import { responseAddComment } from './../Actions/index.jsx';
import { requestAddComment } from './../Actions/index.jsx';

function NewFeedContainer({posts}){
  const { currentPage } = useSelector(state => state.posts);
  const pageDefault = 1;
  const dispatch = useDispatch();
  const [loadingSetting, setLoadingSetting] = useState(false)

  useEffect(() => {
    dispatch(fetchPosts())
    getPostNewFeedFirst();
  }, [])

  useEffect(() => {
    if(currentPage > 1){
      dispatch(fetchMorePosts())
      getPostNewFeedInfinite();
    }
  }, [currentPage])

  const getPostNewFeedFirst = () => {
        axios({
          method: 'GET',
          url: "https://www.api.mohi.vn/api/auth/get-post-home",
          params: {page : pageDefault}
        })
        .then(res =>{
          dispatch(responsePosts(res.data))
        })
        .catch(e => {
          if(axios.isCancel(e)) return
        })
  }

  const getPostNewFeedInfinite = () => {
        axios({
          method: 'GET',
          url: "https://www.api.mohi.vn/api/auth/get-post-home",
          params: {page : currentPage}
        })
        .then(res =>{
          dispatch(responseMorePosts(res.data))
        })
        .catch(e => {
          if(axios.isCancel(e)) return
        })
  }

  const sendReactionPost = async (reaction, postId) => {
    if(reaction === 'unlike'){
      await axios.post('https://www.api.mohi.vn/api/auth/delete-action', {actions_PostId: postId})
    }else {
      await axios.post('https://www.api.mohi.vn/api/auth/create-action', {actions_PostId: postId, actions_action: reaction})
    }
  }

  const onSubmitComment = async (value, idPost) => {
    dispatch(requestAddComment())

    await axios.post('https://www.api.mohi.vn/api/auth/create-comment', {comment_PostId: idPost, comment_Content: value, comment_Type: 'parent'})
    .then((res) => {
      dispatch(responseAddComment(res.data))
    })
  }

  const hideOnePostOfUser = async (idPost) => {
    await axios.post('https://www.api.mohi.vn/api/auth/hide-one-post', {id: idPost})
    .then((res) => {
      setLoadingSetting(false)
    })
    .catch((e) => {
    })
  }

  const unFollowUser = async (idUser) => {
    await axios.post('https://www.api.mohi.vn/api/auth/hide-all-post', {id: idUser})
    .then((res) => {
      setLoadingSetting(false)
    })
    .catch((e) => {
    })
  }

  const unNotificationOfPost = async (idPost) => {
    await axios.post('https://www.api.mohi.vn/api/auth/hide-notifycation-post', {id: idPost})
    .then((res) => {
      setLoadingSetting(false)
    })
    .catch((e) => {
    })
  }
  const loadingSendRequestSetting = (type, idPost, idUser) => {
    setLoadingSetting(true)
    switch (type) {
      case 'hidePost':
        hideOnePostOfUser(idPost)
        break;
      case 'unNotification':
        unNotificationOfPost(idPost)
        break;
      default:
        unFollowUser(idUser)
        break;

    }
  }

  return(
    <NewFeed sendReactionPost={sendReactionPost} onSubmitComment={onSubmitComment} loadingSendRequestSetting={loadingSendRequestSetting} loadingSetting={loadingSetting}/>
  )
}
export default NewFeedContainer;
