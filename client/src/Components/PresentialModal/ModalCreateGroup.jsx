import React from 'react';
import './ModalCreateGroup.css';
import { MdPublic } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import {Select } from 'antd';
import InputModalCreateGroup from './inputModalCreateGroup.jsx';

function ModalCreateGroup() {
  const {Option} = Select;

    return (
        <React.Fragment>
            <div className="modal-custom modal-create-group-container">
                <div className="modal-create-group-header">
                    <h5>Tạo nhóm mới</h5>
                </div>
                <div className="modal-create-group-main">
                    <div className="modal-create-group-introduce">
                        <div className="modal-create-group-introduce-img">
                            <img src="https://cdn.timviec365.vn/pictures/images/cach-tao-moi-truong-lam-viec-nhom-hieu-qua-1.jpg" alt="" />
                        </div>
                        <p>Nhóm là không gian tuyệt vời để hoàn thành công việc và chỉ liên lạc với những người bạn muốn. Hãy chia sẻ ảnh và video, trò chuyện, lên kế hoạch và nhiều hoạt động khác.</p>
                    </div>
                    <div className="modal-create-group-content">
                        <form className="modal-create-group-content-form">
                            <label htmlFor="">Đặt tên nhóm</label>
                            <input type="text" />
                            <label htmlFor="">Thêm mô tả nhóm</label>
                            <div className="modal-create-group-content-input">
                                <InputModalCreateGroup />
                            </div>
                            <div className="modal-create-group-private">
                                <Select defaultValue="public">
                                    <Option value="public" ><MdPublic /> Công khai</Option>
                                    <Option value="private"><FaLock /> Nhóm kín</Option>
                                </Select>
                            </div>
                            <div className="modal-create-group-button">
                                <button type="submit">Tạo</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
                <div className="modal-create-group-footer">
                </div>
            </div>
        </React.Fragment>
    )
}

export default ModalCreateGroup;