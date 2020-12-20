import React, {useEffect, useState} from 'react';
import Profile from './../Components/Profiles/MyProfile/Index.jsx';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {useParams, Redirect} from 'react-router-dom';
import {requestPostsProfile} from './../Actions/index.jsx';
import {responsePostsProfile} from './../Actions/index.jsx';
import {responseMorePostsProfile} from './../Actions/index.jsx';
import {fetchMorePostsProfile} from './../Actions/index.jsx';
import { responseAddCommentProfile } from './../Actions/index.jsx';
import { requestAddCommentProfile } from './../Actions/index.jsx';
import { requestInfoProfile } from './../Actions/index.jsx';
import { responseInfoProfile } from './../Actions/index.jsx';
import { requestFriendProfile } from './../Actions/index.jsx';
import { responseFriendProfile } from './../Actions/index.jsx';
import { responseImageProfile } from './../Actions/index.jsx';
import { requestImageProfile } from './../Actions/index.jsx';
import { WaveLoading } from 'react-loadingg';

function ProfileContainer({ myPosts, profile }){
  const dispatch = useDispatch();
  const {idProfile} = useParams();
  const { currentPage } = useSelector(state => state.myPosts);
  const { loading, info } = useSelector(state => state.profile);
  const [loadingSetting, setLoadingSetting] = useState(false)
  const [err, setErr] = useState(false)

  const fetchInfoProfile = async () => {
    setErr(false)
    dispatch(requestInfoProfile())

    await axios.get('https://www.api.mohi.vn/api/auth/get-info-profile/'+ idProfile)
    .then((res) => {
      dispatch(responseInfoProfile(res.data))
    })
    .catch((e) => {
      setErr(true)
      dispatch(responseInfoProfile(''))
    })
  }

  const fetchFriendProfile = async () => {
    dispatch(requestFriendProfile())

    await axios.get('https://www.api.mohi.vn/api/auth/list-friend-profile/'+ idProfile)
    .then((res) => {
      dispatch(responseFriendProfile(res.data))
    })
  }

  const fetchPostsProfile = async () => {
    dispatch(requestPostsProfile())

    await axios.get('https://www.api.mohi.vn/api/auth/post-profile/'+ idProfile)
    .then((res) => {
      dispatch(responsePostsProfile(res.data))
    })
  }

  const fetchImageProfile = async () => {
    dispatch(requestImageProfile())

    await axios.get("https://www.api.mohi.vn/api/auth/list-image-profile/" + idProfile)
    .then((res) => {
      dispatch(responseImageProfile(res.data))
    })
  }

  useEffect(() => {
    fetchImageProfile()
    fetchFriendProfile()
    fetchInfoProfile()
    fetchPostsProfile()
  }, [idProfile])

  useEffect(() => {
    if(currentPage > 1){
      dispatch(fetchMorePostsProfile())
      getPostNewFeedInfinite();
    }
  }, [currentPage])

  const getPostNewFeedInfinite = () => {
        axios({
          method: 'GET',
          url: 'https://www.api.mohi.vn/api/auth/post-profile/'+ idProfile,
          params: {page : currentPage}
        })
        .then(res =>{
          dispatch(responseMorePostsProfile(res.data))
        })
        .catch(e => {
          if(axios.isCancel(e)) return
        })
  }

  const sendReactionPost = async (reaction, postId) => {
    if(reaction === 'unlike'){
      await axios.post('https://www.api.mohi.vn/api/auth/delete-action', {actions_PostId: postId})
    }else {
      await axios.post('https://www.api.mohi.vn/api/auth/create-action', {actions_PostId: postId, actions_action: reaction}).then((res) => {
      })
    }
  }

  const onSubmitComment = async (value, idPost) => {
    dispatch(requestAddCommentProfile())

    await axios.post('https://www.api.mohi.vn/api/auth/create-comment', {comment_PostId: idPost, comment_Content: value, comment_Type: 'parent'})
    .then((res) => {
      dispatch(responseAddCommentProfile(res.data))
    })
  }

  const hideOnePostOfUser = async (idPost) => {
    await axios.post('https://www.api.mohi.vn/api/auth/hide-one-post', {id: idPost})
    .then((res) => {
      setLoadingSetting(false)
    })
  }

  const unNotificationOfPost = async (idPost) => {
    await axios.post('https://www.api.mohi.vn/api/auth/hide-notifycation-post', {id: idPost})
    .then((res) => {
      setLoadingSetting(false)
    })
  }

  const deletePost = async (idPost) => {
    await axios.post('https://www.api.mohi.vn/api/auth/delete-post-profile', {id: idPost})
    .then((res) => {
      setLoadingSetting(false)
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
      case 'deletePost':
        deletePost(idPost)
        break;
      default:
        break;

    }
  }

  if(loading){
    return <div style={{width: '1140px', background: 'white', height: '100vh', margin: '0 auto'}}><WaveLoading /></div>
  }

  if(!loading && !info && err){
    return(
      <Redirect to="/404" />
    )
  }

  return(
    <Profile sendReactionPost={sendReactionPost} onSubmitComment={onSubmitComment} loadingSendRequestSetting={loadingSendRequestSetting} loadingSetting={loadingSetting}/>
  )
}

export default ProfileContainer;
