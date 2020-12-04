import React from 'react';
import { AiFillCheckCircle } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";

function NewPost(props){

  if(props.errPost){
    return(
      <React.Fragment>
        <div className='err-new-post'><MdErrorOutline /> Đã xảy ra lỗi khi tạo bài viết. Vui lòng thử lại</div>
      </React.Fragment>
    )
  }

  return(
    <React.Fragment>
      <div className='count-new-post'><AiFillCheckCircle /> {props.newPost.length} bài viết mới đã được đăng, bạn có thể nhìn thấy bài viết của mình ở trang cá nhân của bạn </div>
    </React.Fragment>
  )
}

export default NewPost;
