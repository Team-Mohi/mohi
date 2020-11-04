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
import {PUBLIC_URL} from './../Constants/public.jsx';
import  Main from './../Components/NewFeed/Index.jsx';
import  MyProfile from './../Components/Profiles/MyProfile/Index.jsx';
import  Messenger from './../Components/Messenger/index.jsx';
import  SearchNavigation from './../Components/Search/index.jsx';
import  FriendRequests from './../Components/FriendRequests/FriendRequests.jsx';
import  FriendSent from './../Components/FriendRequests/FriendSent.jsx';

const menu = (
    <Menu>
        <Menu.Item className="menu-items">
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item className="menu-items">
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item className="menu-items">
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
            </a>
        </Menu.Item>
        <MenuItem className="menu-items">
            <Link to="/friendrequests"> abc</Link>
        </MenuItem>
    </Menu>
);
const menumessenger = (
    <Menu className="messenger-menu-container">
        <div className="messenger-menu-title">
            <h5>Gần đây</h5>
            <h5>Tin nhắn chờ</h5>
            <Link to="/friendrequests">Tin nhắn mới</Link>
            <Link to="">Nhóm mới</Link>
        </div>
        <Menu.Item className="menu-items">
            <div className="friend-requests-menu">
                <div className="friend-requests-menu-avatar">
                    <Link to="">
                        <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                    </Link>
                </div>
                <div className="friend-requests-menu-info">
                    <div className="friend-requests-menu-name">
                        <Link to="">
                            Hồ Thị Vân Anh
                        </Link>
                    </div>
                    <div className="friend-requests-menu-mutual-friends">
                        <Link to="">
                            <span><FaShare/> anh đang làm gì thế</span>
                        </Link>
                    </div>
                </div>
                <div className="messenger-menu-right">
                    <p>2:20pm</p>
                    <p><FaDotCircle/></p>
                </div>
            </div>
        </Menu.Item>
        <Menu.Item className="menu-items">
            <div className="friend-requests-menu">
                <div className="friend-requests-menu-avatar">
                    <Link to="">
                        <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                    </Link>
                </div>
                <div className="friend-requests-menu-info">
                    <div className="friend-requests-menu-name">
                        <Link to="">
                            Hồ Thị Vân Anh
                        </Link>
                    </div>
                    <div className="friend-requests-menu-mutual-friends">
                        <Link to="">
                            <span><FaShare/> anh đang làm gì thế</span>
                        </Link>
                    </div>
                </div>
                <div className="messenger-menu-right">
                    <p>2:20pm</p>
                    <p><FaDotCircle/></p>
                </div>
            </div>
        </Menu.Item>
        <Menu.Item className="menu-items">
            <div className="friend-requests-menu">
                <div className="friend-requests-menu-avatar">
                    <Link to="">
                        <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                    </Link>
                </div>
                <div className="friend-requests-menu-info">
                    <div className="friend-requests-menu-name">
                        <Link to="">
                            Hồ Thị Vân Anh
                        </Link>
                    </div>
                    <div className="friend-requests-menu-mutual-friends">
                        <Link to="">
                            <span><FaShare/> anh đang làm gì thế</span>
                        </Link>
                    </div>
                </div>
                <div className="messenger-menu-right">
                    <p>2:20pm</p>
                    <p><FaDotCircle/></p>
                </div>
            </div>
        </Menu.Item>
        <Menu.Item className="menu-items">
            <div className="friend-requests-menu">
                <div className="friend-requests-menu-avatar">
                    <Link to="">
                        <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                    </Link>
                </div>
                <div className="friend-requests-menu-info">
                    <div className="friend-requests-menu-name">
                        <Link to="">
                            Hồ Thị Vân Anh
                        </Link>
                    </div>
                    <div className="friend-requests-menu-mutual-friends">
                        <Link to="">
                            <span><FaShare/> anh đang làm gì thế</span>
                        </Link>
                    </div>
                </div>
                <div className="messenger-menu-right">
                    <p>2:20pm</p>
                    <p><FaDotCircle/></p>
                </div>
            </div>
        </Menu.Item>
        <Menu.Item className="menu-items">
            <div className="friend-requests-menu">
                <div className="friend-requests-menu-avatar">
                    <Link to="">
                        <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                    </Link>
                </div>
                <div className="friend-requests-menu-info">
                    <div className="friend-requests-menu-name">
                        <Link to="">
                            Hồ Thị Vân Anh
                        </Link>
                    </div>
                    <div className="friend-requests-menu-mutual-friends">
                        <Link to="">
                            <span><FaShare/> anh đang làm gì thế</span>
                        </Link>
                    </div>
                </div>
                <div className="messenger-menu-right">
                    <p>2:20pm</p>
                    <p><FaDotCircle/></p>
                </div>
            </div>
        </Menu.Item>
        <Menu.Item className="menu-items">
            <div className="friend-requests-menu">
                <div className="friend-requests-menu-avatar">
                    <Link to="">
                        <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                    </Link>
                </div>
                <div className="friend-requests-menu-info">
                    <div className="friend-requests-menu-name">
                        <Link to="">
                            Hồ Thị Vân Anh
                        </Link>
                    </div>
                    <div className="friend-requests-menu-mutual-friends">
                        <Link to="">
                            <span><FaShare/> anh đang làm gì thế</span>
                        </Link>
                    </div>
                </div>
                <div className="messenger-menu-right">
                    <p>2:20pm</p>
                    <p><FaDotCircle/></p>
                </div>
            </div>
        </Menu.Item>
        <Menu.Item className="menu-items">
            <div className="friend-requests-menu">
                <div className="friend-requests-menu-avatar">
                    <Link to="">
                        <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                    </Link>
                </div>
                <div className="friend-requests-menu-info">
                    <div className="friend-requests-menu-name">
                        <Link to="">
                            Hồ Thị Vân Anh
                        </Link>
                    </div>
                    <div className="friend-requests-menu-mutual-friends">
                        <Link to="">
                            <span><FaShare/> anh đang làm gì thế</span>
                        </Link>
                    </div>
                </div>
                <div className="messenger-menu-right">
                    <p>2:20pm</p>
                    <p><FaDotCircle/></p>
                </div>
            </div>
        </Menu.Item>
        <Menu.Item className="menu-items">
            <div className="friend-requests-menu">
                <div className="friend-requests-menu-avatar">
                    <Link to="">
                        <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                    </Link>
                </div>
                <div className="friend-requests-menu-info">
                    <div className="friend-requests-menu-name">
                        <Link to="">
                            Hồ Thị Vân Anh
                        </Link>
                    </div>
                    <div className="friend-requests-menu-mutual-friends">
                        <Link to="">
                            <span><FaShare/> anh đang làm gì thế</span>
                        </Link>
                    </div>
                </div>
                <div className="messenger-menu-right">
                    <p>2:20pm</p>
                    <p><FaDotCircle/></p>
                </div>
            </div>
        </Menu.Item>

        <div className="footer-dropdown-menu" >
            <Link to="/messenger">Xem tất cả các tin nhắn</Link>
            <Link to="">Đánh dấu tất cả là đã đọc</Link>
        </div>
    </Menu>
);
const menufriendrequests = (
    <Menu className="friendrequests-menu-container">
        <div className="friendrequests-menu-title">
            <h5 aria-disabled>Lời mời kết bạn</h5>
            <Link to="/friendrequests">Tìm thêm bạn bè</Link>
            <Link to="">Cài đặt</Link>
        </div>
        <Menu.Item className="menu-items">
            <div className="friend-requests-menu">
                <div className="friend-requests-menu-avatar">
                    <Link to="">
                        <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                    </Link>
                </div>
                <div className="friend-requests-menu-info">
                    <div className="friend-requests-menu-name">
                        <Link to="">
                            Hồ Thị Vân Anh
                        </Link>
                    </div>
                    <div className="friend-requests-menu-mutual-friends">
                        <Link to="">
                            <span>3 bạn chung</span>
                        </Link>
                    </div>
                </div>
                <div className="friend-requests-menu-button">
                    <button className="friend-requests-accept-btn"> Xác nhận</button>
                    <button className="friend-requests-refuse-btn"> Xóa</button>
                </div>
            </div>
        </Menu.Item>
        <Menu.Item className="menu-items">
            <div className="friend-requests-menu">
                <div className="friend-requests-menu-avatar">
                    <Link to="">
                        <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                    </Link>
                </div>
                <div className="friend-requests-menu-info">
                    <div className="friend-requests-menu-name">
                        <Link to="">
                            Hồ Thị Vân Anh
                        </Link>
                    </div>
                    <div className="friend-requests-menu-mutual-friends">
                        <Link to="">
                            <span>3 bạn chung</span>
                        </Link>
                    </div>
                </div>
                <div className="friend-requests-menu-button">
                    <button className="friend-requests-accept-btn"> Xác nhận</button>
                    <button className="friend-requests-refuse-btn"> Xóa</button>
                </div>
            </div>
        </Menu.Item>
        <Menu.Item className="menu-items">
            <div className="friend-requests-menu">
                <div className="friend-requests-menu-avatar">
                    <Link to="">
                        <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                    </Link>
                </div>
                <div className="friend-requests-menu-info">
                    <div className="friend-requests-menu-name">
                        <Link to="">
                            Hồ Thị Vân Anh
                        </Link>
                    </div>
                    <div className="friend-requests-menu-mutual-friends">
                        <Link to="">
                            <span>3 bạn chung</span>
                        </Link>
                    </div>
                </div>
                <div className="friend-requests-menu-button">
                    <button className="friend-requests-accept-btn"> Xác nhận</button>
                    <button className="friend-requests-refuse-btn"> Xóa</button>
                </div>
            </div>
        </Menu.Item>
        <Menu.Item className="menu-items">
            <div className="friend-requests-menu">
                <div className="friend-requests-menu-avatar">
                    <Link to="">
                        <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                    </Link>
                </div>
                <div className="friend-requests-menu-info">
                    <div className="friend-requests-menu-name">
                        <Link to="">
                            Hồ Thị Vân Anh
                        </Link>
                    </div>
                    <div className="friend-requests-menu-mutual-friends">
                        <Link to="">
                            <span>3 bạn chung</span>
                        </Link>
                    </div>
                </div>
                <div className="friend-requests-menu-button">
                    <button className="friend-requests-accept-btn"> Xác nhận</button>
                    <button className="friend-requests-refuse-btn"> Xóa</button>
                </div>
            </div>
        </Menu.Item>
        <div className="footer-dropdown-menu" >
            <Link to="/friendrequests">Xem tất cả các yêu cầu</Link>
        </div>
    </Menu>
);

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
                                <Dropdown className="dropdown-setting" trigger={['click']} overlay={menu} placement="bottomCenter" >
                                    <FaBell title="Thông báo" />
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item className="menu-item-last-child">
                                <Dropdown className="dropdown-setting" trigger={['click']} overlay={menu} placement="bottomCenter" >
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
