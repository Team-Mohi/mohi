import React from 'react';
import './MessengerMenu.css';
import { Menu } from 'antd';
import { Link} from 'react-router-dom';
import { FaDotCircle, FaShare } from 'react-icons/fa';

export const menumessenger = (
    <Menu className="messenger-menu-container">
        <div className="menu-dropdown-scroll">
            <div className="messenger-menu-title">
                <h5>Gần đây</h5>
                <Link to="/friendrequests">Tin nhắn mới</Link>
                <Link >Nhóm mới</Link>
            </div>
            <div className="menu-dropdown-scroll-thumb">
                <Menu.Item className="menu-items">

                    <div className="messenger-menu">
                        <div className="messenger-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="messenger-menu-info">
                            <div className="messenger-menu-name">
                                <Link to="">
                                    Hồ Thị Vân Anh
                                </Link>
                            </div>
                            <div className="messenger-menu-mutual-friends">
                                <a >
                                    anh đang làm gì thếaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </a>
                            </div>
                        </div>
                        <div className="messenger-menu-right">
                            <p>2:20pm</p>
                            <p><FaDotCircle /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="menu-items">

                    <div className="messenger-menu">
                        <div className="messenger-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="messenger-menu-info">
                            <div className="messenger-menu-name">
                                <Link to="">
                                    Hồ Thị Vân Anh
                                </Link>
                            </div>
                            <div className="messenger-menu-mutual-friends">
                                <a >
                                    <FaShare /> anh đang làm gì thế
                                </a>
                            </div>
                        </div>
                        <div className="messenger-menu-right">
                            <p>2:20pm</p>
                            <p><FaDotCircle /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="menu-items">

                    <div className="messenger-menu">
                        <div className="messenger-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="messenger-menu-info">
                            <div className="messenger-menu-name">
                                <Link to="">
                                    Hồ Thị Vân Anh
                                </Link>
                            </div>
                            <div className="messenger-menu-mutual-friends">
                                <a >
                                    <FaShare /> anh đang làm gì thếaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </a>
                            </div>
                        </div>
                        <div className="messenger-menu-right">
                            <p>2:20pm</p>
                            <p><FaDotCircle /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="menu-items">

                    <div className="messenger-menu">
                        <div className="messenger-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="messenger-menu-info">
                            <div className="messenger-menu-name">
                                <Link to="">
                                    Hồ Thị Vân Anh
                                </Link>
                            </div>
                            <div className="messenger-menu-mutual-friends">
                                <a >
                                    <FaShare /> anh đang làm gì thếaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </a>
                            </div>
                        </div>
                        <div className="messenger-menu-right">
                            <p>2:20pm</p>
                            <p><FaDotCircle /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="menu-items">

                    <div className="messenger-menu">
                        <div className="messenger-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="messenger-menu-info">
                            <div className="messenger-menu-name">
                                <Link to="">
                                    Hồ Thị Vân Anh
                                </Link>
                            </div>
                            <div className="messenger-menu-mutual-friends">
                                <a >
                                    <FaShare /> anh đang làm gì thếaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </a>
                            </div>
                        </div>
                        <div className="messenger-menu-right">
                            <p>2:20pm</p>
                            <p><FaDotCircle /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="menu-items">

                    <div className="messenger-menu">
                        <div className="messenger-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="messenger-menu-info">
                            <div className="messenger-menu-name">
                                <Link to="">
                                    Hồ Thị Vân Anh
                                </Link>
                            </div>
                            <div className="messenger-menu-mutual-friends">
                                <a >
                                    <FaShare /> anh đang làm gì thếaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </a>
                            </div>
                        </div>
                        <div className="messenger-menu-right">
                            <p>2:20pm</p>
                            <p><FaDotCircle /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="menu-items">

                    <div className="messenger-menu">
                        <div className="messenger-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="messenger-menu-info">
                            <div className="messenger-menu-name">
                                <Link to="">
                                    Hồ Thị Vân Anh
                                </Link>
                            </div>
                            <div className="messenger-menu-mutual-friends">
                                <a >
                                    <FaShare /> anh đang làm gì thếaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </a>
                            </div>
                        </div>
                        <div className="messenger-menu-right">
                            <p>2:20pm</p>
                            <p><FaDotCircle /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="menu-items">

                    <div className="messenger-menu">
                        <div className="messenger-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="messenger-menu-info">
                            <div className="messenger-menu-name">
                                <Link to="">
                                    Hồ Thị Vân Anh
                                </Link>
                            </div>
                            <div className="messenger-menu-mutual-friends">
                                <a >
                                    <FaShare /> anh đang làm gì thếaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </a>
                            </div>
                        </div>
                        <div className="messenger-menu-right">
                            <p>2:20pm</p>
                            <p><FaDotCircle /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="menu-items">

                    <div className="messenger-menu">
                        <div className="messenger-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="messenger-menu-info">
                            <div className="messenger-menu-name">
                                <Link to="">
                                    Hồ Thị Vân Anh
                                </Link>
                            </div>
                            <div className="messenger-menu-mutual-friends">
                                <a >
                                    <FaShare /> anh đang làm gì thếaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </a>
                            </div>
                        </div>
                        <div className="messenger-menu-right">
                            <p>2:20pm</p>
                            <p><FaDotCircle /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="menu-items">

                    <div className="messenger-menu">
                        <div className="messenger-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="messenger-menu-info">
                            <div className="messenger-menu-name">
                                <Link to="">
                                    Hồ Thị Vân Anh
                                </Link>
                            </div>
                            <div className="messenger-menu-mutual-friends">
                                <a >
                                    <FaShare /> anh đang làm gì thếaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </a>
                            </div>
                        </div>
                        <div className="messenger-menu-right">
                            <p>2:20pm</p>
                            <p><FaDotCircle /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="menu-items">

                    <div className="messenger-menu">
                        <div className="messenger-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="messenger-menu-info">
                            <div className="messenger-menu-name">
                                <Link to="">
                                    Hồ Thị Vân Anh
                                </Link>
                            </div>
                            <div className="messenger-menu-mutual-friends">
                                <a >
                                    <FaShare /> anh đang làm gì thếaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </a>
                            </div>
                        </div>
                        <div className="messenger-menu-right">
                            <p>2:20pm</p>
                            <p><FaDotCircle /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="menu-items">

                    <div className="messenger-menu">
                        <div className="messenger-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="messenger-menu-info">
                            <div className="messenger-menu-name">
                                <Link to="">
                                    Hồ Thị Vân Anh
                                </Link>
                            </div>
                            <div className="messenger-menu-mutual-friends">
                                <a >
                                    <FaShare /> anh đang làm gì thếaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </a>
                            </div>
                        </div>
                        <div className="messenger-menu-right">
                            <p>2:20pm</p>
                            <p><FaDotCircle /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="menu-items">

                    <div className="messenger-menu">
                        <div className="messenger-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="messenger-menu-info">
                            <div className="messenger-menu-name">
                                <Link to="">
                                    Hồ Thị Vân Anh
                                </Link>
                            </div>
                            <div className="messenger-menu-mutual-friends">
                                <a >
                                    <FaShare /> anh đang làm gì thếaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </a>
                            </div>
                        </div>
                        <div className="messenger-menu-right">
                            <p>2:20pm</p>
                            <p><FaDotCircle /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="menu-items">

                    <div className="messenger-menu">
                        <div className="messenger-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="messenger-menu-info">
                            <div className="messenger-menu-name">
                                <Link to="">
                                    Hồ Thị Vân Anh
                                </Link>
                            </div>
                            <div className="messenger-menu-mutual-friends">
                                <a >
                                    <FaShare /> anh đang làm gì thếaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </a>
                            </div>
                        </div>
                        <div className="messenger-menu-right">
                            <p>2:20pm</p>
                            <p><FaDotCircle /></p>
                        </div>
                    </div>
                </Menu.Item>

            </div>

            <div className="footer-dropdown-menu" >
                <Link to="/messenger">Xem tất cả các tin nhắn</Link>
                <Link to="">Đánh dấu tất cả là đã đọc</Link>
            </div>
        </div>
    </Menu>
);
