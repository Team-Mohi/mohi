import React from 'react';
import {Layout, Divider, List} from 'antd';
import {GrArticle} from "react-icons/gr";
import {FiYoutube} from "react-icons/fi";
import {GrGroup} from "react-icons/gr";
import {GoPrimitiveDot} from "react-icons/go";
import {AiFillFlag} from "react-icons/ai";
import {FaUserFriends, FaFacebookMessenger, FaBell} from 'react-icons/fa';
import {Link, useHistory} from 'react-router-dom';
import NewFeedContainer from './../../Containers/NewFeedContainer.jsx';
import {PUBLIC_URL} from './../../Constants/public.jsx';
import FriendMayKnow from '../Footer/FriendMayKnow.jsx';
import YourPageInSiderContainer from './../../Containers/YourPageInSiderContainer.jsx';
import YourGroupInSiderContainer from './../../Containers/YourGroupInSiderContainer.jsx';
import {Image,Transformation} from 'cloudinary-react';

function Main() {
  const history = useHistory();
  const {Content, Sider} = Layout;
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
              <div style={{width: '30px', height: '30px', overflow: 'hidden', borderRadius: '50%', border: '2px solid rgba(0,0,0,0.1)', marginRight: '10px'}}>
                {currentUser.user_avatar_cropX === null ?
                  <img src={currentUser.user_avatar} alt={currentUser.user_first_name + ' ' + currentUser.user_last_name}/>
                  :
                  <Image cloudName="mohi-vn" publicId={currentUser.user_avatar+ ".jpg"} version="1607061343">
                    <Transformation height={currentUser.user_avatar_cropH}  width={currentUser.user_avatar_cropW} x={currentUser.user_avatar_cropX} y={currentUser.user_avatar_cropY} crop="crop" />
                  </Image>
                }
              </div>
              <span>{currentUser.user_first_name + ' ' + currentUser.user_last_name}</span>
            </List.Item>
            <List className="box-option-sider-left">
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
              <Link to="notifications" className="menu-sider-link">
                <List.Item>
                  <FaBell title="Thông báo" style={{fill: 'blue'}}/>
                Thông báo
                </List.Item>
              </Link>
              <Link to="friendrequests" className="menu-sider-link">
                <List.Item>
                  <FaUserFriends title="Bạn bè" style={{fill: 'purple'}}/>
                  Lời mời kết bạn
                </List.Item>
              </Link>
            </List>
          </List>
        </div>
      </Sider>
      <NewFeedContainer/>
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
