import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { AiOutlinePlusCircle, AiFillEdit } from "react-icons/ai";
import {Link, Route, Switch, useLocation} from 'react-router-dom';

const OverView = () => {
  return(
    <div className="about-content-right-overview">
      <div className="about-content-right-first">
        <div className="about-content-right-first-place-work">
          <div className="add-something">
            <div className="icon-add">
            <AiOutlinePlusCircle/>
            </div>
            <div className="title-add">
              <span>Thêm một nơi làm việc</span>
            </div>
          </div>
        </div>
        <div className="about-content-right-first-place-study">
          Nơi đang học
        </div>
        <div className="about-content-right-first-place-live">
          NƠi sống
        </div>
      </div>
      <div className="about-content-right-second">
        <ul>
          <li>
            0365610561
          </li>
          <li>
            phuocnv106@gmail.com
          </li>
          <li>
            thông tin khác
          </li>
          <li>
            05/02/2000
          </li>
          <li>
            <Link to=""><span>Chỉnh sửa thông tin liên hệ và cơ bản</span></Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

const Education = () => {
  return(
    <>
      <div className="about-content-education">
        <div className="job">
          <h6>Công việc</h6>
          <div className="add-something">
            <div className="icon-add">
            <AiOutlinePlusCircle/>
            </div>
            <div className="title-add">
              <span>Thêm một nơi làm việc</span>
            </div>
          </div>
          <div className="job-item">
            Công ty cổ phần SOC <span><AiFillEdit /></span>
          </div>
          <div className="job-item">
            Công ty cổ phần SOC
          </div>
        </div>
        <div className="collegs">
          <h6>Cao đẳng/đại học</h6>
          <div className="add-something">
            <div className="icon-add">
            <AiOutlinePlusCircle/>
            </div>
            <div className="title-add">
              <span>Thêm một trường cao đẳng/đại học</span>
            </div>
          </div>
          <div className="collegs-item">
            Cao đẳng FPT
          </div>
        </div>
        <div className="school">
          <h6>Trung học</h6>
          <div className="add-something">
            <div className="icon-add">
            <AiOutlinePlusCircle/>
            </div>
            <div className="title-add">
              <span>Thêm một trường trung học</span>
            </div>
          </div>
          <div className="school-item">
            Trung học phổ thông Nguyễn Huệ - Dăk Doa - Gia Lai
          </div>

        </div>
      </div>
    </>
  )
}

const  ContactInfo= () => {
  return(
    <>
      <div className="about-content-education">
        <div className="job">
          <h6>Email</h6>
          <div className="add-something">
            <div className="icon-add">
            <AiOutlinePlusCircle/>
            </div>
            <div className="title-add">
              <span>Thêm một email</span>
            </div>
          </div>
          <div className="job-item">
            phuocnv106@gmail.com<span><AiFillEdit /></span>
          </div>
          <div className="job-item">
            phuocnv107@gmail.com
          </div>
        </div>
        <div className="collegs">
          <h6>Số điện thoại</h6>
          <div className="add-something">
            <div className="icon-add">
            <AiOutlinePlusCircle/>
            </div>
            <div className="title-add">
              <span>Thêm một số điện thoại</span>
            </div>
          </div>
          <div className="collegs-item">
            0365610561
          </div>
        </div>
        <div className="school">
          <h6>Website</h6>
          <div className="add-something">
            <div className="icon-add">
            <AiOutlinePlusCircle/>
            </div>
            <div className="title-add">
              <span>Thêm một link website</span>
            </div>
          </div>
          <div className="school-item">
            ppmedia.xyz
          </div>
        </div>
      </div>
    </>
  )
}

const Bio = () => {
  return(
    <>
    <div className="about-content-education">
      <div className="job">
        <h6>Giới thiệu về bản thân</h6>
        <div className="add-something">
          <div className="icon-add">
          <AiOutlinePlusCircle/>
          </div>
          <div className="title-add">
            <span>Viết vài điều về bản thân bạn</span>
          </div>
        </div>
        <div className="job-item">
          tôi là developer<span><AiFillEdit /></span>
        </div>
      </div>
      <div className="collegs">
        <h6>Các tên khác</h6>
        <div className="add-something">
          <div className="icon-add">
          <AiOutlinePlusCircle/>
          </div>
          <div className="title-add">
            <span>Thêm một biệt danh hoặc tên khai sinh của bạn</span>
          </div>
        </div>
        <div className="collegs-item">
          Rin<span><AiFillEdit /> <small>(Hiển thị ở đầu trang cá nhân)</small></span>
        </div>
      </div>
    </div>
    </>
  )
}

function About(){

  const path = useLocation().pathname.split('/');
  const isActive = path[3];

  return(
    <>
      <div className="about-container">
        <div className="about-header">
          <FaUserAlt/><h5>Giới thiệu</h5>
        </div>
        <div className="about-content">
          <div className="about-content-left">
            <ul>
              <Link to="/profile/about/overview">
                <li className={isActive === 'overview' || !isActive ? 'active' : ''}>
                  <span>Tổng quan</span>
                </li>
              </Link>
              <Link to="/profile/about/education">
                <li className={isActive === 'education' ? 'active' : ''}>
                  <span>Công việc và học vấn</span>
                </li>
              </Link>
              <Link to="/profile/about/contact-info">
                <li className={isActive === 'contact-info'  ? 'active' : ''}>
                  <span>Thông tin liên hệ và cơ bản</span>
                </li>
              </Link>
              <Link to="/profile/about/bio">
                <li className={isActive === 'bio'  ? 'active' : ''}>
                  <span>Chi tiết về bạn</span>
                </li>
              </Link>
            </ul>
          </div>
          <div className="about-content-right">
            <Switch>
              <Route path="/profile/about/overview" component={OverView}/>
              <Route path="/profile/about/education" component={Education}/>
              <Route path="/profile/about/contact-info" component={ContactInfo}/>
              <Route path="/profile/about/bio" component={Bio}/>
              <Route  component={OverView}/>
            </Switch>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
