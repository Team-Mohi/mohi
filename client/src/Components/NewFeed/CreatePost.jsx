import React, {useState} from 'react';
import EditorEmoji from './EditorEmoji.jsx';
import EditorMention from './EditorMention.jsx';
import UploadMuti from './../Upload/UploadMuti.jsx';
import {Select, Switch, Button, Tooltip, Row, Col} from 'antd';
import {Link} from 'react-router-dom';
import { FaUserTag, FaImage, FaUserFriends, FaLock, FaMapMarkerAlt, FaListAlt} from "react-icons/fa";
import {MdPublic} from "react-icons/md";
import {AiFillInfoCircle, AiOutlinePlus, AiFillLike, AiFillFlag} from "react-icons/ai";
import { FiBarChart } from "react-icons/fi";
import { GiPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";;

function CreatePost() {
  const {Option} = Select;
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [valueEditor, setValueEditor] = useState();
  const [isShowInputTag, setIsShowInputTag] = useState(false);
  const [listMention, setListMention] = useState([]);
  const [firstMention, setFirstMention] = useState();
  const [showModalCreatePost, setShowModalCreatePost] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem('ustk')).info;

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

  function showInputTag(){
    setIsShowInputTag(true)
  }

  function showMentionList(mention){
    if(!firstMention) setFirstMention(mention)
    if(firstMention) setListMention([...listMention, mention])
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

    return (
        <>
        <div className="create-post" onClick={() => showModalCreatePostFunc()} style={showModalCreatePost ? {zIndex: '10'} : null}>
          <div className="create-post-input">
            <div className="create-post-avatar">
              <img src={currentUser.user_avatar} alt={currentUser.user_first_name + ' ' + currentUser.user_last_name} />
            </div>
            <div className="create-post-editor">
            <EditorEmoji showModalCreatePost={showModalCreatePost} changeStatusButtonSubmit={changeStatusButtonSubmit}/>
            </div>
          </div>
          <UploadMuti showModalCreatePost={showModalCreatePost}/>
          {isShowInputTag && showModalCreatePost ?
            <>
              <div className="create-post-input-tag">
              {showModalCreatePost && <EditorMention showMentionList={showMentionList}/>}
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
              <label htmlFor="create_post_upload_image">
                <FaImage style={{ fontSize: "20px", marginRight: '7px' }} />
                Ảnh/video
              </label>
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
        {showModalCreatePost && <div onClick={() => closeModalCreatePost()} className="presential" style={{position: 'fixed', width: '100%', height: '100vh', top: 0, left: 0, background: 'rgba(0,0,0,0.5)', zIndex: 9}}>
        </div>}
        </>
    )
}

export default CreatePost;
