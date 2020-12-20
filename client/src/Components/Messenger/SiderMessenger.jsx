import React, {useEffect, useState, useRef, Suspense, useContext} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Image,Transformation} from 'cloudinary-react';
import useWindowSize from "./useWindowSize.jsx";
import moment from 'moment';
import 'moment/locale/vi';
import axios from 'axios';
import {BsSearch} from 'react-icons/bs';
import {useHistory} from 'react-router-dom';
import {searchFriendProfile} from './../../Actions/index.jsx';
import {readMessageOfList} from './../../Actions/index.jsx';
import {readMessage} from './../../Actions/index.jsx';
import SocketContext from './../Socket/index.jsx';

  const SiderMessenger = (props, {message, friends }) => {
    const windowSize = useWindowSize();
    const socket = useContext(SocketContext);
    const dispatch = useDispatch();
    const listFriends = useSelector(state => state.friends.list);
    const {list} = useSelector(state => state.message);
    const searchKeyWords = useSelector(state => state.friends.searchKeyWords);
    const [scrollSider, setScrollSider] = useState();
    const sider = useRef();
    const currentUser = JSON.parse(localStorage.getItem('ustk')).info;
    const heightScrollSider = window.innerHeight - 190;
    const [showScroll, setShowScroll] = useState({height: heightScrollSider})
    const [contentChat, setContentChat] = useState(false)
    const [isSeach, setIsSeach] = useState(false)
    const history = useHistory();

    useEffect(() => {
      setShowScroll({height: heightScrollSider})
    },[windowSize]);

    function handleSiderScroll(){
      const {scrollTop} = sider.current;
      if(scrollTop > 0 && !scrollSider) setScrollSider({boxShadow: '-4px 0.1px 3px rgba(0,0,0,0.2)'})
      if(scrollTop === 0) setScrollSider({})
    }

    const onChangeSearchFriend = (e) => {
      dispatch(searchFriendProfile(e.target.value))
      if(e.target.value){
        setIsSeach(true)
      }else {
        setIsSeach(false)
      }
    }


    const openContentChat = async (idUser, user_username) => {
      axios.post("https://www.api.mohi.vn/api/auth/read-message", {id: idUser}).then((res) => {
        dispatch(readMessageOfList({id: currentUser.id, clientId: idUser}))
        socket.emit('read-message', {user_username: user_username, idUser: idUser, clientId: currentUser.id})
      })
      history.push('/messenger/' + idUser)
    }

      return(
        <div className="sider-messenger-container">
          <div className="sider-messenger-head" style={scrollSider}>
            <div className="sider-messenger-title">
              <div className="sider-messenger-title-left">
                <div className="sider-messenger-avatar">
                  {currentUser.user_avatar_cropX === null ?
                    <img src={currentUser.user_avatar} alt={currentUser.user_first_name + ' ' + currentUser.user_last_name} />
                    :
                    <Image cloudName="mohi-vn" publicId={currentUser.user_avatar+ ".jpg"} version="1607061343">
                      <Transformation height={currentUser.user_avatar_cropH}  width={currentUser.user_avatar_cropW} x={currentUser.user_avatar_cropX} y={currentUser.user_avatar_cropY} crop="crop" />
                    </Image>
                  }
                </div>
                <span>Chat</span>
              </div>
              <div className="sider-messenger-title-right">
              </div>
            </div>
            <div className="sider-messenger-search">
              <BsSearch />
            <input type="text" placeholder="Tìm kiếm trên Messenger" onChange={onChangeSearchFriend}/>
            </div>
          </div>
          <div className="sider-messenger-list-user-container" >
            <div className="sider-messenger-list-user" style={showScroll} onScroll={() => handleSiderScroll()} ref={sider}>
              <ul>
                {searchKeyWords && listFriends.filter(fr => {
                  const name = fr.user_first_name + ' ' + fr.user_last_name;

                  return name.toLowerCase().replace(/\s/g,'').indexOf(searchKeyWords.toLowerCase().replace(/\s/g,'')) !== -1
                }).map((friends, index) => {
                  return(
                    <li key={index} onClick={() => openContentChat(friends.id, friends.user_username)}>
                      <div className="sider-messenger-user-item">
                        <div className="sider-messenger-user-item-avatar">
                          {friends.user_avatar_cropX === null ?
                            <img src={friends.user_avatar} alt={friends.user_last_name} />
                            :
                            <Image cloudName="mohi-vn" publicId={friends.user_avatar+ ".jpg"} version="1607061343">
                              <Transformation height={friends.user_avatar_cropH}  width={friends.user_avatar_cropW} x={friends.user_avatar_cropX} y={friends.user_avatar_cropY} crop="crop" />
                            </Image>
                          }
                        </div>
                        <div className="sider-messenger-content">
                          <div className="sider-messenger-username">
                            {friends.user_first_name + ' ' + friends.user_last_name}
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })}
                {!listFriends.filter(fr => {
                  const name = fr.user_first_name + ' ' + fr.user_last_name;

                  return name.toLowerCase().replace(/\s/g,'').indexOf(searchKeyWords.toLowerCase().replace(/\s/g,'')) !== -1
                }).length && isSeach &&
                <div style={{textAlign: 'center'}}>Không có kết quả tìm kiếm</div>
                }
                {!list.length && !isSeach &&
                <div style={{textAlign: 'center'}}>Tìm kiếm bạn bè để nhắn tin</div>
                }
                {!isSeach && list.map((mess, index) => {
                  return(
                    <li key={index} onClick={() => openContentChat(mess.id, mess.user_username)}>
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
                          {moment(moment.utc(mess.pivot.created_at).toDate()).locale('vi').fromNow()}
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

export default SiderMessenger;
