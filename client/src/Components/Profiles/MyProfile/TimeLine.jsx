import React, {useState, useRef, useCallback} from 'react';
import SiderLeftProfile from './SiderLeftProfile.jsx';
import SiderRightProfile from './SiderRightProfile.jsx';
import {Post} from './Post.jsx';
import { Row, Col } from 'antd';
import CreatePost from './CreatePost.jsx';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { requestAddPostsProfile } from './../../../Actions/index.jsx';
import { responseAddPostsProfile } from './../../../Actions/index.jsx';
import { setCurrentPageProfile } from './../../../Actions/index.jsx';
import {skeletonPostNewFeed} from './../../Skeleton/index.jsx';
import {PUBLIC_URL} from './../../../Constants/public.jsx';
import {useParams} from 'react-router-dom';

function TimeLine(props, { myPosts, profile }) {
  const observer = useRef();
  const { listPosts, loading, error, hasMore, loadingAddComment, loadingAddPost } = useSelector(state => state.myPosts);
  const { info } = useSelector(state => state.profile);
  const dispatch = useDispatch();
  const [statusCreatePost, setStatusCreatePost] = useState();
  const {idProfile} = useParams();

  const lastNewFeed = useCallback(node => {
    if(loading) return
      if(observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting && hasMore){
          dispatch(setCurrentPageProfile())
        }
      })
    if(node) observer.current.observe(node)
  }, [loading, hasMore])

  const submitCreatePost = async (valueEditor, fileList, privacyNewFeed, privacyStory, placeNewFeed, placeStory, listMention) => {
    dispatch(requestAddPostsProfile())
    setStatusCreatePost('loading')

    let mention = [];
    listMention.map(m => {
      mention.push(m.data.mention.id)
    })
    let tags = mention.filter((value, index, mention) => mention.indexOf(value) === index);
    let tag = tags.toString();

    let data = {
        placeStory: placeStory,
        placePost: placeNewFeed,
        post_Content: valueEditor,
        post_Privacy: privacyNewFeed,
        tag_users_UserId: tag,
        story_Privacy: privacyStory,
        post_images_Url: fileList,
        post_userReceiveId: info.id
      }



    await axios.post('https://www.api.mohi.vn/api/auth/create-post-profile', data).then((res) => {
      dispatch(responseAddPostsProfile(res.data.newPost))
      setStatusCreatePost('success')
    }).catch((e) => {
      setStatusCreatePost('error')
    })

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

  const sendReactionPost = (reaction, postId) => {
    props.sendReactionPost(reaction, postId)
  }

  const onSubmitComment = (value, idPost) => {
    props.onSubmitComment(value, idPost)
  }

  const loadingSendRequestSetting = (type, idPost, idUser) => {
    props.loadingSendRequestSetting(type, idPost, idUser)
  }

  return (
    <>
      <Row>
        <SiderLeftProfile />
        <Col span={12} style={{ padding: '0 10px' }}>
          <CreatePost submitCreatePost={submitCreatePost} statusCreatePost={statusCreatePost}/>
          {listPosts.map((post, index) => <Post key={index} post={post} ref={lastNewFeed} sendReactionPost={sendReactionPost} onSubmitComment={onSubmitComment} loadingAddComment={loadingAddComment} loadingSendRequestSetting={loadingSendRequestSetting} loadingSetting={props.loadingSetting}/>)}
          {loading && skeletonPostNewFeed}
          {!loading && !listPosts.length  && <NoPost/>}
          {error && <div>Đã xảy ra lỗi không mong muốn vui lòng tải lại trang</div>}
        </Col>
        <SiderRightProfile />
      </Row>
    </>
  )
}

export default TimeLine;
