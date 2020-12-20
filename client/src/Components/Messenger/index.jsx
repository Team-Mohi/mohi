import React, {useEffect, useState, useRef, Suspense, useMemo} from 'react';
import './messenger.css';
import {BsSearch, BsFillCameraVideoFill, BsThreeDotsVertical, BsImage, BsPencilSquare} from 'react-icons/bs';
import {AiTwotoneSetting, AiTwotoneLike, AiFillFile, AiFillCamera, AiFillCloseCircle} from 'react-icons/ai';
import {Link, Route, Switch, useHistory, Redirect} from 'react-router-dom';
import {Image,Transformation} from 'cloudinary-react';
import {ContentMessenger} from "./ContentMessenger.jsx";
import {Row} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import SiderMessenger from './SiderMessenger.jsx';
import moment from 'moment';

function Messenger(props){
  const dispatch = useDispatch();
  const noChange = true;
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

  const getMessageOneUser = (idUser) => {
    props.getMessageOneUser(idUser)
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

  const chatHello = useMemo(() => {
    return ChatHello();
  }, [noChange]);

  return(
      <div className="messenger-container">
        <SiderMessenger />
        <Switch>
          <Route exact path="/messenger">
            {chatHello}
          </Route>
          <Suspense fallback={<div>loading</div>} >
            <Switch>
              <Route exact path="/messenger/:idUser">
                <ContentMessenger getMessageOneUser={getMessageOneUser}/>
              </Route>
              <Redirect to="/404" />
            </Switch>
          </Suspense>
        </Switch>
      </div>
  )
}

export default Messenger;
