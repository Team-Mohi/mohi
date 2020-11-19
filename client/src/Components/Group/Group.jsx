import React, {useState} from 'react';
import './Group.css';
import {Link, useLocation, useParams, useHistory, Switch, Route} from 'react-router-dom';
import {FaCheck} from 'react-icons/fa';
import {AiOutlinePlus} from 'react-icons/ai';
import EditorEmoji from './EditorEmoji.jsx';
import EditorMention from './EditorMention.jsx';
import EditorAddMember from './EditorAddMember.jsx';
import {Select, Button, Tooltip, Row, Col} from 'antd';
import { FaUserTag, FaImage, FaUserFriends, FaLock, FaMapMarkerAlt, FaListAlt} from "react-icons/fa";
import {MdPublic} from "react-icons/md";
import {GoPrimitiveDot} from "react-icons/go";
import {AiFillCamera} from "react-icons/ai";
import VideoGroup from './VideoGroup.jsx';
import ImageGroup from './ImageGroup.jsx';

function Group(){
  const history = useHistory();
  const location = useLocation().pathname.split('/');
  const {idGroup} = useParams();
  const isActive = location[3];
  const [showModalCreatePost, setShowModalCreatePost] = useState(false);
  const [valueEditor, setValueEditor] = useState();
  const [isShowInputTag, setIsShowInputTag] = useState(false);
  const [listMention, setListMention] = useState([]);
  const [firstMention, setFirstMention] = useState();
  const {Option} = Select;
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const yearNow = new Date().getFullYear();

  function showModalCreatePostFunc(){
    setShowModalCreatePost(true)
  }

  function closeModalCreatePost(){
    setShowModalCreatePost(false)
  }

  // func create post when submit
    function submitCreatePost(){
      setIsLoadingSubmit(true)
    }

  const changeStatusButtonSubmit = (value) => {
    setValueEditor(value)
  }

  function showMentionList(mention){
    if(!firstMention) setFirstMention(mention)
    if(firstMention) setListMention([...listMention, mention])
  }

  function showInputTag(){
    setIsShowInputTag(true)
  }

  const changeActiveKey = (key) => {
    history.push('/rules-mohi', {key: key});
  }

  const moreMention = () => {
    return(
      <ul className="create-post-more-mention">
        {listMention.map((mention, index) => {
          return(
            <li key={index}><Link to={mention.link}>{mention.name}</Link></li>
          )
        })}
      </ul>
    )
  }

  return(
    <React.Fragment>
      <div className="wrapper">
        <div className="group-one-container">
          <div className="group-one-head">
            <div className="group-one-left">
              <div className="group-avatar">
                <div className="group-avatar-img">
                  <img src="https://image.winudf.com/v2/image1/dHR3LmNoaW5lc2VnaXJsLndhbGxwYXBlcl9zY3JlZW5fMF8xNTUyOTkzNjQ4XzA3NQ/screen-0.jpg?fakeurl=1&type=.jpg" alt="" />
                </div>
                <div className="profile-header-avatar-select">
                  <div className="profile-header-avatar-select-active">
                    <div className="profile-header-avatar-update">
                    <label htmlFor="update-avatar">
                    <AiFillCamera/>
                    <div>Cập nhật</div>
                    </label>
                    <input type="file" id="update-avatar"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-name">
                <Link>ReactJs Việt Nam</Link>
              </div>
              <div className="group-one-menu-sider">
                <ul>
                  <Link to={"/groups/"+ idGroup}>
                    <li className={isActive === 'home' || !isActive ? `page-active` : ''}>
                      <span>Trang chủ</span>
                    </li>
                  </Link>
                  <Link to={"/groups/"+ idGroup + "/images"}>
                    <li className={isActive === 'images'  ? `page-active` : ''}>
                      <span>Ảnh</span>
                    </li>
                  </Link>
                  <Link to={"/groups/"+ idGroup + "/videos"}>
                    <li className={isActive === 'videos'  ? `page-active` : ''}>
                      <span>Video</span>
                    </li>
                  </Link>
                  <Link to={"/groups/"+ idGroup + "/settings"}>
                    <li className={isActive === 'settings'  ? `page-active` : ''}>
                      <span>Cài đặt</span>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="group-one-right">
              <div className="group-cover">
                <div className="group-cover-img">
                  <img src="http://anhnendep.net/wp-content/uploads/2016/04/hinh-gai-dep-hot-gril-viet-nam-11.jpg" alt="" />
                  <div className="group-update-cover">
                    <label htmlFor="group_update_cover" className="group-update-cover-label">
                      <AiFillCamera/>
                      <span>Cập nhật ảnh bìa</span>
                    </label>
                  </div>
                </div>
                <input id="group_update_cover" type="file" style={{opacity:0, visibility:'hidden'}}/>
                <div className="group-menu-head">
                  <div className="group-menu-button-group">
                    <span>Đã tham gia <FaCheck /></span>
                    <span>Mời thành viên <AiOutlinePlus/></span>
                  </div>
                  <div className="group-menu-button-group">
                    <span>Quản lí yêu cầu</span>
                  </div>
                </div>
              </div>
              <Switch>
                <Route exact path="/groups/:idGroup">
                  <div className="group-one-content">
                  <div className="group-one-content-left">
                    <div className="create-post" onClick={() => showModalCreatePostFunc()} style={showModalCreatePost ? {zIndex: '10'} : null}>
                      <div className="create-post-input">
                        <div className="create-post-avatar">
                          <img src="http://xemanhdep.com/wp-content/uploads/2016/04/hinh-anh-girl-xinh-dep-nhat-2016-10.jpg" alt="" />
                        </div>
                        <div className="create-post-editor">
                          <EditorEmoji showModalCreatePost={showModalCreatePost} changeStatusButtonSubmit={changeStatusButtonSubmit}/>
                        </div>
                      </div>
                      {isShowInputTag ?
                        <>
                          <div className="create-post-input-tag">
                            <EditorMention showMentionList={showMentionList}/>
                          </div>
                          {firstMention ?
                          <div className="creat-post-tag-list">
                            <span>Cùng với</span>
                            <span>
                              <Link to={firstMention.link}> {firstMention.name} </Link> {/*mention đầu tiên*/}
                              {listMention.length <= 2 ?
                                <>
                                  {listMention.map((mention, index) => {
                                    return(
                                      <span  key={index}>
                                        và
                                        <Link to={mention.link}> {mention.name} </Link> {/*mention kế trừ mention đầu*/}
                                      </span>
                                    )
                                  })}
                                </>
                              :
                                <span className="create-post-mention">
                                  <Tooltip title={moreMention} color={`black`}>
                                      và {listMention.length} người khác
                                  </Tooltip>
                                </span>
                              }
                            </span>
                          </div>
                          : null}
                        </>
                      :null}
                      <div className="create-post-option">
                        <div className="create-post-choose-image">
                          <label htmlFor="choose-image">
                            <FaImage style={{ fontSize: "20px", marginRight: '7px' }} />
                            Ảnh/video
                          </label>
                          <input type="file" id="choose-image" />
                        </div>
                        <div className="create-post-tag" onClick={() => showInputTag()}>
                          <FaUserTag style={{ fontSize: "20px", marginRight: '7px' }} />
                          Gắn thẻ
                        </div>
                      </div>
                      {showModalCreatePost ?
                        <div>
                          <div className="create-post-choose-place-post">
                            <div className="create-post-newfeed-place">
                              <div>
                                  <Switch></Switch>
                                  <span className="place-post">Tin của bạn</span>
                              </div>
                              <Select className="select-privacy" defaultValue="public" style={{ width: 140 }} loading>
                                  <Option value="public"><MdPublic /> Công khai</Option>
                                  <Option value="friend"><FaUserFriends /> Bạn bè</Option>
                                  <Option value="onlyme"><FaLock /> Chỉ mình tôi</Option>
                              </Select>
                            </div>
                            <div className="create-post-story-place">
                              <div>
                                  <Switch defaultChecked></Switch>
                                  <span className="place-post">Bảng tin</span>
                              </div>
                              <Select className="select-privacy" defaultValue="public" style={{ width: 140 }} loading>
                                  <Option value="public"><MdPublic /> Công khai</Option>
                                  <Option value="friend"><FaUserFriends /> Bạn bè</Option>
                                  <Option value="onlyme"><FaLock /> Chỉ mình tôi</Option>
                              </Select>
                            </div>
                          </div>
                          <div className="create-post-submit">
                            {isLoadingSubmit ?
                              <Button loading>Đăng</Button>
                            :
                            <>
                            {valueEditor ?

                              <Button onClick={() => submitCreatePost()} >Đăng</Button>
                              :
                              <Button disabled>Đăng</Button>
                            }
                            </>
                          }
                          </div>
                        </div>
                      : null}
                    </div>
                  </div>
                  <div className="group-one-content-right">
                    <div className="group-one-add-member">
                      <div className="title-box">Mời bạn bè</div>
                      <div className="group-input-add-member">
                        <EditorAddMember />
                      </div>
                      <div className="title-box">Bạn bè của bạn</div>
                      <div className="group-introduce-new-member">
                        <div className="group-introduce-new-member-item">
                          <div className="group-introduce-new-member-avatar">
                            <img src="https://msmobile.com.vn/upload_images/images/hinh-nen-girl-xinh-full-hd-cho-laptop-8.jpg" alt=""/>
                          </div>
                          <div className="group-introduce-new-member-name">
                            <span><Link>Nguyễn Thị Kiều My</Link></span>
                          </div>
                          <div className="group-introduce-new-member-button">
                            <span>Mời</span>
                          </div>
                        </div>
                        <div className="group-introduce-new-member-item">
                          <div className="group-introduce-new-member-avatar">
                            <img src="https://msmobile.com.vn/upload_images/images/hinh-nen-girl-xinh-full-hd-cho-laptop-8.jpg" alt=""/>
                          </div>
                          <div className="group-introduce-new-member-name">
                            <span><Link>Nguyễn Thị Kiều My</Link></span>
                          </div>
                          <div className="group-introduce-new-member-button">
                            <span>Mời</span>
                          </div>
                        </div>
                        <div className="group-introduce-new-member-item">
                          <div className="group-introduce-new-member-avatar">
                            <img src="https://msmobile.com.vn/upload_images/images/hinh-nen-girl-xinh-full-hd-cho-laptop-8.jpg" alt=""/>
                          </div>
                          <div className="group-introduce-new-member-name">
                            <span><Link>Nguyễn Thị Kiều My</Link></span>
                          </div>
                          <div className="group-introduce-new-member-button">
                            <span>Mời</span>
                          </div>
                        </div>
                        <div className="group-introduce-new-member-item">
                          <div className="group-introduce-new-member-avatar">
                            <img src="https://msmobile.com.vn/upload_images/images/hinh-nen-girl-xinh-full-hd-cho-laptop-8.jpg" alt=""/>
                          </div>
                          <div className="group-introduce-new-member-name">
                            <span><Link>Nguyễn Thị Kiều My</Link></span>
                          </div>
                          <div className="group-introduce-new-member-button">
                            <span>Mời</span>
                          </div>
                        </div>
                        <div className="group-introduce-new-member-item">
                          <div className="group-introduce-new-member-avatar">
                            <img src="https://msmobile.com.vn/upload_images/images/hinh-nen-girl-xinh-full-hd-cho-laptop-8.jpg" alt=""/>
                          </div>
                          <div className="group-introduce-new-member-name">
                            <span><Link>Nguyễn Thị Kiều My</Link></span>
                          </div>
                          <div className="group-introduce-new-member-button">
                            <span>Mời</span>
                          </div>
                        </div>
                        <div className="group-introduce-new-member-item">
                          <div className="group-introduce-new-member-avatar">
                            <img src="https://msmobile.com.vn/upload_images/images/hinh-nen-girl-xinh-full-hd-cho-laptop-8.jpg" alt=""/>
                          </div>
                          <div className="group-introduce-new-member-name">
                            <span><Link>Nguyễn Thị Kiều My</Link></span>
                          </div>
                          <div className="group-introduce-new-member-button">
                            <span>Mời</span>
                          </div>
                        </div>
                        <div className="group-introduce-new-member-item">
                          <div className="group-introduce-new-member-avatar">
                            <img src="https://msmobile.com.vn/upload_images/images/hinh-nen-girl-xinh-full-hd-cho-laptop-8.jpg" alt=""/>
                          </div>
                          <div className="group-introduce-new-member-name">
                            <span><Link>Nguyễn Thị Kiều My</Link></span>
                          </div>
                          <div className="group-introduce-new-member-button">
                            <span>Mời</span>
                          </div>
                        </div>
                      </div>
                    </div>
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
                          <span>Trợ Giúp</span>
                        </li>
                      </ul>
                      <div className="brand-app">Mohi &copy; {yearNow}</div>
                    </div>
                  </div>
                </div>
                </Route>
                <Route path="/groups/:idGroup/images">
                  <ImageGroup />
                </Route>
                <Route path="/groups/:idGroup/videos">
                  <VideoGroup />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
      {showModalCreatePost ?
      <div className="create-post-presentation" onClick={() => closeModalCreatePost()}>
      </div>
      :null}
    </React.Fragment>
  )
}

export default Group;
