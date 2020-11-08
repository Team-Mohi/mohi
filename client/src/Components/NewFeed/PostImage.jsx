import React from 'react';
import './PostImage.css';
import { useHistory } from "react-router-dom";
import VideoPlayer from "simple-react-video-thumbnail";
import { FaRegPlayCircle } from "react-icons/fa";

function PostImage(props){
  const listImage = props.images;
  const history = useHistory();
  function showModalPostImage(index){
      history.push('/photo/'+ index, props.post)
  }

  return(
    <div className="container-post-images">
    {listImage.length <= 5 ?
        <>
        {listImage.map((image, index) => {
          if(listImage.length === 1){
            return(
                <div key={index} onClick={() => showModalPostImage(index)} className={'post_image_item only_image_item_' + index}>
                  {image.type === 'image' ?
                  <img src={image.url} alt=""/>
                  :
                  <div className="video-background">
                    <div className="video-background-play"><FaRegPlayCircle /></div>
                    <VideoPlayer videoUrl={image.url} />
                  </div>
                  }
                </div>
            )
          }else if (listImage.length === 2) {
            return(
              <div key={index} onClick={() => showModalPostImage(index)} className={'post_image_item two_image_item_' + index}>
                {image.type === 'image' ?
                <img src={image.url} alt=""/>
                :
                <div className="video-background">
                  <div className="video-background-play"><FaRegPlayCircle /></div>
                  <VideoPlayer videoUrl={image.url} />
                </div>
              }
              </div>
            )
          }else if (listImage.length === 3) {
            return(
              <div key={index} onClick={() => showModalPostImage(index)} className={'post_image_item three_image_item_' + index}>
                {image.type === 'image' ?
                <img src={image.url} alt=""/>
                :
                <div className="video-background">
                  <div className="video-background-play"><FaRegPlayCircle /></div>
                  <VideoPlayer videoUrl={image.url} />
                </div>
                }
              </div>
            )
          }else if (listImage.length === 4) {
            return(
              <div key={index} onClick={() => showModalPostImage(index)} className={'post_image_item four_image_item_' + index}>
                {image.type === 'image' ?
                <img src={image.url} alt=""/>
                :
                <div className="video-background">
                  <div className="video-background-play"><FaRegPlayCircle /></div>
                  <VideoPlayer videoUrl={image.url} />
                </div>
                }
              </div>
            )
          }else if (listImage.length === 5) {
            return(
              <div key={index} onClick={() => showModalPostImage(index)} className={'post_image_item five_image_item_' + index}>
                {image.type === 'image' ?
                <img src={image.url} alt=""/>
                :
                <div className="video-background">
                  <div className="video-background-play"><FaRegPlayCircle /></div>
                  <VideoPlayer videoUrl={image.url} />
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
            <div key={index} onClick={() => showModalPostImage(index)} className={'post_image_item more_image_item_' + index}>
              {image.type === 'image' ?
              <img src={image.url} alt=""/>
              :
              <div className="video-background">
                <div className="video-background-play"><FaRegPlayCircle /></div>
                <VideoPlayer videoUrl={image.url} />
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


export default PostImage;
