import React from 'react';
import { Layout, Divider, List } from 'antd';
import { GrArticle } from "react-icons/gr";
import { FiYoutube } from "react-icons/fi";
import { GrGroup } from "react-icons/gr";
import { GoPrimitiveDot } from "react-icons/go";
import { AiFillFlag } from "react-icons/ai";
import { FaUserFriends, FaFacebookMessenger } from 'react-icons/fa';
import { Link, useHistory  } from 'react-router-dom';
import NewFeed from './Newfeed.jsx';
import useSound from 'use-sound';
import {PUBLIC_URL} from './../../Constants/public.jsx';

function Main() {
    const history = useHistory();
    const { Content, Sider } = Layout;
    const [play1] = useSound(PUBLIC_URL + '/sounds/2.mp3');
    const [play2] = useSound(PUBLIC_URL + '/sounds/1.flac');
    const [play3] = useSound(PUBLIC_URL + '/sounds/3.wav');
    const yearNow = new Date().getFullYear();
    const changeActiveKey = (key) => {
        history.push('/rules-mohi',{
            key: key,
        });
    }

    return (
        <>
            <Content style={{ marginTop: '65px' }}>
                <div className="wrapper mt-2 mb-2">
                    <Layout >
                        <Sider width="200" >
                            <div style={{ position: "fixed" }}>
                                <List>
                                    <List.Item className="box-info-sider-left">
                                        <img src="images/gaixinh.jpg" alt="" style={{width: '30px', height: '30px'}} />
                                        <span>Nguyễn Văn Phước</span>
                                    </List.Item>
                                    <List className="box-option-sider-left" >
                                      <List.Item className="active">
                                      <div onClick={() => play1()}>sound1</div>
                                      <div onClick={() => play2()}>sound2</div>
                                      <div onClick={() => play3()}>sound3</div>
                                      </List.Item>
                                        <Link to="/">
                                            <List.Item className="active">
                                                <GrArticle /> Trang chủ
                                            </List.Item>
                                        </Link>
                                        <Link to="messenger">
                                            <List.Item>
                                                <FaFacebookMessenger /> Messenger
                                            </List.Item>
                                        </Link>
                                        <Link to="watch">
                                            <List.Item>
                                                <FiYoutube /> Watch
                                            </List.Item>
                                        </Link>
                                    </List>
                                </List>
                                <Divider orientation="middle">Lối tắt</Divider>
                                <List className="box-option-sider-left" >
                                    <Link to="your_pages">
                                        <List.Item className="active">
                                            List Page
                                            </List.Item>
                                    </Link>
                                    <Link to="your_groups">
                                        <List.Item>
                                            List Group
                                            </List.Item>
                                    </Link>
                                </List>
                                <Divider orientation="middle">Khám phá</Divider>
                                <List className="box-option-sider-left" >
                                    <Link to="page">
                                        <List.Item className="active">
                                            <AiFillFlag /> Trang
                                            </List.Item>
                                    </Link>
                                    <Link to="group">
                                        <List.Item>
                                            <GrGroup /> Nhóm
                                            </List.Item>
                                    </Link>
                                    <Link to="friend_list">
                                        <List.Item>
                                            <FaUserFriends /> Danh sách bạn bè
                                            </List.Item>
                                    </Link>
                                </List>
                            </div>
                        </Sider>
                        <NewFeed />
                        <Sider width="350" >
                            <div style={{ position: "fixed", width: '350px' }}>
                                <div className="language-app">
                                </div>
                                <div className="box-footer">
                                    <ul>
                                        <li><GoPrimitiveDot />
                                            <span onClick={() => changeActiveKey(2)}>Chính sách dữ liệu</span>
                                        </li>
                                        <li><GoPrimitiveDot />
                                            <span onClick={() => changeActiveKey(1)}>Điều khoản và dịch vụ</span>
                                        </li>
                                        <li><GoPrimitiveDot />
                                            <span onClick={() => changeActiveKey(3)}>Tiêu chuẩn cộng đồng</span>
                                        </li>
                                        <li><GoPrimitiveDot />
                                            <span>Trợ Giúp</span>
                                        </li>
                                    </ul>
                                    <div className="brand-app">Mohi &copy; {yearNow}</div>
                                </div>
                            </div>
                        </Sider>
                    </Layout>
                </div>
            </Content>
        </>
    )
}

export default Main;
