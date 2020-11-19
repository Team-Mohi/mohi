import React, {useRef, useState} from 'react';
import './VideoGroup.css';
import Video from './Video.jsx';

function VideoGroup(){
  const ref = useRef();
  const [img, setImg] = useState()
  const [listVideo, setListVideo] = useState([1,2,3,4,5,6]);
  const getCurrentTime = () => {
    setImg(capture(ref.current))
  }

  const dataURLtoFile = (dataurl, filename) => {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  const capture = (video) => {
    let w = video.videoWidth ;
    let h = video.videoHeight ;
    let canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    let ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, w, h);
    console.log(canvas);
    let dataURI = canvas.toDataURL('image/jpeg');
    // let a =
    let boj={
      canvas:canvas,
      file:dataURLtoFile(dataURI, `${+new Date()}.jpg`),
      base64:dataURI
    }
    console.log(boj);
    return boj.base64;
  }

  return(
    <div className="filter-video-container">
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

export default VideoGroup;
