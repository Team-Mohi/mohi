import React, { useState } from 'react';
import './ModalViewStory.css';
import { useSelector, useDispatch } from 'react-redux';
import {Image,Transformation} from 'cloudinary-react';
import { AiFillCaretLeft, AiFillCaretRight, AiFillCloseCircle } from "react-icons/ai";
import { toggleStatusPresentialModal } from './../../Actions/index.jsx';

function ModalViewStory({ presentialModal }){
  const {data} = useSelector(state => state.presentialModal);
  const [currentStory, setCurrentStory] = useState(data.activeIndex);
  const dispatch = useDispatch();

  const setCurrentStoryFunc = (type, index) => {
    if(type === 'next'){
      setCurrentStory(currentStory + 1)
    }
    if(type === 'prev'){
      setCurrentStory(currentStory - 1)
    }
    if(type === 'choose'){
      setCurrentStory(index)
    }
  }

  const StoryItem = (props) => {

    const setCurrentStoryFunc = () => {
      props.setCurrentStoryFunc('choose', props.indexMap);
    }

      return(
        <React.Fragment>
          <div className={props.activeIndex === props.indexMap ? "active-story modal-story-item" : "modal-story-item"} onClick={setCurrentStoryFunc}>
            <div className="story-avatar">
              {props.st.user_avatar_cropX === null ?
                <img src={props.st.user_avatar} alt={props.st.user_last_name} />
                :
                <Image cloudName="mohi-vn" publicId={props.st.user_avatar+ ".jpg"} version="1607061343">
                  <Transformation height={props.st.user_avatar_cropH}  width={props.st.user_avatar_cropW} x={props.st.user_avatar_cropX} y={props.st.user_avatar_cropY} crop="crop" />
                </Image>
              }
            </div>
            <div className="story-name" style={{color: 'black'}}>
              <span>{props.st.user_first_name + ' ' + props.st.user_last_name}</span>
            </div>
          </div>
        </React.Fragment>
      )
  }

  const StoryItemImage = (props) => {

      const [currentImg, setCurrentImg] = useState(0);
      const lastStory = data.list[props.activeIndex].list_story.length;

      const prevStory = () => {
        if(currentImg && currentImg < lastStory - 1){
          setCurrentImg(currentImg-1)
        }else {
          props.setCurrentStoryFunc('prev')
        }
      }

      const nextStory = () => {

        if(currentImg < lastStory - 1){
          setCurrentImg(currentImg + 1)
        }else {
          props.setCurrentStoryFunc('next')
        }
      }

      return(
        <React.Fragment>

          <div className="modal-story-item-image-container">
            <div className="story-info">
              <div className="story-avatar">
                {data.list[props.activeIndex].user_avatar_cropX === null ?
                  <img src={data.list[props.activeIndex].user_avatar} alt={data.list[props.activeIndex].user_last_name} />
                  :
                  <Image cloudName="mohi-vn" publicId={data.list[props.activeIndex].user_avatar+ ".jpg"} version="1607061343">
                    <Transformation height={data.list[props.activeIndex].user_avatar_cropH}  width={data.list[props.activeIndex].user_avatar_cropW} x={data.list[props.activeIndex].user_avatar_cropX} y={data.list[props.activeIndex].user_avatar_cropY} crop="crop" />
                  </Image>
                }
              </div>
              <div className="story-name" >
                <span>{data.list[props.activeIndex].user_first_name + ' ' + data.list[props.activeIndex].user_last_name}</span>
              </div>
              {data.list[props.activeIndex].list_story[currentImg].story_ImageUrl && <p>{data.list[props.activeIndex].list_story[currentImg].story_Content}</p>}
              <AiFillCloseCircle className="close-story" onClick={() => dispatch(toggleStatusPresentialModal())}/>
            </div>
              {props.activeIndex > 0 || currentImg > 0 ?
                <div className="preview-story" onClick={prevStory}>
                  <AiFillCaretLeft />
                </div>
              : null}
              <div className="content-story">
                {data.list[props.activeIndex].list_story[currentImg].story_ImageUrl ?
                  <React.Fragment>
                    {data.list[props.activeIndex].list_story[currentImg].story_Type === 'image' ?
                        <React.Fragment>
                            <img
                              src={data.list[props.activeIndex].list_story[currentImg].story_ImageUrl}
                              alt={data.list[props.activeIndex].user_last_name}
                            />
                        </React.Fragment>
                      :
                      <video src={data.list[props.activeIndex].list_story[currentImg].story_ImageUrl} autoPlay preload="metadata" controls></video>
                    }
                  </React.Fragment>
                  :
                  <p>{data.list[props.activeIndex].list_story[currentImg].story_Content}</p>
                }
              </div>
              {props.activeIndex < data.list.length - 1 || currentImg < data.list[props.activeIndex].list_story.length - 1 ?
                <div className="next-story" onClick={nextStory}>
                  <AiFillCaretRight />
                </div>
              : null}
          </div>
        </React.Fragment>
      )
  }

  return(
    <React.Fragment>
      <div className="modal-story-container">
        <div className="modal-story-item-container">
          <h5>Tin trong ngày</h5>
          {data.list.map((st, index) => {
            return(
              <StoryItem st={st} key={index} activeIndex={currentStory} indexMap={index} setCurrentStoryFunc={setCurrentStoryFunc}/>
            )
          })}
        </div>
        <StoryItemImage activeIndex={currentStory} setCurrentStoryFunc={setCurrentStoryFunc}/>
      </div>
    </React.Fragment>
  )
}

export default ModalViewStory;
