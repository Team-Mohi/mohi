import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

function CommentParent(props) {
  let commentChild = props.commentChild;

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

  const inputCommentChildReplyRef = useRef();

  const appendInputChildReply = (commentUserId, commentUser) => {
    props.appendInputParentReply(commentUserId, commentUser)
  }

  return (<div className="post-comment-item-child" ref={inputCommentChildReplyRef}>
    <div className="post-comment-item-parent-avatar">
      <Link to={'/'+ commentChild.user_username}>
        <img src={commentChild.user_avatar} alt={commentChild.user_first_name + ' ' + commentChild.user_last_name}/>
      </Link>
    </div>
    <div className="post-comment-item-parent-info">
      <div className="post-comment-item-parent-info-user">
        <Link to={'/'+ commentChild.user_username}>{commentChild.user_first_name + ' ' + commentChild.user_last_name}</Link>
      </div>
      <div className="post-comment-item-parent-content">
        <p>{commentChild.pivot.comment_Content}</p>
      </div>
      <div className="post-comment-item-parent-action">
        <span onClick={() => appendInputChildReply(commentChild.id, commentChild.user_first_name + ' ' + commentChild.user_last_name)}>Trả lời</span>
        <span>{moment(commentChild.pivot.created_at, "YYYYMMDD\h:m:s").fromNow()}</span>
      </div>
    </div>
  </div>)
}

export default CommentParent;
