import React  from 'react';
import { Link } from 'react-router-dom';
import { Menu} from 'antd';
import {  FaShare, FaSmileWink, FaCommentAlt } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import './NotificationsMenu.css';
export const menunoti = (
    <Menu className="noti-menu-container">
        <div className="menu-dropdown-scroll">
            <div className="noti-menu-title">
                <h5>Thông báo</h5>
                <div className="noti-menu-title-right">
                    <Link >Đánh dấu tất cả là đã đọc</Link>
                    <Link to="/friendrequests">Cài đặt</Link>
                </div>

            </div>
            <div className="menu-dropdown-scroll-thumb">

                <Menu.Item className="noti-menu-items">
                    <div className="noti-main-menu">
                        <div className="noti-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="noti-menu-info">
                            <div className="noti-menu-content">
                                <a>
                                    <b>Nguyễn Văn Phước</b>  và 52 người khác đã bày tỏ cảm xúc về một ảnh: Ngoài trời thì mưa xối xả, trong lòng adf èwefwefwf
                                </a>

                            </div>
                            <div className="noti-menu-status">
                                <FaSmileWink />
                                <span> 2 giờ trước</span>
                            </div>
                        </div>
                        <div className="noti-menu-right">
                            <img src="https://i.pinimg.com/564x/ad/cc/6a/adcc6a9757fd68e3e57f4cda10e6e856.jpg" alt="" />
                            <p><BsThreeDotsVertical /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="noti-menu-items">
                    <div className="noti-main-menu">
                        <div className="noti-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="noti-menu-info">
                            <div className="noti-menu-content">
                                <a>
                                    <b>Nguyễn Văn Phước </b> đã nhắc đến bạn trong 1 bình luận
                                </a>

                            </div>
                            <div className="noti-menu-status">
                                <FaCommentAlt />
                                <span> 2 giờ trước</span>
                            </div>
                        </div>
                        <div className="noti-menu-right">
                            <img src="https://i.pinimg.com/564x/ad/cc/6a/adcc6a9757fd68e3e57f4cda10e6e856.jpg" alt="" />
                            <p><BsThreeDotsVertical /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="noti-menu-items">
                    <div className="noti-main-menu">
                        <div className="noti-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="noti-menu-info">
                            <div className="noti-menu-content">
                                <a>
                                    <b>Nguyễn Văn Phước </b> đã chia sẻ ảnh của bạn
                                </a>

                            </div>
                            <div className="noti-menu-status">
                                <FaShare />
                                <span> 2 giờ trước</span>
                            </div>
                        </div>
                        <div className="noti-menu-right">
                            <img src="https://i.pinimg.com/564x/ad/cc/6a/adcc6a9757fd68e3e57f4cda10e6e856.jpg" alt="" />
                            <p><BsThreeDotsVertical /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="noti-menu-items">
                    <div className="noti-main-menu">
                        <div className="noti-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="noti-menu-info">
                            <div className="noti-menu-content">
                                <a>
                                    <b>Nguyễn Văn Phước </b> đã nhắc đến bạn trong 1 bình luận
                                </a>

                            </div>
                            <div className="noti-menu-status">
                                <FaCommentAlt />
                                <span> 2 giờ trước</span>
                            </div>
                        </div>
                        <div className="noti-menu-right">
                            <img src="https://i.pinimg.com/564x/ad/cc/6a/adcc6a9757fd68e3e57f4cda10e6e856.jpg" alt="" />
                            <p><BsThreeDotsVertical /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="noti-menu-items">
                    <div className="noti-main-menu">
                        <div className="noti-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="noti-menu-info">
                            <div className="noti-menu-content">
                                <a>
                                    <b>Nguyễn Văn Phước </b> đã nhắc đến bạn trong 1 bình luận
                                </a>

                            </div>
                            <div className="noti-menu-status">
                                <FaCommentAlt />
                                <span> 2 giờ trước</span>
                            </div>
                        </div>
                        <div className="noti-menu-right">
                            <img src="https://i.pinimg.com/564x/ad/cc/6a/adcc6a9757fd68e3e57f4cda10e6e856.jpg" alt="" />
                            <p><BsThreeDotsVertical /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="noti-menu-items">
                    <div className="noti-main-menu">
                        <div className="noti-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="noti-menu-info">
                            <div className="noti-menu-content">
                                <a>
                                    <b>Nguyễn Văn Phước </b> đã nhắc đến bạn trong 1 bình luận
                                </a>

                            </div>
                            <div className="noti-menu-status">
                                <FaCommentAlt />
                                <span> 2 giờ trước</span>
                            </div>
                        </div>
                        <div className="noti-menu-right">
                            <img src="https://i.pinimg.com/564x/ad/cc/6a/adcc6a9757fd68e3e57f4cda10e6e856.jpg" alt="" />
                            <p><BsThreeDotsVertical /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="noti-menu-items">
                    <div className="noti-main-menu">
                        <div className="noti-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="noti-menu-info">
                            <div className="noti-menu-content">
                                <a>
                                    <b>Nguyễn Văn Phước </b> đã nhắc đến bạn trong 1 bình luận
                                </a>

                            </div>
                            <div className="noti-menu-status">
                                <FaCommentAlt />
                                <span> 2 giờ trước</span>
                            </div>
                        </div>
                        <div className="noti-menu-right">
                            <img src="https://i.pinimg.com/564x/ad/cc/6a/adcc6a9757fd68e3e57f4cda10e6e856.jpg" alt="" />
                            <p><BsThreeDotsVertical /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="noti-menu-items">
                    <div className="noti-main-menu">
                        <div className="noti-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="noti-menu-info">
                            <div className="noti-menu-content">
                                <a>
                                    <b>Nguyễn Văn Phước </b> đã nhắc đến bạn trong 1 bình luận
                                </a>

                            </div>
                            <div className="noti-menu-status">
                                <FaCommentAlt />
                                <span> 2 giờ trước</span>
                            </div>
                        </div>
                        <div className="noti-menu-right">
                            <img src="https://i.pinimg.com/564x/ad/cc/6a/adcc6a9757fd68e3e57f4cda10e6e856.jpg" alt="" />
                            <p><BsThreeDotsVertical /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="noti-menu-items">
                    <div className="noti-main-menu">
                        <div className="noti-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="noti-menu-info">
                            <div className="noti-menu-content">
                                <a>
                                    <b>Nguyễn Văn Phước </b> đã nhắc đến bạn trong 1 bình luận
                                </a>

                            </div>
                            <div className="noti-menu-status">
                                <FaCommentAlt />
                                <span> 2 giờ trước</span>
                            </div>
                        </div>
                        <div className="noti-menu-right">
                            <img src="https://i.pinimg.com/564x/ad/cc/6a/adcc6a9757fd68e3e57f4cda10e6e856.jpg" alt="" />
                            <p><BsThreeDotsVertical /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="noti-menu-items">
                    <div className="noti-main-menu">
                        <div className="noti-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="noti-menu-info">
                            <div className="noti-menu-content">
                                <a>
                                    <b>Nguyễn Văn Phước </b> đã nhắc đến bạn trong 1 bình luận
                                </a>

                            </div>
                            <div className="noti-menu-status">
                                <FaCommentAlt />
                                <span> 2 giờ trước</span>
                            </div>
                        </div>
                        <div className="noti-menu-right">
                            <img src="https://i.pinimg.com/564x/ad/cc/6a/adcc6a9757fd68e3e57f4cda10e6e856.jpg" alt="" />
                            <p><BsThreeDotsVertical /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="noti-menu-items">
                    <div className="noti-main-menu">
                        <div className="noti-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="noti-menu-info">
                            <div className="noti-menu-content">
                                <a>
                                    <b>Nguyễn Văn Phước </b> đã nhắc đến bạn trong 1 bình luận
                                </a>

                            </div>
                            <div className="noti-menu-status">
                                <FaCommentAlt />
                                <span> 2 giờ trước</span>
                            </div>
                        </div>
                        <div className="noti-menu-right">
                            <img src="https://i.pinimg.com/564x/ad/cc/6a/adcc6a9757fd68e3e57f4cda10e6e856.jpg" alt="" />
                            <p><BsThreeDotsVertical /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="noti-menu-items">
                    <div className="noti-main-menu">
                        <div className="noti-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="noti-menu-info">
                            <div className="noti-menu-content">
                                <a>
                                    <b>Nguyễn Văn Phước </b> đã nhắc đến bạn trong 1 bình luận
                                </a>

                            </div>
                            <div className="noti-menu-status">
                                <FaCommentAlt />
                                <span> 2 giờ trước</span>
                            </div>
                        </div>
                        <div className="noti-menu-right">
                            <img src="https://i.pinimg.com/564x/ad/cc/6a/adcc6a9757fd68e3e57f4cda10e6e856.jpg" alt="" />
                            <p><BsThreeDotsVertical /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="noti-menu-items">
                    <div className="noti-main-menu">
                        <div className="noti-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="noti-menu-info">
                            <div className="noti-menu-content">
                                <a>
                                    <b>Nguyễn Văn Phước </b> đã nhắc đến bạn trong 1 bình luận
                                </a>

                            </div>
                            <div className="noti-menu-status">
                                <FaCommentAlt />
                                <span> 2 giờ trước</span>
                            </div>
                        </div>
                        <div className="noti-menu-right">
                            <img src="https://i.pinimg.com/564x/ad/cc/6a/adcc6a9757fd68e3e57f4cda10e6e856.jpg" alt="" />
                            <p><BsThreeDotsVertical /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="noti-menu-items">
                    <div className="noti-main-menu">
                        <div className="noti-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="noti-menu-info">
                            <div className="noti-menu-content">
                                <a>
                                    <b>Nguyễn Văn Phước </b> đã nhắc đến bạn trong 1 bình luận
                                </a>

                            </div>
                            <div className="noti-menu-status">
                                <FaCommentAlt />
                                <span> 2 giờ trước</span>
                            </div>
                        </div>
                        <div className="noti-menu-right">
                            <img src="https://i.pinimg.com/564x/ad/cc/6a/adcc6a9757fd68e3e57f4cda10e6e856.jpg" alt="" />
                            <p><BsThreeDotsVertical /></p>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item className="noti-menu-items">
                    <div className="noti-main-menu">
                        <div className="noti-menu-avatar">
                            <Link to="">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/s960x960/118943523_1217233628646223_8263972168525947345_o.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=3DHwSBguDtIAX9nw-Td&_nc_ht=scontent-sin6-1.xx&tp=7&oh=ac4947175cf0a07bc5cbc98e1be81e0b&oe=5F9AD6DF" alt="" />
                            </Link>
                        </div>
                        <div className="noti-menu-info">
                            <div className="noti-menu-content">
                                <a>
                                    <b>Nguyễn Văn Phước </b> đã nhắc đến bạn trong 1 bình luận
                                </a>

                            </div>
                            <div className="noti-menu-status">
                                <FaCommentAlt />
                                <span> 2 giờ trước</span>
                            </div>
                        </div>
                        <div className="noti-menu-right">
                            <img src="https://i.pinimg.com/564x/ad/cc/6a/adcc6a9757fd68e3e57f4cda10e6e856.jpg" alt="" />
                            <p><BsThreeDotsVertical /></p>
                        </div>
                    </div>
                </Menu.Item>

            </div>

            <div className="footer-dropdown-menu" >
                <Link to="/notifications">Xem tất cả </Link>
            </div>
        </div>
    </Menu>
);