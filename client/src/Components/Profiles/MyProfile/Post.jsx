import React, { useEffect, useState, useRef } from 'react';
import PostImage from './PostImage.jsx';
import CommentEditor from './CommentEditor.jsx';
import CommentParent from './CommentParent.jsx';
import { Link } from 'react-router-dom';
import { MdPublic, MdNotificationsOff, MdDelete } from "react-icons/md";
import { AiOutlineLike, AiOutlineIssuesClose, AiFillEdit } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FaRegCommentAlt, FaRegWindowClose, FaUserLock, FaUserAlt  } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { GoEyeClosed } from "react-icons/go";
import { List, Tooltip, Spin } from 'antd';
import moment from 'moment';
import {PUBLIC_URL} from './../../../Constants/public.jsx';
import { AiOutlineCaretRight } from "react-icons/ai";
import {Image,Transformation} from 'cloudinary-react';
import { useDispatch } from 'react-redux';
import { toggleStatusPresentialModal } from './../../../Actions/index.jsx';
import { responseAddCommentProfile } from './../../../Actions/index.jsx';
import { requestAddCommentProfile } from './../../../Actions/index.jsx';
import axios from 'axios';

export const Post = React.forwardRef((props, ref ) =>  {

    moment.updateLocale('vi', {
      relativeTime : {
          future: "%s",
          past:   "%s trước",
          s  : 'vài giây',
          ss : '%d phút',
          m:  "1 phút trước",
          mm: "%d phút",
          h:  "%d giờ",
          hh: "%d giờ",
          d:  "1 ngày",
          dd: "%d ngày",
          w:  "1 tuần",
          ww: "%d tuần",
          M:  "1 tháng",
          MM: "%d tháng",
          y:  "1 năm",
          yy: "%d năm"
      }
    });
    const inputCommentRef = useRef();
    const refContentPost = useRef();
    const [listParentComment, setListParentComment] = useState([]);
    const [listChildComment, setListChildComment] = useState([]);
    const [iconReaction, setIconReaction] = useState();
    const [styleListSendReaction, setStyleListSendReaction] = useState();
    const [isLike, setIsLike] = useState(false);
    const [contentPostStyle, setContentPostStyle] = useState();
    const [moreContent, setMoreContent] = useState(false);
    const [lineContent, setLineContent] = useState(false);
    const totalReactionPost = props.post.actions_post;
    const currentUser = JSON.parse(localStorage.getItem('ustk')).info;
    const [delayHandler, setDelayHandler] = useState(null)
    const [newComment, setNewComment] = useState([])
    const [showComment, setShowComment] = useState(false)
    const [noti, setNoti] = useState()
    const [typeNoti, setTypeNoti] = useState()
    const [isHide, setIsHide] = useState(false)
    const [newOneCmt, setNewOneCmt] = useState()
    const [isNewComment, setIsNewComment] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
      if(!props.loadingSetting && typeNoti){
        if(typeNoti === 'unNotification'){
          setNoti('Bạn đã tắt thông báo từ bài viết này thành công')
        }else {
          setIsHide(true)
        }
      }
    }, [props.loadingSetting])

    const onSubmitComment = async (value) => {
      dispatch(requestAddCommentProfile())
      setNewOneCmt(value)
      setIsNewComment(true)
      await axios.post('https://www.api.mohi.vn/api/auth/create-comment', {comment_PostId: props.post.id, comment_Content: value, comment_Type: 'parent'})
      .then((res) => {
        setNewComment([res.data[0], ...newComment])
        setIsNewComment(false)
        dispatch(responseAddCommentProfile({idPost: props.post.id, comment: res.data}))
      })
    }

    const updateComment = (idPost, id, value) => {
      dispatch(toggleStatusPresentialModal('edit_comment_profile', {idPost: idPost, id: id, value: value}))
    }

    const deleteComment = async (id) => {
      await axios.post("https://www.api.mohi.vn/api/auth/delete-comment", {id: id})
      const deleteCmt = newComment.filter(cmt => cmt.pivot.id !== id);
      setNewComment(deleteCmt)
    }

    const toggleMoreContentPost = () => {
      if(moreContent){
        setMoreContent(false)
        setContentPostStyle({
          maxWidth: '100%',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 3,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        })
      }else {
        setMoreContent(true)
        setContentPostStyle({
          display: 'block'
        })
      }
    }

    function removeOrFilterNationality(objectOfNationality) {
       return Array.from(new Set(objectOfNationality.map(tempObject => tempObject.pivot.actions_action)));
    }

    function focusInputComment() {
        let inputRef = inputCommentRef.current;
        inputRef.focusCommentInput();
    }

    useEffect(() => {
        let _commentParent = []
        let _commentChild = []

        props.post.comment_post.reverse().map((comment, index) => {
            if (comment.pivot.comment_Type === 'parent') {
                _commentParent.push(comment)
                setListParentComment(_commentParent)
            }
            if (comment.pivot.comment_Type === 'child') {
                _commentChild.push(comment)
                setListChildComment(_commentChild)
            }
        })
        const divHeight = refContentPost.current.offsetHeight
        setLineContent(divHeight / 25);
    }, []);


    const leaveListSendReaction = () => {
      setDelayHandler(setTimeout(() => {
         setStyleListSendReaction({
          top: '-10px',
          opacity:0,
          visibility: 'hidden'
        })
      }, 1000))
      clearTimeout(delayHandler)
    }

    const enterListSendReaction = () => {
      setDelayHandler(setTimeout(() => {
            setStyleListSendReaction({
              top: '-56px',
              opacity:1,
              visibility: 'visible'
            })
      }, 500))
      clearTimeout(delayHandler)
    }

    const loadingSendRequestSetting = async (type, idPost, idUser) => {
      setTypeNoti(type)
      await props.loadingSendRequestSetting(type, idPost, idUser)
    }

    const showCommentFunc = () => {
      setShowComment(!showComment)
    }

    const NotiSetting = () => {
      return(
        <React.Fragment>
          <div className="noti-post" style={{background: 'white', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '2px', padding: '10px', marginTop: '10px', color: 'green'}}>{noti}</div>
        </React.Fragment>
      )
    }

    const updatePost = (post) => {
      dispatch(toggleStatusPresentialModal('update_post_profile', post))
    }

    const settingPost = (
        <React.Fragment>
            <List className="setting-post" loading={props.loadingSetting}>
                {props.post.user_admin_post.user_username === currentUser.user_username && <List.Item onClick={() => loadingSendRequestSetting('deletePost', props.post.id, '')}><MdDelete /> Xóa bài viết</List.Item>}
                <List.Item onClick={() => updatePost(props.post)}><AiFillEdit /> Sửa bài viết</List.Item>
                <List.Item onClick={() => loadingSendRequestSetting('hidePost', props.post.id, '')}><GoEyeClosed /> Ẩn bài viết</List.Item>
                <List.Item onClick={() => loadingSendRequestSetting('unNotification', props.post.id, '')}><MdNotificationsOff />Tắt thông báo từ bài viết</List.Item>
            </List>
        </React.Fragment>
    );

    const listReactionPost = () => {
      return(
        <ul className="post-reaction-list">
          {totalReactionPost.slice(0, 21).map((reaction, index) => {
            return(
                <li key={index}>
                  <Link to={'/profile/' + reaction.user_username}>{reaction.user_first_name + ' ' + reaction.user_last_name}</Link>
                </li>
            )
          })}
          { totalReactionPost.length - 21 > 0 &&
          <li>
            và {totalReactionPost.length - 21} người khác
          </li>
          }
        </ul>
      )
    }

    const listIconReactionPost = (reaction, index) => {
      switch (reaction) {
        case 'like':
            return <img key={index} className="icon-reaction icon-like-22" src={PUBLIC_URL + 'icon/like.png'} alt="Thích"/>
          break;
        case 'haha':
            return <img key={index} className="icon-reaction icon-like-22" src={PUBLIC_URL + 'icon/haha.png'} alt="Cười"/>
          break;
        case 'wow':
            return <img key={index} className="icon-reaction icon-like-22" src={PUBLIC_URL + 'icon/wow.png'} alt="Ngạc nhiên"/>
          break;
        case 'sad':
            return <img key={index} className="icon-reaction icon-like-22" src={PUBLIC_URL + 'icon/sad.png'} alt="Buồn"/>
          break;
        case 'angry':
            return <img key={index} className="icon-reaction icon-like-22" src={PUBLIC_URL + 'icon/angry.png'} alt="Giận dữ"/>
          break;
        case 'love':
            return <img key={index} className="icon-reaction icon-like-22" src={PUBLIC_URL + 'icon/heart.png'} alt="Yêu thích"/>
          break;
        default: return <AiOutlineLike/>
      }
    }

    const ListTagUserPost = () => {
        const twoItemTags = props.post.tag_users_post.slice(0, 2);
        const itemToLast =  props.post.tag_users_post.slice(2);

        if(props.post.tag_users_post.length && props.post.tag_users_post.length <= 2){
          return(
            <React.Fragment>
              cùng với
              {twoItemTags.map((tag, index) => {
                return(
                  <React.Fragment  key={index}>
                    { index !== 0 ? ' và ' : null}
                  <Link to={'/profile/' + tag.user_username}>
                    {' ' + tag.user_first_name + ' ' + tag.user_last_name}
                  </Link>
                </React.Fragment>
                )
              })}
            </React.Fragment>
          )
        }

        if(props.post.tag_users_post.length > 2){
          return(
            <React.Fragment>
              cùng với
              {twoItemTags.map((tag, index) => {
                return(
                  <span key={index}> <Link to={'/profile/' + tag.user_username} >{tag.user_first_name + ' ' + tag.user_last_name}</Link> và </span>
                )
              })}
              <Tooltip
                placement="bottom"
                className="tag-more-user"
                title={
                  <ul className="tag-more-user-list">
                    {itemToLast.map((tag, index) => {
                      return(
                        <li key={index}><Link to={'/profile/' + tag.user_username} >{tag.user_first_name + ' ' + tag.user_last_name}</Link></li>
                      )
                    })}
                  </ul>
                }
              >
                {itemToLast.length} người khác
              </Tooltip>
            </React.Fragment>
          )
        }

        return null

    }

    const PrivacyPost = () => {
      switch ( props.post.post_Privacy) {
        case "public":
            return <MdPublic />
          break;
        case "onlyme":
            return <FaUserLock />
          break;
        case "friend":
            return <FaUserAlt />
          break;
        default: return null

      }
    }

    const iconReactionPost = (reaction, index) => {
        switch (reaction.pivot.actions_action) {
          case 'like':
              return <img  key={index} className="icon-reaction icon-like-22" src={PUBLIC_URL + 'icon/like.png'} alt="Thích"/>
            break;
          case 'haha':
              return <img  key={index} className="icon-reaction icon-like-22" src={PUBLIC_URL + 'icon/haha.png'} alt="Cười"/>
            break;
          case 'wow':
              return <img key={index} className="icon-reaction icon-like-22" src={PUBLIC_URL + 'icon/wow.png'} alt="Ngạc nhiên"/>
            break;
          case 'sad':
              return <img  key={index} className="icon-reaction icon-like-22" src={PUBLIC_URL + 'icon/sad.png'} alt="Buồn"/>
            break;
          case 'angry':
              return <img  key={index} className="icon-reaction icon-like-22" src={PUBLIC_URL + 'icon/angry.png'} alt="Giận dữ"/>
            break;
          case 'love':
              return <img  key={index} className="icon-reaction icon-like-22" src={PUBLIC_URL + 'icon/heart.png'} alt="Yêu thích"/>
            break;
          default: return <AiOutlineLike />
        }
    }

    const PagePost = () => {
      if(props.post.post_PageId){
        return(
          <span><AiOutlineCaretRight/> <Link to={'/pages/' + props.post.page_admin_post.page_FakeId}>{props.post.page_admin_post.page_Name}</Link></span>
        )
      }

      return null
    }

    const UserReceivedPost = () => {
      if(props.post.post_userReceiveId && props.post.post_userReceiveId !== props.post.user_admin_post.id){
        return(
          <span><AiOutlineCaretRight/> <Link to={'/profile/' + props.post.profile_receive_post.user_username}>{props.post.profile_receive_post.user_first_name + ' ' + props.post.profile_receive_post.user_last_name}</Link></span>
        )
      }

      return null
    }

    const GroupPost = () => {
      if(props.post.post_GroupId){
        return(
          <span><AiOutlineCaretRight/> <Link to={'/groups/' + props.post.group_admin_post.group_FakeId}>{props.post.group_admin_post.group_Name}</Link></span>
        )
      }

      return null
    }

    const sendReactionPost = (reaction, postId) => {
       setStyleListSendReaction({
          top: '-10px',
          opacity:0,
          visibility: 'hidden'
        })
      props.sendReactionPost(reaction, postId)
      switch (reaction) {
        case 'unlike':
            setIconReaction(<AiOutlineLike/>)
            setIsLike(false)
          break;
        case 'like':
            setIsLike(true)
            setIconReaction(<img className='icon-reaction icon-like-22' src={PUBLIC_URL + 'icon/like.png'} alt='Thích'/>)
          break;
        case 'haha':
            setIsLike(true)
            setIconReaction(<img className='icon-reaction icon-like-22' src={PUBLIC_URL + 'icon/haha.png'} alt='Cười'/>)
          break;
        case 'wow':
            setIsLike(true)
            setIconReaction(<img className='icon-reaction icon-like-22' src={PUBLIC_URL + 'icon/wow.png'} alt='Ngạc nhiên'/>)
          break;
        case 'sad':
            setIsLike(true)
            setIconReaction(<img className='icon-reaction icon-like-22' src={PUBLIC_URL + 'icon/sad.png'} alt='Buồn'/>)
          break;
        case 'angry':
            setIsLike(true)
            setIconReaction(<img  className='icon-reaction icon-like-22' src={PUBLIC_URL + 'icon/angry.png'} alt='Giận dữ'/>)
          break;
        case 'love':
            setIsLike(true)
            setIconReaction(<img className='icon-reaction icon-like-22' src={PUBLIC_URL + 'icon/heart.png'} alt='Yêu thích'/>)
          break;
      }
    }

    const UserUpdateCover = () => {
      if(props.post.post_Type === 'cover'){
        return <span> đã cập nhật ảnh bìa</span>
      }

      return null
    }

    const UserUpdateAvatar = () => {
      if(props.post.post_Type === 'avatar'){
        return <span> đã cập nhật ảnh đại diện</span>
      }

      return null
    }

    if(isHide) return null

    return (
        <React.Fragment>
            <div className="post" ref={ref}>
                {noti && <NotiSetting />}
                <div className="post-container">
                    <div className="post-header">
                        <div className="post-info">
                            <div className="post-avatar">
                                <Link to={'/profile/' + props.post.user_admin_post.user_username}>
                                    {props.post.user_admin_post.user_avatar_cropX === null ?
                                      <img src={props.post.user_admin_post.user_avatar} alt={props.post.user_admin_post.user_last_name} />
                                      :
                                      <Image cloudName="mohi-vn" publicId={props.post.user_admin_post.user_avatar+ ".jpg"} version="1607061343">
                                        <Transformation height={props.post.user_admin_post.user_avatar_cropH}  width={props.post.user_admin_post.user_avatar_cropW} x={props.post.user_admin_post.user_avatar_cropX} y={props.post.user_admin_post.user_avatar_cropY} crop="crop" />
                                      </Image>
                                    }
                                </Link>
                            </div>
                            <div className="post-boss">
                                <p>
                                    <Link to={'/profile/' + props.post.user_admin_post.user_username}>{props.post.user_admin_post.user_first_name + " " + props.post.user_admin_post.user_last_name} </Link>
                                    <ListTagUserPost />
                                    <PagePost />
                                    <GroupPost />
                                    <UserReceivedPost />
                                    <UserUpdateCover />
                                    <UserUpdateAvatar />
                                </p>
                                <p className="post-time-created">{moment(moment.utc(props.post.created_at).toDate()).fromNow()} <PrivacyPost /></p>
                            </div>
                        </div>
                        <div className="post-setting">
                          <Tooltip trigger={'click'} placement="bottom" title={settingPost}>
                            <BsThreeDots />
                          </Tooltip>
                        </div>
                    </div>
                    <div className="post-body">
                        <div className="post-content" >
                            <div style={contentPostStyle} ref={refContentPost}>{props.post.post_Content} </div>
                            {lineContent >= 4 ?
                              <React.Fragment>
                                {!moreContent ? <span className="more-content-post" onClick={toggleMoreContentPost }> Xem thêm</span > : <span className="more-content-post" onClick={toggleMoreContentPost }>Thu gọn</span>}
                              </React.Fragment>
                            : null}
                        </div>
                        <PostImage post={props.post} images={props.post.images_post} />
                    </div>
                    <div className="post-footer">
                          <div className="post-total-action" style={{display:'flex', justifyContent: 'space-between'}}>
                            { totalReactionPost.length ?
                              <Tooltip placement="top" title={listReactionPost}>
                                <span>
                                  {removeOrFilterNationality(totalReactionPost).slice(0, 3).map((reaction, index) => listIconReactionPost(reaction, index))}
                                  {' '+ totalReactionPost.length} người đã bày tỏ cảm xúc</span>
                              </Tooltip>
                            : null}
                            <span onClick={showCommentFunc}>{props.post.comment_post.length + newComment.length ? props.post.comment_post.length + ' bình luận' : null} </span>
                          </div>
                        <div className="post-action" >
                            <div className="post-action-item send-reaction"  onMouseEnter={enterListSendReaction} onMouseLeave={leaveListSendReaction}>
                              <div onClick={() => totalReactionPost.filter(reaction => reaction.pivot.actions_UserId === currentUser.id).length && isLike === 'default' ?
                                sendReactionPost('unlike', props.post.id) :
                                  <React.Fragment>
                                    {!isLike || isLike === 'default' ?
                                      sendReactionPost('like', props.post.id)
                                      :
                                      sendReactionPost('unlike', props.post.id)
                                    }
                                  </React.Fragment>
                                } >
                                { iconReaction
                                ?
                                iconReaction
                                :
                                (totalReactionPost.filter(reaction => reaction.pivot.actions_UserId === currentUser.id).length
                                ?
                                totalReactionPost.filter(reaction => reaction.pivot.actions_UserId === currentUser.id).map((reaction, index) => iconReactionPost(reaction, index))
                                :
                                <AiOutlineLike/>)
                              }
                              </div>
                              <div className="list-icon-send-reaction" style={styleListSendReaction}>
                                <img onClick={() => sendReactionPost('like', props.post.id)} className="icon-like-48" src={PUBLIC_URL + 'icon/like.gif'} alt=""/>
                                <img onClick={() => sendReactionPost('love', props.post.id)} className="icon-like-48" src={PUBLIC_URL + 'icon/love.gif'} alt=""/>
                                <img onClick={() => sendReactionPost('haha', props.post.id)} className="icon-like-48" src={PUBLIC_URL + 'icon/haha.gif'} alt=""/>
                                <img onClick={() => sendReactionPost('wow', props.post.id)} className="icon-like-48" src={PUBLIC_URL + 'icon/wow.gif'} alt=""/>
                                <img onClick={() => sendReactionPost('sad', props.post.id)} className="icon-like-48" src={PUBLIC_URL + 'icon/sad.gif'} alt=""/>
                                <img onClick={() => sendReactionPost('angry', props.post.id)} className="icon-like-48" src={PUBLIC_URL + 'icon/angry.gif'} alt=""/>
                              </div>
                            </div>
                            <div className="post-action-item" onClick={() => focusInputComment()}>
                                <FaRegCommentAlt />
                            </div>
                        </div>
                    </div>
                    <div className="post-comment">
                        <div className="post-comment-current-user">
                          {currentUser.user_avatar_cropX === null ?
                            <img src={currentUser.user_avatar} alt={currentUser.user_first_name + ' ' + currentUser.user_last_name} />
                            :
                            <Image cloudName="mohi-vn" publicId={currentUser.user_avatar+ ".jpg"} version="1607061343">
                              <Transformation height={currentUser.user_avatar_cropH}  width={currentUser.user_avatar_cropW} x={currentUser.user_avatar_cropX} y={currentUser.user_avatar_cropY} crop="crop" />
                            </Image>
                          }
                        </div>
                          <div className="post-comment-input">
                              <CommentEditor ref={inputCommentRef} onSubmitComment={onSubmitComment}/>
                          </div>
                    </div>
                    {props.loadingAddComment && isNewComment?
                        <div className="post-comment-item post-new-comment" style={{marginBottom: '10px'}}>
                          <div className="post-comment-item-parent">
                            <div className="post-comment-item-parent-avatar">
                              <Link to={'/profile/'+ currentUser.user_username}>
                                {currentUser.user_avatar_cropX === null ?
                                  <img src={currentUser.user_avatar} alt={currentUser.user_first_name + ' ' + currentUser.user_last_name} />
                                  :
                                  <Image cloudName="mohi-vn" publicId={currentUser.user_avatar+ ".jpg"} version="1607061343">
                                    <Transformation height={currentUser.user_avatar_cropH}  width={currentUser.user_avatar_cropW} x={currentUser.user_avatar_cropX} y={currentUser.user_avatar_cropY} crop="crop" />
                                  </Image>
                                }
                              </Link>
                            </div>
                            <div className="post-comment-item-parent-info">
                              <div className="post-comment-item-parent-info-user">
                                <Link to={'/profile/'+ currentUser.user_username}>{currentUser.user_first_name + ' ' + currentUser.user_last_name}</Link>
                              </div>
                              <div className="post-comment-item-parent-content">
                                <p>{newOneCmt}</p>
                              </div>
                              <div className="post-comment-item-parent-action">
                              <span>{moment(new Date, "YYYYMMDD\h:m:s").fromNow()}</span>
                              </div>
                            </div>
                          </div>
                              <Spin />
                              <div className="post-new-comment-waiting" />
                        </div>
                    : null}
                    {newComment.map((newcmt, index) => {
                      return(
                        <div className="post-comment-item post-new-comment" style={{marginBottom: '10px'}} key={index}>
                          <div className="post-comment-item-parent">
                            <div className="post-comment-item-parent-avatar">
                              <Link to={'/profile/'+ newcmt.user_username}>
                                {newcmt.user_avatar_cropX === null ?
                                  <img src={newcmt.user_avatar} alt={newcmt.user_first_name + ' ' + newcmt.user_last_name} />
                                  :
                                  <Image cloudName="mohi-vn" publicId={newcmt.user_avatar+ ".jpg"} version="1607061343">
                                    <Transformation height={newcmt.user_avatar_cropH}  width={newcmt.user_avatar_cropW} x={newcmt.user_avatar_cropX} y={newcmt.user_avatar_cropY} crop="crop" />
                                  </Image>
                                }
                              </Link>
                            </div>
                            <div className="post-comment-item-parent-info">
                              <div className="post-comment-item-parent-info-user">
                                <Link to={'/profile/'+ newcmt.user_username}>{newcmt.user_first_name + ' ' + newcmt.user_last_name}</Link>
                              </div>
                              <div className="post-comment-item-parent-content">
                                <p>{newcmt.pivot.comment_Content}</p>
                              </div>
                              <div className="post-comment-item-parent-action">
                              <span>{moment(moment.utc(newcmt.pivot.created_at).toDate()).fromNow()}</span>
                              </div>
                            </div>
                            {newcmt.id === JSON.parse(localStorage.getItem('ustk')).info.id && <div className="setting-comment-post">
                              <Tooltip
                                trigger="click"
                                placement="bottom"
                                title={
                                  <div className="setting-comment-post-tooltip">
                                    <div onClick={() => updateComment(props.post.id, newcmt.pivot.id, newcmt.pivot.comment_Content)}>
                                      Sửa bình luận
                                    </div>
                                    <div onClick={() => deleteComment(newcmt.pivot.id)}>
                                      Xóa bình luận
                                    </div>
                                  </div>
                                }
                              >
                                <BsThreeDots />
                              </Tooltip>
                            </div>
                            }
                          </div>
                        </div>
                      )
                    })}
                    {
                        listParentComment.length > 0 && listParentComment.length <= 6 || showComment
                            ? <div className="post-comment-container">
                                {
                                    listParentComment.map((comment, index) => {
                                        return (<CommentParent key={index} listChildComment={listChildComment} comment={comment}  idPost={props.post.id}/>)
                                    })
                                }
                            </div>
                            : null
                    }
                </div>
            </div>
        </React.Fragment>
    )
})
