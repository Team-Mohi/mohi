import React from 'react';
import {Layout, Divider, List} from 'antd';
import {GrArticle} from "react-icons/gr";
import {FiYoutube} from "react-icons/fi";
import {GrGroup} from "react-icons/gr";
import {GoPrimitiveDot} from "react-icons/go";
import {AiFillFlag} from "react-icons/ai";
import {FaUserFriends, FaFacebookMessenger} from 'react-icons/fa';
import {Link, useHistory} from 'react-router-dom';
import NewFeed from './Newfeed.jsx';
import useSound from 'use-sound';
import {PUBLIC_URL} from './../../Constants/public.jsx';
import FriendMayKnow from '../Footer/FriendMayKnow.jsx';
import YourPageInSiderContainer from './../../Containers/YourPageInSiderContainer.jsx';
import YourGroupInSiderContainer from './../../Containers/YourGroupInSiderContainer.jsx';

function Main() {
  const history = useHistory();
  const {Content, Sider} = Layout;
  const [play1] = useSound(PUBLIC_URL + '/sounds/2.mp3');
  const [play2] = useSound(PUBLIC_URL + '/sounds/1.flac');
  const [play3] = useSound(PUBLIC_URL + '/sounds/3.wav');
  const yearNow = new Date().getFullYear();
  const currentUser = JSON.parse(localStorage.getItem('ustk')).info;

  const changeActiveKey = (key) => {
    history.push('/rules-mohi', {key: key});
  }

  return (<> < Content style = {{ marginTop: '65px' }} > <div className="wrapper mt-2 mb-2">
    <Layout >
      <Sider width="200">
        <div style={{
            position: "fixed",
            width: '200px'
          }}>
          <List>
            <List.Item className="box-info-sider-left">
              <img src={currentUser.user_avatar} alt={currentUser.user_first_name + ' ' + currentUser.user_last_name} style={{
                  width: '30px',
                  height: '30px'
                }}/>
              <span>{currentUser.user_first_name + ' ' + currentUser.user_last_name}</span>
            </List.Item>
            <List className="box-option-sider-left">
              <List.Item className="active">
                <div onClick={() => play1()}>sound1</div>
                <div onClick={() => play2()}>sound2</div>
                <div onClick={() => play3()}>sound3</div>
              </List.Item>
              <Link to="/">
                <List.Item className="menu-sider-link active">
                  <GrArticle/>
                  Trang chủ
                </List.Item>
              </Link>
              <Link to="messenger" className="menu-sider-link">
                <List.Item>
                  <FaFacebookMessenger className="mess-icon"/>
                  Messenger
                </List.Item>
              </Link>
              <Link to="watch" className="menu-sider-link">
                <List.Item>
                  <FiYoutube className="watch-icon"/>
                  Watch
                </List.Item>
              </Link>
            </List>
          </List>
          <Divider orientation="middle">Lối tắt</Divider>
          <List className="box-option-sider-left">
            <YourPageInSiderContainer />
            <YourGroupInSiderContainer />
          </List>
          <Divider orientation="middle">Khám phá</Divider>
          <List className="box-option-sider-left">
            <Link to="/pages" className="menu-sider-link">
              <List.Item >
                <AiFillFlag className="flag-icon"/>
                Trang
              </List.Item>
            </Link>
            <Link to="/groups" className="menu-sider-link">
              <List.Item>
                <GrGroup className="group-icon"/>
                Nhóm
              </List.Item>
            </Link>
            <Link to="/profile/friends" className="menu-sider-link">
              <List.Item>
                <FaUserFriends className="friend-icon"/>
                Danh sách bạn bè
              </List.Item>
            </Link>
          </List>
        </div>
      </Sider>
      <NewFeed/>
      <Sider width="350">
        <div style={{
            position: "fixed",
            width: '350px'
          }}>
          <FriendMayKnow/>
          <div className="box-footer">
            <ul>
              <li><GoPrimitiveDot/>
                <span onClick={() => changeActiveKey(2)}>Chính sách dữ liệu</span>
              </li>
              <li><GoPrimitiveDot/>
                <span onClick={() => changeActiveKey(1)}>Điều khoản và dịch vụ</span>
              </li>
              <li><GoPrimitiveDot/>
                <span onClick={() => changeActiveKey(3)}>Tiêu chuẩn cộng đồng</span>
              </li>
              <li><GoPrimitiveDot/>
              <span><Link to="/help">Trợ Giúp</Link></span>
              </li>
            </ul>
            <div className="brand-app">Mohi &copy; {yearNow}</div>
          </div>
        </div>
      </Sider>
    </Layout>
  </div>
</Content>
</>)
}

export default Main;
