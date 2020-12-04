import React, {useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import CommentChild from './CommentChild.jsx';
import CommentReplyEditor from './CommentReplyEditor.jsx';
import moment from 'moment';
import {Image,Transformation} from 'cloudinary-react';

function CommentParent(props) {
  let comment = props.comment;
  const inputCommentParentReplyRef = useRef();
  const [userReceivedReply, setUserReceivedReply] = useState();
  const [idUserReceivedReply, setIdUserReceivedReply] = useState();
  let listChildComment = props.listChildComment;

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
        <Link to={'/profile/'+ comment.user_username}>
          {comment.user_avatar_cropX === null ?
            <img src={comment.user_avatar} alt={comment.user_first_name + ' ' + comment.user_last_name} />
            :
            <Image cloudName="mohi-vn" publicId={comment.user_avatar+ ".jpg"} version="1607061343">
              <Transformation height={comment.user_avatar_cropH}  width={comment.user_avatar_cropW} x={comment.user_avatar_cropX} y={comment.user_avatar_cropY} crop="crop" />
            </Image>
          }
        </Link>
      </div>
      <div className="post-comment-item-parent-info">
        <div className="post-comment-item-parent-info-user">
          <Link to={'/profile/'+ comment.user_username}>{comment.user_first_name + ' ' + comment.user_last_name}</Link>
        </div>
        <div className="post-comment-item-parent-content">
          <p>{comment.pivot.comment_Content}</p>
        </div>
        <div className="post-comment-item-parent-action">
          <span>{moment(moment.utc(comment.pivot.created_at).toDate()).fromNow()}</span>
        </div>
      </div>
    </div>
    <div className="post-comment-item-parent-reply" ref={inputCommentParentReplyRef}>
      <div className="post-comment-item-parent-reply-input-container">
        <div className="post-comment-item-parent-reply-avatar">
          <img src={JSON.parse(localStorage.getItem('ustk')).info.user_avatar} alt=""/>
        </div>
        <div className="post-comment-item-parent-reply-input">
          <CommentReplyEditor idUserReceivedReply={idUserReceivedReply} userReceivedReply={userReceivedReply}/>
        </div>
      </div>
    </div>
  </div>)
}

export default CommentParent;
