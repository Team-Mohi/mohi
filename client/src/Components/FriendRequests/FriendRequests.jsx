import React from 'react';
import { AiFillPicture } from 'react-icons/ai';
import { Link, Route, Switch } from 'react-router-dom';
import './FriendRequests.css';



function FriendRequests() {

  const FriendRequests = () => {
    return (
      <>
        <div className="friends-requests-all">
          <div className="friend-requests-container">
            <div className="friend-requests-title">
              <h4> Trả lời 100 lời mời kết bạn của bạn</h4>
              <Link to="/friend-sent">
                Xem yêu cầu đã gửi
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
                      <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                      <a><b>Lập</b> và 100 người bạn chung khác</a>
                    </Link>
                   
                  </div>
                </div>
              </div>
              <div className="friend-requests-item-right">
                <button className="friend-requests-accept-btn"> Xác nhận</button>
                <button className="friend-requests-refuse-btn"> Xóa lời mời</button>
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
                      <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                      <a><b>Lập</b> và 100 người bạn chung khác</a>
                    </Link>
                   
                  </div>
                </div>
              </div>
              <div className="friend-requests-item-right">
                <button className="friend-requests-accept-btn"> Xác nhận</button>
                <button className="friend-requests-refuse-btn"> Xóa lời mời</button>
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
                      <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                      <a><b>Lập</b> và 100 người bạn chung khác</a>
                    </Link>
                   
                  </div>
                </div>
              </div>
              <div className="friend-requests-item-right">
                <button className="friend-requests-accept-btn"> Xác nhận</button>
                <button className="friend-requests-refuse-btn"> Xóa lời mời</button>
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
                      <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                      <a><b>Lập</b> và 100 người bạn chung khác</a>
                    </Link>
                   
                  </div>
                </div>
              </div>
              <div className="friend-requests-item-right">
                <button className="friend-requests-accept-btn"> Xác nhận</button>
                <button className="friend-requests-refuse-btn"> Xóa lời mời</button>
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
                      <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                      <a><b>Lập</b> và 100 người bạn chung khác</a>
                    </Link>
                   
                  </div>
                </div>
              </div>
              <div className="friend-requests-item-right">
                <button className="friend-requests-accept-btn"> Xác nhận</button>
                <button className="friend-requests-refuse-btn"> Xóa lời mời</button>
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
                      <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                      <a><b>Lập</b> và 100 người bạn chung khác</a>
                    </Link>
                   
                  </div>
                </div>
              </div>
              <div className="friend-requests-item-right">
                <button className="friend-requests-accept-btn"> Xác nhận</button>
                <button className="friend-requests-refuse-btn"> Xóa lời mời</button>
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
                      <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                      <a><b>Lập</b> và 100 người bạn chung khác</a>
                    </Link>
                   
                  </div>
                </div>
              </div>
              <div className="friend-requests-item-right">
                <button className="friend-requests-accept-btn"> Xác nhận</button>
                <button className="friend-requests-refuse-btn"> Xóa lời mời</button>
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
                      <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                      <a><b>Lập</b> và 100 người bạn chung khác</a>
                    </Link>
                   
                  </div>
                </div>
              </div>
              <div className="friend-requests-item-right">
                <button className="friend-requests-accept-btn"> Xác nhận</button>
                <button className="friend-requests-refuse-btn"> Xóa lời mời</button>
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
          <Route component={FriendRequests} />
        </Switch>
      </div>
    </div>
  )



}

export default FriendRequests;
