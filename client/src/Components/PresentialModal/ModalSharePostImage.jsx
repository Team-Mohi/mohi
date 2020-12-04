import React from 'react';
import { useHistory } from "react-router-dom";
import VideoPlayer from "simple-react-video-thumbnail";
import { FaRegPlayCircle } from "react-icons/fa";
import { useSelector } from 'react-redux';
import './ModalSharePost.css';

function ModalSharePostImage(presentialModal){
  const { data } = useSelector(state => state.presentialModal);
  const listImage = data.images_post;
  const history = useHistory();


  return(
    <div className="container-post-images">
    {listImage.length <= 5 ?
        <>
        {listImage.map((image, index) => {
          if(listImage.length === 1){
            return(
                <div key={index} className={'post_image_item only_image_item_' + index}>
                  {image.post_images_Type === 'image' ?
                  <img src={image.post_images_Url} alt=""/>
                  :
                  <div className="video-background">
                    <div className="video-background-play"><FaRegPlayCircle /></div>
                    <VideoPlayer videoUrl={image.post_images_Url} />
                  </div>
                  }
                </div>
            )
          }else if (listImage.length === 2) {
            return(
              <div key={index} className={'post_image_item two_image_item_' + index}>
                {image.post_images_Type === 'image' ?
                <img src={image.post_images_Url} alt=""/>
                :
                <div className="video-background">
                  <div className="video-background-play"><FaRegPlayCircle /></div>
                  <VideoPlayer videoUrl={image.post_images_Url} />
                </div>
              }
              </div>
            )
          }else if (listImage.length === 3) {
            return(
              <div key={index} className={'post_image_item three_image_item_' + index + ' three_item_share_' + index}>
                {image.post_images_Type === 'image' ?
                <img src={image.post_images_Url} alt=""/>
                :
                <div className="video-background">
                  <div className="video-background-play"><FaRegPlayCircle /></div>
                  <VideoPlayer videoUrl={image.post_images_Url} />
                </div>
                }
              </div>
            )
          }else if (listImage.length === 4) {
            return(
              <div key={index} className={'post_image_item four_image_item_' + index + ' four_item_share_' + index}>
                {image.post_images_Type === 'image' ?
                <img src={image.post_images_Url} alt=""/>
                :
                <div className="video-background">
                  <div className="video-background-play"><FaRegPlayCircle /></div>
                  <VideoPlayer videoUrl={image.post_images_Url} />
                </div>
                }
              </div>
            )
          }else if (listImage.length === 5) {
            return(
              <div key={index} className={'post_image_item five_image_item_' + index}>
                {image.post_images_Type === 'image' ?
                <img src={image.post_images_Url} alt=""/>
                :
                <div className="video-background">
                  <div className="video-background-play"><FaRegPlayCircle /></div>
                  <VideoPlayer videoUrl={image.post_images_Url} />
                </div>
                }
              </div>
            )
          }
        })}
        </>
        :
        <>
        {listImage.slice(0,5).map((image, index) => {
          return(
            <div key={index} className={'post_image_item more_image_item_' + index}>
              {image.post_images_Type === 'image' ?
              <img src={image.post_images_Url} alt=""/>
              :
              <div className="video-background">
                <div className="video-background-play"><FaRegPlayCircle /></div>
                <VideoPlayer videoUrl={image.post_images_Url} />
              </div>
              }
              {index === 4 ? <span className="more_image">+{listImage.length - 5}</span> : null}
            </div>
          )
        })}
        </>
      }
        <div className="clear"></div>
    </div>
  );
}


export default ModalSharePostImage;
