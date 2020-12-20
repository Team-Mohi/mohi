import React from 'react';
import './SettingMenu.css';
import { Link } from 'react-router-dom';

function MenuSetting(){
  const info = JSON.parse(localStorage.getItem('ustk')).info

  const logoutFunc = () => {
    localStorage.removeItem('ustk');
    window.location = '/'
  }

  return(
    <ul className="setting-menu-container">
        <Link to={"/profile/"+ info.user_username+"/activity-log"}>
          <li className="setting-menu-items">
              <span >Nhật ký hoạt động</span>
          </li>
        </Link>
        <Link to="/setting">
          <li className="setting-menu-items">
              <span >Cài đặt</span>
          </li>
        </Link>
        <li className="setting-menu-items" onClick={logoutFunc}>
            <span >Đăng xuất</span>
        </li>
    </ul>
)
};

export default MenuSetting;
