import React, { useState } from 'react';
import './SettingGroup.css';
import { MdPublic } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { Select } from 'antd';
import {Link} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { toggleStatusPresentialModal } from './../../Actions/index.jsx';


function SettingGroup() {

  const { Option } = Select;
  const dispatch = useDispatch();
  const [editSettingGroup, setEditSettingGroup] = useState(false);
  function editGroupFunc() {
    setEditSettingGroup(!editSettingGroup);
  }
  function conuntJoinGroupFunc(){
    dispatch(toggleStatusPresentialModal('modal_count_join_group'));
  }

  return (
    <React.Fragment>
      <div className="setting-page-container">
        <div className="setting-page-title">
          <h5>Cài đặt nhóm</h5>
        </div>
        {!editSettingGroup ?
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
                <h6>Quyền riêng tư</h6>
                <p><FaLock />Nhóm kín</p>
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
              <button onClick={editGroupFunc}>Sửa đổi</button>
            </div>
          </div>
          :
          <div className="setting-page-main">
            <div className="setting-page-content">
              <div className="setting-page-content-item">
                <h6>Tên nhóm</h6>
                <input type="text" name="" id="" defaultValue="ReactJS Việt Nam" />
              </div>
              <div className="setting-page-content-item">
                <h6>Mô tả</h6>
                <textarea rows="3" defaultValue="Đây là nhóm ReactJS Việt Nam Đây là nhóm ReactJS Việt Nam Đây là nhóm ReactJS Việt Nam Đây là nhóm ReactJS Việt Nam"></textarea>
              </div>
              <div className="setting-page-content-item">
                <h6>Quyền riêng tư nhóm</h6>
                <Select style={{ width: '100%' }} defaultValue="private">
<Option value="public" ><MdPublic />Công khai</Option>
                  <Option value="private"><FaLock /> Nhóm kín</Option>
                </Select>
              </div>
              <div className="setting-page-content-item">
                <h6>Liên kết tới nhóm</h6>
                <p> mohi.vn/groups/</p>
               <input type="text" defaultValue="54451"/>
              </div>
              <div className="setting-page-content-item">
                <h6>Số người thích  </h6>
                <Link onClick={conuntJoinGroupFunc} to="">150 người đã tham gia nhóm</Link>
              </div>

            </div>
            <div className="setting-page-edit-button">
              <button type="submit" onClick={editGroupFunc}>Xong</button>
            </div>
          </div>
        }

      </div>

    </React.Fragment>
  )
}

export default SettingGroup;
