import React from 'react';
import {Col, Row} from 'antd';
import { GiEarthAmerica } from "react-icons/gi";
import { BsFillImageFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GoPrimitiveDot } from "react-icons/go";

function SiderProfile(){
  const yearNow = new Date().getFullYear();
  return(
    <>
      <Col span={8}>
        <div className={`sider-profile`} >
          <div className="profile-story">
            <h6><GiEarthAmerica />Giới thiệu</h6>
            <div className="profile-story-text">
              Tôi là Nguyễn Văn Phước
            </div>
            <button>Chỉnh sửa tiểu sử</button>
          </div>
          <div className="profile-about">
            <ul>
              <li>
                <GiEarthAmerica />
                <span>Php develover tại Công ty Cổ Phần SOC</span>
              </li>
              <li>
                <GiEarthAmerica />
                <span>Làm việc tại Facebook Marketplace Assistant</span>
              </li>
              <li>
                <GiEarthAmerica />
                <span>Sống tại Thành phố Hồ Chí Minh</span>
              </li>
              <li>
                <GiEarthAmerica />
                <span>Có 1.855 người theo dõi</span>
              </li>
              <li>
                <GiEarthAmerica />
                <span>CHỦ TK: NGUYEN VAN PHUOC</span>
              </li>
              <li>
                <GiEarthAmerica />
                <span>VIETCOMBANK: 0911000052165</span>
              </li>
            </ul>
            <button>Chỉnh sửa chi tiết</button>
          </div>
          <div className="profile-attention">
            <div className="profile-attention-img">
              <img src={`https://tse4.mm.bing.net/th?id=OIP.6-3hu-lZYuboDHFWhpuE7AHaLH&pid=Api&P=0&w=300&h=300`} atl=""/>
            </div>
            <button>Chỉnh sửa ảnh đáng chú ý</button>
          </div>
          <div className="profile-galerry">
            <h6><BsFillImageFill />Ảnh</h6>
              <Row>
                <Col span={8}>
                  <div className="profile-galerry-img">
                    <img src={`https://tse4.mm.bing.net/th?id=OIP.6-3hu-lZYuboDHFWhpuE7AHaLH&pid=Api&P=0&w=300&h=300`} atl=""/>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="profile-galerry-img">
                    <img src={`https://tse4.mm.bing.net/th?id=OIP.6-3hu-lZYuboDHFWhpuE7AHaLH&pid=Api&P=0&w=300&h=300`} atl=""/>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="profile-galerry-img">
                    <img src={`https://tse4.mm.bing.net/th?id=OIP.6-3hu-lZYuboDHFWhpuE7AHaLH&pid=Api&P=0&w=300&h=300`} atl=""/>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="profile-galerry-img">
                    <img src={`https://tse4.mm.bing.net/th?id=OIP.6-3hu-lZYuboDHFWhpuE7AHaLH&pid=Api&P=0&w=300&h=300`} atl=""/>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="profile-galerry-img">
                    <img src={`https://tse4.mm.bing.net/th?id=OIP.6-3hu-lZYuboDHFWhpuE7AHaLH&pid=Api&P=0&w=300&h=300`} atl=""/>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="profile-galerry-img">
                    <img src={`https://tse4.mm.bing.net/th?id=OIP.6-3hu-lZYuboDHFWhpuE7AHaLH&pid=Api&P=0&w=300&h=300`} atl=""/>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="profile-galerry-img">
                    <img src={`https://tse4.mm.bing.net/th?id=OIP.6-3hu-lZYuboDHFWhpuE7AHaLH&pid=Api&P=0&w=300&h=300`} atl=""/>
                  </div>
                </Col>
              </Row>
          </div>
          <div className="profile-friends">
            <h6><FaUserFriends />Bạn bè</h6>
            <Row>
              <Col span={8}>
                <div className="profile-galerry-img">
                  <img src={`https://tse4.mm.bing.net/th?id=OIP.6-3hu-lZYuboDHFWhpuE7AHaLH&pid=Api&P=0&w=300&h=300`} atl=""/>
                </div>
                <div className="profile-friends-name">
                  <Link to="">Bảo Ngọc</Link>
                </div>
              </Col>
              <Col span={8}>
                <div className="profile-galerry-img">
                  <img src={`https://tse4.mm.bing.net/th?id=OIP.6-3hu-lZYuboDHFWhpuE7AHaLH&pid=Api&P=0&w=300&h=300`} atl=""/>
                </div>
                <div className="profile-friends-name">
                  <Link to="">Bảo Ngọc</Link>
                </div>
              </Col>
              <Col span={8}>
                <div className="profile-galerry-img">
                  <img src={`https://i.ytimg.com/vi/p8PSwjK7R-Y/hqdefault.jpg`} atl=""/>
                </div>
                <div className="profile-friends-name">
                  <Link to="">Bảo Ngọc</Link>
                </div>
              </Col>
              <Col span={8}>
                <div className="profile-galerry-img">
                  <img src={`https://2.bp.blogspot.com/-AX9DuH5Sjos/UeAs8QFXCGI/AAAAAAAAE5o/LbVCOeVHBv8/s1600/hinh-anh-gai-xinh-hd-taihinhnendep.com-4.jpg`} atl=""/>
                </div>
                <div className="profile-friends-name">
                  <Link to="">Bảo Ngọc</Link>
                </div>
              </Col>
              <Col span={8}>
                <div className="profile-galerry-img">
                  <img src={`https://tse1.mm.bing.net/th?id=OIP.LBCnQ49IjAqFFQ3zQimkSgHaJQ&pid=Api&P=0&w=300&h=300`} atl=""/>
                </div>
                <div className="profile-friends-name">
                  <Link to="">Bảo Ngọc</Link>
                </div>
              </Col>
              <Col span={8}>
                <div className="profile-galerry-img">
                  <img src={`https://tse4.mm.bing.net/th?id=OIP.pjXYe6_ccZrOYuDbS6AChQHaKm&pid=Api&P=0&w=300&h=300`} atl=""/>
                </div>
                <div className="profile-friends-name">
                  <Link to="">Bảo Ngọc</Link>
                </div>
              </Col>
            </Row>
          </div>
          <div className="box-footer">
              <ul>
                  <li><GoPrimitiveDot />
                      <Link to="privacy">Quyền riêng tư</Link>
                  </li>
                  <li><GoPrimitiveDot />
                      <Link to="rules-mohi">Điều khoản</Link>
                  </li>
                  <li><GoPrimitiveDot />
                      <Link to="privacy-policy">Chính sách bảo mật</Link>
                  </li>
                  <li><GoPrimitiveDot />
                      <Link to="help">Trợ giúp</Link>
                  </li>
              </ul>
              <div className="brand-app">Mohi &copy; {yearNow}</div>
          </div>
        </div>
      </Col>
    </>
  )
}

export default SiderProfile;
