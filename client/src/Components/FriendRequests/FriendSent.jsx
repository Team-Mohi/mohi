import React, { useEffect, useState } from 'react';
import { AiFillPicture, AiOutlineLike } from 'react-icons/ai';
import { FaUserFriends,FaUserClock } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import { Row, Col, Layout } from 'antd';
import './FriendRequests.css';

function FriendSent() {
  const path = useLocation().pathname.split('/');
  const isActive = path[3];
  const [isChangeAlbum, setIsChangeAlbum] = useState(true);

  useEffect(() => {
    setIsChangeAlbum(true)
  }, [isActive])

  function changeContentAlbum() {
    setIsChangeAlbum(false)
  }

  const FriendSent = () => {
    return (
      <>
        <div className="friends-requests-all">
          <div className="friend-requests-container">
            <div className="friend-requests-title">
              <h4>Đã gửi lời mời kết bạn</h4>
              <Link to="/friendrequests">
                <a> Xem yêu cầu đã nhận được</a>
            </Link>
            </div>
            <div className="friend-requests-item-container">
              <div className="friend-requests-item-left">
                <div className="friend-requests-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-requests-item-info">
                  <div className="friend-requests-item-name">
                    <Link to="">
                      Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-requests-mutual-friends">
                    <Link to="">
                      <FaUserFriends/> <a>3 người bạn chung</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="friend-requests-item-right">
                <button className="friend-requests-refuse-btn"><FaUserClock/> Đã gửi lời mời kết bạn</button>
              </div>
            </div>
            <div className="friend-requests-item-container">
              <div className="friend-requests-item-left">
                <div className="friend-requests-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-requests-item-info">
                  <div className="friend-requests-item-name">
                    <Link to="">
                      Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-requests-mutual-friends">
                    <Link to="">
                      <FaUserFriends/> <a>3 người bạn chung</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="friend-requests-item-right">
                <button className="friend-requests-refuse-btn"><FaUserClock/> Đã gửi lời mời kết bạn</button>
              </div>
            </div>
            <div className="friend-requests-item-container">
              <div className="friend-requests-item-left">
                <div className="friend-requests-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-requests-item-info">
                  <div className="friend-requests-item-name">
                    <Link to="">
                      Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-requests-mutual-friends">
                    <Link to="">
                      <FaUserFriends/> <a>3 người bạn chung</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="friend-requests-item-right">
                <button className="friend-requests-refuse-btn"><FaUserClock/> Đã gửi lời mời kết bạn</button>
              </div>
            </div>
            <div className="friend-requests-item-container">
              <div className="friend-requests-item-left">
                <div className="friend-requests-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-requests-item-info">
                  <div className="friend-requests-item-name">
                    <Link to="">
                      Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-requests-mutual-friends">
                    <Link to="">
                      <FaUserFriends/> <a>3 người bạn chung</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="friend-requests-item-right">
                <button className="friend-requests-refuse-btn"><FaUserClock/> Đã gửi lời mời kết bạn</button>
              </div>
            </div>
            <div className="friend-requests-item-container">
              <div className="friend-requests-item-left">
                <div className="friend-requests-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-requests-item-info">
                  <div className="friend-requests-item-name">
                    <Link to="">
                      Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-requests-mutual-friends">
                    <Link to="">
                      <FaUserFriends/> <a>3 người bạn chung</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="friend-requests-item-right">
                <button className="friend-requests-refuse-btn"><FaUserClock/> Đã gửi lời mời kết bạn</button>
              </div>
            </div>
            <div className="friend-requests-item-container">
              <div className="friend-requests-item-left">
                <div className="friend-requests-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-requests-item-info">
                  <div className="friend-requests-item-name">
                    <Link to="">
                      Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-requests-mutual-friends">
                    <Link to="">
                      <FaUserFriends/> <a>3 người bạn chung</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="friend-requests-item-right">
                <button className="friend-requests-refuse-btn"><FaUserClock/> Đã gửi lời mời kết bạn</button>
              </div>
            </div>
            <div className="friend-requests-item-container">
              <div className="friend-requests-item-left">
                <div className="friend-requests-item-avatar">
                  <Link to="">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                  </Link>
                </div>
                <div className="friend-requests-item-info">
                  <div className="friend-requests-item-name">
                    <Link to="">
                      Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-requests-mutual-friends">
                    <Link to="">
                      <FaUserFriends/> <a>3 người bạn chung</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="friend-requests-item-right">
                <button className="friend-requests-refuse-btn"><FaUserClock/> Đã gửi lời mời kết bạn</button>
              </div>
            </div>
            
            
            
          </div>

        </div>
      </>
    )
  }






  return (
    <div className="profile-firends-container">
      <div className="galerry-head">
        <div className="galerry-title">
          <AiFillPicture /><h5> Bạn bè</h5>
        </div>

      </div>
      <div className="galerry-content">
        <Switch>
          <Route path="/friendsent" component={FriendSent} />
          <Route  component={FriendSent} />
        </Switch>
      </div>
    </div>
  )



}

export default FriendSent;
