import React from 'react';
import {Link} from 'react-router-dom';
import {FaShare, FaSmileWink, FaCommentAlt} from 'react-icons/fa';
import {BsThreeDotsVertical} from 'react-icons/bs';
import './NotificationsMenu.css';

function MenuNoti() {

  return (<> < div className = "menu-noti-container" > <div className="menu-noti-main">
    <div className="menu-noti-title">
      <h5>Thông báo</h5>
      <div className="menu-noti-title-control">
        <span>Đánh dấu tất cả là đã đọc</span>
        <Link>Cài đặt</Link>
      </div>
    </div>
    <div className="menu-dropdown-scroll">
      <div className="menu-dropdown-scroll-thumb">
        <Link to="/">
          <div className="menu-noti-content">
            <div className="menu-noti-content-avatar">
              <img src="https://i.pinimg.com/564x/90/e9/fc/90e9fce92c5bd12860b07b1cd1af41cb.jpg"/>
            </div>
            <div className="menu-noti-content-title">
              <p>
                <b>Nguyễn Văn Phước</b>
                đã bình luận ảnh của bạn
              </p>
              <div className="menu-noti-content-button">
                <FaCommentAlt/>
                <p>1 phút trước</p>
              </div>
            </div>
            <div className="menu-noti-content-right">
              <div className="menu-noti-content-right-img">
                <img src="https://i.pinimg.com/564x/b0/da/ac/b0daac950c00bf2fefe8e923b7b64c40.jpg"/>
              </div>
              <div className="menu-noti-content-right-button">
                <BsThreeDotsVertical/>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="menu-noti-content">
            <div className="menu-noti-content-avatar">
              <img src="https://i.pinimg.com/564x/90/e9/fc/90e9fce92c5bd12860b07b1cd1af41cb.jpg"/>
            </div>
            <div className="menu-noti-content-title">
              <p>
                <b>Nguyễn Văn Phước</b>
                đã chia sẻ ảnh của bạn</p>
              <div className="menu-noti-content-button">
                <FaShare/>
                <p>1 giờ trước</p>
              </div>
            </div>
            <div className="menu-noti-content-right">
              <div className="menu-noti-content-right-img">
                <img src="https://i.pinimg.com/564x/b0/da/ac/b0daac950c00bf2fefe8e923b7b64c40.jpg"/>
              </div>
              <div className="menu-noti-content-right-button">
                <BsThreeDotsVertical/>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="menu-noti-content">
            <div className="menu-noti-content-avatar">
              <img src="https://i.pinimg.com/564x/90/e9/fc/90e9fce92c5bd12860b07b1cd1af41cb.jpg"/>
            </div>
            <div className="menu-noti-content-title">
              <p>
                <b>Nguyễn Văn Phước</b>
                đã bình luận ảnh của bạn trong nhóm gái đẹp
                <b>Gái xinh chọn lọc Việt Nam</b>
              </p>
              <div className="menu-noti-content-button">
                <FaCommentAlt/>
                <p>6 giờ trước</p>
              </div>
            </div>
            <div className="menu-noti-content-right">
              <div className="menu-noti-content-right-img">
                <img src="https://i.pinimg.com/564x/b0/da/ac/b0daac950c00bf2fefe8e923b7b64c40.jpg"/>
              </div>
              <div className="menu-noti-content-right-button">
                <BsThreeDotsVertical/>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="menu-noti-content">
            <div className="menu-noti-content-avatar">
              <img src="https://i.pinimg.com/564x/90/e9/fc/90e9fce92c5bd12860b07b1cd1af41cb.jpg"/>
            </div>
            <div className="menu-noti-content-title">
              <p>
                <b>Nguyễn Văn Phước</b>
                đã bày tỏ cảm xúc ảnh của bạn</p>
              <div className="menu-noti-content-button">
                <FaSmileWink/>
                <p>8 giờ trước</p>
              </div>
            </div>
            <div className="menu-noti-content-right">
              <div className="menu-noti-content-right-img">
                <img src="https://i.pinimg.com/564x/b0/da/ac/b0daac950c00bf2fefe8e923b7b64c40.jpg"/>
              </div>
              <div className="menu-noti-content-right-button">
                <BsThreeDotsVertical/>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="menu-noti-content">
            <div className="menu-noti-content-avatar">
              <img src="https://i.pinimg.com/564x/90/e9/fc/90e9fce92c5bd12860b07b1cd1af41cb.jpg"/>
            </div>
            <div className="menu-noti-content-title">
              <p>
                <b>Nguyễn Văn Phước</b>
                đã bình luận ảnh của bạn trong nhóm gái đẹp
                <b>Gái xinh chọn lọc Việt Nam</b>
              </p>
              <div className="menu-noti-content-button">
                <FaCommentAlt/>
                <p>6 giờ trước</p>
              </div>
            </div>
            <div className="menu-noti-content-right">
              <div className="menu-noti-content-right-img">
                <img src="https://i.pinimg.com/564x/b0/da/ac/b0daac950c00bf2fefe8e923b7b64c40.jpg"/>
              </div>
              <div className="menu-noti-content-right-button">
                <BsThreeDotsVertical/>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="menu-noti-content">
            <div className="menu-noti-content-avatar">
              <img src="https://i.pinimg.com/564x/90/e9/fc/90e9fce92c5bd12860b07b1cd1af41cb.jpg"/>
            </div>
            <div className="menu-noti-content-title">
              <p>
                <b>Nguyễn Văn Phước</b>
                đã bình luận ảnh của bạn trong nhóm gái đẹp
                <b>Gái xinh chọn lọc Việt Nam</b>
              </p>
              <div className="menu-noti-content-button">
                <FaCommentAlt/>
                <p>6 giờ trước</p>
              </div>
            </div>
            <div className="menu-noti-content-right">
              <div className="menu-noti-content-right-img">
                <img src="https://i.pinimg.com/564x/b0/da/ac/b0daac950c00bf2fefe8e923b7b64c40.jpg"/>
              </div>
              <div className="menu-noti-content-right-button">
                <BsThreeDotsVertical/>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="menu-noti-content">
            <div className="menu-noti-content-avatar">
              <img src="https://i.pinimg.com/564x/90/e9/fc/90e9fce92c5bd12860b07b1cd1af41cb.jpg"/>
            </div>
            <div className="menu-noti-content-title">
              <p>
                <b>Nguyễn Văn Phước</b>
                đã bình luận ảnh của bạn trong nhóm gái đẹp
                <b>Gái xinh chọn lọc Việt Nam</b>
              </p>
              <div className="menu-noti-content-button">
                <FaCommentAlt/>
                <p>6 giờ trước</p>
              </div>
            </div>
            <div className="menu-noti-content-right">
              <div className="menu-noti-content-right-img">
                <img src="https://i.pinimg.com/564x/b0/da/ac/b0daac950c00bf2fefe8e923b7b64c40.jpg"/>
              </div>
              <div className="menu-noti-content-right-button">
                <BsThreeDotsVertical/>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="menu-noti-content">
            <div className="menu-noti-content-avatar">
              <img src="https://i.pinimg.com/564x/90/e9/fc/90e9fce92c5bd12860b07b1cd1af41cb.jpg"/>
            </div>
            <div className="menu-noti-content-title">
              <p>
                <b>Nguyễn Văn Phước</b>
                đã bình luận ảnh của bạn trong nhóm gái đẹp
                <b>Gái xinh chọn lọc Việt Nam</b>
              </p>
              <div className="menu-noti-content-button">
                <FaCommentAlt/>
                <p>6 giờ trước</p>
              </div>
            </div>
            <div className="menu-noti-content-right">
              <div className="menu-noti-content-right-img">
                <img src="https://i.pinimg.com/564x/b0/da/ac/b0daac950c00bf2fefe8e923b7b64c40.jpg"/>
              </div>
              <div className="menu-noti-content-right-button">
                <BsThreeDotsVertical/>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="menu-noti-content">
            <div className="menu-noti-content-avatar">
              <img src="https://i.pinimg.com/564x/90/e9/fc/90e9fce92c5bd12860b07b1cd1af41cb.jpg"/>
            </div>
            <div className="menu-noti-content-title">
              <p>
                <b>Nguyễn Văn Phước</b>
                đã bình luận ảnh của bạn trong nhóm gái đẹp
                <b>Gái xinh chọn lọc Việt Nam</b>
              </p>
              <div className="menu-noti-content-button">
                <FaCommentAlt/>
                <p>6 giờ trước</p>
              </div>
            </div>
            <div className="menu-noti-content-right">
              <div className="menu-noti-content-right-img">
                <img src="https://i.pinimg.com/564x/b0/da/ac/b0daac950c00bf2fefe8e923b7b64c40.jpg"/>
              </div>
              <div className="menu-noti-content-right-button">
                <BsThreeDotsVertical/>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="menu-noti-content">
            <div className="menu-noti-content-avatar">
              <img src="https://i.pinimg.com/564x/90/e9/fc/90e9fce92c5bd12860b07b1cd1af41cb.jpg"/>
            </div>
            <div className="menu-noti-content-title">
              <p>
                <b>Nguyễn Văn Phước</b>
                đã bình luận ảnh của bạn trong nhóm gái đẹp
                <b>Gái xinh chọn lọc Việt Nam</b>
              </p>
              <div className="menu-noti-content-button">
                <FaCommentAlt/>
                <p>6 giờ trước</p>
              </div>
            </div>
            <div className="menu-noti-content-right">
              <div className="menu-noti-content-right-img">
                <img src="https://i.pinimg.com/564x/b0/da/ac/b0daac950c00bf2fefe8e923b7b64c40.jpg"/>
              </div>
              <div className="menu-noti-content-right-button">
                <BsThreeDotsVertical/>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="menu-noti-content">
            <div className="menu-noti-content-avatar">
              <img src="https://i.pinimg.com/564x/90/e9/fc/90e9fce92c5bd12860b07b1cd1af41cb.jpg"/>
            </div>
            <div className="menu-noti-content-title">
              <p>
                <b>Nguyễn Văn Phước</b>
                đã bình luận ảnh của bạn trong nhóm gái đẹp
                <b>Gái xinh chọn lọc Việt Nam</b>
              </p>
              <div className="menu-noti-content-button">
                <FaCommentAlt/>
                <p>6 giờ trước</p>
              </div>
            </div>
            <div className="menu-noti-content-right">
              <div className="menu-noti-content-right-img">
                <img src="https://i.pinimg.com/564x/b0/da/ac/b0daac950c00bf2fefe8e923b7b64c40.jpg"/>
              </div>
              <div className="menu-noti-content-right-button">
                <BsThreeDotsVertical/>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="menu-noti-content">
            <div className="menu-noti-content-avatar">
              <img src="https://i.pinimg.com/564x/90/e9/fc/90e9fce92c5bd12860b07b1cd1af41cb.jpg"/>
            </div>
            <div className="menu-noti-content-title">
              <p>
                <b>Nguyễn Văn Phước</b>
                đã bình luận ảnh của bạn trong nhóm gái đẹp
                <b>Gái xinh chọn lọc Việt Nam</b>
              </p>
              <div className="menu-noti-content-button">
                <FaCommentAlt/>
                <p>6 giờ trước</p>
              </div>
            </div>
            <div className="menu-noti-content-right">
              <div className="menu-noti-content-right-img">
                <img src="https://i.pinimg.com/564x/b0/da/ac/b0daac950c00bf2fefe8e923b7b64c40.jpg"/>
              </div>
              <div className="menu-noti-content-right-button">
                <BsThreeDotsVertical/>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="menu-noti-content">
            <div className="menu-noti-content-avatar">
              <img src="https://i.pinimg.com/564x/90/e9/fc/90e9fce92c5bd12860b07b1cd1af41cb.jpg"/>
            </div>
            <div className="menu-noti-content-title">
              <p>
                <b>Nguyễn Văn Phước</b>
                đã bình luận ảnh của bạn trong nhóm gái đẹp
                <b>Gái xinh chọn lọc Việt Nam</b>
              </p>
              <div className="menu-noti-content-button">
                <FaCommentAlt/>
                <p>6 giờ trước</p>
              </div>
            </div>
            <div className="menu-noti-content-right">
              <div className="menu-noti-content-right-img">
                <img src="https://i.pinimg.com/564x/b0/da/ac/b0daac950c00bf2fefe8e923b7b64c40.jpg"/>
              </div>
              <div className="menu-noti-content-right-button">
                <BsThreeDotsVertical/>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="menu-noti-content">
            <div className="menu-noti-content-avatar">
              <img src="https://i.pinimg.com/564x/90/e9/fc/90e9fce92c5bd12860b07b1cd1af41cb.jpg"/>
            </div>
            <div className="menu-noti-content-title">
              <p>
                <b>Nguyễn Văn Phước</b>
                đã bình luận ảnh của bạn trong nhóm gái đẹp
                <b>Gái xinh chọn lọc Việt Nam</b>
              </p>
              <div className="menu-noti-content-button">
                <FaCommentAlt/>
                <p>6 giờ trước</p>
              </div>
            </div>
            <div className="menu-noti-content-right">
              <div className="menu-noti-content-right-img">
                <img src="https://i.pinimg.com/564x/b0/da/ac/b0daac950c00bf2fefe8e923b7b64c40.jpg"/>
              </div>
              <div className="menu-noti-content-right-button">
                <BsThreeDotsVertical/>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="menu-noti-content">
            <div className="menu-noti-content-avatar">
              <img src="https://i.pinimg.com/564x/90/e9/fc/90e9fce92c5bd12860b07b1cd1af41cb.jpg"/>
            </div>
            <div className="menu-noti-content-title">
              <p>
                <b>Nguyễn Văn Phước</b>
                đã bình luận ảnh của bạn trong nhóm gái đẹp
                <b>Gái xinh chọn lọc Việt Nam</b>
              </p>
              <div className="menu-noti-content-button">
                <FaCommentAlt/>
                <p>6 giờ trước</p>
              </div>
            </div>
            <div className="menu-noti-content-right">
              <div className="menu-noti-content-right-img">
                <img src="https://i.pinimg.com/564x/b0/da/ac/b0daac950c00bf2fefe8e923b7b64c40.jpg"/>
              </div>
              <div className="menu-noti-content-right-button">
                <BsThreeDotsVertical/>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>

    <div className="menu-noti-footer">
      <Link to="/notifications">Xem tất cả các thông báo</Link>
    </div>
  </div>
</div>
</>);
}
export default MenuNoti;
