import React, {useState, useEffect, useRef} from  'react';
import {Link, useParams} from 'react-router-dom';
import { AiFillCamera } from "react-icons/ai";
import { FaUserPlus, FaUserCheck, FaCheck, FaUserClock, FaFacebookMessenger } from "react-icons/fa";
import { BsThreeDots, BsPencil } from "react-icons/bs";
import {PUBLIC_URL} from "./../../../Constants/public.jsx";
import { useSelector, useDispatch } from 'react-redux';
import {Tooltip, Spin} from 'antd';
import axios from 'axios';
import {toggleStatusPresentialModal} from './../../../Actions/index.jsx';
import {Image,Transformation} from 'cloudinary-react';
import { WaveLoading } from 'react-loadingg';
import {responseUpdateCover} from './../../../Actions/index.jsx';
import {requestUpdateCover} from './../../../Actions/index.jsx';
import {responseAddPostsProfile} from './../../../Actions/index.jsx';

function HeaderProfile({ profile, friends, friendsRequest }){
  const refHeader = useRef();
  const refCoverImg = useRef();
  const refCover = useRef();
  const {friendOfProfile, list, loadingfriendOfProfile} = useSelector(state => state.friends)
  const listUserRequest = useSelector(state => state.friendsRequest.list);
  const listMyRequest = useSelector(state => state.friendsRequest.listMyRequest);
  const [toggleSpan, setToggleSpan] = useState();
  const [toggleTopLeft, setToggleTopLeft] = useState();
  const [styleHeader, setStyleHeader] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem('ustk')).info;
  const { loading, info, loadingUpdateCover } = useSelector(state => state.profile);
  const {idProfile} = useParams();
  const mutialFriend = [];
  const [statusFollow, setStatusFollow] = useState();
  const [loadingRequest, setLoadingRequest] = useState(false);
  const dispatch = useDispatch();
  const [isChangeCover, setIsChangeCover] = useState(false);
  const [newCover, setNewCover] = useState();
  const [isDown, setIsDown] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);
  const [widthNewCover, setWidthNewCover] = useState(0);
  const [userCoverY, setUserCoverY] = useState(0);
  const [userCoverX, setUserCoverX] = useState(0);

  const handleImageLoad = (e) => {
    if(e.target.naturalHeight < 400){
      alert('Vui lòng chọn ảnh có chiều cao lớn hơn 400px để ảnh bìa được đẹp nhất')
      setIsChangeCover(false)
      return
    }
    setWidthNewCover(e.target.naturalWidth)
  }

  friendOfProfile.map(fr => {
    list.map(f => {
      if(fr.id === f.id) mutialFriend.push(fr)
    })
  });

  const uploadCover = (e) => {
    setNewCover(e.target.files[0])
    setIsChangeCover(true)
  }

  const saveCoverProfile = async () => {
    dispatch(requestUpdateCover())

    const formData = new FormData();
    formData.append('upload_preset', 'mohi_video');
    formData.append('file', newCover);

    await axios.post('https://api.cloudinary.com/v1_1/mohi-vn/upload', formData)
    .then((res) => {
      saveCoverProfileBe(res.data.public_id)
    })

  }

  const saveCoverProfileBe = async (cover) => {

      let data = {
        user_cover: cover,
        user_cover_cropX: userCoverX,
        user_cover_cropY: userCoverY
      }

      await axios.post("https://www.api.mohi.vn/api/auth/update-info-profile", data)
      .then((res) => {
        dispatch(responseUpdateCover({
          user_cover: cover,
          user_cover_cropX: Math.round(userCoverX),
          user_cover_cropY: Math.round(userCoverY),
        }))
        dispatch(responseAddPostsProfile(res.data.new_cover))
        let ustk = JSON.parse(localStorage.getItem('ustk'));
        ustk.info.user_cover = cover;
        ustk.info.user_cover_cropX = Math.round(userCoverX);
        ustk.info.user_cover_cropY = Math.round(userCoverY);
        localStorage.setItem('ustk', JSON.stringify(ustk))
        setIsChangeCover(false)
      })
  }

  const onMouseDownCover = (e) => {
    const {scrollLeft, scrollTop} = refCover.current;

    setIsDown(true)
    setScrollLeft(scrollLeft)
    setScrollTop(scrollTop)
    setClientX(e.clientX)
    setClientY(e.clientY)
  }

  const onMouseUpCover = (e) => {
    setIsDown(false)
    setScrollLeft(0)
    setScrollTop(0)
    setClientX(0)
    setClientY(0)
  }

  const onMouseMoveCover = (e) => {
    if(!isDown) return
    const scrollCover = refCover.current;

    scrollCover.scrollLeft = scrollLeft + clientX - e.clientX;
    scrollCover.scrollTop = scrollTop + clientY - e.clientY;
    setUserCoverX(scrollCover.scrollLeft)
    setUserCoverY(scrollCover.scrollTop)
  }

  const uploadAvatar= (e) => {
    const file = e.target.files[0];
    dispatch(toggleStatusPresentialModal('modal_upload_avatar_profile', file))
  }

  useEffect(() => {
    document.addEventListener('scroll', fixedOptionHead, false);

    return () => {
      document.removeEventListener('scroll', removeFixedOptionHead, false)
    }
  })

  const fixedOptionHead = () => {
    let curentRef = refHeader.current
    if(curentRef){
      if(window.scrollY - 464 > 0){
        setStyleHeader(true)
      }else {
        setStyleHeader(false)
      }
    }
  }

  const removeFixedOptionHead = () => {
     setStyleHeader(false)
  }

  function handleShow(){
    setToggleSpan({
      visibility: 'visible'
    })
    setToggleTopLeft({
      background: 'rgba(0,0,0,0.3)',
      border: '2px solid white ',
      borderRadius:'3px'
    })
  }

  function handleHide(){
    setToggleSpan({
      visibility: 'hidden'
    })
    setToggleTopLeft({
        background: 'none',
        border: '2px solid transparent ',
    })
  }

  const addFriendFunc = async (idUser) => {
    setLoadingRequest(true)
    await axios.post("https://www.api.mohi.vn/api/auth/add-friend", {follow_users_ReceivedUser: idUser})
    .then((res) => {
      setLoadingRequest(false)
      setStatusFollow('send_request')
    })
  }

  const unFriendFunc = async (idUser) => {
    setLoadingRequest(true)
    await axios.post("https://www.api.mohi.vn/api/auth/refuse-friend", {id: idUser, action: 'unfriend'})
    .then((res) => {
      setLoadingRequest(false)
      setStatusFollow('remove_friend')
    })
  }

  const unMyRequestFriendFunc = async (idUser) => {
    setLoadingRequest(true)
    await axios.post("https://www.api.mohi.vn/api/auth/refuse-friend", {id: idUser, action: 'unRequestFriend'})
    .then((res) => {
      setLoadingRequest(false)
      setStatusFollow('remove_request')
    })
  }

  const acceptFriendFunc = async (idUser) => {
    setLoadingRequest(true)
    await axios.post("https://www.api.mohi.vn/api/auth/accept-friend", {follow_users_UserId: idUser})
    .then((res) => {
      setLoadingRequest(false)
      setStatusFollow('accept_request')
    })
  }

  const refuseFriendFunc = async (idUser) => {
    setLoadingRequest(true)
    await axios.post("https://www.api.mohi.vn/api/auth/refuse-friend", {id: idUser, action: 'refuseFriend'})
    .then((res) => {
      setLoadingRequest(false)
      setStatusFollow('refuse_request')
    })
  }

  return(
    <>
      <div className="profile-header">
        <div className="profile-header-container">
          <div
            className="profile-header-cover"
            onMouseOver={() => handleShow()}
            onMouseOut={() => handleHide()}
          >
            <div className="profile-header-cover-container" >
              <div className={`profile-header-cover-img ${isChangeCover ? `cursor-move-cover` : null}`} >
                {isChangeCover ?
                  <React.Fragment>
                    <div
                      ref={refCover}
                      className="profile-header-cover-img-move"
                      style={{
                        overflow:"auto",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                      onMouseMove={onMouseMoveCover}
                      onMouseDown={onMouseDownCover}
                      onMouseUp={onMouseUpCover}
                      onMouseLeave={onMouseUpCover}
                      >
                      <img
                        style={{width: '100%', height: 'auto'}}
                        src={URL.createObjectURL(newCover)}
                        alt={info.user_first_name + ' ' + info.user_last_name}
                        ref={refCoverImg}
                        onLoad={handleImageLoad}
                      />
                    {loadingUpdateCover && <div style={{marginTop: userCoverY, background: 'rgba(255,255,255,0.7)', position: 'absolute', width: '100%', height: '100%', top: 0, left: 0}}><WaveLoading /></div>}
                    </div>
                  </React.Fragment>
                  :
                  <React.Fragment>
                    {info.user_cover_cropX === null ?
                      <img src={info.user_cover} alt={info.user_first_name + ' ' + info.user_last_name} />
                      :
                      <Image cloudName="mohi-vn" publicId={info.user_cover+ ".jpg"} version="1607061343">
                        <Transformation height={400} width={1136} x={info.user_cover_cropX} y={info.user_cover_cropY} crop="crop" />
                      </Image>
                    }
                  </React.Fragment>
                }
              </div>
            </div>
            {idProfile === currentUser.user_username && !isChangeCover &&
              <div className="profile-header-cover-top-left">
              <label htmlFor="update-cover" style={toggleTopLeft}>
              <AiFillCamera
              />
              <span style={toggleSpan}>Cập nhập ảnh bìa</span>
              </label>
              <input type="file" id="update-cover" accept="image/*" onChange={uploadCover}/>
            </div>}
            {!isChangeCover ?
              <div className="profile-header-cover-bottom-right">
                {idProfile === currentUser.user_username ?
                  <div className="button-view-history-action-profile">
                    <Link to={'/profile/' + info.user_username + '/activity-log'}><button type="submit"><BsThreeDots /> Nhật kí hoạt động</button></Link>
                  </div>
                :
                  <div className="button-view-history-action-profile user-profile-button">
                    {list.filter(f=> f.id === info.id).length ?
                      <React.Fragment>
                        {!statusFollow &&
                          <Tooltip
                            placement={`bottom`}
                            trigger={`click`}
                            title={
                              <div
                                style={{
                                  background: 'rgba(0,0,0,0.8)',
                                  color: 'white',
                                  padding: '5px 10px',
                                  cursor: 'pointer'
                                }}
                                onClick={() => unFriendFunc(info.id) }
                              >
                                Hủy kết bạn
                              </div>
                            }
                          >
                            <button ><FaUserCheck /> Bạn bè {loadingRequest && <Spin />}</button>
                          </Tooltip>
                        }
                      </React.Fragment>
                    :
                    <React.Fragment>
                      {listUserRequest.filter(f=> f.id === info.id).length ?
                        <React.Fragment>
                          {!statusFollow &&
                            <Tooltip
                              placement={`bottom`}
                              trigger={`click`}
                              title={
                                <div
                                  style={{
                                    background: 'rgba(0,0,0,0.8)',
                                    color: 'white',
                                    padding: '5px 10px',
                                    cursor: 'pointer'
                                  }}
                                >
                                <p onClick={() => acceptFriendFunc(info.id) }>Xác nhận</p>
                                <p onClick={() => refuseFriendFunc(info.id) }>Từ chối</p>
                                </div>
                              }
                            >
                              <button><FaUserClock /> Trả lời kết bạn {loadingRequest && <Spin />}</button>
                            </Tooltip>
                          }
                        </React.Fragment>
                        :
                        <React.Fragment>
                          {listMyRequest.filter(f=> f.id === info.id).length ?
                            <React.Fragment>
                              {!statusFollow &&
                              <Tooltip
                                placement={`bottom`}
                                trigger={`click`}
                                title={
                                  <div
                                    style={{
                                      background: 'rgba(0,0,0,0.8)',
                                      color: 'white',
                                      padding: '5px 10px',
                                      cursor: 'pointer'
                                    }}
                                    onClick={() => unMyRequestFriendFunc(info.id) }
                                  >
                                    Hủy lời mời kết bạn
                                  </div>
                                }
                              >
                              <button><FaCheck /> Đã gửi lời mời {loadingRequest && <Spin />}</button>
                              </Tooltip>
                              }
                            </React.Fragment>
                            :
                            <React.Fragment>
                              {!statusFollow &&
                                <button onClick={() => addFriendFunc(info.id)}><FaUserPlus /> Thêm bạn bè {loadingRequest && <Spin />}</button>
                              }
                            </React.Fragment>
                          }
                        </React.Fragment>
                      }
                    </React.Fragment>
                    }
                    {statusFollow && statusFollow === 'remove_friend' &&
                      <button onClick={() => addFriendFunc(info.id)}><FaUserPlus /> Thêm bạn bè {loadingRequest && <Spin />}</button>
                    }
                    {statusFollow && statusFollow === 'accept_request' &&
                      <Tooltip
                        placement={`bottom`}
                        trigger={`click`}
                        title={
                          <div
                            style={{
                              background: 'rgba(0,0,0,0.8)',
                              color: 'white',
                              padding: '5px 10px',
                              cursor: 'pointer'
                            }}
                            onClick={() => unFriendFunc(info.id) }
                          >
                            Hủy kết bạn
                          </div>
                        }
                      >
                        <button ><FaUserCheck /> Bạn bè {loadingRequest && <Spin />}</button>
                      </Tooltip>
                    }
                    {statusFollow && statusFollow === 'refuse_request' &&
                      <button onClick={() => addFriendFunc(info.id)}><FaUserPlus /> Thêm bạn bè {loadingRequest && <Spin />}</button>
                    }
                    {statusFollow && statusFollow === 'send_request' &&
                      <Tooltip
                        placement={`bottom`}
                        trigger={`click`}
                        title={
                          <div
                            style={{
                              background: 'rgba(0,0,0,0.8)',
                              color: 'white',
                              padding: '5px 10px',
                              cursor: 'pointer'
                            }}
                            onClick={() => unMyRequestFriendFunc(info.id) }
                          >
                            Hủy lời mời kết bạn
                          </div>
                        }
                      >
                      <button><FaCheck /> Đã gửi lời mời {loadingRequest && <Spin />}</button>
                      </Tooltip>
                    }
                    {statusFollow && statusFollow === 'remove_request' &&
                      <button onClick={() => addFriendFunc(info.id)}><FaUserPlus /> Thêm bạn bè {loadingRequest && <Spin />}</button>
                    }
                    <button style={{background: 'white', color: 'rgba(0,128,128)'}}><Link to={"/messenger/" + info.id} style={{background: 'white', color: 'rgba(0,128,128)'}}><FaFacebookMessenger /> Nhắn tin </Link></button>
                  </div>
                }
              </div>
              :
              <div className="profile-header-cover-bottom-right">
                <button onClick={() => saveCoverProfile()}>Lưu</button>
                <button onClick={() => setIsChangeCover(false)}>Hủy</button>
              </div>
            }
          </div>
          <div className="profile-header-timeline">
            <div className="profile-header-avatar">
              <div className="profile-header-avatar_">
                <div className="profile-header-avatar-container">
                  <div className="profile-header-avatar-img">
                    {info.user_avatar_cropX === null ?
                      <img src={info.user_avatar} alt={info.user_last_name} />
                      :
                      <Image cloudName="mohi-vn" publicId={info.user_avatar+ ".jpg"} version="1607061343">
                        <Transformation height={info.user_avatar_cropH}  width={info.user_avatar_cropW} x={info.user_avatar_cropX} y={info.user_avatar_cropY} crop="crop" />
                      </Image>
                    }
                  </div>
                </div>
                {idProfile === currentUser.user_username && <div className="profile-header-avatar-select">
                  <div className="profile-header-avatar-select-active">
                    <div className="profile-header-avatar-update">
                    <label htmlFor="update-avatar">
                    <AiFillCamera
                    />
                    <div>Cập nhật</div>
                    </label>
                    <input type="file" id="update-avatar" accept="image/*" onChange={uploadAvatar}/>
                    </div>
                  </div>
                </div>}
              </div >
              <div className="profile-header-name">
                {!loading && info && <Link to={'/profile/' + info.user_username}>{info.user_first_name + ' ' + info.user_last_name}</Link>}
                {!loading && info.user_nick_name && <p>({info.user_nick_name})</p>}
              </div>
            </div>
            <div className="profile-header-timeline-container" ref={refHeader} style={styleHeader ? {position: 'fixed', top: '64px', zIndex: 1000, background: 'white', width: '1140px'} : null}>
              <ul className="profile-header-navigation">
                <li>
                  <Link to={'/profile/' + idProfile + '/timeline'}>Dòng thời gian</Link>
                </li>
                <li>
                  <Link to={'/profile/' + idProfile + '/about'}>Giới thiệu</Link>
                </li>
                <li>
                  <Link to={'/profile/' + idProfile + '/gallery'}>Ảnh</Link>
                </li>
                <li>
                  <Link to={'/profile/' + idProfile + '/friends'}>
                    Bạn bè {info.id === currentUser.id ?
                      <small style={{color: 'rgba(0,0,0,0.5)'}}>{list.length && !loadingfriendOfProfile ? list.length : null}</small>
                      :
                      <small style={{color: 'rgba(0,0,0,0.5)'}}>
                        {mutialFriend.length && !loadingfriendOfProfile ? mutialFriend.length + ` bạn chung` : null}
                      </small>
                      }
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderProfile;
