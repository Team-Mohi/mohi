import React, { useState } from 'react';
import Video from './Video.jsx';

function FilterVideo(){
  const [listVideo, setListVideo] = useState([1,2,3,4,5,6]);

  return(
    <div className="filter-video-container" style={{margin:'0 10px'}}>
      <div className="filter-video-title">
        <span>Video</span>
      </div>
      {listVideo.map((video, index) => {
        return(
          <Video key={index}/>
        )
      })}
    </div>
  )
}

export default FilterVideo;
