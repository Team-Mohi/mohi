import React from 'react';
import {Link} from 'react-router-dom';
import { FaUserPlus } from "react-icons/fa";

function FilterPeople(){
  return(
    <>
    <div className="filter-list-user">
      <h6>Mọi người</h6>
      <div className="filter-list-user-item-container">
        <div className="filter-list-user-item" >
          <div className="filter-list-user-item-avatar">
            <img src={`https://i.pinimg.com/originals/4c/20/8a/4c208adc5befb204a74947c5b2ca8937.jpg`} alt="" />
          </div>
          <div className="filter-list-user-item-info">
            <p className="filter-list-user-item-name"><Link to="">Nguyễn Văn Phước (Dịch Vụ Facebook)</Link></p>
            <small>Bạn bè</small>
            <p>SINH VIÊN tại Thợ hồ Và Công nhân Xây dựngSINH VIÊN tại Thợ hồ Và Công nhân Xây dựngSINH VIÊN tại Thợ hồ Và Công nhân Xây dựngSINH VIÊN tại Thợ hồ Và Công nhân Xây dựng</p>
            <p>22 bạn chung</p>
            <small>Sống tại An Nhơn</small>
          </div>
        </div>
        <div className="filter-list-user-item-action">
          <button type="button"><FaUserPlus/>Thêm bạn bè</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default FilterPeople;
