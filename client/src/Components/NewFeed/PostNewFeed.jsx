import React, { useEffect, useState, useRef } from 'react';
import PostImage from './PostImage.jsx';
import CommentEditor from './CommentEditor.jsx';
import CommentParent from './CommentParent.jsx';
import { Link } from 'react-router-dom';
import { MdPublic } from "react-icons/md";
import { AiOutlineLike, AiOutlineIssuesClose } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FaRegCommentAlt, FaRegWindowClose, FaUserLock, FaUserAlt  } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { GoEyeClosed } from "react-icons/go";
import { List, Tooltip } from 'antd';
import moment from 'moment';
import {PUBLIC_URL} from './../../Constants/public.jsx';

export const PostNewFeed = React.forwardRef((props, ref) =>  {
    moment.updateLocale('en', {
      relativeTime : {
          future: "%s",
          past:   "%s trước",
          s  : 'vài giây',
          ss : '%d phút',
          m:  "1 phút trước",
          mm: "%d phút",
          h:  "an giờ",
          hh: "%d giờ",
          d:  "một ngày",
          dd: "%d ngày",
          w:  "một tuần",
          ww: "%d tuần",
          M:  "một tháng",
          MM: "%d tháng",
          y:  "một năm",
          yy: "%d năm"
      }
    });
    const inputCommentRef = useRef();
    const [listParentComment, setListParentComment] = useState([]);
    const [listChildComment, setListChildComment] = useState([]);
    const [styleListSendReaction, setStyleListSendReaction] = useState();
    const totalReactionPost = props.post.actions_post;
    const currentUser = JSON.parse(localStorage.getItem('ustk')).info;

    function focusInputComment() {
        let inputRef = inputCommentRef.current;
        inputRef.focusCommentInput();
    }

    useEffect(() => {
        let _commentParent = []
        let _commentChild = []

        props.post.comment_post.map((comment, index) => {
            if (comment.pivot.comment_Type === 'parent') {
                _commentParent.push(comment)
                setListParentComment(_commentParent)
            }
            if (comment.pivot.comment_Type === 'child') {
                _commentChild.push(comment)
                setListChildComment(_commentChild)
            }
        })
    }, []);

    const leaveListSendReaction = () => {
        setStyleListSendReaction({
          top: '-10px',
          opacity:0,
          visibility: 'hidden'
        })
    }

    const enterListSendReaction = () => {
      setStyleListSendReaction({
        top: '-56px',
        opacity:1,
        visibility: 'visible'
      })
    }

    const settingPost = (
        <React.Fragment>
            <List className="setting-post">
                <List.Item><GoEyeClosed /> Ẩn bài viết</List.Item>
                <List.Item><AiOutlineIssuesClose /> Bỏ theo dõi {props.post.user_admin_post.user_first_name + " " + props.post.user_admin_post.user_last_name}</List.Item>
                <List.Item><FaRegWindowClose /> Ẩn bài viết từ {props.post.user_admin_post.user_first_name + " " + props.post.user_admin_post.user_last_name}</List.Item>
            </List>
        </React.Fragment>
    );

    const listReactionPost = () => {
      return(
        <ul className="post-reaction-list">
          {totalReactionPost.slice(0, 21).map((reaction, index) => {
            return(
                <li key={index}>
                  <Link to={'/' + reaction.user_username}>{reaction.user_first_name + ' ' + reaction.user_last_name}</Link>
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
      switch (reaction.pivot.actions_action) {
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
        default: return null
      }
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

    return (
        <React.Fragment>
            <div className="post" ref={ref}>
                <div className="post-container">
                    <div className="post-header">
                        <div className="post-info">
                            <div className="post-avatar">
                                <Link to={'/' + props.post.user_admin_post.user_username}>
                                    <img src={props.post.user_admin_post.user_avatar} alt="" />
                                </Link>
                            </div>
                            <div className="post-boss">
                                <p>
                                    <Link to={'/' + props.post.user_admin_post.user_username}>{props.post.user_admin_post.user_first_name + " " + props.post.user_admin_post.user_last_name}</Link>
                                </p>
                                <p>{moment(props.post.created_at, "YYYYMMDD\h:m:s").fromNow()} <PrivacyPost /></p>
                            </div>
                        </div>
                        <div className="post-setting">
                          <Tooltip trigger={'click'} placement="bottom" title={settingPost}>
                            <BsThreeDots />
                          </Tooltip>
                        </div>
                    </div>
                    <div className="post-body">
                        <div className="post-content">
                            {props.post.post_Content}
                        </div>
                        <PostImage post={props.post} images={props.post.images_post} />
                    </div>
                    <div className="post-footer">
                          <div className="post-total-action">
                            { totalReactionPost.length ?
                              <Tooltip placement="top" title={listReactionPost}>
                                <span>
                                  {totalReactionPost.map((reaction, index) => listIconReactionPost(reaction, index))}
                                  {' '+ totalReactionPost.length} người đã bày tỏ cảm xúc</span>
                              </Tooltip>
                            : null}
                          </div>
                        <div className="post-action">
                            <div className="post-action-item send-reaction" onMouseEnter={enterListSendReaction} onMouseLeave={leaveListSendReaction}>
                                <AiOutlineLike />
                              <div className="list-icon-send-reaction" style={styleListSendReaction}>
                                <img className="icon-like-48" src={PUBLIC_URL + 'icon/haha.gif'} alt=""/>
                                <img className="icon-like-48" src={PUBLIC_URL + 'icon/wow.gif'} alt=""/>
                                <img className="icon-like-48" src={PUBLIC_URL + 'icon/sad.gif'} alt=""/>
                                <img className="icon-like-48" src={PUBLIC_URL + 'icon/angry.gif'} alt=""/>
                              </div>
                            </div>
                            <div className="post-action-item" onClick={() => focusInputComment()}>
                                <FaRegCommentAlt />
                            </div>
                            <div className="post-action-item">
                                <IoIosShareAlt />
                            </div>
                        </div>
                    </div>
                    <div className="post-comment">
                        <div className="post-comment-current-user">
                            <img src={currentUser.user_avatar} alt={currentUser.user_first_name + ' ' + currentUser.user_last_name} />
                        </div>
                        <div className="post-comment-input">
                            <CommentEditor ref={inputCommentRef} />
                        </div>
                    </div>
                    {
                        listParentComment.length > 0
                            ? <div className="post-comment-container">
                                {
                                    listParentComment.map((comment, index) => {
                                        return (<CommentParent key={index} listChildComment={listChildComment} comment={comment} />)
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
