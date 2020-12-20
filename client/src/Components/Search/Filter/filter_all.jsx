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
          {listProfile.map((user, index) => {
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
        </div>
        : null}
      </div>
    </>
  )
}

export default FilterAll;
