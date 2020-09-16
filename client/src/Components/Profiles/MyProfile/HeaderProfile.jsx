import React from 'react';
import {Link} from 'react-router-dom';

function HeaderProfile(){
  return(
    <>
      <div className="profile-header">
        <div className="profile-header-container">
          <div className="profile-header-cover">
            <div className="profile-header-cover-container">
              <div className="profile-header-cover-img">
                <img src="images/gaixinh.jpg" alt="" />
              </div>
            </div>
            <div className="profile-header-cover-top-left">
              <span>Cập nhập ảnh bìa</span>
            </div>
            <div className="profile-header-cover-bottom-right">
              <div className="button-edit-profile-link">
                <button type="submit">Chỉnh sửa trang cá nhân</button>
              </div>
              <div className="button-view-history-action-profile">
                <button type="submit">Nhật kí hoạt động</button>
              </div>
            </div>
          </div>
          <div className="profile-header-timeline">
            <div className="profile-header-avatar">
              <div className="profile-header-avatar-container">
                <div className="profile-header-avatar-img">
                  <Link to="/profile">
                    <img src="images/gaixinh.jpg" alt="" />
                  </Link>
                </div>
              </div>
              <div className="profile-header-avatar-select">
                <div className="profile-header-avatar-select-active">
                  <div className="profile-header-avatar-update">
                    <div>icon</div>
                    <div>Cập nhật</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-header-timeline-container">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderProfile;
