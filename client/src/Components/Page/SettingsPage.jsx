import React, { useState, useEffect } from 'react';
import './SettingsPage.css';
import { MdPublic } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { Select } from 'antd';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Tooltip } from 'antd';
import { RiErrorWarningLine } from "react-icons/ri";
import { toggleStatusPresentialModal } from './../../Actions/index.jsx';


function SettingsPage() {

  const { register, handleSubmit, errors, setError } = useForm();
  const [errorPhone, setErrorPhone] = useState('Vui lòng nhập đúng số điện thoại');
  const [errorEmail, setErrorEmail] = useState('Vui lòng nhập đúng email');

  const onSubmit = (data) => {

  }
  const { Option } = Select;
  const dispatch = useDispatch();
  const [editSettingPage, setEditSettingPage] = useState(false);
  function editPageFunc() {
    setEditSettingPage(!editSettingPage);
  }
  function conuntLikePageFunc() {
    dispatch(toggleStatusPresentialModal('modal_count_like_page'));
  }
  const validateInputPhone = (value) => {
    /* Phone Test */
    var filter = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (filter.test(value)) {
      return true;
    }

    return false;
  }

  const validateInputEmail = (value) => {
    var filter = /^[\w.+\-]+@gmail\.com$/;
    if (filter.test(value)) {
      return true;
    }
    return false;
  }

  return (<form onSubmit={handleSubmit(onSubmit)}>
    <React.Fragment>
      <div className="setting-page-container">
        <div className="setting-page-title">
          <h5>Cài đặt trang</h5>
        </div>
        {!editSettingPage ?
          <div className="setting-page-main">
            <div className="setting-page-content">
              <div className="setting-page-content-item">
                <h6>Tên nhóm</h6>
                <p>ReactJS Việt Nam</p>
              </div>
              <div className="setting-page-content-item">
                <h6>Mô tả</h6>
                <p>Đây là nhóm ReactJS Việt Nam Đây là nhóm ReactJS Việt Nam Đây là nhóm ReactJS Việt Nam Đây là nhóm ReactJS Việt Nam</p>
              </div>
              <div className="setting-page-content-item">
                <h6>Số điện thoại</h6>
                <p>0977750450</p>
              </div>
              <div className="setting-page-content-item">
                <h6>Email</h6>
                <p>reactjs102@gmail.com</p>
              </div>
              <div className="setting-page-content-item">
                <h6>Hạng mục</h6>
                <p><FaLock />Doanh nghiệp</p>
              </div>
              <div className="setting-page-content-item">
                <h6>Liên kết tới nhóm</h6>
                <p>mohi.vn/groups/54451/</p>
              </div>
              <div className="setting-page-content-item">
<h6>Số người tham gia nhóm</h6>
                <p>150 người đã tham gia nhóm</p>
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
                <input type="text" name="" id="" defaultValue="ReactJS Việt Nam" />
              </div>
              <div className="setting-page-content-item">
                <h6>Mô tả</h6>
                <textarea rows="3" defaultValue="Đây là trang ReactJS Việt Nam Đây là trang ReactJS Việt Nam Đây là trang ReactJS Việt Nam Đây là trang ReactJS Việt Nam"></textarea>
              </div>
              <div className="setting-page-content-item">
                <h6>Số điện thoại trang</h6>
                <div className="setting-page-content-item-input">
                  <input
                    type="text"
                    defaultValue="0977750450"
                    name="page_phone"
                    ref={register({
                      validate: value => validateInputPhone(value)
                    })} style={errors.page_phone
                      ? {
                        border: '1px solid red'
                      }
                      : null} /> {
                    errors.page_phone && <Tooltip placement="bottom" title={<p className="error_page_validate" > {
                      errorPhone
                    }
                    </p>}><RiErrorWarningLine className="error_page" /></Tooltip>
                  }
                </div>

              </div>
              <div className="setting-page-content-item">
                <h6>Email trang</h6>
                <div className="setting-page-content-item-input">
                  <input
                    type="email"
                    defaultValue="reactjs102@gmail.com"
                    name="page_email"
                    ref={register({
                      validate: value => validateInputEmail(value)
                    })} style={errors.page_email
                      ? {
                        border: '1px solid red'
                      }
                      : null} /> {
                    errors.page_email && <Tooltip placement="right" title={<p className="error_page_validate" > {
                      errorEmail
                    }
                    </p>}><RiErrorWarningLine className="error_page" /></Tooltip>
                  }
                </div>
              </div>
              <div className="setting-page-content-item">
                <h6>Hạng mục</h6>
                <Select style={{ width: '100%' }} defaultValue="company">
<Option value="health" ><MdPublic /> Sức khỏe</Option>
                  <Option value="public" ><MdPublic /> Cộng đồng</Option>
                  <Option value="company"><FaLock /> Doanh nghiệp</Option>
                </Select>
              </div>
              <div className="setting-page-content-item">
                <h6>Liên kết tới trang</h6>
                <p> mohi.vn/pages/</p>
                <input type="text" placeholder="54451" />
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
  </form>)
}

export default SettingsPage;
