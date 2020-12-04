import React, {useEffect, useRef, useState} from 'react';
import {Col, Row, Spin} from 'antd';
import { GiEarthAmerica } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { MdSchool } from "react-icons/md";
import { BsFillImageFill, BsBuilding } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { Link, useHistory, useParams } from 'react-router-dom';
import { GoPrimitiveDot } from "react-icons/go";
import { RiUserVoiceLine } from "react-icons/ri";
import {useSelector} from 'react-redux';

function SiderLeftProfile({profile, friends, friendsRequest}){
  const yearNow = new Date().getFullYear();
  const [styleSide, setStyleSider] = useState(false);
  const refSiderLeft = useRef();
  const history = useHistory();
  const {loading, info} = useSelector(state => state.profile);
  const userFolow = useSelector(state => state.friendsRequest.list);
  const friendList = useSelector(state => state.friends.list);
  const {idProfile} = useParams();

  useEffect(() => {
    document.addEventListener('scroll', fixedOptionHead, false);

    return () => document.removeEventListener('scroll', removeFixedOptionHead, false)
  })

  const fixedOptionHead = () => {
    let curentRef = refSiderLeft.current
    if(curentRef){
      if(window.scrollY - 520 > 0){
        setStyleSider(true)
      }else {
        setStyleSider(false)
      }
    }
  }

  const removeFixedOptionHead = () => {
     setStyleSider(false)
  }

  const changeActiveKey = (key) => {
    history.push('/rules-mohi', {key: key});
  }

  return(
    <>
      <Col span={6}>
        <div className={`sider-profile`} ref={refSiderLeft} style={styleSide ? {position: 'fixed', top: '134px', width: '285px'} : null}>
          {loading ? <div className="profile-about" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Spin /></div> :
          <div className="profile-story">
            <h6><GiEarthAmerica />Giới thiệu</h6>
            <div className="profile-story-text">
              {info.user_introduce && loading && null}
              {!info.user_introduce && !loading && 'Không có thông tin hiển thị'}
              {info.user_introduce && !loading && info.user_introduce}
            </div>
            <button onClick={() => history.push('/profile/' + idProfile + '/about/bio')}>Chỉnh sửa tiểu sử</button>
          {info.user_workPlace || info.user_currentPlace || info.user_studyPlace || info.user_college || info.user_website ?
            <React.Fragment>
              <ul>
                {info.user_workPlace && <li>
                  <BsBuilding />
                  <span>Làm việc tại {info.user_workPlace}</span>
                </li>
                }
                {info.user_currentPlace && <li>
                  <AiFillHome />
                  <span>Sống tại {info.user_currentPlace}</span>
                </li>
                }
                 <li>
                  <RiUserVoiceLine />
                {userFolow.length + friendList.length > 0 ? <span>Có {userFolow.length + friendList.length} người theo dõi</span> : null}
                </li>
                {info.user_studyPlace && <li>
                  <MdSchool />
                  <span>Học tại trường {info.user_studyPlace}</span>
                </li>
                }
                {info.user_high_school && <li>
                  <MdSchool />
                  <span>Học tại trường {info.user_high_school}</span>
                </li>
                }
                {info.user_website && <li>
                  <GiEarthAmerica />
                  <a href={info.user_website} target='_blank'>{info.user_website}</a>
                </li>
                }
              </ul>
              <button onClick={() => history.push('/profile/' + idProfile + '/about/overview')}>Chỉnh sửa chi tiết</button>
            </React.Fragment>
          : null}
          </div>
          }
          <div className="box-footer">
            <ul>
              <li><GoPrimitiveDot/>
                <span onClick={() => changeActiveKey(2)}>Chính sách dữ liệu</span>
              </li>
              <li><GoPrimitiveDot/>
                <span onClick={() => changeActiveKey(1)}>Điều khoản và dịch vụ</span>
              </li>
              <li><GoPrimitiveDot/>
                <span onClick={() => changeActiveKey(3)}>Tiêu chuẩn cộng đồng</span>
              </li>
              <li><GoPrimitiveDot/>
              <span><Link to="/help">Trợ Giúp</Link></span>
              </li>
            </ul>
            <div className="brand-app">Mohi &copy; {yearNow}</div>
          </div>
          </div>
      </Col>
    </>
  )
}

export default SiderLeftProfile;
