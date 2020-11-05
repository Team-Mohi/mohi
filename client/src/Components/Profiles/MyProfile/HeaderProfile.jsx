import React,{useState} from  'react';
import {Link} from 'react-router-dom';
import { AiFillCamera } from "react-icons/ai";
import { BsThreeDots, BsPencil } from "react-icons/bs";
import {PUBLIC_URL } from "./../../../Constant/public.jsx";

function HeaderProfile(){
  const [toggleSpan, setToggleSpan] = useState();
  const [toggleTopLeft, setToggleTopLeft] = useState();
  console.log('public url: ', process.env.PUBLIC_URL);


  function handleShow(){
    setToggleSpan({
      visibility: 'visible'
    })
    setToggleTopLeft({
      background: 'rgba(0,0,0,0.3)',
      border: '2px solid white ',
      borderRadius:'3px'
    })
  }

  function handleHide(){
    setToggleSpan({
      visibility: 'hidden'
    })
    setToggleTopLeft({
        background: 'none',
        border: '2px solid transparent ',
    })
  }
  return(
    <>
      <div className="profile-header">
        <div className="profile-header-container">
          <div
            className="profile-header-cover"
            onMouseOver={() => handleShow()}
            onMouseOut={() => handleHide()}
          >
            <div className="profile-header-cover-container">
              <div className="profile-header-cover-img">
                <img src={`https://4.bp.blogspot.com/-N3pimB9qxIg/VwUe_7Sqh3I/AAAAAAAATRA/9rM2kCEng54F1Crj5kf1N6-tutzshx4Qg/s1600/Girl-xinh-ohaylam.com-%25284%2529.jpg`} alt="" />
              </div>
            </div>
            <div className="profile-header-cover-top-left" >
              <label htmlFor="update-cover" style={toggleTopLeft}>
              <AiFillCamera
              />
              <span style={toggleSpan}>Cập nhập ảnh bìa</span>
              </label>
              <input type="file" id="update-cover"/>
            </div>
            <div className="profile-header-cover-bottom-right">
              <div className="button-edit-profile-link">
                <button type="submit">Chỉnh sửa trang cá nhân <BsPencil /></button>
              </div>
              <div className="button-view-history-action-profile">
                <button type="submit">Nhật kí hoạt động <BsThreeDots /></button>
              </div>
            </div>
          </div>
          <div className="profile-header-timeline">
            <div className="profile-header-avatar">
              <div className="profile-header-avatar_">
                <div className="profile-header-avatar-container">
                  <div className="profile-header-avatar-img">
                    <Link to="/profile">
<<<<<<< HEAD
                      <img src={PUBLIC_URL+`/images/gaixinh.jpg`} alt="" />
=======
                      <img src={PUBLIC_URL + `images/gaixinh.jpg`} alt="" />

>>>>>>> 418dfa94ce97f42e03b559df51e2bfb8f83356ae
                    </Link>
                  </div>
                </div>
                <div className="profile-header-avatar-select">
                  <div className="profile-header-avatar-select-active">
                    <div className="profile-header-avatar-update">
                    <label htmlFor="update-avatar">
                    <AiFillCamera
                    />
                    <div>Cập nhật</div>
                    </label>
                    <input type="file" id="update-avatar"/>
                    </div>
                  </div>
                </div>
              </div >
            </div>
            <div className="profile-header-timeline-container">
              <ul className="profile-header-navigation">
                <li>
                  <Link to="/profile/timeline">Dòng thời gian</Link>
                </li>
                <li>
                  <Link to="/profile/about">Giới thiệu</Link>
                </li>
                <li>
                  <Link to="/profile/gallery">Ảnh</Link>
                </li>
                <li>
                  <Link to="/profile/friends">Bạn bè</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderProfile;
