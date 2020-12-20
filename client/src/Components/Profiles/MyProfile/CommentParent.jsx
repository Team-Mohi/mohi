import React, {useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import CommentChild from './CommentChild.jsx';
import CommentReplyEditor from './CommentReplyEditor.jsx';
import moment from 'moment';
import {Image,Transformation} from 'cloudinary-react';
import {Tooltip} from 'antd';
import {BsThreeDots} from 'react-icons/bs';
import axios from 'axios';
import { toggleStatusPresentialModal } from './../../../Actions/index.jsx';
import { useDispatch } from 'react-redux';

function CommentParent(props) {
  let comment = props.comment;
  const inputCommentParentReplyRef = useRef();
  const [userReceivedReply, setUserReceivedReply] = useState();
  const [idUserReceivedReply, setIdUserReceivedReply] = useState();
  let listChildComment = props.listChildComment;
  const dispatch = useDispatch();
  const [isDelete, setIsDelete] = useState(false);

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


  const updateComment = (idPost, id, value) => {
    dispatch(toggleStatusPresentialModal('edit_comment_profile', {idPost: idPost, id: id, value: value}))
  }

  const deleteComment = async (id) => {
    await axios.post("https://www.api.mohi.vn/api/auth/delete-comment", {id: id})
    setIsDelete(true)
  }

  if(isDelete) return null

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
      {comment.id === JSON.parse(localStorage.getItem('ustk')).info.id && <div className="setting-comment-post">
        <Tooltip
          trigger="click"
          placement="bottom"
          title={
            <div className="setting-comment-post-tooltip">
              <div onClick={() => updateComment(props.idPost, comment.pivot.id, comment.pivot.comment_Content)}>
                Sửa bình luận
              </div>
              <div onClick={() => deleteComment(comment.pivot.id)}>
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
