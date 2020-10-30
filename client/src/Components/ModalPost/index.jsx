import React, {useEffect, useState} from 'react';
import './index.css';
import { useHistory, useParams } from "react-router-dom";
import { AiFillCloseCircle, AiFillLike, AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FaRegCommentAlt } from "react-icons/fa";

function ModalPost(){
  const history = useHistory();
  const { index } = useParams();
  const postData = history.location.state;
  const images = postData.imagesPost;
  const [indexCurrent, setIndexCurrent] = useState(index);
  const lastIndex = images.length - 1;
  const [currentPhoto, setCurrentPhoto] = useState(images[index].url);

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
      setCurrentPhoto(images[lastIndex].url)
    }else {
      let _preImage = Number(indexCurrent) - 1;
      setCurrentPhoto(images[_preImage].url)
      setIndexCurrent(_preImage)
    }
  }

  const nextPostImage = () => {
    if(Number(indexCurrent) === images.length - 1){
      setIndexCurrent(0)
      setCurrentPhoto(images[0].url)
    }else {
      let _nextImage = Number(indexCurrent) + 1;
      setCurrentPhoto(images[_nextImage].url)
      setIndexCurrent(_nextImage)
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
              {images[indexCurrent].type === 'image' ?
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
              <img src={postData.avatar} alt={postData.postUser}/>
            </div>
            <div className="modal-post-info-user-name">
              <p>{postData.postUser}</p>
              <span>{postData.created} <span>chế độ</span></span>
            </div>
            <div className="modal-post-info-user-option">
              <BsThreeDots />
            </div>
          </div>
          <div className="modal-post-content">
            {postData.contentPost}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div>
          <div className="modal-post-reaction">
            <span>100</span>
            <span>Bình luận</span>
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
