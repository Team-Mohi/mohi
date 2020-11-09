import React, { Suspense, lazy, useEffect, useState, useRef } from 'react';
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
import ModalPost from './../Components/ModalPost/index.jsx';
import  Main from './../Components/NewFeed/Index.jsx';
import  MyProfile from './../Components/Profiles/MyProfile/Index.jsx';
import  Messenger from './../Components/Messenger/index.jsx';
import  SearchNavigation from './../Components/Search/index.jsx';
import  FriendRequests from './../Components/FriendRequests/FriendRequests.jsx';
import  FriendSent from './../Components/FriendRequests/FriendSent.jsx';
import menunoti from '../Components/Notifications/NotificationsMenu.jsx';
import menumessenger from './../Components/Messenger/MessengerMenu.jsx';
import menufriendrequests from './../Components/FriendRequests/FriendRequestMenu.jsx';
import menusetting from './../Components/Setting/SettingMenu.jsx';
import Notifications from './../Components/Notifications/Notifications.jsx';
import Rules from './../Components/Footer/Rules.jsx';
import Setting from '../Components/Setting/Setting.jsx';
import {PUBLIC_URL} from './../Constants/public.jsx';

function Home() {
    const { Header } = Layout;
    const { Search } = Input;
    const history = useHistory();
    const path = useLocation().pathname.split('/');
    const key = history.location.key;
    const [listChatMini, setListChatMini] = useState([]);
    const parentChatRef = useRef();

    useEffect(() => {
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

    return (
        <>
            <Layout className="layout " >

                <Header className="nav-home">
                    <div className="wrapper d-flex header-home " >
                        <div className="logo " >
                            <img src={PUBLIC_URL + "logo.png"} alt="Mohi.vn" title="Mohi.vn" />
                        </div>
                        <Search
                            className="search-all"
                            placeholder="Tìm kiếm"
                            onSearch={(value) => onSearch(value)}
                            enterButton
                        />
                        <Menu className="menu-home" mode="horizontal" >
                            <Menu.Item className="after-li">
                                <Link className="avatar-home" to="/profile" >
                                    <img src="images/gaixinh.jpg" alt="" />
                                    <span>Phước</span>
                                    {/*  */}
                                </Link>
                            </Menu.Item>
                            <Menu.Item className="after-li">
                                <Link className="home" to="/"  > Trang chủ</Link>
                            </Menu.Item>
                            <Menu.Item >
                                <Dropdown className="dropdown-setting" trigger={['click']} overlay={menufriendrequests} placement="bottomCenter" arrow>
                                    <FaUserFriends title="Bạn bè" />
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item >
                                <Dropdown className="dropdown-setting" trigger={['click']} overlay={menumessenger} placement="bottomCenter" arrow>
                                    <FaFacebookMessenger title="Tin nhắn" />
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item >
                                <Dropdown className="dropdown-setting" trigger={['click']} overlay={menunoti} placement="bottomCenter" arrow>
                                    <FaBell title="Thông báo" />
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item className="menu-item-last-child">
                                <Dropdown className="dropdown-setting" trigger={['click']} overlay={menusetting} placement="bottomCenter" arrow>
                                    <AiFillCaretDown title="Cài đặt" />
                                </Dropdown>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Header>
                    <Switch>
                      <Route exact path="/" component={Main} />
                      <Route path="/profile" component={MyProfile} />
                      <Route path="/messenger" component={Messenger} />
                      <Route path="/friendrequests" component={FriendRequests} />
                      <Route path={`/search/:value`} component={SearchNavigation} />
                      <Route path="/friend-sent" component={FriendSent} />
                      <Route path="/watch" component={Watch} />
                      <Route path="/page" component={Page} />
                      <Route path="/photo/:index" component={ModalPost} />
                      <Route path="/setting" component={Setting} />
                      <Route path="/notifications" component={Notifications} />
                      <Route path="/rules-mohi" component={Rules} />
                    </Switch>
                {history.location.pathname !== '/messenger' ?
                  <>
                    {listChatMini.length === 0 ? null :
                      <div className="list-chatmini-container">
                      {listChatMini.map((chatmini, index) => {
                        return(
                          <ChatMini key={index} iduser={chatmini} closeChatMini={closeChatMini} ref={parentChatRef}/>
                        )
                      })
                      }
                      </div>
                    }
                    <ChatSider increaseChatMini={increaseChatMini}/>
                  </>
                : null}
            </Layout>
        </>
    )
}

export default Home;
