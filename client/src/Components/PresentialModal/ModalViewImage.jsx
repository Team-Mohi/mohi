import React, { useState } from 'react';
import './ModalViewImage.css';
import { useSelector } from 'react-redux';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import {Image,Transformation} from 'cloudinary-react';

function ViewImage({ presentialModal }){
  const {data} = useSelector(state => state.presentialModal);
  const images = data.post ? data.post.images_post : data.list;
  const [indexCurrent, setIndexCurrent] = useState(data.index);
  const lastIndex = images.length - 1;
  const [currentPhoto, setCurrentPhoto] = useState(images[indexCurrent].post_images_Url);

  console.log(data);
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

  return(
    <React.Fragment>
      <div className="modal-post">
        <div className="modal-post-container">
          <div className="modal-post-background" style={{ filter: 'blur(10px)', backgroundImage: `url(${currentPhoto})`}}></div>
          <div className="modal-post-carousel" >
            <div className="modal-post-carousel-container" >
            {images.length > 1 ?
              <div className="modal-post-pre-image">
                <button onClick={prePostImage}><AiFillCaretLeft /></button>
              </div> : null}
              <div className="modal-post-curent-image">
                {images[indexCurrent].post_images_Type === 'image' ?
                    <React.Fragment>
                      {currentPhoto.toLowerCase().indexOf('https://') !== -1 ?
                        <img src={currentPhoto} alt=""/>
                        :
                        <Image cloudName="mohi-vn" publicId={currentPhoto+ ".jpg"} version="1607061343">
                          <Transformation />
                        </Image>
                      }
                    </React.Fragment>
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
        </div>
      </div>
    </React.Fragment>
  )
}

export default ViewImage;
