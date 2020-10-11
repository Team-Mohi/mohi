import React from 'react';
import {Link} from 'react-router-dom';
import { GoTriangleRight } from "react-icons/go";
import { GiEarthAmerica } from "react-icons/gi";

function FilterPost(){
  return(
    <>
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
    </>
  )
}

export default FilterPost;
