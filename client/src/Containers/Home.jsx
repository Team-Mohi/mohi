import React, { Suspense, lazy, useEffect, useState } from 'react';
import './Home.css';
import { Link, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { Layout, Menu, Input, Dropdown, Button } from 'antd';
import { FaUserFriends, FaFacebookMessenger, FaBell,FaDotCircle,FaShare } from 'react-icons/fa';
import { AiFillCaretDown } from "react-icons/ai";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import MenuItem from 'antd/lib/menu/MenuItem';


const Main = lazy(() => import('./../Components/NewFeed/Index.jsx'));
const MyProfile = lazy(() => import('./../Components/Profiles/MyProfile/Index.jsx'));
const Messenger = lazy(() => import('./../Components/Messenger/index.jsx'));
const SearchNavigation = lazy(() => import('./../Components/Search/index.jsx'));
const FriendRequests = lazy(() => import('./../Components/FriendRequests/FriendRequests.jsx'));
const FriendSent = lazy(() => import('./../Components/FriendRequests/FriendSent.jsx'));

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
            <Link >Nhóm mới</Link>
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
                            <a><FaShare/> anh đang làm gì thế</a>
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
                            <a><FaShare/> anh đang làm gì thế</a>
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
                            <a><FaShare/> anh đang làm gì thế</a>
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
                            <a><FaShare/> anh đang làm gì thế</a>
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
                            <a><FaShare/> anh đang làm gì thế</a>
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
                            <a><FaShare/> anh đang làm gì thế</a>
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
                            <a><FaShare/> anh đang làm gì thế</a>
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
                            <a><FaShare/> anh đang làm gì thế</a>
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
            <Link >Cài đặt</Link>
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
                            <a>3 bạn chung</a>
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
                            <a>3 bạn chung</a>
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
                            <a>3 bạn chung</a>
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
                            <a>3 bạn chung</a>
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
    const isActive = path[1];
    const [loadingContent, setLoadingContent] = useState(true);
    const antIcon = <LoadingOutlined style={{ fontSize: 50, color: 'rgba(0,128,128)' }} spin />;


    useEffect(() => {
        window.scrollTo(0, 0)
        setLoadingContent(true)

        setTimeout(() => {
            setLoadingContent(false)
        }, 200);

    }, [key]);

    function onSearch(value) {
        history.push('/search/' + value)
    }
    return (
        <>
            <Layout className="layout " >
                <Header className="nav-home">
                    <div className="container d-flex header-home " >
                        <div className="logo " >
                            <img src={"logo.png"} alt="Mohi.vn" title="Mohi.vn" />
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
                                <Dropdown className="dropdown-setting" trigger={['click']} overlay={menu} placement="bottomCenter" arrow>
                                    <FaBell title="Thông báo" />
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item >
                                <Dropdown className="dropdown-setting" trigger={['click']} overlay={menu} placement="bottomCenter" arrow>
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
                                <Route path={`/search/:value`} component={SearchNavigation} />
                                <Route path="/friend-sent" component={FriendSent} />

                            </>
                        }
                    </Switch>
                </Suspense>
            </Layout>
        </>
    )
}

export default Home;
