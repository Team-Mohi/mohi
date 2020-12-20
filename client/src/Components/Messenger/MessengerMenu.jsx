import React from 'react';
import {Link} from 'react-router-dom';
import {MdDone} from 'react-icons/md';
import {FaDotCircle} from 'react-icons/fa';
import './MessengerMenu.css';
import { useSelector } from 'react-redux';
import moment from 'moment';
import 'moment/locale/vi';
import {Spin} from 'antd';
import {Image,Transformation} from 'cloudinary-react';

function MenuMessenger({ message }) {
  const {list, loading} = useSelector(state => state.message);
  const currentUser = JSON.parse(localStorage.getItem('ustk')).info;

  moment.updateLocale('en', {
    relativeTime : {
        future: "%s",
        past:   "%s",
        s  : 'vài giây',
        ss : '%d phút',
        m:  "1 phút",
        mm: "%d phút",
        h:  "%d giờ",
        hh: "%d giờ",
        d:  "một ngày",
        dd: "%d ngày",
        w:  "một tuần",
        ww: "%d tuần",
        M:  "một tháng",
        MM: "%d tháng",
        y:  "một năm",
        yy: "%d năm"
    }
  });

  if(loading && !list.length){
    return(
      <div className = "menu-noti-container">
        <div className="menu-noti-main">
          <div className="menu-noti-title">
            <h5>Tin nhắn</h5>
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
            <h5>Tin nhắn</h5>
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
            Bạn chưa có tin nhắn
          </div>
        </div>
      </div>
    )
  }

  return (<div className = "menu-noti-container"> <div className="menu-noti-main">
    <div className="menu-noti-title">
      <h5>Tin nhắn</h5>
    </div>
    <div className="menu-dropdown-scroll">
      <div className="menu-dropdown-scroll-thumb">
        {list.map((message, index) => {
          return(
            <Link
              to={{
                pathname: "/messenger/" + message.id,
                state: { id: message.id }
                }} 
              key={index}
            >
              <div className={`menu-messenger-content `}>
                <div className="menu-noti-content-avatar">
                  {message.user_avatar_cropX === null ?
                    <img src={message.user_avatar} alt={message.user_last_name} />
                    :
                    <Image cloudName="mohi-vn" publicId={message.user_avatar+ ".jpg"} version="1607061343">
                      <Transformation height={message.user_avatar_cropH}  width={message.user_avatar_cropW} x={message.user_avatar_cropX} y={message.user_avatar_cropY} crop="crop" />
                    </Image>
                  }
                </div>
                <div className="menu-messenger-content-title">
                  <h6>{message.user_first_name + ' ' + message.user_last_name}</h6>
                  <div className="menu-noti-content-button">
                    <p>{message.pivot.messages_Message}</p>
                  </div>
                </div>
                <div className="menu-messenger-content-right">
                  <p>{moment(moment.utc(message.pivot.created_at).toDate()).locale('vi').fromNow()}</p>
                    {!message.pivot.messages_ReadAt && message.pivot.messages_From !== currentUser.id && <FaDotCircle/>}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>

    <div className="menu-noti-footer">
      <Link to="/messenger">Xem tất cả tin nhắn</Link>
    </div>
  </div>
</div>);
}
export default MenuMessenger;
