import React, { Suspense, lazy, useEffect, useState } from 'react';
import './Home.css';
import { Link, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { Layout, Menu, Input, Dropdown } from 'antd';
import { FaUserFriends, FaFacebookMessenger, FaBell } from 'react-icons/fa';
import { AiFillCaretDown } from "react-icons/ai";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
<<<<<<< HEAD
import ChatSider from './../Components/ChatSider/ChatSider.jsx';
import ChatMini from './../Components/ChatMini/ChatMini.jsx';
import Watch from './../Components/Watch/Watch.jsx';
import { PUBLIC_URL } from './../Constant/public.jsx';
import {menunoti} from '../Components/Notifications/NotificationsMenu.jsx';
import {menumessenger} from './../Components/Messenger/MessengerMenu.jsx';
import {menufriendrequests} from './../Components/FriendRequests/FriendRequestsMenu.jsx';
import {menusetting} from './../Components/Setting/SettingMenu.jsx';
=======
import MenuItem from 'antd/lib/menu/MenuItem';
import ChatSider from './../Components/ChatSider/ChatSider.jsx';
import ChatMini from './../Components/ChatMini/ChatMini.jsx';
import Watch from './../Components/Watch/Watch.jsx';
import {PUBLIC_URL} from './../Constant/public.jsx';
>>>>>>> 418dfa94ce97f42e03b559df51e2bfb8f83356ae
const Main = lazy(() => import('./../Components/NewFeed/Index.jsx'));
const MyProfile = lazy(() => import('./../Components/Profiles/MyProfile/Index.jsx'));
const Messenger = lazy(() => import('./../Components/Messenger/index.jsx'));
const SearchNavigation = lazy(() => import('./../Components/Search/index.jsx'));
const FriendRequests = lazy(() => import('./../Components/FriendRequests/FriendRequests.jsx'));
const FriendSent = lazy(() => import('./../Components/FriendRequests/FriendSent.jsx'));
const Notifications = lazy(() => import('./../Components/Notifications/Notifications.jsx'));
const Rules = lazy(() => import('./../Components/Footer/Rules.jsx'));
const Setting = lazy(() => import('../Components/Setting/Setting.jsx'));

function Home() {
    const { Header } = Layout;
    const { Search } = Input;
    const history = useHistory();
    const path = useLocation().pathname.split('/');
    const key = history.location.key;
    const isActive = path[1];
    const [loadingContent, setLoadingContent] = useState(true);
    const antIcon = <LoadingOutlined style={{ fontSize: 50, color: 'rgba(0,128,128)' }} spin />;
    const [listChatMini, setListChatMini] = useState([]);

<<<<<<< HEAD
    useEffect(() => {
        if (listChatMini.length === 0) {
            if (localStorage.getItem('listChatMini')) {
                setListChatMini(localStorage.getItem('listChatMini').split(','))
            }
        }

    }, []);

    useEffect(() => {
        if (!path[2]) {
            window.scrollTo(0, 0)
            setLoadingContent(true)

            setTimeout(() => {
                setLoadingContent(false)
            }, 200);
        }else{
            setLoadingContent(false)
        }
    }, [key]);
=======

      if(listChatMini.length === 0){
        if(localStorage.getItem('listChatMini')){
          setListChatMini(localStorage.getItem('listChatMini').split(','))
        }
      }

    },[]);

    useEffect(() => {
      if(!path[2]){
        window.scrollTo(0, 0)
        setLoadingContent(true)

        setTimeout(() => {
          setLoadingContent(false)
        }, 200);
      }
    },[key]);
>>>>>>> 418dfa94ce97f42e03b559df51e2bfb8f83356ae

    function onSearch(value) {
        history.push('/search/' + value)
    }

<<<<<<< HEAD
    const increaseChatMini = (iduser) => {
        if (!listChatMini.includes(iduser)) {
            if (listChatMini.length > 2) {
                listChatMini.splice(0, 1)
                setListChatMini([...listChatMini, iduser])
                localStorage.setItem('listChatMini', [...listChatMini, iduser,])
            } else {
                setListChatMini([...listChatMini, iduser])
                localStorage.setItem('listChatMini', [...listChatMini, iduser,])
            }
        }
    }

    const closeChatMini = (iduser) => {
        if (listChatMini.includes(iduser)) {
            let newListChatMini = listChatMini.filter(chatmini => chatmini !== iduser)
            setListChatMini(newListChatMini)
            localStorage.setItem('listChatMini', newListChatMini)
        }
=======
    const increaseChatMini = (iduser) =>{
      if(!listChatMini.includes(iduser)){
        if(listChatMini.length > 2){
          listChatMini.splice(0,1)
          setListChatMini([...listChatMini, iduser])
          localStorage.setItem('listChatMini', [...listChatMini, iduser,])
        }else {
          setListChatMini([...listChatMini, iduser])
          localStorage.setItem('listChatMini', [...listChatMini, iduser,])
        }
      }
    }

    const closeChatMini = (iduser) => {
      if(listChatMini.includes(iduser)){
        let newListChatMini = listChatMini.filter(chatmini => chatmini !== iduser)
        setListChatMini(newListChatMini)
        localStorage.setItem('listChatMini', newListChatMini)
      }
>>>>>>> 418dfa94ce97f42e03b559df51e2bfb8f83356ae
    }

    return (
        <>
            <Layout className="layout " >

                <Header className="nav-home">
                    <div className="container d-flex header-home " >
                        <div className="logo " >
                            <img src={PUBLIC_URL + "/logo.png"} alt="Mohi.vn" title="Mohi.vn" />
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
                                <Link className="home" to="/" > Trang chủ</Link>
                            </Menu.Item>
                            <Menu.Item >
                                <Dropdown className="dropdown-setting" trigger={['click']} overlay={menufriendrequests} placement="bottomCenter" >
                                    <FaUserFriends title="Bạn bè" />
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item >
                                <Dropdown className="dropdown-setting" trigger={['click']} overlay={menumessenger} placement="bottomCenter" >
                                    <FaFacebookMessenger title="Tin nhắn" />
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item >
<<<<<<< HEAD
                                <Dropdown className="dropdown-setting" trigger={['click']} overlay={menunoti} placement="bottomCenter" >
=======
                                <Dropdown className="dropdown-setting" trigger={['click']} overlay={menu} placement="bottomCenter" >
>>>>>>> 418dfa94ce97f42e03b559df51e2bfb8f83356ae
                                    <FaBell title="Thông báo" />
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item >
<<<<<<< HEAD
                                <Dropdown className="dropdown-setting" trigger={['click']} overlay={menusetting} placement="bottomCenter" >
=======
                                <Dropdown className="dropdown-setting" trigger={['click']} overlay={menu} placement="bottomCenter" >
>>>>>>> 418dfa94ce97f42e03b559df51e2bfb8f83356ae
                                    <AiFillCaretDown title="Cài đặt" />
                                </Dropdown>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Header>

                <Suspense fallback={(<div></div>)}>
                    <Switch>
                        {loadingContent ? <div className="spin"> <Spin indicator={antIcon} /></div> :
                            <>
                                <Route exact path="/" component={Main} />
                                <Route path="/profile" component={MyProfile} />
                                <Route path="/messenger" component={Messenger} />
                                <Route path="/friendrequests" component={FriendRequests} />
                                <Route path="/friend-sent" component={FriendSent} />
                                <Route path="/setting" component={Setting} />
                                <Route path="/watch" component={Watch} />
                                <Route path="/notifications" component={Notifications} />
                                <Route path="/rules-mohi" component={Rules} />
                                <Route path={`/search/:value`} component={SearchNavigation} />
                            </>
                        }

                    </Switch>
                </Suspense>
                {history.location.pathname !== '/messenger' ? <>
<<<<<<< HEAD
                    {listChatMini.length === 0 ? null :
                        <div className="list-chatmini-container">
                            {listChatMini.map((chatmini, index) => {
                                return (
                                    <ChatMini key={index} iduser={chatmini} closeChatMini={closeChatMini} />
                                )
                            })
                            }
                        </div>
                    }
                    <ChatSider increaseChatMini={increaseChatMini} />
                </>
                    : null}
=======
                {listChatMini.length === 0 ? null :
                  <div className="list-chatmini-container">
                  {listChatMini.map((chatmini, index) => {
                    return(
                      <ChatMini key={index} iduser={chatmini} closeChatMini={closeChatMini}/>
                    )
                  })
                  }
                  </div>
                }
                <ChatSider increaseChatMini={increaseChatMini} />
                </>
                : null}
>>>>>>> 418dfa94ce97f42e03b559df51e2bfb8f83356ae
            </Layout>
        </>
    )
}

export default Home;