import React from "react";
import { Link  } from 'react-router-dom';
import './FriendMayKnow.css';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import ButtonContainer from './../../Containers/AddFriendContainer.jsx';
import {Image,Transformation} from 'cloudinary-react';

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
                      <Link to={"/profile/" + friend.user_username}>
                        <img src={friend.user_avatar} alt={friend.user_first_name + ' ' + friend.user_last_name}/>
                        {friend.user_avatar_cropX === null ?
                          <img src={friend.user_avatar} alt={friend.user_first_name + ' ' + friend.user_last_name} />
                          :
                          <Image cloudName="mohi-vn" publicId={friend.user_avatar+ ".jpg"} version="1607061343">
                            <Transformation height={friend.user_avatar_cropH}  width={friend.user_avatar_cropW} x={friend.user_avatar_cropX} y={friend.user_avatar_cropY} crop="crop" />
                          </Image>
                        }
                      </Link>
                    </div>
                    <Link to={"/profile/" + friend.user_username}>{friend.user_first_name + ' ' + friend.user_last_name}</Link>
                    <div className="footer-friend-button">
                        <ButtonContainer id={friend.id}/>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
  );
}

export default FriendMayKnow;
