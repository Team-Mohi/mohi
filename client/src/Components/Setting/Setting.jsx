import React from 'react';
import './Setting.css';
import { AiOutlinePlusCircle, AiFillEdit } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { MdSecurity } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
import { GrHide } from "react-icons/gr"
import { TiInfoLarge } from "react-icons/ti";
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import { Descriptions, Button, Collapse } from 'antd';

const { Panel } = Collapse;
console.log(Collapse);


const General = () => {
  return (
    <div className="general-container">
      <div className="general-title">
        <h5> Cài đặt tài khoản chung</h5>
      </div>
      <div className="general-content">
        <Collapse defaultActiveKey={['0']}>
          <Panel header={<SettingGeneralName />} key="1">
            <div className="setting-general-name">
              <b>Tên của bạn sẽ thay đổi trên Mohi</b>
              <form>
                <div className="setting-form-edit-name">
                  <label htmlFor="">Họ</label>
                  <input type="text" value="Vũ" />
                </div>
                <div className="setting-form-edit-name">
                  <label htmlFor="">Tên</label>
                  <input type="text" value="Lập" />
                </div>
                <div className="setting-form-edit-name">
                  <label htmlFor="">Tên khác</label>
                  <Link to="/profile/about/contact-info">Thêm tên khác</Link>
                </div>
                <div className="setting-form-edit-name-button">
                  <button type="submit">Xác nhận thay đổi</button>
                  <button type="submit">Hủy</button>
                </div>

              </form>
            </div>

          </Panel>
          <Panel header={<SettingGeneralNameUser />} key="2">
            <div className="setting-general-name">
              <b>Tên người dùng công khai của bạn giống với tên trong địa chỉ dòng thời gian của bạn</b>
              <form>
                <div className="setting-form-edit-name">
                  <label htmlFor="">Tên người dùng</label>
                  <input type="text" value="vtl2406" />
                </div>
                <div className="setting-form-edit-name-button">
                  <button type="submit">Xác nhận thay đổi</button>
                  <button type="submit">Hủy</button>
                </div>

              </form>
            </div>
          </Panel>
          <Panel header={<SettingGeneralContact />} key="3">
            <div className="setting-general-email">
              <div className="setting-general-email-title">
                <b>Email hiện tại của bạn là: lap24062000@gmail.com</b>
              </div>
              <Link to="/profile/about/contact-info">Thêm email khác</Link>
              <div className="setting-form-edit-email-button">
                <button type="submit"><Link to="/setting">Đóng</Link></button>
              </div>
            </div>
          </Panel>
        </Collapse>
      </div>
    </div>
  )
}
const SettingGeneralName = () => {
  return (
    <>
      <Descriptions className="general-information">
        <Descriptions.Item className="general-item">Tên</Descriptions.Item>
        <Descriptions.Item >
          <b>Lập Vũ</b>
        </Descriptions.Item>
        <Descriptions.Item className="setting-general-button">
          <button type="submit" type="info">Chỉnh sửa</button>
        </Descriptions.Item>
        <SettingGeneralName />
      </Descriptions>
    </>
  );
}
const SettingGeneralNameUser = () => {
  return (
    <Descriptions className="general-information">
      <Descriptions.Item className="general-item">Tên người dùng</Descriptions.Item>
      <Descriptions.Item>
        https://www.mohi.com/vtl2406
          </Descriptions.Item>
      <Descriptions.Item className="setting-general-button">
        <button type="submit">Chỉnh sửa</button>
      </Descriptions.Item>
    </Descriptions>
  );
}
const SettingGeneralContact = () => {
  return (
    <Descriptions className="general-information">
      <Descriptions.Item className="general-item">Liên hệ</Descriptions.Item>
      <Descriptions.Item>
        Email : lap24062000@gmail.com
          </Descriptions.Item>
      <Descriptions.Item className="setting-general-button">
        <button type="submit">Chỉnh sửa</button>
      </Descriptions.Item>
    </Descriptions>
  );
}
const Password = () => {

  return (
    <>
      <div className="general-container">
        <div className="general-title">
          <h5> Đổi mật khẩu</h5>
        </div>
        <div className="setting-password">
          <b>	Bạn nên sử dụng mật khẩu mạnh mà mình chưa sử dụng ở đâu khác</b>
          <form >
            <div className="setting-form-edit-password">
              <label htmlFor="">Mật khẩu hiện tại</label>
              <input type="password" />
            </div>
            <div className="setting-form-edit-password">
              <label htmlFor="">Mật khẩu mới</label>
              <input type="password" />
            </div>
            <div className="setting-form-edit-password">
              <label htmlFor="">Nhập lại mật khẩu mới</label>
              <input type="password" />
            </div>
            <div className="setting-form-edit-password">
              <Link to="/profile/about/contact-info">Quên mật khẩu?</Link>
            </div>

            <div className="setting-form-edit-name-button">
              <button type="submit">Xác nhận thay đổi</button>
              <button type="submit">Hủy</button>
            </div>

          </form>

        </div>
      </div>
    </>
  )
}

const Contact = () => {
  return (
    <>
      <div className="general-container">
        <div className="general-title">
          <h5> Thông tin của bạn trên Mohi</h5>
        </div>
        <div className="setting-info">
          <p>	Bạn nên sử dụng mật khẩu mạnh mà mình chưa sử dụng ở đâu khác</p>
          

        </div>
      </div>
    </>
  )
}

function Setting() {

  const path = useLocation().pathname.split('/');
  const isActive = path[2];

  return (
    <>
      <div className="setting-container">
        <div className="setting-content">
          <div className="setting-content-left">
            <ul>
              <Link to="/setting/general">
                <li exact className={isActive === 'general' || !isActive ? 'active' : ''}>
                  <span><FiSettings /> Cài đặt chung</span>
                </li>
              </Link>
              <Link to="/setting/password">
                <li className={isActive === 'password' ? 'active' : ''}>
                  <span><MdSecurity /> Đổi mật khẩu</span>
                </li>
              </Link>
              <Link to="/profile/about">
                <li className={isActive === 'contact' ? 'active' : ''}>
                  <span><TiInfoLarge /> Thông tin của bạn trên Mohi</span>
                </li>
              </Link>
            </ul>
          </div>
          <div className="setting-content-right">
            <Switch>
              <Route path="/setting/general" component={General} />
              <Route path="/setting/password" component={Password} />
              <Route path="/setting/contact" component={Contact} />
              <Route component={General} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  )
}

export default Setting;