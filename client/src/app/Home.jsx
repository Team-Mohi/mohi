import React, { Suspense, lazy, useEffect, useState, useRef, useContext } from 'react';
import './Home.css';
import { Link, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { Layout, Menu, Input, Dropdown } from 'antd';
import { FaUserFriends, FaFacebookMessenger, FaBell,FaDotCircle,FaShare } from 'react-icons/fa';
import { AiFillCaretDown } from "react-icons/ai";
import MenuItem from 'antd/lib/menu/MenuItem';
import ChatSider from './../Components/ChatSider/ChatSider.jsx';
import ChatMini from './../Components/ChatMini/ChatMini.jsx';
import Watch from './../Components/Watch/Watch.jsx';
import Page from './../Components/Page/Page.jsx';
import Group from './../Components/Group/Group.jsx';
import GroupAllContainer from './../Containers/GroupAllContainer.jsx';
import ModalPost from './../Components/ModalPost/index.jsx';
import  Main from './../Components/NewFeed/Index.jsx';
import  ProfileContainer from './../Containers/ProfileContainer.jsx';
import  MessengerContainer from './../Containers/MessengerContainer.jsx';
import  SearchNavigation from './../Components/Search/index.jsx';
import  FriendRequests from './../Components/FriendRequests/FriendRequests.jsx';
import  FriendSent from './../Components/FriendRequests/FriendSent.jsx';
import PageAllContainer from './../Containers/PageAllContainer.jsx';
import MenuNoti from '../Components/Notifications/NotificationsMenu.jsx';
import MenuMessenger from './../Components/Messenger/MessengerMenu.jsx';
import SinglePost from './../Components/SinglePost/SinglePost.jsx';
import MenuFriendRequests from './../Components/FriendRequests/FriendRequestMenu.jsx';
import MenuSetting from './../Components/Setting/SettingMenu.jsx';
import Notifications from './../Components/Notifications/Notifications.jsx';
import Rules from './../Components/Footer/Rules.jsx';
import Setting from '../Components/Setting/Setting.jsx';
import Help from '../Components/Footer/Help.jsx';
import {PUBLIC_URL} from './../Constants/public.jsx';
import NotFound from './../Components/NotFound/index.jsx';
import CommingSoon from './../Components/CommingSoon/index.jsx';
import {Image,Transformation} from 'cloudinary-react';
import {useSelector} from 'react-redux';
import SocketContext from './../Components/Socket/index.jsx';

function Home(props, {message, friendsRequest, notifycations}) {
    const {list} = useSelector(state => state.message);
    const listFriendsRequest = useSelector(state => state.friendsRequest.list);
    const listNoti = useSelector(state => state.notifycations.list);
    var countFriendRequest = listFriendsRequest.length;
    var countMess = 0;
    var countNoti = 0;
    const { Header } = Layout;
    const { Search } = Input;
    const history = useHistory();
    const path = useLocation().pathname.split('/');
    const key = history.location.key;
    const [listChatMini, setListChatMini] = useState([]);
    const parentChatRef = useRef();
    const currentUser = JSON.parse(localStorage.getItem('ustk')).info;
    const socket = useContext(SocketContext);

    useEffect(() => {
      socket.emit('register', currentUser.user_username);

      if(listChatMini.length === 0){
        if(localStorage.getItem('listChatMini')){
          setListChatMini(localStorage.getItem('listChatMini').split(','))
        }
      }
    },[]);

    useEffect(() => {
      if(!path[2]){
        window.scrollTo(0, 0)
      }
    },[key]);

    function onSearch(value) {
      var filter = /^[\s]*$/;
      if (filter.test(value)) {
        return
      }

      history.push('/search/' + value)
    }

    const increaseChatMini = (iduser) =>{
      if(!listChatMini.includes(iduser)){
        if(listChatMini.length > 2){
          listChatMini.splice(0,1)
        }
        setListChatMini([...listChatMini, iduser])
        localStorage.setItem('listChatMini', [...listChatMini, iduser,])
      }
      parentChatRef.current.showChatMiniFunc()
    }

    const closeChatMini = (iduser) => {
      if(listChatMini.includes(iduser)){
        let newListChatMini = listChatMini.filter(chatmini => chatmini !== iduser)
        setListChatMini(newListChatMini)
        localStorage.setItem('listChatMini', newListChatMini)
      }
    }

    list.forEach((mess, i) => {
      if(!mess.pivot.messages_ReadAt && mess.pivot.messages_From !== currentUser.id){
        countMess++
      }
    });

    listNoti.forEach((noti, i) => {
      if(!noti.notification_IsRead){
        countNoti++
      }
    });

    return (
        <>
            <Layout className="layout " >

                <Header className="nav-home">
                    <div className="wrapper d-flex header-home " >
                        <div className="logo " >
                            <Link to="/"><img src={PUBLIC_URL + "logo.png"} alt="Mohi.vn" title="Mohi.vn" /></Link>
                        </div>
                        <Search
                            className="search-all"
                            placeholder="Tìm kiếm"
                            onSearch={(value) => onSearch(value)}
                            enterButton
                        />
                        <Menu className="menu-home" mode="horizontal" >
                            <Menu.Item className="after-li">
                                <Link className="avatar-home" to={"/profile/" + currentUser.user_username} >
                                    {currentUser.user_avatar_cropX === null ?
                                      <img src={currentUser.user_avatar} alt={currentUser.user_first_name + ' ' + currentUser.user_last_name} />
                                      :
                                      <Image cloudName="mohi-vn" publicId={currentUser.user_avatar+ ".jpg"} version="1607061343">
                                        <Transformation height={currentUser.user_avatar_cropH}  width={currentUser.user_avatar_cropW} x={currentUser.user_avatar_cropX} y={currentUser.user_avatar_cropY} crop="crop" />
                                      </Image>
                                    }
                                    <span>{currentUser.user_last_name}</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item className="after-li">
                                <Link className="home" to="/"  > Trang chủ</Link>
                            </Menu.Item>
                            <Menu.Item >
                                <Dropdown className="dropdown-setting" trigger={['click']} overlay={<MenuFriendRequests />} placement="bottomCenter" arrow>
                                  <div>
                                    <div className="icon-friend-request">
                                      <FaUserFriends title="Bạn bè" />
                                      {countFriendRequest ? <p className="count-friend-request">{countFriendRequest}</p> : null}
                                    </div>
                                  </div>
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item >
                                <Dropdown className="dropdown-setting" trigger={['click']} overlay={<MenuMessenger />} placement="bottomCenter" arrow>
                                    <div>
                                      <div className="icon-friend-request">
                                        <FaFacebookMessenger title="Tin nhắn" />
                                        {countMess ? <p className="count-friend-request">{countMess}</p> : null}
                                      </div>
                                    </div>
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item >
                                <Dropdown className="dropdown-setting" trigger={['click']} overlay={<MenuNoti />} placement="bottomCenter" arrow>
                                    <div>
                                      <div className="icon-friend-request">
                                        <FaBell title="Thông báo" />
                                        {countNoti ? <p className="count-friend-request">{countNoti}</p> : null}
                                      </div>
                                    </div>
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item className="menu-item-last-child">
                                <Dropdown className="dropdown-setting" trigger={['click']} overlay={<MenuSetting />} placement="bottomCenter" arrow>
                                    <AiFillCaretDown title="Cài đặt" />
                                </Dropdown>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Header>
                    <Switch>
                      <Route exact path="/" component={Main} />
                      <Route path="/messenger" component={MessengerContainer} />
                      <Route path="/friendrequests" component={FriendRequests} />
                      <Route path={`/search/:value`} component={SearchNavigation} />
                      <Route path="/friend-sent" component={FriendSent} />
                      <Route path="/watch" component={Watch} />
                      <Route path="/photo/:index" component={ModalPost} />
                      <Route path="/setting" component={Setting} />
                      <Route path="/notifications" component={Notifications} />
                      <Route path="/rules-mohi" component={Rules} />
                      <Route path="/help" component={Help} />
                      <Route path="/profile/:idProfile" component={ProfileContainer} />
                      <Route path="/post/:idPost" component={SinglePost} />
                      <Route path="/comming-soon" component={CommingSoon} />
                      <Route path="/404" component={NotFound} />
                      <Route component={NotFound} />
                    </Switch>
            </Layout>
        </>
    )
}

export default Home;
