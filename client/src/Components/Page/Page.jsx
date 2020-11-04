import React, {useState, useRef, useEffect, useMemo} from 'react';
import './Page.css';
import {Link, Route, Switch, useLocation} from 'react-router-dom';
import HomePage from './HomePage.jsx';
import VideosPage from './VideosPage.jsx';
import SettingsPage from './SettingsPage.jsx';
import ImagesPage from './ImagesPage.jsx';
import { AiFillCamera } from "react-icons/ai";
import { BsPencil, BsFillCaretDownFill } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { FiBarChart } from "react-icons/fi";
import {Dropdown} from 'antd';

function Page(){
  const location = useLocation().pathname.split('/');
  const path = location[2];
  const isActive = location[2];
  const [toggleSpan, setToggleSpan] = useState();
  const [toggleTopLeft, setToggleTopLeft] = useState();
  const [isAdmin, setIsAdmin] = useState(true);
  const [isLiked, setIsLiked] = useState(true);
  const [isFollowed, setIsFllowed] = useState(true);
  const [triggerContact, setTriggerContact] = useState(true);
  const [showModalCreatePost, setShowModalCreatePost] = useState(false);
  const optionFixedRef = useRef();
  const [optionFixed, setOptionFixed] = useState(false);
  const [sidebarFixed, setSidebarFixed] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', fixedOptionHead, false);

    return () => document.removeEventListener('scroll', removeFixedOptionHead, false)
  })

  const fixedOptionHead = () => {
    let curentRef = optionFixedRef.current
    if(curentRef){
      if(window.scrollY - curentRef.offsetTop > -64){
        setOptionFixed(true)
        setSidebarFixed(true)
      }else {
        setOptionFixed(false)
        setSidebarFixed(false)
      }
    }
  }

  const removeFixedOptionHead = () => {
     setOptionFixed(false)
  }

  function showModalCreatePostFunc(){
    setShowModalCreatePost(true)
  }

  function closeModalCreatePost(){
    setShowModalCreatePost(false)
  }

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

  function unLikeFunc(){
    setIsLiked(false)
  }

  function unFollowFunc(){
    setIsFllowed(false)
  }

  function likeFunc(){
    setIsLiked(true)
  }

  function followFunc(){
    setIsFllowed(true)
  }

  function triggerContactPage(){
    if(triggerContact){
      setTriggerContact(false)
      return
    }
    setTriggerContact(true)
  }

  const ActionLiked = () => {
    return(
      <div onClick={() => unLikeFunc()} className="action-liked" >Bỏ thích trang này</div>
    )
  }

  const ActionFollowed = () => {
    return(
      <div onClick={() => unFollowFunc()} className="action-liked" >Bỏ theo dõi trang này</div>
    )
  }

  const ActionPageMess = () => {
    return(
      <div>
        {triggerContact ?
        <div  onClick={() => triggerContactPage()}  className="action-liked" >Chuyển thành nút liên hệ</div>
        :
        <div  onClick={() => triggerContactPage()}  className="action-liked" >Chuyển thành nút gửi tin nhắn</div>
        }
      </div>
    )
  }
  const IndexPage = useMemo(() => <HomePage  sidebarFixed={sidebarFixed} showModalCreatePost={showModalCreatePost} showModalCreatePostFunc={showModalCreatePostFunc}/>, [sidebarFixed, showModalCreatePost])
  return(
    <div>
    <div className="wrapper">
      <div className="page-container" style={{marginTop: '75px'}}>
        <div className="page-sider">
          <div className="page-sider-fixed">
            <div className="page-sider-head">
              <div className="page-avatar">
                <div className="page-avatar-img">
                  <img src="https://anhnendep.net/wp-content/uploads/2015/07/hinh-nen-girl-xinh-moon-ga-kyung-36.jpg" alt="" />
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
              </div>
              <div className="page-name">
                <Link to="" >ReactJS Việt Nam</Link>
              </div>
              <div className="page-username">
                @<Link to="" >reactjs.vn</Link>
              </div>
            </div>
            <div className="page-navigation">
              <ul>
                <Link to="/page">
                  <li className={isActive === 'home' || !isActive ? `page-active` : ''}>
                    <span>Trang chủ</span>
                  </li>
                </Link>
                <Link to="/page/images">
                  <li className={isActive === 'images'  ? `page-active` : ''}>
                    <span>Ảnh</span>
                  </li>
                </Link>
                <Link to="/page/videos">
                  <li className={isActive === 'videos'  ? `page-active` : ''}>
                    <span>Video</span>
                  </li>
                </Link>
                <Link to="/page/settings">
                  <li className={isActive === 'settings'  ? `page-active` : ''}>
                    <span>Cài đặt</span>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="page-article">
            <div className="page-article-head">
              <div className="page-header-container">
                <div
                  className="page-header-cover"
                  onMouseOver={() => handleShow()}
                  onMouseOut={() => handleHide()}
                >
                  <div className="page-header-cover-container">
                    <div className="page-header-cover-img">
                      <img src={`https://4.bp.blogspot.com/-N3pimB9qxIg/VwUe_7Sqh3I/AAAAAAAATRA/9rM2kCEng54F1Crj5kf1N6-tutzshx4Qg/s1600/Girl-xinh-ohaylam.com-%25284%2529.jpg`} alt="" />
                    </div>
                  </div>
                  <div className="page-header-cover-top-left">
                    <label htmlFor="page-update-cover" style={toggleTopLeft}>
                    <AiFillCamera
                    />
                  <span style={toggleSpan}>Cập nhật ảnh bìa</span>
                    </label>
                    <input type="file" id="page-update-cover"/>
                  </div>
                </div>
                <div>
                <div ref={optionFixedRef} style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                  <div className="page-header-option page-header-option-container" style={optionFixed ? {position: 'fixed', zIndex: '999999', width: '940px', top: '64px'} : null}>
                    <ul className="page-header-navigation">
                      <li>
                        {isLiked ?
                        <Dropdown className="dropdown-setting" trigger={['click']} overlay={ActionLiked} placement="bottomCenter" arrow>
                          <button ><AiFillLike style={{fill:'rgba(0,128,128)'}}/>Đã thích <BsFillCaretDownFill className="more"/></button>
                        </Dropdown>
                        :
                        <button  onClick={() => likeFunc()}><AiOutlineLike  style={{fill:"rgba(0,0,0,0.5)",}}/>Thích</button>
                        }
                    </li>
                      <li>
                        {isFollowed ?
                        <Dropdown className="dropdown-setting" trigger={['click']} overlay={ActionFollowed} placement="bottomCenter" arrow>
                          <button ><FiBarChart style={{stroke:'rgba(0,128,128)', strokeWidth:'4'}}/>Đang theo dõi <BsFillCaretDownFill className="more"/></button>
                        </Dropdown>
                        :
                        <button onClick={() => followFunc()}><FiBarChart style={{strokeWidth:'4', stroke:"rgba(0,0,0,0.5)"}}/>Theo dõi</button>
                        }
                      </li>
                      <li>
                        <button><IoIosShareAlt  style={{fill:"rgba(0,0,0,0.5)"}}/>Chia sẻ</button>
                      </li>
                    </ul>
                    {!isAdmin ?
                        <button className="page-mess"><RiMessengerLine style={{fill:"rgba(0,0,0,0.5)"}}/> Gửi tin nhắn</button>
                    :
                    <Dropdown className="dropdown-setting" trigger={['click']} overlay={ActionPageMess} placement="bottomCenter" arrow>
                      {triggerContact ?
                      <button className="page-mess"><BsPencil style={{fill:"rgba(0,0,0,0.5)"}}/> Gửi tin nhắn</button>
                      :
                      <button className="page-mess"><BsPencil style={{fill:"rgba(0,0,0,0.5)"}}/> Liên hệ</button>
                      }
                    </Dropdown>
                    }
                  </div>
                </div>
                </div>
              </div>
            </div>
            <Switch>
              <Route exact path="/page">
                {IndexPage}
              </Route>
              <Route path="/page/videos" component={VideosPage} />
              <Route path="/page/images" component={ImagesPage} />
              <Route path="/page/settings" component={SettingsPage} />
            </Switch>
          </div>
      </div>
    </div>
    {showModalCreatePost ?
    <div className="create-post-presentation" onClick={() => closeModalCreatePost()}>
    </div>
    :null}
  </div>
  )
}

export default Page;
