import React, {useEffect, useState, useRef, Suspense} from 'react';
import './messenger.css';
import {BsSearch, BsFillCameraVideoFill, BsThreeDotsVertical, BsImage, BsPencilSquare} from 'react-icons/bs';
import {AiTwotoneSetting, AiTwotoneLike, AiFillFile, AiFillCamera, AiFillCloseCircle} from 'react-icons/ai';
import {Link, Route, Switch, useHistory} from 'react-router-dom';
import {Image,Transformation} from 'cloudinary-react';
import useWindowSize from "./useWindowSize.jsx";
import {ContentMessenger} from "./ContentMessenger.jsx";
import {Row} from 'antd';
import {useSelector} from 'react-redux';
import moment from 'moment';

function Messenger(props, { message }){
  const {list} = useSelector(state => state.message);

  const heightScrollSider = window.innerHeight - 190;
  const history = useHistory();
  const windowSize = useWindowSize();
  const [showScroll, setShowScroll] = useState({height: heightScrollSider})
  const [contentChat, setContentChat] = useState(false)
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
  useEffect(() => {
    setShowScroll({height: heightScrollSider})
  },[windowSize]);

  const openContentChat = (idUser) => {
    history.push('/messenger/' + idUser)
  }

  const getMessageOneUser = (idUser) => {
    props.getMessageOneUser(idUser)
  }

  const SiderMessenger = () => {
    const [scrollSider, setScrollSider] = useState();
    const sider = useRef();

    function handleSiderScroll(){
      const {scrollTop} = sider.current;
      if(scrollTop > 0 && !scrollSider) setScrollSider({boxShadow: '-4px 0.1px 3px rgba(0,0,0,0.2)'})
      if(scrollTop === 0) setScrollSider({})
    }

      return(
        <div className="sider-messenger-container">
          <div className="sider-messenger-head" style={scrollSider}>
            <div className="sider-messenger-title">
              <div className="sider-messenger-title-left">
                <div className="sider-messenger-avatar">
                  <img src="https://kenh14cdn.com/2017/21586912-1799665170046947-938789926401694671-o-1506075000161.jpg" alt="" />
                </div>
                <span>Chat</span>
              </div>
              <div className="sider-messenger-title-right">
                <div className="sider-messenger-setting">
                  <AiTwotoneSetting />
                </div>
              </div>
            </div>
            <div className="sider-messenger-search">
              <BsSearch />
              <input type="text" placeholder="Tìm kiếm trên Messenger"/>
            </div>
          </div>
          <div className="sider-messenger-list-user-container" >
            <div className="sider-messenger-list-user" style={showScroll} onScroll={() => handleSiderScroll()} ref={sider}>
              <ul>
                {list.map((mess, index) => {
                  return(
                    <li key={index} onClick={() => openContentChat(mess.id)}>
                      <div className="sider-messenger-user-item">
                        <div className="sider-messenger-user-item-avatar">
                          {mess.user_avatar_cropX === null ?
                            <img src={mess.user_avatar} alt={mess.user_last_name} />
                            :
                            <Image cloudName="mohi-vn" publicId={mess.user_avatar+ ".jpg"} version="1607061343">
                              <Transformation height={mess.user_avatar_cropH}  width={mess.user_avatar_cropW} x={mess.user_avatar_cropX} y={mess.user_avatar_cropY} crop="crop" />
                            </Image>
                          }
                        </div>
                        <div className="sider-messenger-content">
                          <div className="sider-messenger-username">
                            {mess.user_first_name + ' ' + mess.user_last_name}
                          </div>
                          <div className="sider-messenger-content-nearest">
                            {mess.pivot.messages_Message}
                          </div>
                        </div>
                        <div className="sider-messenger-time-send">
                          {moment(mess.pivot.created_at, "YYYYMMDD\h:m:s").fromNow()}
                        </div>
                      </div>
                      <div className="sider-messenger-user-item-status">
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      )
  }

  const ChatHello = () => {
    return(
      <div className="content-messenger-container content-hello">
        <p>MOHI</p>
        <p>Xin chào bạn</p>
        <p>Hãy nhắn tin cho bạn bè đi nào</p>
      </div>
    )
  }

  return(
      <div className="messenger-container">
        <SiderMessenger />
        <Switch>
          <Route exact path="/messenger">
            <ChatHello />
          </Route>
          <Suspense fallback={<div>loading</div>} >
          <Route path="/messenger/:idUser">
            <ContentMessenger getMessageOneUser={getMessageOneUser}/>
          </Route>
          </Suspense>
        </Switch>
      </div>
  )
}

export default Messenger;
