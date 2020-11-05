import React from 'react';
import './SettingMenu.css';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
export const menusetting = (
    <Menu className="setting-menu-container">
        <Menu.Item className="setting-menu-items">
            <Link to="">Quản lý trang</Link>
        </Menu.Item>
        <Menu.Item className="setting-menu-items">
            <Link to="">Quản lý nhóm</Link>
        </Menu.Item>
        <Menu.Item className="setting-menu-items">
            <Link to="">Nhật ký hoạt động</Link>
        </Menu.Item>
        <Menu.Item className="setting-menu-items">
            <Link to="">Tùy chọn bảng tin</Link>
        </Menu.Item>
        <Menu.Item className="setting-menu-items">
            <Link to="/setting">Cài đặt</Link>
        </Menu.Item>
        <Menu.Item className="setting-menu-items">
            <Link to="/logout">Đăng xuất</Link>
        </Menu.Item>
    </Menu>
);