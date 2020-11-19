import React, {useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import {BsThreeDots} from "react-icons/bs";
import CommentChild from './CommentChild.jsx';
import CommentReplyEditor from './CommentReplyEditor.jsx';
import moment from 'moment';

function CommentParent(props) {
  let comment = props.comment;
  const inputCommentParentReplyRef = useRef();
  const [userReceivedReply, setUserReceivedReply] = useState();
  const [idUserReceivedReply, setIdUserReceivedReply] = useState();
  let listChildComment = props.listChildComment;

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

  const appendInputParentReply = (commentUserId, commentUser) => {
    inputCommentParentReplyRef.current.style.display = 'block';
    setUserReceivedReply(commentUser);
    setIdUserReceivedReply(commentUserId)
  }

  return (<div className="post-comment-item">
    <div className="post-comment-item-parent">
      <div className="post-comment-item-parent-avatar">
        <Link to={'/'+ comment.user_username}>
          <img src={comment.user_avatar} alt={comment.user_first_name + ' ' + comment.user_last_name}/>
        </Link>
      </div>
      <div className="post-comment-item-parent-info">
        <div className="post-comment-item-parent-info-user">
          <Link to={'/'+ comment.user_username}>{comment.user_first_name + ' ' + comment.user_last_name}</Link>
        </div>
        <div className="post-comment-item-parent-content">
          <p>{comment.pivot.comment_Content}</p>
          <span><BsThreeDots/></span>
        </div>
        <div className="post-comment-item-parent-action">
          <span onClick={() => appendInputParentReply(comment.id, comment.user_first_name + ' ' + comment.user_last_name)}>Trả lời</span>
        <span>{moment(comment.pivot.created_at, "YYYYMMDD\h:m:s").fromNow()}</span>
        </div>
      </div>
    </div>
    {
      listChildComment.map((commentChild, indexChild) => {
        if (commentChild.pivot.comment_ParentId === comment.pivot.id) {
          return (<CommentChild key={indexChild} commentChild={commentChild} appendInputParentReply={appendInputParentReply}/>)
        }
      })
    }
    <div className="post-comment-item-parent-reply" ref={inputCommentParentReplyRef}>
      <div className="post-comment-item-parent-reply-input-container">
        <div className="post-comment-item-parent-reply-avatar">
          <img src="http://2.bp.blogspot.com/-qyonv7aYEF8/Va6Eh9jNZOI/AAAAAAAADGo/lfm-zkQzCZw/s1600/gai-xinh-khoe-hang-tren-facebook-5.jpg" alt=""/>
        </div>
        <div className="post-comment-item-parent-reply-input">
          <CommentReplyEditor idUserReceivedReply={idUserReceivedReply} userReceivedReply={userReceivedReply}/>
        </div>
      </div>
    </div>
  </div>)
}

export default CommentParent;
