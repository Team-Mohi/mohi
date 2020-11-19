import React, { useState } from 'react';
import './SettingsPage.css';
import { MdPublic } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { Select } from 'antd';
import {Link} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { toggleStatusPresentialModal } from './../../Actions/index.jsx';


function SettingsPage() {

  const { Option } = Select;
  const dispatch = useDispatch();
  const [editSettingPage, setEditSettingPage] = useState(false);
  function editPageFunc() {
    setEditSettingPage(!editSettingPage);
  }
  function conuntLikePageFunc(){
    dispatch(toggleStatusPresentialModal('modal_count_like_page'));
  }

  return (
    <React.Fragment>
      <div className="setting-page-container">
        <div className="setting-page-title">
          <h5>Cài đặt trang</h5>
        </div>
        {!editSettingPage ?
          <div className="setting-page-main">
            <div className="setting-page-content">
              <div className="setting-page-content-item">
                <h6>Tên trang</h6>
                <p>ReactJS Việt Nam</p>
              </div>
              <div className="setting-page-content-item">
                <h6>Mô tả</h6>
                <p>Đây là trang ReactJS Việt Nam Đây là trang ReactJS Việt Nam Đây là trang ReactJS Việt Nam Đây là trang ReactJS Việt Nam</p>
              </div>
              <div className="setting-page-content-item">
                <h6>Số điện thoại trang</h6>
                <p>0977750450</p>
              </div>
              <div className="setting-page-content-item">
                <h6>Email trang</h6>
                <p>reactjs102@gmail.com</p>
              </div>
              <div className="setting-page-content-item">
                <h6>Thể loại page</h6>
                <p><FaLock />Doanh nghiệp</p>
              </div>
              <div className="setting-page-content-item">
                <h6>Số người thích trang</h6>
                <p>150 người đã thích trang</p>
              </div>
            </div>
            <div className="setting-page-edit-button">
              <button onClick={editPageFunc}>Sửa đổi</button>
            </div>
          </div>
          :
          <div className="setting-page-main">
            <div className="setting-page-content">
              <div className="setting-page-content-item">
                <h6>Tên trang</h6>
                <input type="text" name="" id="" placeholder="ReactJS Việt Nam" />
              </div>
              <div className="setting-page-content-item">
                <h6>Mô tả</h6>
                <textarea rows="3">Đây là trang ReactJS Việt Nam Đây là trang ReactJS Việt Nam Đây là trang ReactJS Việt Nam Đây là trang ReactJS Việt Nam</textarea>
              </div>
              <div className="setting-page-content-item">
                <h6>Số điện thoại trang</h6>
                <input type="text" placeholder="0977750450" />
              </div>
              <div className="setting-page-content-item">
                <h6>Email trang</h6>
                <input type="email" placeholder="reactjs102@gmail.com" />
              </div>
              <div className="setting-page-content-item">
                <h6>Thể loại page</h6>
                <Select style={{ width: '100%' }} defaultValue="company">
                  <Option value="health" ><MdPublic /> Sức khỏe</Option>
                  <Option value="public" ><MdPublic /> Cộng đồng</Option>
                  <Option value="company"><FaLock /> Doanh nghiệp</Option>
                </Select>
              </div>
              <div className="setting-page-content-item">
                <h6>Số người thích trang</h6>
                <Link onClick={conuntLikePageFunc}>150 người đã thích trang</Link>
              </div>
            </div>
            <div className="setting-page-edit-button">
              <button type="submit" onClick={editPageFunc}>Xong</button>
            </div>
          </div>
        }

      </div>
    </React.Fragment>
  )
}

export default SettingsPage;
