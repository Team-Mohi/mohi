import React from "react";
import { Link  } from 'react-router-dom';
import './FriendMayKnow.css';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';

function FriendMayKnow({friendsMayKnow}) {
  const listFriendMayKnow = useSelector(state => state.friendsMayKnow);
  const friendMayKnow = listFriendMayKnow.list;
  const loading = listFriendMayKnow.loading;

  if(loading && !friendMayKnow.length){
    return(
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
    )
  }

  if(!loading && !friendMayKnow.length){
    return null
  }

  return (
      <div className="friend-may-know-container">
          <h5>Những người bạn có thể biết</h5>
          <div className="footer-friend">
            {friendMayKnow.map((friend, index) => {
              return(
                <div className="friend-may-know-content" key={index}>
                    <div className="friend-may-know-avatar">
                        <Link to={"/" + friend.user_username}><img src={friend.user_avatar} alt={friend.user_first_name + ' ' + friend.user_last_name}/></Link>
                    </div>
                    <Link to={"/" + friend.user_username}>{friend.user_first_name + ' ' + friend.user_last_name}</Link>
                    <div className="footer-friend-button">
                        <button>Thêm bạn bè</button>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
  );
}

export default FriendMayKnow;
