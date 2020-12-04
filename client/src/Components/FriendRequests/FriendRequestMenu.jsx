import React, {useState} from 'react';
import './FriendRequestMenu.css';
import {Image,Transformation} from 'cloudinary-react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import axios from 'axios';

const Button = (props) => {
    const [isAccept, setIsAccept] = useState('default');

    const onSubmitFriendRequest = async (type, id) => {
      if(type === 'accept'){
        setIsAccept(true)
        await axios.post('https://www.api.mohi.vn/api/auth/accept-friend', {follow_users_UserId: id})
      }else {
        setIsAccept(false)
        await axios.post('https://www.api.mohi.vn/api/auth/refuse-friend', {follow_users_UserId: id})
      }
    }

    if(!isAccept){
      return(
        <React.Fragment>
            <button style={{backgroundColor: 'red', color: 'white'}}>Đã hủy</button>
        </React.Fragment>
      )
    }

    return(
      <React.Fragment>
        {isAccept && isAccept === 'default' ? <>
          <button onClick={() => onSubmitFriendRequest('accept', props.user.id)}>Xác nhận</button>
        <button onClick={() => onSubmitFriendRequest('remove', props.user.id)}>Hủy</button>
      </>
        :
          <button style={{backgroundColor: 'rgba(0,128,128)', color: 'white'}}>Bạn bè</button>
        }
      </React.Fragment>
    )
}

function MenuFriendRequests({friendsRequest}) {
  const {list, loading} = useSelector(state => state.friendsRequest);

  if(loading && !list.length){
    return(
      <div className = "menu-noti-container">
        <div className="menu-noti-main">
          <div className="menu-noti-title">
            <h5>Lời mời kết bạn</h5>
            <div className="menu-noti-title-control">
            </div>
          </div>
          <div className="friend-may-know-container"
            style={{
              minHeight: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Spin />
          </div>
        </div>
      </div>
    )
  }

  if(!loading && !list.length){
    return(
      <div className = "menu-noti-container">
        <div className="menu-noti-main">
          <div className="menu-noti-title">
            <h5>Lời mời kết bạn</h5>
            <div className="menu-noti-title-control">
            </div>
          </div>
          <div className="friend-may-know-container"
            style={{
              minHeight: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            Bạn chưa có lời mời kết bạn
          </div>
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
        {list.map((user, index) => {
          return(
            <div className="menu-friend-requests-content" key={index}>
              <div className="menu-noti-content-avatar">
                <Link to={"/profile/" + user.user_username}>
                  {user.user_avatar_cropX === null ?
                    <img src={user.user_avatar} alt={user.user_last_name} />
                    :
                    <Image cloudName="mohi-vn" publicId={user.user_avatar+ ".jpg"} version="1607061343">
                      <Transformation height={user.user_avatar_cropH}  width={user.user_avatar_cropW} x={user.user_avatar_cropX} y={user.user_avatar_cropY} crop="crop" />
                    </Image>
                  }
              </Link>
              </div>
              <div className="menu-friend-requests-content-title">
                <Link to={"/profile/" + user.user_username}>{user.user_first_name + ' ' + user.user_last_name}</Link>
                <div className="menu-friend-requests-content-button">
                  <p>100 bạn chung
                  </p>
                </div>
              </div>
              <div className="menu-friend-requests-content-right">
                <Button user={user}/>
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
