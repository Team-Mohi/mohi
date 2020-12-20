import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import EditorUpdatePost from './EditorUpdatePost.jsx';
import './ModalUpdatePostProfile.css';
import {Button, Select, message, Space} from 'antd';
import UploadMuti from './UploadMuti.jsx';
import axios from 'axios';
import {MdPublic} from "react-icons/md";
import {FaUserFriends, FaLock} from "react-icons/fa";
import { toggleStatusPresentialModal } from './../../Actions/index.jsx';
import { updatePostProfile } from './../../Actions/index.jsx';

function ModalUpdatePostProfile({ presentialModal }){
  const {data} = useSelector(state => state.presentialModal);
  const [newContentPost, setNewContentPost] = useState(data.post_Content);
  const [fileList, setFileList] = useState(data.images_post);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const {Option} = Select;
  const [privacyNewFeed, setPrivacyNewFeed] = useState(data.post_Privacy);
  const dispatch= useDispatch();

  const onChangePrivacyNewFeed = (value) => {
    setPrivacyNewFeed(value)
  }

  const changeStatusButtonSubmit = (value) => {
    setNewContentPost(value)
  }

  const uploadMuti = (files) => {
    setFileList(files)
    console.log(files);

  }

  const update = async () => {
    setLoadingUpdate(true)
    await axios.post("https://www.api.mohi.vn/api/auth/update-post-profile", {
      id: data.id,
      post_Content: newContentPost,
      post_Privacy: privacyNewFeed,
      post_images_Url: fileList
    })
    .then((res) => {
      setLoadingUpdate(false)
      dispatch(updatePostProfile({idPost: data.id, data: res.data}))
      dispatch(toggleStatusPresentialModal())
      message.success('Chỉnh sửa bài viết thành công');
    })
    .catch((e) => {
      dispatch(toggleStatusPresentialModal())
      message.error('Đã xảy ra lỗi không mong muốn vui lòng thử lại');
    })
  }

  return(
    <React.Fragment>
      <Space>
      <div className="modal-custom modal_update_post">
        <div className="update-post-content">
          <EditorUpdatePost value={data.post_Content ? data.post_Content : ''} changeStatusButtonSubmit={changeStatusButtonSubmit}/>
        </div>
        <div className="update-upload-muti-image">
          <UploadMuti uploadMuti={uploadMuti} imagesPost={data.images_post}/>
        </div>
        <div className="update-post-select-privacy">
          <Select className="select-privacy select-privacy-update" defaultValue={privacyNewFeed} style={{ width: '100%' }} onSelect={(value) => onChangePrivacyNewFeed(value)}>
              <Option value="public"><MdPublic /> Công khai</Option>
              <Option value="friend"><FaUserFriends /> Bạn bè</Option>
              <Option value="onlyme"><FaLock /> Chỉ mình tôi</Option>
          </Select>
        </div>
        <div className="button-update-post">
          {!loadingUpdate ?
          <button onClick={update}>Đăng</button>
            :
          <Button loading>Đăng</Button>
          }
        </div>
      </div>
    </Space>
    </React.Fragment>
  )
}

export default ModalUpdatePostProfile;
