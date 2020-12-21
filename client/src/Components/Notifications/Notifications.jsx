import React, {useEffect} from 'react';
import {AiFillPicture} from 'react-icons/ai';
import {Link, Route, Switch} from 'react-router-dom';
import {Image,Transformation} from 'cloudinary-react';
import {FaCommentAlt, FaRegSmile} from 'react-icons/fa';
import {BsThreeDotsVertical} from 'react-icons/bs';
import './Notifications.css';
import moment from 'moment';
import {useSelector, useDispatch} from 'react-redux';
import {Spin, Tooltip} from 'antd';
import axios from 'axios';
import {removeOneNoti} from './../../Actions/index.jsx';
import {readNoti} from './../../Actions/index.jsx';

function Notifications({notifycations}) {
  const {list, loading} = useSelector(state => state.notifycations);

  const dispatch = useDispatch();

  const removeNoti = async (id) => {
      dispatch(removeOneNoti(id))

      await axios.post('https://www.api.mohi.vn/api/auth/delete-notification', {id: id})
  }

  useEffect(() => {
    readNotiFunc()
  }, [])

  const readNotiFunc = async () => {
    await axios.post("https://www.api.mohi.vn/api/auth/read-notification")
    .then((res) => {
      dispatch(readNoti())
    })
  }
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
        <div className="noti-title">
          <h4>
            Thông báo của bạn</h4>
        </div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
          }}>Bạn chưa có thông báo</div>
      </div>
    </div>)
  }

  const Notifications = () => {
    return (<> < div className = "noti-all" > <div className="noti-container">
      <div className="noti-title">
        <h4>
          Thông báo của bạn</h4>
      </div>
      {list.map((noti, index) => {
        return(
          <div className="noti-main-content" key={index}>
            <div className="noti-content-avatar">
              {noti.notifications_send.user_avatar_cropX === null ?
                <img src={noti.notifications_send.user_avatar} alt={noti.notifications_send.user_last_name} />
                :
                <Image cloudName="mohi-vn" publicId={noti.notifications_send.user_avatar+ ".jpg"} version="1607061343">
                  <Transformation height={noti.notifications_send.user_avatar_cropH}  width={noti.notifications_send.user_avatar_cropW} x={noti.notifications_send.user_avatar_cropX} y={noti.notifications_send.user_avatar_cropY} crop="crop" />
                </Image>
              }
          </div>
            <div className="noti-content">
              <Link to={"/post/" + noti.notification_PostIdFake} style={{color: 'black'}}>
              <div className="noti-notification">
                <b style={{color: 'rgba(0,128,128'}} >{noti.notifications_send.user_first_name + ' ' + noti.notifications_send.user_last_name} </b>
                {noti.notification_Content}
                {JSON.parse(localStorage.getItem('ustk')).info.id === noti.notification_AdminPostId ? ' bạn'  : <b style={{color: 'rgba(0,128,128'}} >  {noti.notifications_admin_post.user_first_name + ' ' + noti.notifications_admin_post.user_last_name}</b>}
              </div>
              <div className="noti-status">
                  {noti.notification_Action === 'comment' ? <FaCommentAlt/> : <FaRegSmile />} {moment(moment.utc(noti.created_at).toDate()).fromNow()}
              </div>
            </Link>
            </div>
            <div style={{padding: '10px 5px', cursor: 'pointer'}}>
              <Tooltip
                trigger={`click`}
                placement={`bottom`}
                title={
                  <div
                    onClick={() => removeNoti(noti.id)}
                    style={{
                      background: 'white',
                     padding: '5px',
                     boderRadius: '2px',
                     cursor: 'pointer',
                     color:'black'
                   }}
                  >
                    Xóa thông báo
                  </div>
                }
              >
                <BsThreeDotsVertical/>
              </Tooltip>
            </div>
          </div>
        )
      })}
    </div>
  </div>
</>)
  }
  return (<Switch>
    <Route component={Notifications}/>
  </Switch>)
}
export default Notifications;
