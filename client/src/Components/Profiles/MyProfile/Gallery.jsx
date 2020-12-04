import React, {useEffect, useState} from 'react';
import {Row, Col} from 'antd';
import { Link, Route, Switch, useLocation, useParams } from 'react-router-dom';
import {AiFillPicture, AiOutlineLike} from 'react-icons/ai';
import {MdZoomOutMap} from 'react-icons/md';
import {FaCommentDots} from 'react-icons/fa';
import {BsFillPlayFill} from 'react-icons/bs';
import {useSelector, useDispatch} from 'react-redux';
import {loadMoreImageProfile} from './../../../Actions/index.jsx';
import {loadMoreVideoProfile} from './../../../Actions/index.jsx';
import {setLoadMoreDefault} from './../../../Actions/index.jsx';

function Gallery({ profile }){

  const path = useLocation().pathname.split('/');
  const isActive = path[4];
  const {idProfile} = useParams();
  const [isChangeAlbum, setIsChangeAlbum] = useState(true);
  const {info, listImage, listVideo, lastImageOfList, lastVideoOfList} = useSelector(state => state.profile);
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(setLoadMoreDefault())
  },[])

  function changeContentAlbum(){
      setIsChangeAlbum(false)
  }

  const loadMoreImageOfProfile = () => {
    dispatch(loadMoreImageProfile())
  }

  const loadMoreVideoOfProfile = () => {
    dispatch(loadMoreVideoProfile())
  }

  const getBlobFromUrl = (myImageUrl) => {
      return new Promise((resolve, reject) => {
          let request = new XMLHttpRequest();
          request.open('GET', myImageUrl, true);
          request.responseType = 'blob';
          request.onload = () => {
              resolve(request.response);
          };
          request.onerror = reject;
          request.send();
      })
  }

  const getDataFromBlob = (myBlob) => {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(myBlob);
    })
}

const convertUrlToImageData = async (myImageUrl) => {
    try {
        let myBlob = await getBlobFromUrl(myImageUrl);
        let myImageData = await getDataFromBlob(myBlob);
        console.log(myImageData)
        return myImageData;
    } catch (err) {
        return null;
    }
}

  const ListALl = () => {

    if(!listImage.length){
      return(
        <div style={{paddingTop: '50px', textAlign: 'center'}}>Không có ảnh hiển thị</div>
      )
    }

    return(
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Row>
          {listImage.slice(0, lastImageOfList).map((image, index) => {
            return(
              <Col span={6} key={index}>
                <div className="galerry-overview-item-container">
                  <Link to="">
                    <div className="galerry-overview-item">
                      <div className="galerry-overview-item-image">
                        <i style={{backgroundImage:"url(" + image.post_images_Url + ")"}}></i>
                      </div>
                      <div className="galerry-overview-item-info">
                        <MdZoomOutMap />
                      </div>
                    </div>
                  </Link>
                </div>
              </Col>
            )
          })}
        </Row>
        {lastImageOfList < listImage.length && <div style={{textAlign: 'center'}}><button className="load-more" onClick={loadMoreImageOfProfile}>Xem thêm</button></div>}
        </div>
    )
  }

  const Album = () => {

    if(!listVideo.length){
      return(
        <div style={{paddingTop: '50px', textAlign: 'center'}}>Không có video hiển thị</div>
      )
    }

    return(
        <div className="album">
          <Row>
            {listVideo.slice(0, lastVideoOfList).map((image, index) => {
              return(
                <Col span={12} key={index}>
                  <div className="album-item-container" >
                    <div className="album-item" >
                        <div className="album-image">
                            <video >
                                 <source src={image.post_images_Url} />
                                 Your browser does not support HTML5 video.
                            </video>
                        </div>
                        <div className="album-info">
                          <BsFillPlayFill />
                        </div>
                    </div>
                  </div>
                </Col>
              )
            })}
            </Row>
          {lastVideoOfList < listVideo.length && <div style={{textAlign: 'center'}}><button className="load-more" onClick={loadMoreVideoOfProfile}>Xem thêm</button></div>}
        </div>
    )
  }

  return(
    <>
      <div className="galerry-container">
        <div className="galerry-head">
          <div className="galerry-title">
            <AiFillPicture /><h5>Ảnh</h5>
          </div>
          <div className="galerry-navigation">
            <ul>
              <Link to={"/profile/"+ idProfile +"/gallery/image"}>
                <li ><span className={isActive === 'image' || !isActive ? 'galerry-active' : ''}>{idProfile === JSON.parse(localStorage.getItem('ustk')).info.user_username ? `Ảnh của bạn` : `Ảnh của ` + info.user_first_name + ' ' + info.user_last_name}</span></li>
              </Link>
              <Link to={"/profile/"+ idProfile +"/gallery/video"}>
                <li ><span className={isActive === 'video' ? 'galerry-active' : ''}>{idProfile === JSON.parse(localStorage.getItem('ustk')).info.user_username ? `Video của bạn` : `Video của `+ info.user_first_name + ' ' + info.user_last_name}</span></li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="galerry-content">
          <Switch>
            <Route path={"/profile/:idProfile/gallery/image"} component={ListALl}/>
            <Route path={"/profile/:idProfile/gallery/video"} component={Album}/>
            <Route component={ListALl}/>
          </Switch>
        </div>
      </div>
    </>
  )
}


export default Gallery;
