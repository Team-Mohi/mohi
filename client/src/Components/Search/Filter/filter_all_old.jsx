import React from 'react';
import {Link} from 'react-router-dom';
import { FaUserPlus, FaPlus } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { GoTriangleRight } from "react-icons/go";
import { GiEarthAmerica } from "react-icons/gi";
import { useSelector } from 'react-redux';
import {Image,Transformation} from 'cloudinary-react';

function FilterAll(props, { search, friends }){
  const { listPost, listProfile, loading } = useSelector(state => state.search);
  const {list} = useSelector(state => state.friends)

  if(!loading && !listProfile.length){
    return(
      <div className="filter-list-user">
        Xin lỗi, Không có kết quả nào phù hợp với tìm kiếm của bạn
      </div>
    )
  }

  return(
    <>
      <div className="filter-all-container">
        {listProfile.length ?
        <div className="filter-list-user">
          <h6>Mọi người</h6>
          {listProfile.slice(0, 6).map((user, index) => {
            return(
              <div key={index} className="filter-list-user-item-container" >
                <div className="filter-list-user-item" >
                  <div className="filter-list-user-item-avatar">
                      {user.user_avatar_cropX === null ?
                        <img src={user.user_avatar} alt={user.user_first_name + ' ' + user.user_last_name} />
                        :
                        <Image cloudName="mohi-vn" publicId={user.user_avatar+ ".jpg"} version="1607061343">
                          <Transformation height={user.user_avatar_cropH}  width={user.user_avatar_cropW} x={user.user_avatar_cropX} y={user.user_avatar_cropY} crop="crop" />
                        </Image>
                      }
                  </div>
                  <div className="filter-list-user-item-info">
                    <p className="filter-list-user-item-name"><Link to={'/profile/'+ user.user_username}>{user.user_first_name + ' ' + user.user_last_name} {user.user_nick_name && `(`+user.user_nick_name+`)`}</Link></p>
                    {user.id !== JSON.parse(localStorage.getItem('ustk')).info.id &&
                      <React.Fragment>
                        {list.filter(us => us.id === user.id).length ? <small>Bạn bè</small> : null}
                      </React.Fragment>
                    }
                    {user.user_introduce && <p>{user.user_introduce}</p>}
                    {user.user_currentPlace && <small>Sống tại {user.user_currentPlace}</small>}
                  </div>
                </div>
                <div className="filter-list-user-item-action">
                </div>
              </div>
            )
          })}
          {listProfile.length > 6 && <div className="load-more-search-user"><Link to={`/search/${props.value}/people`}>Xem tất cả</Link></div>}
        </div>
        : null}
        {/*listPost.length ?
        <div className="filter-list-post">
          <h6>Bài viết</h6>
          {listPost.slice(0, 6).map((post, index) => {
            return(
            <div key={index} className="filter-list-post-item">
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
            )
        })}
        {listPost.length > 6 && <div className="load-more-search-user"><Link to={`/search/${props.value}/post`}>Xem tất cả</Link></div>}
        </div>
        : null*/}
      </div>
    </>
  )
}

export default FilterAll;
