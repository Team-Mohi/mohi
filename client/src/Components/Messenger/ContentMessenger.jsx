import React, {useState, useEffect, useRef, useCallback} from 'react';
import {FaSmile} from 'react-icons/fa';
import {GiPhone} from 'react-icons/gi';
import {Image,Transformation} from 'cloudinary-react';
import {BsSearch, BsFillCameraVideoFill, BsThreeDotsVertical, BsImage, BsPencilSquare} from 'react-icons/bs';
import {AiTwotoneSetting, AiTwotoneLike, AiFillFile, AiFillCamera, AiFillCloseCircle} from 'react-icons/ai';
import {Row, Spin} from 'antd';
import useWindowSize from "./useWindowSize.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {setCurrentOneMessage} from './../../Actions/index.jsx';

export const ContentMessenger = (props, {oneMessage}) => {
  const {idUser} = useParams();
  const observer = useRef();
  const keepScrollToBottom = useRef();
  const dispatch = useDispatch();
  const {list, infoUser, loading, hasMore, loadingMore} = useSelector(state => state.oneMessage);
  const heightContent = window.innerHeight - 134;
  const [setupFakeName, setSetupFakeName] = useState(false)
  const [heightContentBody, setHeightContentBody] = useState({height: heightContent})
  const windowSize = useWindowSize();
  const [heightRoom, setHeightRoom] = useState({height: heightContent - 56})
  const [showSearchRoomChat, setShowSearchRoomChat] = useState(false)
  const currentUser = JSON.parse(localStorage.getItem('ustk')).info;

  useEffect(() => {
    props.getMessageOneUser(idUser)
  }, [idUser])

  useEffect(() => {
    if(keepScrollToBottom.current) {
        keepScrollToBottom.current.scrollTop = keepScrollToBottom.current.scrollHeight;
    }
  }, [loading])

  useEffect(() => {
    setHeightContentBody({height: heightContent})
    setHeightRoom({height: heightContent - 56})
  },[windowSize])

  const lastMessage = useCallback(node => {
    if(loadingMore) return
      if(observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting && hasMore){
          dispatch(setCurrentOneMessage())
          keepScrollToBottom.current.scrollTop = 500;
        }
      })
    if(node) observer.current.observe(node)
  }, [loadingMore, hasMore])

  function setupFakeNameFunc(){
    setSetupFakeName(true)
  }

  function saveFakeNameFunc(){
    setSetupFakeName(false)
  }

  function showSearchRoomChatFunc(){
    setShowSearchRoomChat(true)
  }

  function hideSearchRoomChatFunc(){
    setShowSearchRoomChat(false)
  }

    if(loading){
      return(
        <div className="content-messenger-container" style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
          <Spin />
        </div>
      )
    }
      return(
        <div className="content-messenger-container">
          <div className="content-messenger-head">
            <div className="content-messenger-info">
              <div className="content-messenger-info-avatar">
                {infoUser.user_avatar_cropX === null ?
                  <img src={infoUser.user_avatar} alt={infoUser.user_last_name} />
                  :
                  <Image cloudName="mohi-vn" publicId={infoUser.user_avatar+ ".jpg"} version="1607061343">
                    <Transformation height={infoUser.user_avatar_cropH}  width={infoUser.user_avatar_cropW} x={infoUser.user_avatar_cropX} y={infoUser.user_avatar_cropY} crop="crop" />
                  </Image>
                }
              </div>
              <div>
                <div className="content-messenger-info-name">{infoUser.user_first_name + ' ' + infoUser.user_last_name}</div>
                <div className="content-messenger-info-status"><span>Đang hoạt động</span> <p></p></div>
              </div>
            </div>
            <div className="content-messenger-option">
              <GiPhone />
              <BsFillCameraVideoFill />
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className="content-messenger-body" style={heightContentBody}>
            <div className="content-messenger-body-left" >
              <div className="content-messenger-room" style={heightRoom} ref={keepScrollToBottom}>
                {loadingMore && <div style={{textAlign: 'center', background: 'rgba(0,128,128,0.3)', marginBottom: '10px', borderRadius: '3px', padding: '3px' }}>Đang tải thêm tin nhắn vui lòng đợi...</div>}
                {list.map((mess, index) => {
                  if(mess.messages_From === currentUser.id){
                    return(
                      <React.Fragment key={index}>
                        <div className="content-messenger-my-chat" ref={index === 0 ? lastMessage : null}>
                          <div className="content-messenger-my-chat-content">
                            <p>{mess.messages_Message}</p>
                            <div className="content-messenger-my-chat-content-status">
                              {mess.user_avatar_cropX === null ?
                                <img src={mess.user_avatar} alt={mess.user_last_name} />
                                :
                                <Image cloudName="mohi-vn" publicId={mess.user_avatar+ ".jpg"} version="1607061343">
                                  <Transformation height={mess.user_avatar_cropH}  width={mess.user_avatar_cropW} x={mess.user_avatar_cropX} y={mess.user_avatar_cropY} crop="crop" />
                                </Image>
                              }
                            </div>
                          </div>
                        </div>
                        <div className="clear"></div>
                      </React.Fragment>
                    )
                  }else {
                    return(
                      <React.Fragment key={index}>
                        <div className="content-messenger-user-chat" ref={index === 0 ? lastMessage : null}>
                          <div className="content-messenger-user-chat-content">
                            <div className="content-messenger-user-chat-content-avatar">
                              {mess.user_send.user_avatar_cropX === null ?
                                <img src={mess.user_send.user_avatar} alt={mess.user_send.user_last_name} />
                                :
                                <Image cloudName="mohi-vn" publicId={mess.user_send.user_avatar+ ".jpg"} version="1607061343">
                                  <Transformation height={mess.user_send.user_avatar_cropH}  width={mess.user_send.user_avatar_cropW} x={mess.user_send.user_avatar_cropX} y={mess.user_send.user_avatar_cropY} crop="crop" />
                                </Image>
                              }
                            </div>
                            <p>{mess.messages_Message}</p>
                          </div>
                        </div>
                        <div className="clear"></div>
                      </React.Fragment>
                    )
                  }
                })}
              </div>
              <div className="content-messenger-input">
                <div className="content-messenger-input-file">
                  <AiFillCamera />
                  <AiFillFile />
                  <BsImage />
                </div>
                <div className="content-messenger-input-text">
                  <input type="text" placeholder="Nhập tin nhắn..."/>
                  <FaSmile />
                </div>
                <div className="content-messenger-input-react">
                  <AiTwotoneLike />
                </div>
              </div>
            </div>
            <div className="content-messenger-body-right">
              <div className="content-messenger-body-right-title">
                <div className="content-messenger-body-right-head">
                  <div className="content-messenger-body-right-head-avatar">
                    {infoUser.user_avatar_cropX === null ?
                      <img src={infoUser.user_avatar} alt={infoUser.user_last_name} />
                      :
                      <Image cloudName="mohi-vn" publicId={infoUser.user_avatar+ ".jpg"} version="1607061343">
                        <Transformation height={infoUser.user_avatar_cropH}  width={infoUser.user_avatar_cropW} x={infoUser.user_avatar_cropX} y={infoUser.user_avatar_cropY} crop="crop" />
                      </Image>
                    }
                  </div>
                </div>
                <div className="content-messenger-body-right-head-name">
                  {infoUser.user_first_name + ' ' + infoUser.user_last_name}
                </div>
              </div>
              <div className="content-messenger-body-right-support">
                <ul className="content-messenger-body-right-support-item">
                  <div className="content-messenger-body-right-support-title">
                    Hành động khác
                  </div>
                  <li>
                    {showSearchRoomChat ?
                      <>
                    <div className="content-messenger-body-right-support-item-title" style={{width: '100%'}}>
                        <input type="text" placeholder="Tìm kiếm trong cuộc trò chuyện" style={{width: '90%'}}/>
                    </div>
                    <div className="content-messenger-body-right-support-icon" onClick={() => hideSearchRoomChatFunc()}>
                      <AiFillCloseCircle />
                    </div>
                    </>
                    :
                    <>
                      <div className="content-messenger-body-right-support-item-title" onClick={() => showSearchRoomChatFunc()}>
                        Tìm kiếm trong cuộc trò chuyện
                      </div>
                      <div className="content-messenger-body-right-support-icon" onClick={() => showSearchRoomChatFunc()}>
                        <BsSearch />
                      </div>
                    </>
                    }
                  </li>
                  <li>
                  {setupFakeName ?
                      <>
                      <div className="content-messenger-body-right-support-item-title" style={{width: '100%'}}>
                          <input type="text" placeholder="Chỉnh sửa biệt danh" style={{width: '90%'}}/>
                      </div>
                      <button className="save-fakename" onClick={() => saveFakeNameFunc()}>Lưu</button>
                      </>
                    :
                    <>
                    <div className="content-messenger-body-right-support-item-title" onClick={() => setupFakeNameFunc()}>
                      Chỉnh sửa biệt danh
                    </div>
                    <div className="content-messenger-body-right-support-icon" onClick={() => setupFakeNameFunc()}>
                      <BsPencilSquare />
                    </div>
                    </>
                    }
                  </li>
                </ul>
                <div className="content-messenger-body-right-support-item">
                  <div className="content-messenger-body-right-support-title">
                    Ảnh đã chia sẻ
                  </div>
                  <div className="content-messenger-body-right-list-iamge-share">
                    <Row>
                      <div className="content-messenger-body-right-list-iamge-share-item">
                        <i style={{backgroundImage:'url("https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-0/s600x600/120467372_1235184720184447_7169794468845396216_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=orfey83uSHgAX_dn_Hh&_nc_ht=scontent.fvca1-1.fna&tp=7&oh=b1548bb34d2694c57b096aee2e8cde2c&oe=5F9F0901")'}}></i>
                      </div>
                      <div className="content-messenger-body-right-list-iamge-share-item">
                        <i style={{backgroundImage:'url("https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-0/s600x600/120467372_1235184720184447_7169794468845396216_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=orfey83uSHgAX_dn_Hh&_nc_ht=scontent.fvca1-1.fna&tp=7&oh=b1548bb34d2694c57b096aee2e8cde2c&oe=5F9F0901")'}}></i>
                      </div>
                      <div className="content-messenger-body-right-list-iamge-share-item">
                        <i style={{backgroundImage:'url("https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-0/s600x600/120467372_1235184720184447_7169794468845396216_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=orfey83uSHgAX_dn_Hh&_nc_ht=scontent.fvca1-1.fna&tp=7&oh=b1548bb34d2694c57b096aee2e8cde2c&oe=5F9F0901")'}}></i>
                      </div>
                      <div className="content-messenger-body-right-list-iamge-share-item">
                        <i style={{backgroundImage:'url("https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-0/s600x600/120467372_1235184720184447_7169794468845396216_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=orfey83uSHgAX_dn_Hh&_nc_ht=scontent.fvca1-1.fna&tp=7&oh=b1548bb34d2694c57b096aee2e8cde2c&oe=5F9F0901")'}}></i>
                      </div>
                      <div className="content-messenger-body-right-list-iamge-share-item">
                        <i style={{backgroundImage:'url("https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-0/s600x600/120467372_1235184720184447_7169794468845396216_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=orfey83uSHgAX_dn_Hh&_nc_ht=scontent.fvca1-1.fna&tp=7&oh=b1548bb34d2694c57b096aee2e8cde2c&oe=5F9F0901")'}}></i>
                      </div>
                      <div className="content-messenger-body-right-list-iamge-share-item">
                        <i style={{backgroundImage:'url("https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-0/s600x600/120467372_1235184720184447_7169794468845396216_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=orfey83uSHgAX_dn_Hh&_nc_ht=scontent.fvca1-1.fna&tp=7&oh=b1548bb34d2694c57b096aee2e8cde2c&oe=5F9F0901")'}}></i>
                      </div>
                    </Row>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
