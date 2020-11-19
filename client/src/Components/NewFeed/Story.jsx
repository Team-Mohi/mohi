import React from 'react';
import './Story.css';
import {AiOutlinePlus} from 'react-icons/ai';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  useSelector} from 'react-redux';
import {skeleTonStory} from './../Skeleton/index.jsx';

function Story({stories}){
  return null
  
  const stateStore = useSelector(state => state.stories);
  const listStory = stateStore.listStory;
  const loading = stateStore.loading;
  // const loading = true;

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
              return(
                <div className="story-item" key={index}>
                  <div className="story-item-image">
                    <img src={story.images_post[0].post_images_Url} alt={story.user_admin_post.user_first_name + ' ' + story.user_admin_post.user_last_name}/>
                  </div>
                  <div className="story-item-name">
                    <p>{story.user_admin_post.user_first_name + ' ' + story.user_admin_post.user_last_name}</p>
                  </div>
                  <div className="story-item-avatar">
                    <img src={story.user_admin_post.user_avatar} alt={story.user_admin_post.user_first_name + ' ' + story.user_admin_post.user_last_name}/>
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
