import React from 'react';
import './FriendRequestMenu.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

function MenuFriendRequests({friends}) {
  const listFriendRequest = useSelector(state => state.friends);

  if(!listFriendRequest.length){
      return(
        <div className="menu-noti-container">
          <div className="menu-noti-main">
            <div className="menu-noti-title">
              <h5>Lời mời kết bạn</h5>
            </div>
            <div className="no-data">Không có dữ liệu hiển thị</div>
          </div>
        </div>
      )
  }

  return (
    <div className="menu-noti-container">
      <div className="menu-noti-main">
    <div className="menu-noti-title">
      <h5>Lời mời kết bạn</h5>
    </div>
    <div className="menu-dropdown-scroll">
      <div className="menu-dropdown-scroll-thumb">
        {listFriendRequest.map((user, index) => {
          return(
            <div className="menu-friend-requests-content" key={index}>
              <div className="menu-noti-content-avatar">
                <Link to={"/" + user.user_username}><img src={user.user_avatar} alt={user.user_first_name + ' ' + user.user_last_name}/></Link>
              </div>
              <div className="menu-friend-requests-content-title">
                <Link to={"/" + user.user_username}>{user.user_first_name + ' ' + user.user_last_name}</Link>
                <div className="menu-friend-requests-content-button">
                  <p>100 bạn chung
                  </p>
                </div>
              </div>
              <div className="menu-friend-requests-content-right">
                <button>Xác nhận</button>
                <button>Hủy</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    <div className="menu-noti-footer">
      <Link to="/friendrequests">Xem tất cả</Link>
    </div>
  </div>
</div>
)
}
export default MenuFriendRequests;
