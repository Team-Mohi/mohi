import React from 'react';
import './Story.css';
import {AiOutlinePlus} from 'react-icons/ai';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  useSelector, useDispatch } from 'react-redux';
import {skeleTonStory} from './../Skeleton/index.jsx';
import {Spin} from 'antd';
import {Image,Transformation} from 'cloudinary-react';
import { toggleStatusPresentialModal } from './../../Actions/index.jsx';

function Story({stories}){
  const dispatch = useDispatch();
  const stateStore = useSelector(state => state.stories);
  const listStory = stateStore.listStory;
  const loading = stateStore.loading;
  const loadingNewStory = stateStore.loadingNewStory;
  var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: listStory.length < 4 ? listStory.length : 4,
      slidesToScroll: 1
  };

  if(loading){
    return(
      <React.Fragment>
        <div className="story-wrap">
          <div className="story-title">Tin</div>
          {skeleTonStory}
        </div>
      </React.Fragment>
    )
  }

  if(!loading && !listStory.length){
    return(
      <React.Fragment>
        <div className="story-wrap">
          <div className="story-title">Tin</div>
          <div>Mohi hôm nay hiện chưa có tin</div>
        </div>
      </React.Fragment>
    )
  }

  return(
    <React.Fragment>
      <div className="story-wrap">
        <div className="story-title">Tin</div>
            <Slider {...settings}>
            {listStory.map((story, index) => {
              let story_image = story.list_story;
              return(
                <div className="story-item" key={index} onClick={ () => dispatch(toggleStatusPresentialModal('view_story', {list: listStory, activeIndex: index}))}>
                  <div className="story-item-image">
                    {story_image[0].story_ImageUrl && story_image[0].story_Type === 'image' &&
                      <img src={story_image[0].story_ImageUrl} alt={story.user_first_name + ' ' + story.user_last_name}/>
                    }
                    {story_image[0].story_ImageUrl && story_image[0].story_Type === 'video' &&
                      <video src={story_image[0].story_ImageUrl}></video>
                    }
                    {!story_image[0].story_ImageUrl && <div className="story-content-no-image"> <p>{story_image[0].story_Content}</p></div>}
                    {loadingNewStory && story.id ===  JSON.parse(localStorage.getItem('ustk')).info.id && <div className="story-content-loading-image"> <Spin /></div>}
                  </div>
                  <div className="story-item-name">
                    <p>{story.id === JSON.parse(localStorage.getItem('ustk')).info.id ? 'Tin của bạn': story.user_first_name + ' ' + story.user_last_name}</p>
                  </div>
                  <div className="story-item-avatar">
                    {story.user_avatar_cropX === null ?
                      <img src={story.user_avatar} alt={story.user_first_name + ' ' + story.user_last_name} />
                      :
                      <Image cloudName="mohi-vn" publicId={story.user_avatar+ ".jpg"} version="1607061343">
                        <Transformation height={story.user_avatar_cropH}  width={story.user_avatar_cropW} x={story.user_avatar_cropX} y={story.user_avatar_cropY} crop="crop" />
                      </Image>
                    }
                  </div>
                </div>
              )
            })}
          </Slider>
      </div>
    </React.Fragment>
  )
}

export default Story;
