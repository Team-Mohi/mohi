import React from 'react';
import './PostImage.css';
import { useHistory } from "react-router-dom";
import VideoPlayer from "simple-react-video-thumbnail";
import { FaRegPlayCircle } from "react-icons/fa";
import {Image,Transformation} from 'cloudinary-react';
import {toggleStatusPresentialModal} from './../../Actions/index.jsx';
import {useDispatch} from 'react-redux';

function PostImage(props){
  const listImage = props.images;
  const dispatch = useDispatch();

  return(
    <div className="container-post-images">
    {listImage.length <= 5 ?
        <>
        {listImage.map((image, index) => {
          if(listImage.length === 1){
            return(
                <div key={index} onClick={() => dispatch(toggleStatusPresentialModal('view_image', {post: props.post, index: index}))} className={'post_image_item only_image_item_' + index}>
                  {image.post_images_Type === 'image' ?
                    <React.Fragment>
                      {image.post_images_Url.toLowerCase().indexOf('https://') !== -1 ?
                        <img src={image.post_images_Url} alt=""/>
                        :
                        <Image cloudName="mohi-vn" publicId={image.post_images_Url+ ".jpg"} version="1607061343">
                          <Transformation />
                        </Image>
                      }
                    </React.Fragment>
                  :
                  <div className="video-background">
                    <div className="video-background-play"><FaRegPlayCircle /></div>
                      <video >
                           <source src={image.post_images_Url} />
                           Your browser does not support HTML5 video.
                      </video>
                  </div>
                  }
                </div>
            )
          }else if (listImage.length === 2) {
            return(
              <div key={index} onClick={() => dispatch(toggleStatusPresentialModal('view_image', {post: props.post, index: index}))} className={'post_image_item two_image_item_' + index}>
                {image.post_images_Type === 'image' ?
                <img src={image.post_images_Url} alt=""/>
                :
                <div className="video-background">
                  <div className="video-background-play"><FaRegPlayCircle /></div>
                    <video >
                         <source src={image.post_images_Url} />
                         Your browser does not support HTML5 video.
                    </video>
                </div>
              }
              </div>
            )
          }else if (listImage.length === 3) {
            return(
              <div key={index} onClick={() => dispatch(toggleStatusPresentialModal('view_image', {post: props.post, index: index}))} className={'post_image_item three_image_item_' + index}>
                {image.post_images_Type === 'image' ?
                <img src={image.post_images_Url} alt=""/>
                :
                <div className="video-background">
                  <div className="video-background-play"><FaRegPlayCircle /></div>
                    <video >
                         <source src={image.post_images_Url} />
                         Your browser does not support HTML5 video.
                    </video>
                </div>
                }
              </div>
            )
          }else if (listImage.length === 4) {
            return(
              <div key={index} onClick={() => dispatch(toggleStatusPresentialModal('view_image', {post: props.post, index: index}))} className={'post_image_item four_image_item_' + index}>
                {image.post_images_Type === 'image' ?
                <img src={image.post_images_Url} alt=""/>
                :
                <div className="video-background">
                  <div className="video-background-play"><FaRegPlayCircle /></div>
                    <video >
                         <source src={image.post_images_Url} />
                         Your browser does not support HTML5 video.
                    </video>
                </div>
                }
              </div>
            )
          }else if (listImage.length === 5) {
            return(
              <div key={index} onClick={() => dispatch(toggleStatusPresentialModal('view_image', {post: props.post, index: index}))} className={'post_image_item five_image_item_' + index}>
                {image.post_images_Type === 'image' ?
                <img src={image.post_images_Url} alt=""/>
                :
                <div className="video-background">
                  <div className="video-background-play"><FaRegPlayCircle /></div>
                    <video >
                         <source src={image.post_images_Url} />
                         Your browser does not support HTML5 video.
                    </video>
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
            <div key={index} onClick={() => dispatch(toggleStatusPresentialModal('view_image', {post: props.post, index: index}))} className={'post_image_item more_image_item_' + index}>
              {image.post_images_Type === 'image' ?
              <img src={image.post_images_Url} alt=""/>
              :
              <div className="video-background">
                <div className="video-background-play"><FaRegPlayCircle /></div>
                  <video >
                       <source src={image.post_images_Url} />
                       Your browser does not support HTML5 video.
                  </video>
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
