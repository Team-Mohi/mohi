import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import {BsThreeDots} from "react-icons/bs";

function CommentParent(props) {
  let commentChild = props.commentChild;

  const inputCommentChildReplyRef = useRef();

  const appendInputChildReply = (commentUserId, commentUser) => {
    props.appendInputParentReply(commentUserId, commentUser)
  }

  return (<div className="post-comment-item-child" ref={inputCommentChildReplyRef}>
    <div className="post-comment-item-parent-avatar">
      <Link to="">
        <img src={commentChild.commentAvatar} alt={commentChild.commentUser}/>
      </Link>
    </div>
    <div className="post-comment-item-parent-info">
      <div className="post-comment-item-parent-info-user">
        <Link to="">{commentChild.commentUser}</Link>
      </div>
      <div className="post-comment-item-parent-content">
        <p>{commentChild.commentContent}</p>
        <span><BsThreeDots/></span>
      </div>
      <div className="post-comment-item-parent-action">
        <span onClick={() => appendInputChildReply(commentChild.commentUserId, commentChild.commentUser)}>Trả lời</span>
        <span>{commentChild.commentCreated}</span>
      </div>
    </div>
  </div>)
}

export default CommentParent;
