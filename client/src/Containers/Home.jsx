import React, { Suspense, lazy, useEffect, useState } from 'react';
import './Home.css';
import { Link, Route, Switch, useHistory, useLocation} from 'react-router-dom';
import { Layout, Menu, Input, Dropdown } from 'antd';
import { FaUserFriends, FaFacebookMessenger, FaBell } from 'react-icons/fa';
import { AiFillCaretDown } from "react-icons/ai";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const Main = lazy(() => import('./../Components/NewFeed/Index.jsx'));
const MyProfile = lazy(() => import('./../Components/Profiles/MyProfile/Index.jsx'));
const Messenger = lazy(() => import('./../Components/Messenger/index.jsx'));
const SearchNavigation = lazy(() => import('./../Components/Search/index.jsx'));

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
        </a>
        </Menu.Item>
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

    },[key]);

    function onSearch(value){
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
                                </Link>
                            </Menu.Item>
                            <Menu.Item className="after-li">
                                <Link className="home" to="/"  > Trang chủ</Link>
                            </Menu.Item>
                            <Menu.Item >
                                <Dropdown className="dropdown-setting" trigger={['click']} overlay={menu} placement="bottomCenter" arrow>
                                    <FaUserFriends title="Bạn bè" />
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item >
                                <Dropdown className="dropdown-setting" trigger={['click']} overlay={menu} placement="bottomCenter" arrow>
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
                        <Route path={`/search/:value`} component={SearchNavigation} />
                        </>
                      }
                    </Switch>
                </Suspense>
            </Layout>
        </>
    )
}

export default Home;
