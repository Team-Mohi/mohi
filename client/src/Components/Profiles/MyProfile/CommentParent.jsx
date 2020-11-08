import React, {useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import {BsThreeDots} from "react-icons/bs";
import CommentChild from './CommentChild.jsx';
import CommentReplyEditor from './CommentReplyEditor.jsx';

function CommentParent(props) {
  let comment = props.comment;
  const inputCommentParentReplyRef = useRef();
  const [userReceivedReply, setUserReceivedReply] = useState();
  const [idUserReceivedReply, setIdUserReceivedReply] = useState();
  let listChildComment = props.listChildComment;

  const appendInputParentReply = (commentUserId, commentUser) => {
    inputCommentParentReplyRef.current.style.display = 'block';
    setUserReceivedReply(commentUser);
    setIdUserReceivedReply(commentUserId)
  }

  return (<div className="post-comment-item">
    <div className="post-comment-item-parent">
      <div className="post-comment-item-parent-avatar">
        <Link to="">
          <img src={comment.commentAvatar} alt={comment.commentUser}/>
        </Link>
      </div>
      <div className="post-comment-item-parent-info">
        <div className="post-comment-item-parent-info-user">
          <Link to="">{comment.commentUser}</Link>
        </div>
        <div className="post-comment-item-parent-content">
          <p>{comment.commentContent}</p>
          <span><BsThreeDots/></span>
        </div>
        <div className="post-comment-item-parent-action">
          <span onClick={() => appendInputParentReply(comment.commentUserId, comment.commentUser)}>Trả lời</span>
          <span>{comment.commentCreated}</span>
        </div>
      </div>
    </div>
    {
      listChildComment.map((commentChild, indexChild) => {
        if (commentChild.commentParentId === comment.id) {
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
