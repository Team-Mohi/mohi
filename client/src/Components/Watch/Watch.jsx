import React, {useState, useEffect, useRef} from 'react';
import './Watch.css';
import {BsSearch, BsFillCaretDownFill, BsThreeDots} from 'react-icons/bs';
import {GiSaveArrow} from 'react-icons/gi';
import { FaYoutube,FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import {Link, Route, Switch, useLocation} from 'react-router-dom';
import useWindowSize from "./../Messenger/useWindowSize.jsx";

function Watch(){
  const path = useLocation().pathname.split('/');
  const isActive = path[2];
  const windowSize = useWindowSize();
  const offsetTopHistoryRef = useRef();
  const [styleHeightHistory, setStyleHeightHistory] = useState();

  useEffect(() => {
    setStyleHeightHistory(window.innerHeight - offsetTopHistoryRef.current.offsetTop - 100)
  },[windowSize]);

  const WatchSider = () =>{
    return(
      <div className="watch-sider-container">
        <div className={`watch-sider-fixed`}>
        <h5>Watch</h5>
        <div className="watch-head">
          <div className="watch-search">
            <input type="text" placeholder="Tìm kiếm video"/>
            <BsSearch />
          </div>
          <div className="watch-option">
            <ul>
            <Link to="/watch/all">
              <li className={isActive === 'all' || !isActive ? 'watch-active' : ''}>
                <FaYoutube /><span>Tất cả video</span>
              </li>
              </Link>
              <Link to="/watch/save">
              <li className={isActive === 'save' ? 'watch-active' : ''}>
                <GiSaveArrow /><span>Video đã lưu</span>
              </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="watch-history" ref={offsetTopHistoryRef}>
          <h6>Danh sách xem của bạn</h6>
          <ul style={{height: styleHeightHistory}}>
            <Link to="">
              <li>
                <div className="watch-avatar-boss">
                  <img src={`http://vinathis.com/news/uploads/news/2018_09/hinh-anh-gai-xinh-sexy-37.jpg`} alt="" />
                </div>
                <span>Mua Bán Trao Đổi Xe Máy Cũ Gia Lai</span>
              </li>
            </Link>
            <Link to="">
              <li>
                <div className="watch-avatar-boss">
                  <img src={`http://vinathis.com/news/uploads/news/2018_09/hinh-anh-gai-xinh-sexy-37.jpg`} alt="" />
                </div>
                <span>Mua Bán Trao Đổi Xe Máy Cũ Gia Lai</span>
              </li>
            </Link>
            <Link to="">
              <li>
                <div className="watch-avatar-boss">
                  <img src={`http://vinathis.com/news/uploads/news/2018_09/hinh-anh-gai-xinh-sexy-37.jpg`} alt="" />
                </div>
                <span>Mua Bán Trao Đổi Xe Máy Cũ Gia Lai</span>
              </li>
            </Link>
              <Link to="">
              <li>
                <div className="watch-avatar-boss">
                  <img src={`http://vinathis.com/news/uploads/news/2018_09/hinh-anh-gai-xinh-sexy-37.jpg`} alt="" />
                </div>
                <span>Người Gia Lai</span>
              </li>
            </Link>
            <Link to="">
              <li>
                <div className="watch-avatar-boss">
                  <img src={`http://vinathis.com/news/uploads/news/2018_09/hinh-anh-gai-xinh-sexy-37.jpg`} alt="" />
                </div>
                <span>Mua Bán Trao Đổi Xe Máy Cũ Gia Lai</span>
              </li>
            </Link>
              <Link to="">
              <li>
                <div className="watch-avatar-boss">
                  <img src={`http://vinathis.com/news/uploads/news/2018_09/hinh-anh-gai-xinh-sexy-37.jpg`} alt="" />
                </div>
                <span>Người Gia Lai</span>
              </li>
            </Link>
            <Link to="">
              <li>
                <div className="watch-avatar-boss">
                  <img src={`http://vinathis.com/news/uploads/news/2018_09/hinh-anh-gai-xinh-sexy-37.jpg`} alt="" />
                </div>
                <span>Mua Bán Trao Đổi Xe Máy Cũ Gia Lai</span>
              </li>
            </Link>
              <Link to="">
              <li>
                <div className="watch-avatar-boss">
                  <img src={`http://vinathis.com/news/uploads/news/2018_09/hinh-anh-gai-xinh-sexy-37.jpg`} alt="" />
                </div>
                <span>Người Gia Lai</span>
              </li>
            </Link>
            <Link to="">
              <li>
                <div className="watch-avatar-boss">
                  <img src={`http://vinathis.com/news/uploads/news/2018_09/hinh-anh-gai-xinh-sexy-37.jpg`} alt="" />
                </div>
                <span>Mua Bán Trao Đổi Xe Máy Cũ Gia Lai</span>
              </li>
            </Link>
              <Link to="">
              <li>
                <div className="watch-avatar-boss">
                  <img src={`http://vinathis.com/news/uploads/news/2018_09/hinh-anh-gai-xinh-sexy-37.jpg`} alt="" />
                </div>
                <span>Người Gia Lai</span>
              </li>
            </Link>
            <Link to="">
              <li>
                <div className="watch-avatar-boss">
                  <img src={`http://vinathis.com/news/uploads/news/2018_09/hinh-anh-gai-xinh-sexy-37.jpg`} alt="" />
                </div>
                <span>Mua Bán Trao Đổi Xe Máy Cũ Gia Lai</span>
              </li>
            </Link>
              <Link to="">
              <li>
                <div className="watch-avatar-boss">
                  <img src={`http://vinathis.com/news/uploads/news/2018_09/hinh-anh-gai-xinh-sexy-37.jpg`} alt="" />
                </div>
                <span>Người Gia Lai</span>
              </li>
            </Link>
            <Link to="">
              <li>
                <div className="watch-avatar-boss">
                  <img src={`http://vinathis.com/news/uploads/news/2018_09/hinh-anh-gai-xinh-sexy-37.jpg`} alt="" />
                </div>
                <span>Mua Bán Trao Đổi Xe Máy Cũ Gia Lai</span>
              </li>
            </Link>
              <Link to="">
              <li>
                <div className="watch-avatar-boss">
                  <img src={`http://vinathis.com/news/uploads/news/2018_09/hinh-anh-gai-xinh-sexy-37.jpg`} alt="" />
                </div>
                <span>Người Gia Lai</span>
              </li>
            </Link>
            <Link to="">
              <li>
                <div className="watch-avatar-boss">
                  <img src={`http://vinathis.com/news/uploads/news/2018_09/hinh-anh-gai-xinh-sexy-37.jpg`} alt="" />
                </div>
                <span>Mua Bán Trao Đổi Xe Máy Cũ Gia Lai</span>
              </li>
            </Link>
              <Link to="">
              <li>
                <div className="watch-avatar-boss">
                  <img src={`http://vinathis.com/news/uploads/news/2018_09/hinh-anh-gai-xinh-sexy-37.jpg`} alt="" />
                </div>
                <span>Người Gia Lai</span>
              </li>
            </Link>
            <Link to="">
              <li>
                <div className="watch-avatar-boss">
                  <img src={`http://vinathis.com/news/uploads/news/2018_09/hinh-anh-gai-xinh-sexy-37.jpg`} alt="" />
                </div>
                <span>Mua Bán Trao Đổi Xe Máy Cũ Gia Lai</span>
              </li>
            </Link>
              <Link to="">
              <li>
                <div className="watch-avatar-boss">
                  <img src={`http://vinathis.com/news/uploads/news/2018_09/hinh-anh-gai-xinh-sexy-37.jpg`} alt="" />
                </div>
                <span>Người Gia Lai</span>
              </li>
            </Link>
            <Link to="">
              <li>
                <div className="watch-avatar-boss">
                  <img src={`http://vinathis.com/news/uploads/news/2018_09/hinh-anh-gai-xinh-sexy-37.jpg`} alt="" />
                </div>
                <span>Mua Bán Trao Đổi Xe Máy Cũ Gia Lai</span>
              </li>
            </Link>
              <Link to="">
              <li>
                <div className="watch-avatar-boss">
                  <img src={`http://vinathis.com/news/uploads/news/2018_09/hinh-anh-gai-xinh-sexy-37.jpg`} alt="" />
                </div>
                <span>Người Gia Lai</span>
              </li>
            </Link>
            <Link to="">
              <li>
                <div className="watch-avatar-boss">
                  <img src={`http://vinathis.com/news/uploads/news/2018_09/hinh-anh-gai-xinh-sexy-37.jpg`} alt="" />
                </div>
                <span>Mua Bán Trao Đổi Xe Máy Cũ Gia Lai</span>
              </li>
            </Link>
              <Link to="">
              <li>
                <div className="watch-avatar-boss">
                  <img src={`http://vinathis.com/news/uploads/news/2018_09/hinh-anh-gai-xinh-sexy-37.jpg`} alt="" />
                </div>
                <span>Người Gia Lai</span>
              </li>
            </Link>
          </ul>
          <div className="see-more">
            <BsFillCaretDownFill />
            <span>Xem thêm</span>
          </div>
        </div>
        </div>
      </div>
    )
  }

  const WatchVideoAll = () =>{
    return(
      <div className="watch-video-container">
        <h5>Top video dành cho bạn</h5>
        <div className="watch-video-item">
          <div className="watch-video-item-head">
            <div className="watch-info-avatar">
              <img src={`https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/119084453_964173784049583_4390718349743997044_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=Hto1Qb9rJRoAX_bcGuq&_nc_ht=scontent-sin6-1.xx&oh=82bd6571aad74e4e4cf4add244e0e336&oe=5FA9385A`} alt="" />
            </div>
            <div className="watch-info-text">
              <div className="watch-info-name">
                <span>Phan Thị Mỹ Duyên</span> <span className="watch-action-boss">Theo dõi</span>
              </div>
              <div className="watch-info-time">
                7 tháng 9
              </div>
            </div>
            <div className="watch-info-option">
              <BsThreeDots />
            </div>
          </div>
          <div className="watch-video-item-body">
            <div className="watch-video-item-body-content">
            REVIEW PHIM HAY: NGƯỜI ĐÀN ÔNG CUỐI CÙNG TRÊN TRÁI ĐẤT
            REVIEW PHIM HAY: NGƯỜI ĐÀN ÔNG CUỐI CÙNG TRÊN TRÁI ĐẤT
            Khi người đàn ông cuối cùng trên trái đất gặp người phụ nữ cuối cùng trên trái đất, bạn nghĩ họ sẽ làm gì ?
            </div>
            <div className="watch-video-item-body-video">
              <iframe width="100%" title="b" height="400" src="https://www.youtube.com/embed/GdUUCutdIEc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
          <div className="watch-video-item-footer">
            <div className="watch-action">
              <div>< AiOutlineLike className="action-post" key="like" />Thích</div>
              <div>< FaRegCommentAlt className="action-post" key="comment" />Bình luận</div>
              <div><RiShareForwardLine className="action-post" key="share" />Chia sẻ</div>
            </div>
            <div className="watch-show-action">
              <span>Nguyễn Văn Phước và 2k người khác</span>
              <span>156 bình luận</span>
            </div>
          </div>
        </div>
        <div className="watch-video-item">
          <div className="watch-video-item-head">
            <div className="watch-info-avatar">
              <img src={`https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/119084453_964173784049583_4390718349743997044_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=Hto1Qb9rJRoAX_bcGuq&_nc_ht=scontent-sin6-1.xx&oh=82bd6571aad74e4e4cf4add244e0e336&oe=5FA9385A`} alt="" />
            </div>
            <div className="watch-info-text">
              <div className="watch-info-name">
                <span>Phan Thị Mỹ Duyên</span> <span className="watch-action-boss">Theo dõi</span>
              </div>
              <div className="watch-info-time">
                7 tháng 9
              </div>
            </div>
            <div className="watch-info-option">
              <BsThreeDots />
            </div>
          </div>
          <div className="watch-video-item-body">
            <div className="watch-video-item-body-content">
            REVIEW PHIM HAY: NGƯỜI ĐÀN ÔNG CUỐI CÙNG TRÊN TRÁI ĐẤT
            REVIEW PHIM HAY: NGƯỜI ĐÀN ÔNG CUỐI CÙNG TRÊN TRÁI ĐẤT
            Khi người đàn ông cuối cùng trên trái đất gặp người phụ nữ cuối cùng trên trái đất, bạn nghĩ họ sẽ làm gì ?
            </div>
            <div className="watch-video-item-body-video">
              <iframe width="100%" title="a" height="400" src="https://www.youtube.com/embed/GdUUCutdIEc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
          <div className="watch-video-item-footer">
            <div className="watch-action">
              <div>< AiOutlineLike className="action-post" key="like" />Thích</div>
              <div>< FaRegCommentAlt className="action-post" key="comment" />Bình luận</div>
              <div><RiShareForwardLine className="action-post" key="share" />Chia sẻ</div>
            </div>
            <div className="watch-show-action">
              <span>Nguyễn Văn Phước và 2k người khác</span>
              <span>156 bình luận</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const WatchVideoSave = () =>{
    return(
      <div className="watch-video-container">
      save
      </div>
    )
  }

  return(
    <div className="wrapper">
      <div className="watch-container">
        <WatchSider />
        <Switch>
          <Route path="/watch/all" component={WatchVideoAll} />
          <Route path="/watch/save" component={WatchVideoSave} />
          <Route component={WatchVideoAll}/>
        </Switch>
      </div>
    </div>
  )
}

export default Watch;
