import React, {useState, useEffect, useRef} from 'react';
import './Post.css';
import PostImage from './PostImage.jsx';
import CommentEditor from './CommentEditor.jsx';
import CommentParent from './CommentParent.jsx';
import {Link} from 'react-router-dom';
import {AiOutlineLike} from "react-icons/ai";
import {BsThreeDots} from "react-icons/bs";
import {FaRegCommentAlt} from "react-icons/fa";
import {IoIosShareAlt} from "react-icons/io";
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

function PostPage(props) {
  const inputCommentRef = useRef();
  const [listParentComment, setListParentComment] = useState([]);
  const [listChildComment, setListChildComment] = useState([]);

  function focusInputComment() {
    let inputRef = inputCommentRef.current;
    inputRef.focusCommentInput();
  }

  useEffect(() => {
    let _commentParent = []
    let _commentChild = []

    props.post.commentPost.map((comment, index) => {
      if (comment.commentType === 'parent') {
        _commentParent.push(comment)
        setListParentComment(_commentParent)
      }
      if (comment.commentType === 'child') {
        _commentChild.push(comment)
        setListChildComment(_commentChild)
      }
    })
  }, []);

  return (<div className="post">
    <div className="post-container">
      <div className="post-header">
        <div className="post-info">
          <div className="post-avatar">
            <Link to="">
              <img className="lozad" data-src={props.post.avatar} alt=""/>
            </Link>
          </div>
          <div className="post-boss">
            <p>
              <Link to={props.post.postUserLink}>{props.post.postUser}</Link>
            </p>
            <p>{props.post.created}</p>
          </div>
        </div>
        <div className="post-setting">
          <BsThreeDots/>
        </div>
      </div>
      <div className="post-body">
        <div className="post-content">
          {props.post.contentPost}
        </div>
        <PostImage post={props.post} images={props.post.imagesPost}/>
      </div>
      <div className="post-footer">
        <div className="post-total-action">
          <span>Hồ Thị Vân Anh và 156 người khác đã thích bài viết này</span>
        </div>
        <div className="post-action">
          <div className="post-action-item">
            <AiOutlineLike/>
          </div>
          <div className="post-action-item" onClick={() => focusInputComment()}>
            <FaRegCommentAlt/>
          </div>
          <div className="post-action-item">
            <IoIosShareAlt/>
          </div>
        </div>
      </div>
      <div className="post-comment">
        <div className="post-comment-current-user">
          <img src="https://picsum.photos/id/1019/1000/600/" alt=""/>
        </div>
        <div className="post-comment-input">
          <CommentEditor ref={inputCommentRef}/>
        </div>
      </div>
      {
        listParentComment.length > 0
          ? <div className="post-comment-container">
              {
                listParentComment.map((comment, index) => {
                  return (<CommentParent key={index} listChildComment={listChildComment} comment={comment}/>)
                })
              }
            </div>
          : null
      }
    </div>
  </div>)
}

export default PostPage;
