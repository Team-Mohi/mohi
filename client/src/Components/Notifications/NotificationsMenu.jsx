import React from 'react';
import {Link} from 'react-router-dom';
import {FaShare, FaSmileWink, FaCommentAlt} from 'react-icons/fa';
import {BsThreeDotsVertical} from 'react-icons/bs';
import './NotificationsMenu.css';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import moment from 'moment';

function MenuNoti({notifycations}) {
  const list = useSelector(state => state.notifycations);
  const listNotifications = list.list;
  const loading = list.loading;
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

  if(loading && !listNotifications.length){
    return(
      <div className = "menu-noti-container">
        <div className="menu-noti-main">
          <div className="menu-noti-title">
            <h5>Thông báo</h5>
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

  if(!loading && !listNotifications.length){
    return(
      <div className = "menu-noti-container">
        <div className="menu-noti-main">
          <div className="menu-noti-title">
            <h5>Thông báo</h5>
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
            Bạn chưa có thông báo
          </div>
        </div>
      </div>
    )
  }
  console.log(listNotifications);
  return (
    <div className = "menu-noti-container">
    <div className="menu-noti-main">
    <div className="menu-noti-title">
      <h5>Thông báo</h5>
      <div className="menu-noti-title-control">
      </div>
    </div>
    <div className="menu-dropdown-scroll">
      <div className="menu-dropdown-scroll-thumb">
        {listNotifications.map((noti, index) => {
          return(
            <Link to={"/post/" + noti.notification_PostIdFake} key={index}>
              <div className="menu-noti-content">
                <div className="menu-noti-content-avatar">
                  <img src={noti.notifications_send.user_avatar} alt={noti.notifications_send.user_first_name + ' ' + noti.notifications_send.user_last_name}/>
                </div>
                <div className="menu-noti-content-title">
                  <p>
                    <b>{noti.notifications_send.user_first_name + ' ' + noti.notifications_send.user_last_name} </b>
                  đã bình luận ảnh của {JSON.parse(localStorage.getItem('ustk')).id === noti.notification_AdminPostId ? 'bạn' : noti.notifications_admin_post.user_first_name + ' ' + noti.notifications_admin_post.user_last_name}
                  </p>
                  <div className="menu-noti-content-button">
                    <FaCommentAlt/>
                    <p>{moment(noti.created_at, "YYYYMMDD\h:m:s").fromNow()}</p>
                  </div>
                </div>
                <div className="menu-noti-content-right">
                  <div className="menu-noti-content-right-img">
                    <img src="https://i.pinimg.com/564x/b0/da/ac/b0daac950c00bf2fefe8e923b7b64c40.jpg"/>
                  </div>
                  <div className="menu-noti-content-right-button">
                    <BsThreeDotsVertical/>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>

    <div className="menu-noti-footer">
      <Link to="/notifications">Xem tất cả các thông báo</Link>
    </div>
  </div>
</div>
);
}
export default MenuNoti;
