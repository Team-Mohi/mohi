import React, {useState, useEffect, useRef, useCallback, useContext} from 'react';
import {FaSmile} from 'react-icons/fa';
import {GiPhone} from 'react-icons/gi';
import {MdRadioButtonUnchecked} from 'react-icons/md';
import {AiOutlineCheckCircle} from 'react-icons/ai';
import {Image,Transformation} from 'cloudinary-react';
import {BsSearch, BsFillCameraVideoFill, BsThreeDotsVertical, BsImage, BsPencilSquare} from 'react-icons/bs';
import {AiTwotoneSetting, AiTwotoneLike, AiFillFile, AiFillCamera, AiFillCloseCircle} from 'react-icons/ai';
import {Row, Spin} from 'antd';
import useWindowSize from "./useWindowSize.jsx";
import {Link} from "react-router-dom";
import EditorEmoji from "./EditorEmoji.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import {setCurrentOneMessage} from './../../Actions/index.jsx';
import {addNewMessageOflist} from './../../Actions/index.jsx';
import {addNewMessage} from './../../Actions/index.jsx';
import { WaveLoading } from 'react-loadingg';
import axios from 'axios';
import SocketContext from './../Socket/index.jsx';
import moment from 'moment';
import 'moment/locale/vi';
import {readMessage} from './../../Actions/index.jsx';
import {readMessageOfList} from './../../Actions/index.jsx';
import {readMyMessage} from './../../Actions/index.jsx';
import {typingMess} from './../../Actions/index.jsx';

export const ContentMessenger = (props, {oneMessage}) => {
  const {idUser} = useParams();
  const observer = useRef();
  const inputImageRef = useRef();
  const keepScrollToBottom = useRef();
  const dispatch = useDispatch();
  var {list, infoUser, loading, hasMore, loadingMore, typing} = useSelector(state => state.oneMessage);
  const socket = useContext(SocketContext);
  const heightContent = window.innerHeight - 134;
  const [setupFakeName, setSetupFakeName] = useState(false)
  const [heightContentBody, setHeightContentBody] = useState({height: heightContent})
  const windowSize = useWindowSize();
  const [heightRoom, setHeightRoom] = useState({height: heightContent - 56})
  const [showSearchRoomChat, setShowSearchRoomChat] = useState(false)
  const [newImageMess, setNewImageMess] = useState();
  const [newVideoMess, setNewVideoMess] = useState();
  var currentUser = JSON.parse(localStorage.getItem('ustk')).info;
  const [listNewMess, setListNewMess] = useState([]);
  const [listOnline, setListOnline] = useState();
  const history = useHistory();

  useEffect(() => {
    socket.on('private-chat', function(data){
        dispatch(addNewMessage(data.message))
        if(keepScrollToBottom.current) {
          keepScrollToBottom.current.scrollTop = keepScrollToBottom.current.scrollHeight;
        }
    });
    socket.on('read-message', function(data){
      dispatch(readMessage({id: data.idUser, clientId: data.clientId}))
    });
    socket.on('typing-mess', function(data){
      dispatch(typingMess({from: data.from.id, status: data.status}));
      if(keepScrollToBottom.current) {
        keepScrollToBottom.current.scrollTop = keepScrollToBottom.current.scrollHeight;
      }
    });
    socket.on('register', function(data){
      setListOnline(data)
    });

    if(history.location.state){
      dispatch(readMessageOfList({id: currentUser.id, clientId: history.location.state.id}))
    }
  }, [])

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

  const IsOnline = (props) => {
    let result = '';
    if(listOnline){
      Object.keys(listOnline).forEach(key => {
          if(listOnline[key] === props.username){
            result = <div className="content-messenger-info-status"><span>Đang hoạt động</span> <p></p></div>;
          }
      });
    };

    return result;
  }

  const isTypingMess = (status) => {
    socket.emit('typing-mess', {from : currentUser, to : infoUser, status: status})
  }

  const readMess = async () => {
    await axios.post("https://www.api.mohi.vn/api/auth/read-message", {id: infoUser.id}).then((res) => {
      dispatch(readMessageOfList({id: currentUser.id, clientId: infoUser.id}))
      socket.emit('read-message', {user_username: infoUser.user_username, idUser: infoUser.id, clientId: currentUser.id})
    })
  }

  const onSubmitMess = async (value) => {

    var newMsg = {
      id: currentUser.id,
      avtatar: currentUser.user_avatar,
      name: currentUser.user_first_name + ' ' + currentUser.user_last_name,
      message: value,
      time: new Date()
    }

    setListNewMess([...listNewMess, newMsg]);
    keepScrollToBottom.current.scrollTop = keepScrollToBottom.current.scrollHeight;
    await axios.post("https://www.api.mohi.vn/api/auth/send-message", {
      messages_Message: value,
      id: infoUser.id
    })
    .then((res) => {
      dispatch(addNewMessage(res.data))
      dispatch(addNewMessageOflist({type: 'send', to : res.data[0].user_receive, message: res.data}))
      setListNewMess([]);
      socket.emit('private-chat', {from : currentUser, to : res.data[0].user_receive, message: res.data})
    })

  }

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

  const onChangeSendImage = (e) => {

      let file = e.target.files[0];
      let blobUrl = URL.createObjectURL(file)
      URL.revokeObjectURL(file)

      if(file.type === 'video/ogg' || file.type === 'video/mp4'){
        setNewVideoMess(blobUrl)
        setNewImageMess()
      }
      if(file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg'){
        setNewImageMess(blobUrl)
        setNewVideoMess()
      }

  }

  const deleteImageMess = () => {
    setNewImageMess()
    setNewVideoMess()

  }

    if(loading){
      return(
        <div className="content-messenger-container" style={{position: 'relative', display: 'flex', alignItems:'center', justifyContent: 'center'}}>
          <WaveLoading />
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
                <IsOnline username={infoUser.user_username} />
              </div>
            </div>
            <div className="content-messenger-option">
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
                          <div style={{textAlign: 'center', fontSize: '11px', fontWeight: '600', color: 'rgba(0,0,0,0.7)'}}>
                            {index > 0 && new Date(mess.created_at).getTime() - new Date(list[index - 1].created_at).getTime() > 600000 && moment(mess.created_at).format("\h:m, DD-MM-YYYY")}
                          </div>
                          <div className="content-messenger-my-chat-content">
                            <p>{mess.messages_Message}</p>
                            <div className="content-messenger-my-chat-content-status">
                              {index < list.length - 1 && list[index + 1].messages_ReadAt === null &&
                                <React.Fragment>
                                  {mess.messages_ReadAt !== null ?
                                    <React.Fragment>
                                      {mess.user_receive.user_avatar_cropX === null ?
                                        <img src={mess.user_receive.user_avatar} alt={mess.user_receive.user_last_name} />
                                        :
                                        <Image cloudName="mohi-vn" publicId={mess.user_receive.user_avatar+ ".jpg"} version="1607061343">
                                          <Transformation height={mess.user_receive.user_avatar_cropH}  width={mess.user_receive.user_avatar_cropW} x={mess.user_receive.user_avatar_cropX} y={mess.user_receive.user_avatar_cropY} crop="crop" />
                                        </Image>
                                      }
                                    </React.Fragment>
                                    :
                                    <AiOutlineCheckCircle />
                                  }
                                </React.Fragment>
                              }
                              {index === list.length - 1 &&
                                <React.Fragment>
                                  {mess.messages_ReadAt !== null ?
                                    <React.Fragment>
                                      {mess.user_receive.user_avatar_cropX === null ?
                                        <img src={mess.user_receive.user_avatar} alt={mess.user_receive.user_last_name} />
                                        :
                                        <Image cloudName="mohi-vn" publicId={mess.user_receive.user_avatar+ ".jpg"} version="1607061343">
                                          <Transformation height={mess.user_receive.user_avatar_cropH}  width={mess.user_receive.user_avatar_cropW} x={mess.user_receive.user_avatar_cropX} y={mess.user_receive.user_avatar_cropY} crop="crop" />
                                        </Image>
                                      }
                                    </React.Fragment>
                                    :
                                    <AiOutlineCheckCircle />
                                  }
                                </React.Fragment>
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
                          <div style={{textAlign: 'center', fontSize: '11px', fontWeight: '600', color: 'rgba(0,0,0,0.7)'}}>
                            {index > 0 && new Date(mess.created_at).getTime() - new Date(list[index - 1].created_at).getTime() > 600000 && moment(mess.created_at).format("\h:m, DD-MM-YYYY")}
                          </div>
                          <div className="content-messenger-user-chat-content">
                            <div className="content-messenger-user-chat-content-avatar">
                              {index + 1 <= list.length -1 && mess.messages_From !== list[index + 1].messages_From &&
                                <React.Fragment>
                                  {mess.user_send.user_avatar_cropX === null ?
                                    <img src={mess.user_send.user_avatar} alt={mess.user_send.user_last_name} />
                                    :
                                    <Image cloudName="mohi-vn" publicId={mess.user_send.user_avatar+ ".jpg"} version="1607061343">
                                      <Transformation height={mess.user_send.user_avatar_cropH}  width={mess.user_send.user_avatar_cropW} x={mess.user_send.user_avatar_cropX} y={mess.user_send.user_avatar_cropY} crop="crop" />
                                    </Image>
                                  }
                                </React.Fragment>
                              }
                              {index === list.length - 1 &&
                                <React.Fragment>
                                  {mess.user_send.user_avatar_cropX === null ?
                                    <img src={mess.user_send.user_avatar} alt={mess.user_send.user_last_name} />
                                    :
                                    <Image cloudName="mohi-vn" publicId={mess.user_send.user_avatar+ ".jpg"} version="1607061343">
                                      <Transformation height={mess.user_send.user_avatar_cropH}  width={mess.user_send.user_avatar_cropW} x={mess.user_send.user_avatar_cropX} y={mess.user_send.user_avatar_cropY} crop="crop" />
                                    </Image>
                                  }
                                </React.Fragment>
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
                {listNewMess.map((msg, index) => {
                  return(
                    <React.Fragment key={index}>
                      <div className="content-messenger-my-chat">
                        <div className="content-messenger-my-chat-content">
                          <p>{msg.message}</p>
                          <div className="content-messenger-my-chat-content-status">
                          <MdRadioButtonUnchecked />
                          </div>
                        </div>
                      </div>
                      <div className="clear"></div>
                    </React.Fragment>
                  )
                })}
                {typing && <div>{infoUser.user_first_name + ' ' + infoUser.user_last_name} đang nhập tin nhắn...</div>}
              </div>
              <div className="content-messenger-input">
                <div className="content-messenger-input-text">
                  <EditorEmoji onSubmitMess={onSubmitMess} isTypingMess={isTypingMess} readMess={readMess}/>
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
                  <Link to={"/profile/" + infoUser.user_username}>{infoUser.user_first_name + ' ' + infoUser.user_last_name}</Link>
                </div>
              </div>
              <div className="content-messenger-body-right-support">
                <div className="content-messenger-body-right-support-item">
                  <div className="content-messenger-body-right-list-iamge-share">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
