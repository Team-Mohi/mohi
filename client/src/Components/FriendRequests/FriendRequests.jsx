import React, {useState} from 'react';
import {AiFillPicture} from 'react-icons/ai';
import {Image,Transformation} from 'cloudinary-react';
import {Link, Route, Switch} from 'react-router-dom';
import './FriendRequests.css';
import {useSelector, useDispatch} from 'react-redux';
import {Spin} from 'antd';
import axios from 'axios';

function FriendRequests({friendsRequest}) {
  const {list, loading} = useSelector(state => state.friendsRequest);
  const dispatch = useDispatch();
  const [isAccept, setIsAccept] = useState('default');

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
            <button onClick={() => onSubmitFriendRequest('accept', props.user.id)} style={{backgroundColor: 'rgba(0,128,128)', color: 'white'}}>Xác nhận</button>
          <button onClick={() => onSubmitFriendRequest('remove', props.user.id)}>Hủy</button>
        </>
          :
            <button style={{backgroundColor: 'rgba(0,128,128)', color: 'white'}}>Bạn bè</button>
          }
        </React.Fragment>
      )
  }



  if (loading && !list.length) {
    return (<div className="noti-all">
      <div className="noti-container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh'
        }}>
        <Spin/>
      </div>
    </div>)
  }

  if (!loading && !list.length) {
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

  const FriendRequests = () => {
    return (<> < div className = "friends-requests-all" style = {{ marginTop: "65px" }} > <div className="friend-requests-container">
      <div className="friend-requests-title">
        <h4>
          Trả lời {list.length} lời mời kết bạn của bạn</h4>
        <Link to="/friend-sent">
          <span>
            Xem yêu cầu đã gửi</span>
        </Link>
      </div>
      {list.map((rq, index) => {
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
</>)
  }

  return (<Switch>
    <Route component={FriendRequests}/>
  </Switch>)

}

export default FriendRequests;
