import React from 'react';
import { AiFillPicture } from 'react-icons/ai';
import { Link, Route, Switch } from 'react-router-dom';
import { FaCommentAlt } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import './Notifications.css';

function Notifications() {
  const Notifications = () => {
    return (
      <>
        <div className="noti-all">
          <div className="noti-container">
            <div className="noti-title">
              <h4> Thông báo của bạn</h4>
              <a href=""> Đánh dấu tất cả là đã đọc</a>
            </div>
            <div className="noti-main-content">
              <div className="noti-content-avatar">
                <img src="https://i.pinimg.com/564x/7e/52/92/7e5292bb1e953baea235bb31a043806c.jpg" alt="" />
              </div>
              <div className="noti-content">
                <div className="noti-notification">
                  <b>Nguyễn Văn Phước</b> đã nhắc đến bạn trong 1 bình luận trong nhóm <b to="/abc">Gái xinh chọn lọc</b>
                </div>
                <div className="noti-status">
                  <FaCommentAlt /> 1 phút trước
                </div>
              </div>
              <div><BsThreeDotsVertical /></div>
            </div>
            <div className="noti-main-content">
              <div className="noti-content-avatar">
                <img src="https://i.pinimg.com/564x/7e/52/92/7e5292bb1e953baea235bb31a043806c.jpg" alt="" />
              </div>
              <div className="noti-content">
                <div className="noti-notification">
                  <b>Nguyễn Văn Phước</b> đã nhắc đến bạn trong 1 bình luận trong nhóm <b to="/abc">Gái xinh chọn lọc</b>
                </div>
                <div className="noti-status">
                  <FaCommentAlt /> 1 phút trước
                </div>
              </div>
              <div><BsThreeDotsVertical /></div>
            </div>
            <div className="noti-main-content">
              <div className="noti-content-avatar">
                <img src="https://i.pinimg.com/564x/7e/52/92/7e5292bb1e953baea235bb31a043806c.jpg" alt="" />
              </div>
              <div className="noti-content">
                <div className="noti-notification">
                  <b>Nguyễn Văn Phước</b> đã nhắc đến bạn trong 1 bình luận trong nhóm <b to="/abc">Gái xinh chọn lọc</b>
                </div>
                <div className="noti-status">
                  <FaCommentAlt /> 1 phút trước
                </div>
              </div>
              <div><BsThreeDotsVertical /></div>
            </div>
            <div className="noti-main-content">
              <div className="noti-content-avatar">
                <img src="https://i.pinimg.com/564x/7e/52/92/7e5292bb1e953baea235bb31a043806c.jpg" alt="" />
              </div>
              <div className="noti-content">
                <div className="noti-notification">
                  <b>Nguyễn Văn Phước</b> đã nhắc đến bạn trong 1 bình luận trong nhóm <b to="/abc">Gái xinh chọn lọc</b>
                </div>
                <div className="noti-status">
                  <FaCommentAlt /> 1 phút trước
                </div>
              </div>
              <div><BsThreeDotsVertical /></div>
            </div>
            <div className="noti-main-content">
              <div className="noti-content-avatar">
                <img src="https://i.pinimg.com/564x/7e/52/92/7e5292bb1e953baea235bb31a043806c.jpg" alt="" />
              </div>
              <div className="noti-content">
                <div className="noti-notification">
                  <b>Nguyễn Văn Phước</b> đã nhắc đến bạn trong 1 bình luận trong nhóm <b to="/abc">Gái xinh chọn lọc</b>
                </div>
                <div className="noti-status">
                  <FaCommentAlt /> 1 phút trước
                </div>
              </div>
              <div><BsThreeDotsVertical /></div>
            </div>
            <div className="noti-main-content">
              <div className="noti-content-avatar">
                <img src="https://i.pinimg.com/564x/7e/52/92/7e5292bb1e953baea235bb31a043806c.jpg" alt="" />
              </div>
              <div className="noti-content">
                <div className="noti-notification">
                  <b>Nguyễn Văn Phước</b> đã nhắc đến bạn trong 1 bình luận trong nhóm <b to="/abc">Gái xinh chọn lọc</b>
                </div>
                <div className="noti-status">
                  <FaCommentAlt /> 1 phút trước
                </div>
              </div>
              <div><BsThreeDotsVertical /></div>
            </div>
            <div className="noti-main-content">
              <div className="noti-content-avatar">
                <img src="https://i.pinimg.com/564x/7e/52/92/7e5292bb1e953baea235bb31a043806c.jpg" alt="" />
              </div>
              <div className="noti-content">
                <div className="noti-notification">
                  <b>Nguyễn Văn Phước</b> đã nhắc đến bạn trong 1 bình luận trong nhóm <b to="/abc">Gái xinh chọn lọc</b>
                </div>
                <div className="noti-status">
                  <FaCommentAlt /> 1 phút trước
                </div>
              </div>
              <div><BsThreeDotsVertical /></div>
            </div>
            <div className="noti-main-content">
              <div className="noti-content-avatar">
                <img src="https://i.pinimg.com/564x/7e/52/92/7e5292bb1e953baea235bb31a043806c.jpg" alt="" />
              </div>
              <div className="noti-content">
                <div className="noti-notification">
                  <b>Nguyễn Văn Phước</b> đã nhắc đến bạn trong 1 bình luận trong nhóm <b to="/abc">Gái xinh chọn lọc</b>
                </div>
                <div className="noti-status">
                  <FaCommentAlt /> 1 phút trước
                </div>
              </div>
              <div><BsThreeDotsVertical /></div>
            </div>
            <div className="noti-main-content">
              <div className="noti-content-avatar">
                <img src="https://i.pinimg.com/564x/7e/52/92/7e5292bb1e953baea235bb31a043806c.jpg" alt="" />
              </div>
              <div className="noti-content">
                <div className="noti-notification">
                  <b>Nguyễn Văn Phước</b> đã nhắc đến bạn trong 1 bình luận trong nhóm <b to="/abc">Gái xinh chọn lọc</b>
                </div>
                <div className="noti-status">
                  <FaCommentAlt /> 1 phút trước
                </div>
              </div>
              <div><BsThreeDotsVertical /></div>
            </div>
            <div className="noti-main-content">
              <div className="noti-content-avatar">
                <img src="https://i.pinimg.com/564x/7e/52/92/7e5292bb1e953baea235bb31a043806c.jpg" alt="" />
              </div>
              <div className="noti-content">
                <div className="noti-notification">
                  <b>Nguyễn Văn Phước</b> đã nhắc đến bạn trong 1 bình luận trong nhóm <b to="/abc">Gái xinh chọn lọc</b>
                </div>
                <div className="noti-status">
                  <FaCommentAlt /> 1 phút trước
                </div>
              </div>
              <div><BsThreeDotsVertical /></div>
            </div>
            <div className="noti-main-content">
              <div className="noti-content-avatar">
                <img src="https://i.pinimg.com/564x/7e/52/92/7e5292bb1e953baea235bb31a043806c.jpg" alt="" />
              </div>
              <div className="noti-content">
                <div className="noti-notification">
                  <b>Nguyễn Văn Phước</b> đã nhắc đến bạn trong 1 bình luận trong nhóm <b to="/abc">Gái xinh chọn lọc</b>
                </div>
                <div className="noti-status">
                  <FaCommentAlt /> 1 phút trước
                </div>
              </div>
              <div><BsThreeDotsVertical /></div>
            </div>
            <div className="noti-main-content">
              <div className="noti-content-avatar">
                <img src="https://i.pinimg.com/564x/7e/52/92/7e5292bb1e953baea235bb31a043806c.jpg" alt="" />
              </div>
              <div className="noti-content">
                <div className="noti-notification">
                  <b>Nguyễn Văn Phước</b> đã nhắc đến bạn trong 1 bình luận trong nhóm <b to="/abc">Gái xinh chọn lọc</b>
                </div>
                <div className="noti-status">
                  <FaCommentAlt /> 1 phút trước
                </div>
              </div>
              <div><BsThreeDotsVertical /></div>
            </div>
            <div className="noti-main-content">
              <div className="noti-content-avatar">
                <img src="https://i.pinimg.com/564x/7e/52/92/7e5292bb1e953baea235bb31a043806c.jpg" alt="" />
              </div>
              <div className="noti-content">
                <div className="noti-notification">
                  <b>Nguyễn Văn Phước</b> đã nhắc đến bạn trong 1 bình luận trong nhóm <b to="/abc">Gái xinh chọn lọc</b>
                </div>
                <div className="noti-status">
                  <FaCommentAlt /> 1 phút trước
                </div>
              </div>
              <div><BsThreeDotsVertical /></div>
            </div><div className="noti-main-content">
              <div className="noti-content-avatar">
                <img src="https://i.pinimg.com/564x/7e/52/92/7e5292bb1e953baea235bb31a043806c.jpg" alt="" />
              </div>
              <div className="noti-content">
                <div className="noti-notification">
                  <b>Nguyễn Văn Phước</b> đã nhắc đến bạn trong 1 bình luận trong nhóm <b to="/abc">Gái xinh chọn lọc</b>
                </div>
                <div className="noti-status">
                  <FaCommentAlt /> 1 phút trước
                </div>
              </div>
              <div><BsThreeDotsVertical /></div>
            </div>
            <div className="noti-main-content">
              <div className="noti-content-avatar">
                <img src="https://i.pinimg.com/564x/7e/52/92/7e5292bb1e953baea235bb31a043806c.jpg" alt="" />
              </div>
              <div className="noti-content">
                <div className="noti-notification">
                  <b>Nguyễn Văn Phước</b> đã nhắc đến bạn trong 1 bình luận trong nhóm <b to="/abc">Gái xinh chọn lọc</b>
                </div>
                <div className="noti-status">
                  <FaCommentAlt /> 1 phút trước
                </div>
              </div>
              <div><BsThreeDotsVertical /></div>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <Switch>
      <Route component={Notifications} />
    </Switch>
  )
}
export default Notifications;
