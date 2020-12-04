import React, {useState} from 'react';
import { AiFillPicture } from 'react-icons/ai';
import { FaUserFriends, FaUserClock, FaCheck, FaUserPlus } from 'react-icons/fa';
import { Link, Route, Switch } from 'react-router-dom';
import './FriendRequests.css';
import {useSelector, useDispatch} from 'react-redux';
import {Image,Transformation} from 'cloudinary-react';
import axios from 'axios';
import {Tooltip, Spin} from 'antd';

function FriendSent({friendsRequest}) {
  const {listMyRequest} = useSelector(state => state.friendsRequest);

  if (!listMyRequest.length) {
    return (<div className="noti-all">
      <div className="noti-container" >
        <div className="friend-requests-title">
          <h4>
          Lời mời kết bạn của bạn
          </h4>
          <Link to="/friend-sent">
            <span>
              Xem yêu cầu đã gửi</span>
          </Link>
        </div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
          }}>
          Bạn chưa có lời mời kết bạn
        </div>
      </div>
    </div>)
  }

  const Button = (props) => {
      const [statusFollow, setStatusFollow] = useState();
      const [loadingRequest, setLoadingRequest] = useState(false);

      const onSubmitFriendRequest = async (type, id) => {
        if(type === 'accept'){
          await axios.post('https://www.api.mohi.vn/api/auth/accept-friend', {follow_users_UserId: id})
        }else {
          await axios.post('https://www.api.mohi.vn/api/auth/refuse-friend', {follow_users_UserId: id})
        }
      }

      const addFriendFunc = async (idUser) => {
        setLoadingRequest(true)
        await axios.post("https://www.api.mohi.vn/api/auth/add-friend", {follow_users_ReceivedUser: idUser})
        .then((res) => {
          setLoadingRequest(false)
          setStatusFollow('send_request')
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

      return(
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
                  onClick={() => unMyRequestFriendFunc(props.user.id) }
                >
                  Hủy lời mời kết bạn
                </div>
              }
            >
            <button><FaCheck /> Đã gửi lời mời {loadingRequest && <Spin />}</button>
            </Tooltip>
            }
            {statusFollow && statusFollow === 'remove_request' &&
              <button onClick={() => addFriendFunc(props.user.id)}><FaUserPlus /> Thêm bạn bè {loadingRequest && <Spin />}</button>
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
                    onClick={() => unMyRequestFriendFunc(props.user.id) }
                  >
                    Hủy lời mời kết bạn
                  </div>
                }
              >
              <button><FaCheck /> Đã gửi lời mời {loadingRequest && <Spin />}</button>
              </Tooltip>
            }
        </React.Fragment>
      )
  }

  const FriendSent = () => {
    return (
      <>
        <div className="friends-requests-all" style={{marginTop: "65px"}}>
          <div className="friend-requests-container">
            <div className="friend-requests-title">
              <h4>Đã gửi lời mời kết bạn</h4>
              <Link to="/friendrequests">
                <span> Xem yêu cầu đã nhận được</span>
              </Link>
            </div>
            {listMyRequest.map((rq, index) => {
              return(
                <div className="friend-requests-item-container" key={index}>
                  <div className="friend-requests-item-left">
                    <div className="friend-requests-item-avatar">
                      <Link to={'/profile/' + rq.user_username}>
                        {rq.user_avatar_cropX === null ?
                          <img src={rq.user_avatar} alt={rq.user_last_name} />
                          :
                          <Image cloudName="mohi-vn" publicId={rq.user_avatar+ ".jpg"} version="1607061343">
                            <Transformation height={rq.user_avatar_cropH}  width={rq.user_avatar_cropW} x={rq.user_avatar_cropX} y={rq.user_avatar_cropY} crop="crop" />
                          </Image>
                        }
                      </Link>
                    </div>
                    <div className="friend-requests-item-info">
                      <div className="friend-requests-item-name">
                        <Link to={'/profile/' + rq.user_username}>
                          {rq.user_first_name + ' ' + rq.user_last_name}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="friend-requests-item-right">
                    <Button user={rq} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
  }






  return (
      <Switch>
        <Route path="/friendsent" component={FriendSent} />
        <Route component={FriendSent} />
      </Switch>
  )



}

export default FriendSent;
