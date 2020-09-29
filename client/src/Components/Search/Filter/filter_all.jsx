import React from 'react';
import {Link} from 'react-router-dom';
import { FaUserPlus, FaPlus } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { GoTriangleRight } from "react-icons/go";
import { GiEarthAmerica } from "react-icons/gi";

function FilterAll(){

  return(
    <>
      <div className="filter-all-container">
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
        <div className="filter-list-page">
          <h6>Trang</h6>
          <div className="filter-list-user-item-container">
            <div className="filter-list-user-item" >
              <div className="filter-list-user-item-avatar">
                <img src={`https://i.pinimg.com/originals/4c/20/8a/4c208adc5befb204a74947c5b2ca8937.jpg`} alt="" />
              </div>
              <div className="filter-list-user-item-info">
                <p className="filter-list-user-item-name"><Link to="">Nguyễn Văn Phước (Dịch Vụ Facebook)</Link></p>
                <small>331k người thích trang này</small>
                <p>Hỗ trợ bán hàng</p>
                <p>Web: something</p>
              </div>
            </div>
            <div className="filter-list-user-item-action">
              <button type="button"><AiOutlineLike/>Thích</button>
            </div>
          </div>
        </div>
        <div className="filter-list-group">
          <h6>Nhóm</h6>
          <div className="filter-list-user-item-container">
            <div className="filter-list-user-item" >
              <div className="filter-list-user-item-avatar">
                <img src={`https://i.pinimg.com/originals/4c/20/8a/4c208adc5befb204a74947c5b2ca8937.jpg`} alt="" />
              </div>
              <div className="filter-list-user-item-info">
                <p className="filter-list-user-item-name"><Link to="">Nguyễn Văn Phước (Dịch Vụ Facebook)</Link></p>
                <small>331k thành viên</small>
                <p>nhóm some thing</p>
              </div>
            </div>
            <div className="filter-list-user-item-action">
              <button type="button"><FaPlus/>Tham gia nhóm</button>
            </div>
          </div>
        </div>
        <div className="filter-list-post">
          <h6>Bài viết</h6>
          <div className="filter-list-post-item">
            <div className="filter-list-post-item-head">
              <div className="filter-list-post-item-head-left">
                <img src={`https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg`} alt="" />
              </div>
              <div className="filter-list-post-item-head-right">
                <p><Link to="">Nguyễn Văn Phước</Link> <GoTriangleRight /><span><Link to="">ReactJS - Việt Nam</Link></span></p>
                <small>Bạn bè</small>
              </div>
            </div>
            <div className="filter-list-post-item-body">
              <p>
              <small>just now</small>
              <GiEarthAmerica />
              <span>Vì em thích màu xanh. Nên anh đem lòng thương cả bầu trờiVì em thích màu xanh. Nên anh đem lòng thương cả bầu trờiVì em thích màu xanh. Nên anh đem lòng thương cả bầu trờiVì em thích màu xanh. Nên anh đem lòng thương cả bầu trờiVì em thích màu xanh. Nên anh đem lòng thương cả bầu trời</span>
              </p>
              <div className="filter-list-post-item-body-image">
                <img src={`https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg`} alt=""/>
              </div>
            </div>
            <div className="filter-list-post-item-footer">
              <div>
                Bạn và 5k người khác
              </div>
              <div>
                <span>500 bình luận</span>
                <span>200 lượt chia sẻ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterAll;
