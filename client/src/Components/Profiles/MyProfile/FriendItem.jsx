import React, {useState} from 'react';
import { FaUserPlus, FaUserCheck, FaCheck, FaUserClock } from "react-icons/fa";
import {Image,Transformation} from 'cloudinary-react';
import {Col, Tooltip, Spin} from 'antd';
import { Link} from 'react-router-dom';
import axios from 'axios';

function FriendItem(props){
    const currentUser = JSON.parse(localStorage.getItem('ustk')).info;
    const [statusFollow, setStatusFollow] = useState();
    const [loadingRequest, setLoadingRequest] = useState(false);

    const addFriendFunc = async (idUser) => {
      setLoadingRequest(true)
      await axios.post("https://www.api.mohi.vn/api/auth/add-friend", {follow_users_ReceivedUser: idUser})
      .then((res) => {
        setLoadingRequest(false)
        setStatusFollow('send_request')
      })
    }

    const unFriendFunc = async (idUser) => {
      setLoadingRequest(true)
      await axios.post("https://www.api.mohi.vn/api/auth/refuse-friend", {id: idUser, action: 'unfriend'})
      .then((res) => {
        setLoadingRequest(false)
        setStatusFollow('remove_friend')
      })
    }

    const unMyRequestFriendFunc = async (idUser) => {
      setLoadingRequest(true)
      await axios.post("https://www.api.mohi.vn/api/auth/refuse-friend", {id: idUser, action: 'unRequestFriend'})
      .then((res) => {
        setLoadingRequest(false)
        setStatusFollow('remove_request')
      })
    }

    const acceptFriendFunc = async (idUser) => {
      setLoadingRequest(true)
      await axios.post("https://www.api.mohi.vn/api/auth/accept-friend", {follow_users_UserId: idUser})
      .then((res) => {
        setLoadingRequest(false)
        setStatusFollow('accept_request')
      })
    }

    const refuseFriendFunc = async (idUser) => {
      setLoadingRequest(true)
      await axios.post("https://www.api.mohi.vn/api/auth/refuse-friend", {id: idUser, action: 'refuseFriend'})
      .then((res) => {
        setLoadingRequest(false)
        setStatusFollow('refuse_request')
      })
    }

  return(
    <Col span={12}>
      <div className="friend-item-container">
        <div className="friend-item-left">
          <div className="friend-item-avatar">
            <Link to={'/profile/' + props.friends.user_username}>
              {props.friends.user_avatar_cropX === null ?
                <img src={props.friends.user_avatar} alt={props.friends.user_last_name} />
                :
                <Image cloudName="mohi-vn" publicId={props.friends.user_avatar+ ".jpg"} version="1607061343">
                  <Transformation height={props.friends.user_avatar_cropH}  width={props.friends.user_avatar_cropW} x={props.friends.user_avatar_cropX} y={props.friends.user_avatar_cropY} crop="crop" />
                </Image>
              }
            </Link>
          </div>
          <div className="friend-item-info">
            <div className="friend-item-name">
              <Link to={'/profile/' + props.friends.user_username}>
              {props.friends.user_first_name + ' ' + props.friends.user_last_name}
              </Link>
            </div>
            <div className="friend-item-desc">
              {props.friends.user_introduce}
            </div>
          </div>
        </div>
        {props.friends.id !== currentUser.id &&
          <div className="friend-item-right">
            {props.list.filter(f=> f.id === props.friends.id).length ?
              <React.Fragment>
                {!statusFollow &&
                  <Tooltip
                    placement={`bottom`}
                    trigger={`click`}
                    title={
                      <div
                        style={{
                          background: 'rgba(0,0,0,0.8)',
                          color: 'white',
                          padding: '5px 10px',
                          cursor: 'pointer'
                        }}
                        onClick={() => unFriendFunc(props.friends.id) }
                      >
                        Hủy kết bạn
                      </div>
                    }
                  >
                    <button ><FaUserCheck /> Bạn bè {loadingRequest && <Spin />}</button>
                  </Tooltip>
                }
              </React.Fragment>
            :
            <React.Fragment>
              {props.listfriendsRequest.filter(f=> f.id === props.friends.id).length ?
                <React.Fragment>
                  {!statusFollow &&
                    <Tooltip
                      placement={`bottom`}
                      trigger={`click`}
                      title={
                        <div
                          style={{
                            background: 'rgba(0,0,0,0.8)',
                            color: 'white',
                            padding: '5px 10px',
                            cursor: 'pointer'
                          }}
                        >
                        <p onClick={() => acceptFriendFunc(props.friends.id) }>Xác nhận</p>
                        <p onClick={() => refuseFriendFunc(props.friends.id) }>Từ chối</p>
                        </div>
                      }
                    >
                      <button><FaUserClock /> Trả lời kết bạn {loadingRequest && <Spin />}</button>
                    </Tooltip>
                  }
                </React.Fragment>
                :
                <React.Fragment>
                  {props.listMyRequest.filter(f=> f.id === props.friends.id).length ?
                    <React.Fragment>
                      {!statusFollow &&
                      <Tooltip
                        placement={`bottom`}
                        trigger={`click`}
                        title={
                          <div
                            style={{
                              background: 'rgba(0,0,0,0.8)',
                              color: 'white',
                              padding: '5px 10px',
                              cursor: 'pointer'
                            }}
                            onClick={() => unMyRequestFriendFunc(props.friends.id) }
                          >
                            Hủy lời mời kết bạn
                          </div>
                        }
                      >
                      <button><FaCheck /> Đã gửi lời mời {loadingRequest && <Spin />}</button>
                      </Tooltip>
                      }
                    </React.Fragment>
                    :
                    <React.Fragment>
                      {!statusFollow &&
                        <button onClick={() => addFriendFunc(props.friends.id)}><FaUserPlus /> Thêm bạn bè {loadingRequest && <Spin />}</button>
                      }
                    </React.Fragment>
                  }
                </React.Fragment>
              }
            </React.Fragment>
            }
            {statusFollow && statusFollow === 'remove_friend' &&
              <button onClick={() => addFriendFunc(props.friends.id)}><FaUserPlus /> Thêm bạn bè {loadingRequest && <Spin />}</button>
            }
            {statusFollow && statusFollow === 'accept_request' &&
              <Tooltip
                placement={`bottom`}
                trigger={`click`}
                title={
                  <div
                    style={{
                      background: 'rgba(0,0,0,0.8)',
                      color: 'white',
                      padding: '5px 10px',
                      cursor: 'pointer'
                    }}
                    onClick={() => unFriendFunc(props.friends.id) }
                  >
                    Hủy kết bạn
                  </div>
                }
              >
                <button ><FaUserCheck /> Bạn bè {loadingRequest && <Spin />}</button>
              </Tooltip>
            }
            {statusFollow && statusFollow === 'refuse_request' &&
              <button onClick={() => addFriendFunc(props.friends.id)}><FaUserPlus /> Thêm bạn bè {loadingRequest && <Spin />}</button>
            }
            {statusFollow && statusFollow === 'send_request' &&
              <Tooltip
                placement={`bottom`}
                trigger={`click`}
                title={
                  <div
                    style={{
                      background: 'rgba(0,0,0,0.8)',
                      color: 'white',
                      padding: '5px 10px',
                      cursor: 'pointer'
                    }}
                    onClick={() => unMyRequestFriendFunc(props.friends.id) }
                  >
                    Hủy lời mời kết bạn
                  </div>
                }
              >
              <button><FaCheck /> Đã gửi lời mời {loadingRequest && <Spin />}</button>
              </Tooltip>
            }
            {statusFollow && statusFollow === 'remove_request' &&
              <button onClick={() => addFriendFunc(props.friends.id)}><FaUserPlus /> Thêm bạn bè {loadingRequest && <Spin />}</button>
            }
          </div>
        }
      </div>
    </Col>
  )
}

export default FriendItem;
