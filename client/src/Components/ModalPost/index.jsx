import React, {useEffect, useState} from 'react';
import './index.css';
import { Link, useHistory, useParams } from "react-router-dom";
import { AiFillCloseCircle, AiFillLike, AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FaRegCommentAlt, FaUserLock, FaUserAlt } from "react-icons/fa";
import { MdPublic } from "react-icons/md";
import moment from 'moment';

function ModalPost(){
  const history = useHistory();
  const { index } = useParams();
  const postData = history.location.state;
  console.log(postData);

  const images = postData.images_post;
  const [indexCurrent, setIndexCurrent] = useState(index);
  const lastIndex = images.length - 1;
  const [currentPhoto, setCurrentPhoto] = useState(images[index].post_images_Url);

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

  useEffect(() => {
    document.addEventListener("keydown", handleKeyUp, false);

    return () => document.removeEventListener("keydown", handleKeyUp, false);
  })

  const backToHistory = () => {
    history.goBack()
  }
  const handleKeyUp = (e) => {
    if (e.keyCode === 27) {
        backToHistory()
    }
  }

  const prePostImage = () => {
    if(Number(indexCurrent) === 0){
      setIndexCurrent(lastIndex)
      setCurrentPhoto(images[lastIndex].post_images_Url)
    }else {
      let _preImage = Number(indexCurrent) - 1;
      setCurrentPhoto(images[_preImage].post_images_Url)
      setIndexCurrent(_preImage)
    }
  }

  const nextPostImage = () => {
    if(Number(indexCurrent) === images.length - 1){
      setIndexCurrent(0)
      setCurrentPhoto(images[0].post_images_Url)
    }else {
      let _nextImage = Number(indexCurrent) + 1;
      setCurrentPhoto(images[_nextImage].post_images_Url)
      setIndexCurrent(_nextImage)
    }
  }

  const PrivacyPost = () => {
    switch (postData.post_Privacy) {
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

  return(
    <div className="modal-post">
      <div className="modal-post-container">
        <AiFillCloseCircle onClick={backToHistory}  className="close-modal-post-image" />
        <div className="modal-post-background" style={{ filter: 'blur(10px)',backgroundImage: `url(${currentPhoto})`}}></div>
        <div className="modal-post-carousel" >
          <div className="modal-post-carousel-container" >
          {images.length > 1 ?
            <div className="modal-post-pre-image">
              <button onClick={prePostImage}><AiFillCaretLeft /></button>
            </div> : null}
            <div className="modal-post-curent-image">
              {images[indexCurrent].post_images_Type === 'image' ?
                <img src={currentPhoto} alt="" />
                :
                <video src={currentPhoto} autoPlay preload="metadata" controls></video>
              }
            </div>
            {images.length > 1 ?
            <div className="modal-post-next-image">
              <button onClick={nextPostImage}><AiFillCaretRight /></button>
            </div> : null}
          </div>
        </div>
        <div className="modal-post-info">
          <div className="modal-post-info-user">
            <div className="modal-post-info-user-avatar">
              <img src={postData.user_admin_post.user_avatar} alt={postData.user_admin_post.user_first_name + ' ' + postData.user_admin_post.user_last_name}/>
            </div>
            <div className="modal-post-info-user-name">
              <p><Link to={'/' + postData.user_admin_post.user_username}>{postData.user_admin_post.user_first_name + ' ' + postData.user_admin_post.user_last_name}</Link></p>
              <span>{moment(postData.created_at, "YYYYMMDD\h:m:s").fromNow()} <PrivacyPost /></span>
            </div>
            <div className="modal-post-info-user-option">
              <BsThreeDots />
            </div>
          </div>
          <div className="modal-post-content">
            {postData.post_Content}
          </div>
          <div className="modal-post-reaction">
            {postData.actions_post.length ? <span>{postData.actions_post.length} cảm xúc</span> : null}
            {postData.comment_post.length ? <span>{postData.comment_post.length} cảm xúc</span> : null}
            <span>Chia sẻ</span>
          </div>
          <div className="modal-post-action">
            <span><AiFillLike /> Thích</span>
            <span><FaRegCommentAlt /> Bình luận</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalPost;
