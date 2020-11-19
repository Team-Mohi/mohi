import React from 'react';
import './SettingMenu.css';
import { Link } from 'react-router-dom';

function MenuSetting(){

  const logoutFunc = () => {
    localStorage.removeItem('ustk');
    window.location = '/'
  }

  return(
    <ul className="setting-menu-container">
        <li className="setting-menu-items">
            <Link to="/pages">Quản lý trang</Link>
        </li>
        <li className="setting-menu-items">
            <Link to="/groups">Quản lý nhóm</Link>
        </li>
        <li className="setting-menu-items">
            <Link to="">Nhật ký hoạt động</Link>
        </li>
        <li className="setting-menu-items">
            <Link to="/setting">Cài đặt</Link>
        </li>
        <li className="setting-menu-items" onClick={logoutFunc}>
            <span >Đăng xuất</span>
        </li>
    </ul>
)
};

export default MenuSetting;
