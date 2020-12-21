import React, {useState, useEffect} from 'react';
import EditorEmoji from './EditorEmoji.jsx';
import EditorMention from './EditorMention.jsx';
import UploadMuti from './../../Upload/UploadMuti.jsx';
import {Image,Transformation} from 'cloudinary-react';
import {Select, Switch, Button, Tooltip, Row, Col} from 'antd';
import {Link} from 'react-router-dom';
import { FaUserTag, FaImage, FaUserFriends, FaLock, FaMapMarkerAlt, FaListAlt} from "react-icons/fa";
import {MdPublic} from "react-icons/md";
import {AiFillInfoCircle, AiOutlinePlus, AiFillLike, AiFillFlag} from "react-icons/ai";
import { FiBarChart } from "react-icons/fi";
import { GiPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";;

function CreatePost(props) {
  const {Option} = Select;
  const [isShowInputTag, setIsShowInputTag] = useState(false);
  const [listMention, setListMention] = useState([]);
  const [showModalCreatePost, setShowModalCreatePost] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem('ustk')).info;
  // data send api create post
  const [valueEditor, setValueEditor] = useState();
  const [fileList, setFileList] = useState([]);
  const [privacyNewFeed, setPrivacyNewFeed] = useState('public');
  const [privacyStory, setPrivacyStory] = useState('public');
  const [placeNewFeed, setPlaceNewFeed] = useState(1);
  const [placeStory, setPlaceStory] = useState(0);

  useEffect(() => {
    if(props.statusCreatePost === 'success' || props.statusCreatePost === 'error'){
      setFileList([])
      setValueEditor(null)
      setShowModalCreatePost(false)
    }
  }, [props.statusCreatePost])

  const uploadMuti = (files) => {
    setFileList(files)
  }

  const onChangePrivacyStory = (value) => {
    setPrivacyStory(value)
  }

  const onChangePrivacyNewFeed = (value) => {
    setPrivacyNewFeed(value)
  }

  const onChangePlaceNewFeed = (checked, event) => {

    if(checked){
      setPlaceNewFeed(1)
    }else {
      setPlaceNewFeed(0)
    }
  }

  const onChangePlaceStory= (checked, event) => {
    if(checked){
      setPlaceStory(1)
    }else {
      setPlaceStory(0)
    }
  }

  function showModalCreatePostFunc(){
    setShowModalCreatePost(true)
  }

  function closeModalCreatePost(){
    setShowModalCreatePost(false)
  }
// func create post when submit
  function submitCreatePost(){
    props.submitCreatePost(valueEditor, fileList, privacyNewFeed, privacyStory, placeNewFeed, placeStory, listMention)
  }

  const changeStatusButtonSubmit = (value) => {
    setValueEditor(value)
  }

  function showInputTag(){
    setIsShowInputTag(true)
  }

  function showMentionList(mention){
    let arr = [];

    for(let key in mention){
      const ent = mention[key];
        arr.push(ent);
    }
    setListMention(arr)
  }

  const moreMention = () => {
    return(
      <ul className="create-post-more-mention">
        {listMention.map((mention, index) => {
          return(
            <li key={index}><Link to={mention.data.mention.link}>{mention.data.mention.name}</Link></li>
          )
        })}
      </ul>
    )
  }

    return (
        <>
        <div className="create-post" onClick={() => showModalCreatePostFunc()} style={showModalCreatePost ? {zIndex: '10', marginBottom: '10px'} : {marginBottom: '10px'}} >
          <div className="create-post-input">
            <div className="create-post-avatar">
              {currentUser.user_avatar_cropX === null ?
                <img src={currentUser.user_avatar} alt={currentUser.user_first_name + ' ' + currentUser.user_last_name} />
                :
                <Image cloudName="mohi-vn" publicId={currentUser.user_avatar+ ".jpg"} version="1607061343">
                  <Transformation height={currentUser.user_avatar_cropH}  width={currentUser.user_avatar_cropW} x={currentUser.user_avatar_cropX} y={currentUser.user_avatar_cropY} crop="crop" />
                </Image>
              }
            </div>
            <div className="create-post-editor">
            <EditorEmoji showModalCreatePost={showModalCreatePost} changeStatusButtonSubmit={changeStatusButtonSubmit} statusCreatePost={props.statusCreatePost}/>
            </div>
          </div>
          <UploadMuti statusCreatePost={props.statusCreatePost} showModalCreatePost={showModalCreatePost} uploadMuti={uploadMuti}/>
          {isShowInputTag && showModalCreatePost ?
            <>
              <div className="create-post-input-tag">
              {showModalCreatePost && <EditorMention showMentionList={showMentionList}/>}
              </div>
              {listMention.length ?
              <div className="creat-post-tag-list">
                <span>
                  {listMention.length <= 2 ?
                    <>
                      {listMention.map((mention, index) => {
                        return(
                          <span  key={index}>
                            {index === 0 ? 'Cùng với' : 'và'}
                            <Link to={mention.data.mention.link}> {mention.data.mention.name} </Link> {/*mention kế trừ mention đầu*/}
                          </span>
                        )
                      })}
                    </>
                  :
                    <span className="create-post-mention">
                      <Tooltip title={moreMention} color={`black`}>
                          cùng với {listMention.length} người khác
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
                      <Switch onChange={(checked, event) => onChangePlaceStory(checked, event)} ></Switch>
                      <span className="place-post">Tin của bạn</span>
                  </div>
                </div>
                <div className="create-post-story-place">
                  <div>
                      <Switch  onChange={(checked, event) => onChangePlaceNewFeed(checked, event)} defaultChecked></Switch>
                      <span className="place-post">Bảng tin</span>
                  </div>
                  <Select className="select-privacy" defaultValue={privacyStory} style={{ width: 140 }} onSelect={(value) => onChangePrivacyNewFeed(value)}>
                      <Option value="public"><MdPublic /> Công khai</Option>
                      <Option value="friend"><FaUserFriends /> Bạn bè</Option>
                      <Option value="onlyme"><FaLock /> Chỉ mình tôi</Option>
                  </Select>
                </div>
              </div>
              <div className="create-post-submit">
                {props.statusCreatePost === 'loading' ?
                  <Button loading>Đăng</Button>
                :
                <>
                {valueEditor || fileList.length ?

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
