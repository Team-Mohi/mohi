import React, {useEffect, useState, useRef} from 'react';
import './messenger.css';
import {BsSearch, BsThreeDots, BsFillCameraVideoFill, BsThreeDotsVertical, BsImage, BsPencilSquare} from 'react-icons/bs';
import {AiTwotoneSetting, AiTwotoneLike, AiFillFile, AiFillCamera, AiFillCloseCircle} from 'react-icons/ai';
import {FaSmile} from 'react-icons/fa';
import {GiPhone} from 'react-icons/gi';
import {Link} from 'react-router-dom';
import useWindowSize from "./useWindowSize.jsx";
import {Row, Col} from 'antd';

function Messenger(){
  const heightScrollSider = window.innerHeight - 190;
  const heightContent = window.innerHeight - 134;
  const [scrollSider, setScrollSider] = useState();
  const sider = useRef();
  const windowSize = useWindowSize();
  const [showScroll, setShowScroll] = useState({height: heightScrollSider})
  const [heightContentBody, setHeightContentBody] = useState({height: heightContent})
  const [heightRoom, setHeightRoom] = useState({height: heightContent - 56})
  const [showSearchRoomChat, setShowSearchRoomChat] = useState(false)
  const [setupFakeName, setSetupFakeName] = useState(false)

  useEffect(() => {
    setShowScroll({height: heightScrollSider})
    setHeightContentBody({height: heightContent})
    setHeightRoom({height: heightContent - 56})
  },[windowSize]);

  function handleSiderScroll(){
    const {scrollTop} = sider.current;
    if(scrollTop > 0 && !scrollSider) setScrollSider({boxShadow: '-4px 0.1px 3px rgba(0,0,0,0.2)'})
    if(scrollTop == 0) setScrollSider()
  }

  function showSearchRoomChatFunc(){
    setShowSearchRoomChat(true)
  }

  function hideSearchRoomChatFunc(){
    setShowSearchRoomChat(false)
  }

  function setupFakeNameFunc(){
    setSetupFakeName(true)
  }

  function saveFakeNameFunc(){
    setSetupFakeName(false)
  }

  const SiderMessenger = () => {
      return(
        <div className="sider-messenger-container">
          <div className="sider-messenger-head" style={scrollSider}>
            <div className="sider-messenger-title">
              <div className="sider-messenger-title-left">
                <div className="sider-messenger-avatar">
                  <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                </div>
                <span>Chat</span>
              </div>
              <div className="sider-messenger-title-right">
                <div className="sider-messenger-setting">
                  <AiTwotoneSetting />
                </div>
              </div>
            </div>
            <div className="sider-messenger-search">
              <BsSearch />
              <input type="text" placeholder="Tìm kiếm trên Messenger"/>
            </div>
          </div>
          <div className="sider-messenger-list-user-container" >
            <div className="sider-messenger-list-user" style={showScroll} onScroll={() => handleSiderScroll()} ref={sider}>
              <ul  >
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <div className="sider-messenger-user-item">
                      <div className="sider-messenger-user-item-avatar">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>
                      <div className="sider-messenger-content">
                        <div className="sider-messenger-username">
                          Hồ Thị Vân Anh
                        </div>
                        <div className="sider-messenger-content-nearest">
                          Em đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đanEm đang làm dì đó?Em đan
                        </div>
                      </div>
                      <div className="sider-messenger-time-send">
                        t7
                      </div>
                    </div>
                    <div className="sider-messenger-user-item-status">
                      {/*<BsThreeDots />*/}
                      {/*<div className="sider-messenger-status">
                        <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                      </div>*/}
                      <div className="sider-messenger-unread">
                      </div>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      )
  }

  const ContentMessenger = () => {
      return(
        <div className="content-messenger-container">
          <div className="content-messenger-head">
            <div className="content-messenger-info">
              <div className="content-messenger-info-avatar">
                <img src="https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-0/s600x600/120467372_1235184720184447_7169794468845396216_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=orfey83uSHgAX_dn_Hh&_nc_ht=scontent.fvca1-1.fna&tp=7&oh=b1548bb34d2694c57b096aee2e8cde2c&oe=5F9F0901" alt="" />
              </div>
              <div>
                <div className="content-messenger-info-name">Nguyễn Văn Phước</div>
                <div className="content-messenger-info-status"><span>Đang hoạt động</span> <p></p></div>
              </div>
            </div>
            <div className="content-messenger-option">
              <GiPhone />
              <BsFillCameraVideoFill />
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className="content-messenger-body" style={heightContentBody}>
            <div className="content-messenger-body-left" >
              <div className="content-messenger-room" style={heightRoom}>
                <div className="content-messenger-my-chat">
                  <div className="content-messenger-my-chat-content">
                    <p>Để lên án nhằm giảm bớt tình trạng trên, chúng tôi thấy rằng cần cụ thể hóa những quy định trong Luật bằng xử phạt hành chính. Vì vậy, trong nghị định của Chính phủ quy định xử phạt hành chính trong lĩnh vực y tế đã đề ra các mức phạt tương ứng với từng hành vi.</p>
                    <div className="content-messenger-my-chat-content-status">
                      <img src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p240x240/84176817_1034716933578140_6334269140244627456_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=POPQjyz01IwAX8Kn761&_nc_ht=scontent.fhan3-1.fna&tp=6&oh=bd86c4a7068e6b2efd03d066f8d647ce&oe=5F9FBA62" alt="" />
                    </div>
                  </div>
                </div>
                <div className="clear"></div>
                <div className="content-messenger-user-chat">
                  <div className="content-messenger-user-chat-content">
                    <div className="content-messenger-user-chat-content-avatar">
                      <img src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p240x240/84176817_1034716933578140_6334269140244627456_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=POPQjyz01IwAX8Kn761&_nc_ht=scontent.fhan3-1.fna&tp=6&oh=bd86c4a7068e6b2efd03d066f8d647ce&oe=5F9FBA62" alt="" />
                    </div>
                    <p>Tương tự, những hành vi ép buộc, xúi giục, kích động, lôi kéo người khác uống rượu bia cũng có thể phân tích được dựa vào tính chất. Chẳng hạn ép buộc là bắt người khác làm trái với ý muốn của họ. Họ không muốn uống, đã từ chối nhưng vẫn bị ép uống.</p>
                  </div>
                </div>
                <div className="content-messenger-my-chat">
                  <div className="content-messenger-my-chat-content">
                    <p>Để lên án nhằm giảm bớt tình trạng trên, chúng tôi thấy rằng cần cụ thể hóa những quy định trong Luật bằng xử phạt hành chính. Vì vậy, trong nghị định của Chính phủ quy định xử phạt hành chính trong lĩnh vực y tế đã đề ra các mức phạt tương ứng với từng hành vi.</p>
                    <div className="content-messenger-my-chat-content-status">
                      <img src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p240x240/84176817_1034716933578140_6334269140244627456_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=POPQjyz01IwAX8Kn761&_nc_ht=scontent.fhan3-1.fna&tp=6&oh=bd86c4a7068e6b2efd03d066f8d647ce&oe=5F9FBA62" alt="" />
                    </div>
                  </div>
                </div>
                <div className="clear"></div>
                <div className="content-messenger-user-chat">
                  <div className="content-messenger-user-chat-content">
                    <div className="content-messenger-user-chat-content-avatar">
                      <img src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p240x240/84176817_1034716933578140_6334269140244627456_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=POPQjyz01IwAX8Kn761&_nc_ht=scontent.fhan3-1.fna&tp=6&oh=bd86c4a7068e6b2efd03d066f8d647ce&oe=5F9FBA62" alt="" />
                    </div>
                  <p>Tương tự, những hành vi ép buộc, xúi giục, kích động, lôi kéo người khác uống rượu bia cũng có thể phân tích được dựa vào tính chất. Chẳng hạn ép buộc là bắt người khác làm trái với ý muốn của họ. Họ không muốn uống, đã từ chối nhưng vẫn bị ép uống.</p>
                  </div>
                </div>
                <div className="content-messenger-my-chat">
                  <div className="content-messenger-my-chat-content">
                    <p>Để lên án nhằm giảm bớt tình trạng trên, chúng tôi thấy rằng cần cụ thể hóa những quy định trong Luật bằng xử phạt hành chính. Vì vậy, trong nghị định của Chính phủ quy định xử phạt hành chính trong lĩnh vực y tế đã đề ra các mức phạt tương ứng với từng hành vi.</p>
                    <div className="content-messenger-my-chat-content-status">
                      <img src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p240x240/84176817_1034716933578140_6334269140244627456_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=POPQjyz01IwAX8Kn761&_nc_ht=scontent.fhan3-1.fna&tp=6&oh=bd86c4a7068e6b2efd03d066f8d647ce&oe=5F9FBA62" alt="" />
                    </div>
                  </div>
                </div>
                <div className="clear"></div>
                <div className="content-messenger-user-chat">
                  <div className="content-messenger-user-chat-content">
                    <div className="content-messenger-user-chat-content-avatar">
                      <img src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p240x240/84176817_1034716933578140_6334269140244627456_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=POPQjyz01IwAX8Kn761&_nc_ht=scontent.fhan3-1.fna&tp=6&oh=bd86c4a7068e6b2efd03d066f8d647ce&oe=5F9FBA62" alt="" />
                    </div>
                  <p>Tương tự, những hành vi ép buộc, xúi giục, kích động, lôi kéo người khác uống rượu bia cũng có thể phân tích được dựa vào tính chất. Chẳng hạn ép buộc là bắt người khác làm trái với ý muốn của họ. Họ không muốn uống, đã từ chối nhưng vẫn bị ép uống.</p>
                  </div>
                </div>
                <div className="content-messenger-my-chat">
                  <div className="content-messenger-my-chat-content">
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <div className="content-messenger-my-chat-content-status">
                      <img src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p240x240/84176817_1034716933578140_6334269140244627456_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=POPQjyz01IwAX8Kn761&_nc_ht=scontent.fhan3-1.fna&tp=6&oh=bd86c4a7068e6b2efd03d066f8d647ce&oe=5F9FBA62" alt="" />
                    </div>
                  </div>
                </div>
                <div className="clear"></div>
                <div className="content-messenger-user-chat">
                  <div className="content-messenger-user-chat-content">
                    <div className="content-messenger-user-chat-content-avatar">
                      <img src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p240x240/84176817_1034716933578140_6334269140244627456_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=POPQjyz01IwAX8Kn761&_nc_ht=scontent.fhan3-1.fna&tp=6&oh=bd86c4a7068e6b2efd03d066f8d647ce&oe=5F9FBA62" alt="" />
                    </div>
                  <p> dùm a nhaxem lại like bài dùm a nhaxem lại like bài dùm a nha</p>
                  </div>
                </div>
                <div className="content-messenger-my-chat">
                  <div className="content-messenger-my-chat-content">
                    <p>E kích hoạt lại</p>
                    <div className="content-messenger-my-chat-content-status">
                      <img src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p240x240/84176817_1034716933578140_6334269140244627456_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=POPQjyz01IwAX8Kn761&_nc_ht=scontent.fhan3-1.fna&tp=6&oh=bd86c4a7068e6b2efd03d066f8d647ce&oe=5F9FBA62" alt="" />
                    </div>
                  </div>
                </div>
                <div className="clear"></div>
                <div className="content-messenger-user-chat">
                  <div className="content-messenger-user-chat-content">
                    <div className="content-messenger-user-chat-content-avatar">
                      <img src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p240x240/84176817_1034716933578140_6334269140244627456_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=POPQjyz01IwAX8Kn761&_nc_ht=scontent.fhan3-1.fna&tp=6&oh=bd86c4a7068e6b2efd03d066f8d647ce&oe=5F9FBA62" alt="" />
                    </div>
                  <p>Tương tự, những hành vi ép buộc, xúi giục, kích động, lôi kéo người khác uống rượu bia cũng có thể phân tích được dựa vào tính chất. Chẳng hạn ép buộc là bắt người khác làm trái với ý muốn của họ. Họ không muốn uống, đã từ chối nhưng vẫn bị ép uống.</p>
                  </div>
                </div>
                <div className="clear"></div>
              </div>
              <div className="content-messenger-input">
                <div className="content-messenger-input-file">
                  <AiFillCamera />
                  <AiFillFile />
                  <BsImage />
                </div>
                <div className="content-messenger-input-text">
                  <input type="text" placeholder="Nhập tin nhắn..."/>
                  <FaSmile />
                </div>
                <div className="content-messenger-input-react">
                  <AiTwotoneLike />
                </div>
              </div>
            </div>
            <div className="content-messenger-body-right">
              <div className="content-messenger-body-right-title">
                <div className="content-messenger-body-right-head">
                  <div className="content-messenger-body-right-head-avatar">
                    <img src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p240x240/84176817_1034716933578140_6334269140244627456_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=POPQjyz01IwAX8Kn761&_nc_ht=scontent.fhan3-1.fna&tp=6&oh=bd86c4a7068e6b2efd03d066f8d647ce&oe=5F9FBA62" alt="" />
                  </div>
                </div>
                <div className="content-messenger-body-right-head-name">
                  Nguyễn Văn Phước
                </div>
              </div>
              <div className="content-messenger-body-right-support">
                <ul className="content-messenger-body-right-support-item">
                  <div className="content-messenger-body-right-support-title">
                    Hành động khác
                  </div>
                  <li>
                    {showSearchRoomChat ?
                      <>
                    <div className="content-messenger-body-right-support-item-title" style={{width: '100%'}}>
                        <input type="text" placeholder="Tìm kiếm trong cuộc trò chuyện" style={{width: '90%'}}/>
                    </div>
                    <div className="content-messenger-body-right-support-icon" onClick={() => hideSearchRoomChatFunc()}>
                      <AiFillCloseCircle />
                    </div>
                    </>
                    :
                    <>
                      <div className="content-messenger-body-right-support-item-title" onClick={() => showSearchRoomChatFunc()}>
                        Tìm kiếm trong cuộc trò chuyện
                      </div>
                      <div className="content-messenger-body-right-support-icon" onClick={() => showSearchRoomChatFunc()}>
                        <BsSearch />
                      </div>
                    </>
                    }
                  </li>
                  <li>
                  {setupFakeName ?
                      <>
                      <div className="content-messenger-body-right-support-item-title" style={{width: '100%'}}>
                          <input type="text" placeholder="Chỉnh sửa biệt danh" style={{width: '90%'}}/>
                      </div>
                      <button className="save-fakename" onClick={() => saveFakeNameFunc()}>Lưu</button>
                      </>
                    :
                    <>
                    <div className="content-messenger-body-right-support-item-title" onClick={() => setupFakeNameFunc()}>
                      Chỉnh sửa biệt danh
                    </div>
                    <div className="content-messenger-body-right-support-icon" onClick={() => setupFakeNameFunc()}>
                      <BsPencilSquare />
                    </div>
                    </>
                    }
                  </li>
                </ul>
                <div className="content-messenger-body-right-support-item">
                  <div className="content-messenger-body-right-support-title">
                    Ảnh đã chia sẻ
                  </div>
                  <div className="content-messenger-body-right-list-iamge-share">
                    <Row>
                      <div className="content-messenger-body-right-list-iamge-share-item">
                        <i style={{backgroundImage:'url("https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-0/s600x600/120467372_1235184720184447_7169794468845396216_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=orfey83uSHgAX_dn_Hh&_nc_ht=scontent.fvca1-1.fna&tp=7&oh=b1548bb34d2694c57b096aee2e8cde2c&oe=5F9F0901")'}}></i>
                      </div>
                      <div className="content-messenger-body-right-list-iamge-share-item">
                        <i style={{backgroundImage:'url("https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-0/s600x600/120467372_1235184720184447_7169794468845396216_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=orfey83uSHgAX_dn_Hh&_nc_ht=scontent.fvca1-1.fna&tp=7&oh=b1548bb34d2694c57b096aee2e8cde2c&oe=5F9F0901")'}}></i>
                      </div>
                      <div className="content-messenger-body-right-list-iamge-share-item">
                        <i style={{backgroundImage:'url("https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-0/s600x600/120467372_1235184720184447_7169794468845396216_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=orfey83uSHgAX_dn_Hh&_nc_ht=scontent.fvca1-1.fna&tp=7&oh=b1548bb34d2694c57b096aee2e8cde2c&oe=5F9F0901")'}}></i>
                      </div>
                      <div className="content-messenger-body-right-list-iamge-share-item">
                        <i style={{backgroundImage:'url("https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-0/s600x600/120467372_1235184720184447_7169794468845396216_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=orfey83uSHgAX_dn_Hh&_nc_ht=scontent.fvca1-1.fna&tp=7&oh=b1548bb34d2694c57b096aee2e8cde2c&oe=5F9F0901")'}}></i>
                      </div>
                      <div className="content-messenger-body-right-list-iamge-share-item">
                        <i style={{backgroundImage:'url("https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-0/s600x600/120467372_1235184720184447_7169794468845396216_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=orfey83uSHgAX_dn_Hh&_nc_ht=scontent.fvca1-1.fna&tp=7&oh=b1548bb34d2694c57b096aee2e8cde2c&oe=5F9F0901")'}}></i>
                      </div>
                      <div className="content-messenger-body-right-list-iamge-share-item">
                        <i style={{backgroundImage:'url("https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-0/s600x600/120467372_1235184720184447_7169794468845396216_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=orfey83uSHgAX_dn_Hh&_nc_ht=scontent.fvca1-1.fna&tp=7&oh=b1548bb34d2694c57b096aee2e8cde2c&oe=5F9F0901")'}}></i>
                      </div>
                    </Row>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }

  return(
      <div className="messenger-container">
        <SiderMessenger />
        <ContentMessenger />
      </div>
  )
}

export default Messenger;
