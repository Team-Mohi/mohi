import React from 'react';
import { AiFillPicture } from 'react-icons/ai';
import { Link, Route, Switch } from 'react-router-dom';
import './FriendRequests.css';

function FriendRequests() {
  const FriendRequests = () => {
    return (
      <>
        <div className="friends-requests-all" style={{ marginTop: "65px" }}>
          <div className="friend-requests-container">
            <div className="friend-requests-title">
              <h4> Trả lời 100 lời mời kết bạn của bạn</h4>
              <Link to="/friend-sent">
                <span> Xem yêu cầu đã gửi</span>
              </Link>
            </div>
            <div className="friend-requests-item-container">
              <div className="friend-requests-item-left">
                <div className="friend-requests-item-avatar">
                  <Link to="">
                    <img src="https://i.pinimg.com/564x/34/be/28/34be283f309950e67bc35230836e0e75.jpg" alt="" />
                  </Link>
                </div>
                <div className="friend-requests-item-info">
                  <div className="friend-requests-item-name">
                    <Link to="">
                      Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-requests-mutual-friends">
                      <div className="friend-mutual-avatar">
                        <img src="https://i.pinimg.com/564x/34/be/28/34be283f309950e67bc35230836e0e75.jpg" alt="" />
                      </div>
                      <span><b>Lập</b> và 100 người bạn chung khác</span>

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
                    <img src="https://i.pinimg.com/564x/34/be/28/34be283f309950e67bc35230836e0e75.jpg" alt="" />
                  </Link>
                </div>
                <div className="friend-requests-item-info">
                  <div className="friend-requests-item-name">
                    <Link to="">
                      Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-requests-mutual-friends">
                      <div className="friend-mutual-avatar">
                        <img src="https://i.pinimg.com/564x/34/be/28/34be283f309950e67bc35230836e0e75.jpg" alt="" />
                      </div>
                      <span><b>Lập</b> và 100 người bạn chung khác</span>

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
                    <img src="https://i.pinimg.com/564x/34/be/28/34be283f309950e67bc35230836e0e75.jpg" alt="" />
                  </Link>
                </div>
                <div className="friend-requests-item-info">
                  <div className="friend-requests-item-name">
                    <Link to="">
                      Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-requests-mutual-friends">
                      <div className="friend-mutual-avatar">
                        <img src="https://i.pinimg.com/564x/34/be/28/34be283f309950e67bc35230836e0e75.jpg" alt="" />
                      </div>
                      <span><b>Lập</b> và 100 người bạn chung khác</span>

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
                    <img src="https://i.pinimg.com/564x/34/be/28/34be283f309950e67bc35230836e0e75.jpg" alt="" />
                  </Link>
                </div>
                <div className="friend-requests-item-info">
                  <div className="friend-requests-item-name">
                    <Link to="">
                      Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-requests-mutual-friends">
                      <div className="friend-mutual-avatar">
                        <img src="https://i.pinimg.com/564x/34/be/28/34be283f309950e67bc35230836e0e75.jpg" alt="" />
                      </div>
                      <span><b>Lập</b> và 100 người bạn chung khác</span>

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
                    <img src="https://i.pinimg.com/564x/34/be/28/34be283f309950e67bc35230836e0e75.jpg" alt="" />
                  </Link>
                </div>
                <div className="friend-requests-item-info">
                  <div className="friend-requests-item-name">
                    <Link to="">
                      Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-requests-mutual-friends">
                      <div className="friend-mutual-avatar">
                        <img src="https://i.pinimg.com/564x/34/be/28/34be283f309950e67bc35230836e0e75.jpg" alt="" />
                      </div>
                      <span><b>Lập</b> và 100 người bạn chung khác</span>

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
                    <img src="https://i.pinimg.com/564x/34/be/28/34be283f309950e67bc35230836e0e75.jpg" alt="" />
                  </Link>
                </div>
                <div className="friend-requests-item-info">
                  <div className="friend-requests-item-name">
                    <Link to="">
                      Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-requests-mutual-friends">
                      <div className="friend-mutual-avatar">
                        <img src="https://i.pinimg.com/564x/34/be/28/34be283f309950e67bc35230836e0e75.jpg" alt="" />
                      </div>
                      <span><b>Lập</b> và 100 người bạn chung khác</span>

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
                    <img src="https://i.pinimg.com/564x/34/be/28/34be283f309950e67bc35230836e0e75.jpg" alt="" />
                  </Link>
                </div>
                <div className="friend-requests-item-info">
                  <div className="friend-requests-item-name">
<Link to="">
                      Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-requests-mutual-friends">
                      <div className="friend-mutual-avatar">
                        <img src="https://i.pinimg.com/564x/34/be/28/34be283f309950e67bc35230836e0e75.jpg" alt="" />
                      </div>
                      <span><b>Lập</b> và 100 người bạn chung khác</span>

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
                    <img src="https://i.pinimg.com/564x/34/be/28/34be283f309950e67bc35230836e0e75.jpg" alt="" />
                  </Link>
                </div>
                <div className="friend-requests-item-info">
                  <div className="friend-requests-item-name">
                    <Link to="">
                      Hồ Thị Vân Anh
                    </Link>
                  </div>
                  <div className="friend-requests-mutual-friends">
                      <div className="friend-mutual-avatar">
                        <img src="https://i.pinimg.com/564x/34/be/28/34be283f309950e67bc35230836e0e75.jpg" alt="" />
                      </div>
                      <span><b>Lập</b> và 100 người bạn chung khác</span>

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
    <Switch>
      <Route component={FriendRequests} />
    </Switch>
  )



}

export default FriendRequests;
