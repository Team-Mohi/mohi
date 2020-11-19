import React from 'react';
import './ModalCreatePage.css';
import InputModalCreateGroup from './inputModalCreateGroup.jsx';
import { MdPublic } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { Select } from 'antd';

function ModalCreatePage() {
    const { Option } = Select;

    return (
        <React.Fragment>
            <div className="modal-custom modal-create-group-container">
                <div className="modal-create-group-header">
                    <h5>Tạo trang mới</h5>
                </div>
                <div className="modal-create-group-main">
                    <div className="modal-create-group-introduce">
                        <p>Kết nối và chia sẻ với mọi người trong cộng đồng, tổ chức, đội ngũ, nhóm hoặc câu lạc bộ của bạn.</p>
                        <div className="modal-create-group-introduce-img">
                            <img src="https://techinsight.com.vn/wp-content/uploads/2019/06/Untitled-1-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="modal-create-group-content">
                        <form className="modal-create-group-content-form">
                            <div className="modal-create-group-group">
                              <label htmlFor="">Đặt tên trang</label>
                              <input type="text" placeholder="Nhập tên trang"/>
                            </div>
                            <div className="modal-create-group-group">
                              <label htmlFor="">Mô tả trang</label>
                              <div className="modal-create-group-content-input">
                                  <InputModalCreateGroup />
                              </div>
                            </div>
                            <div className="modal-create-page-private">
                              <div className="modal-create-group-group">
                                <h6>Chọn hạng mục trang</h6>
                                <Select style={{ width: '100%' }} defaultValue="Hạng mục trang ...">
                                    <Option value="health" ><MdPublic /> Sức khỏe</Option>
                                    <Option value="public" ><MdPublic /> Cộng đồng</Option>
                                    <Option value="company"><FaLock /> Doanh nghiệp</Option>
                                </Select>
                              </div>
                              <div className="modal-create-group-group">
                                <h6>Chọn chế độ của trang</h6>

                                <Select style={{ width: '100%' }} defaultValue="public">
                                    <Option value="public" ><MdPublic /> Công khai</Option>
                                    <Option value="private"><FaLock /> Nhóm kín</Option>
                                </Select>
                              </div>
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

export default ModalCreatePage;
