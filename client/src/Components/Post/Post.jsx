import React from 'react';
import './Post.css';
import {Link} from 'react-router-dom';
import { AiOutlinePlus, AiOutlineLike } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

const images = [
  "https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-nen-girl-xinh-15.jpg",
  "https://tse2.mm.bing.net/th?id=OIP.e6j5IOw-7mcLVaU-1aONSwHaJ3&pid=Api&P=0&w=300&h=300",
  "https://picsum.photos/id/1015/1000/600/",
  "https://picsum.photos/id/1015/250/150/",
  "https://picsum.photos/id/1019/1000/600/",
  "https://picsum.photos/id/1019/250/150/"
];

const PostImage = () => {
    return(

    )
}

function PostPage(props){
  return(
    <div className="post">
      <div className="no-post">
        <div className="arrow-no-post" onClick={props.showModalCreatePostFunc}>
          <AiOutlinePlus />
        </div>
        <p>Tạo bài viết mới</p>
      </div>
      <div className="post-container">
        <div className="post-header">
          <div className="post-info">
            <div className="post-avatar">
            <Link to="">
              <img src="https://tse2.mm.bing.net/th?id=OIP.e6j5IOw-7mcLVaU-1aONSwHaJ3&pid=Api&P=0&w=300&h=300" alt="" />
            </Link>
            </div >
            <div className="post-boss">
              <p><Link to="">Nguyễn Văn Phước</Link></p>
              <p>1 giờ trước</p>
            </div>
          </div>
          <div className="post-setting">
            <BsThreeDots />
          </div>
        </div>
        <div className="post-body">
        </div>
        <div className="post-footer">
          <div className="post-total-action">
            <span>Hồ Thị Vân Anh và 156 người khác đã thích bài viết này</span>
          </div>
          <div className="post-action">
            <div className="post-action-item">
              <AiOutlineLike />
            </div>
            <div className="post-action-item">
              <FaRegCommentAlt />
            </div>
            <div className="post-action-item">
              <IoIosShareAlt />
            </div>
          </div>
        </div>
        <div className="post-comment">
        </div>
      </div>
    </div>
  )
}

export default PostPage;
