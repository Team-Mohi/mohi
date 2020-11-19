import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Video(){
  const [column, setColumn] = useState();
  const [videoStl, setvideoStl] = useState();

  const openModalVideo = () => {
    setColumn({
      flexDirection: 'column'
    })
    setvideoStl({
      width: '100%',
      minWidth: '100%',
      height: '500px'
    })
  }

  return(
    <div className="filter-video" >
      <div className="filter-video-item" style={column}>
        <div className="filter-video-item-video" onClick={openModalVideo} style={videoStl}>
          <video
            src={"https://res.cloudinary.com/mohi-vn/video/upload/v1605524086/page/cover/mov_bbb_rker0g.ogv"}
            poster="https://tse1.mm.bing.net/th?id=OIP.BoJfthnaI5oOTBP6GmrZrAHaEK&pid=Api&P=0&w=326&h=184src="
            controls
            crossOrigin="true"
          >
          </video>
        </div>
        <div className="filter-video-item-info">
          <Link to="">Video gấu con Video gấu con Video gấu con Video gấu con Video gấu con Video gấu con</Link>
          <p>hai ngày trước</p>
        </div>
    </div>
    </div>
  )
}

export default Video;
