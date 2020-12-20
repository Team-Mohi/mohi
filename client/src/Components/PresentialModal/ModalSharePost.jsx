import React, { useState } from 'react';
import './ModalSharePost.css';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { toggleStatusPresentialModal } from './../../Actions/index.jsx';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { MdPublic } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { Select, Button, message, Space } from 'antd';
import { FaRegCommentAlt, FaRegWindowClose, FaUserLock, FaUserAlt } from "react-icons/fa";
import { Editor, EditorState } from 'draft-js';
import ModalSharePostImage from './ModalSharePostImage.jsx'
import CustomEmojiEditor from './EditorEmoji.jsx';
import {Image,Transformation} from 'cloudinary-react';
import axios from 'axios';

function ModalSharePost({ presentialModal }) {
  moment.updateLocale('en', {
      relativeTime: {
          future: "%s",
          past: "%s trước",
          s: 'vài giây',
          ss: '%d phút',
          m: "1 phút trước",
          mm: "%d phút",
          h: "an giờ",
          hh: "%d giờ",
          d: "một ngày",
          dd: "%d ngày",
          w: "một tuần",
          ww: "%d tuần",
          M: "một tháng",
          MM: "%d tháng",
          y: "một năm",
          yy: "%d năm"
      }
  });
    const [valueEditor, setValueEditor] = useState();
    const [loadingShare, setLoadingShare] = useState(false);
    const [privacyShare, setPrivacyShare] = useState('public');
    const userSharePost = JSON.parse(localStorage.getItem('ustk')).info;
    const { Option } = Select;
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.presentialModal);
    const { register, handleSubmit, watch, errors } = useForm();

    function changeStatusButtonSubmit(value) {
        setValueEditor(value)
    }

    const onSubmit = (data) => {
        dispatch(toggleStatusPresentialModal())
    }

    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty(),
    );

    const PrivacyPost = () => {
        switch (data.post_Privacy) {
            case "public":
                return <MdPublic />
                break;
            case "onlyme":
                return <FaUserLock />
                break;
            case "friend":
                return <FaUserAlt />
                break;
            default: return null

        }
    }

    const onChangeShareContent = (value) => {
      setPrivacyShare(value)
    }

    const sharePost = async (idPost) => {
      setLoadingShare(true)
      await axios.post("https://www.api.mohi.vn/api/auth/share-post", {
        post_Content: valueEditor,
        shares_PostChildId: idPost,
        post_Privacy: privacyShare
      })
      .then((res) => {
        setLoadingShare(false)
        message.success('Bài viết đã được chia sẻ thành công');
        dispatch(toggleStatusPresentialModal())
      })
      .catch((e) => {
        message.error('Đã xảy ra lỗi không mong muốn vui lòng thử lại');
        dispatch(toggleStatusPresentialModal())
      })
    }

    return (
        <React.Fragment>
          <Space>
            <div className="modal-custom modal-share-post">
                <div className="modal-share-post-container">
                    <div className="modal-share-post-header">
                        <div className="modal-share-post-avatar">
                          {userSharePost.user_avatar_cropX === null ?
                            <img src={userSharePost.user_avatar} alt={userSharePost.user_last_name} />
                            :
                            <Image cloudName="mohi-vn" publicId={userSharePost.user_avatar+ ".jpg"} version="1607061343">
                              <Transformation height={userSharePost.user_avatar_cropH}  width={userSharePost.user_avatar_cropW} x={userSharePost.user_avatar_cropX} y={userSharePost.user_avatar_cropY} crop="crop" />
                            </Image>
                          }
                        </div>
                        <div className="modal-share-post-title">
                            <div className="modal-share-post-name">{userSharePost.user_first_name + ' ' + userSharePost.user_last_name}</div>
                          <Select style={{ width: '100%' }} defaultValue="public" onChange={(value) => onChangeShareContent(value)}>
                                <Option value="public" ><MdPublic /> Công khai</Option>
                                <Option value="onlyme"><FaLock /> Riêng tư</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="modal-share">
                        <div className="modal-share-post-content">
                            <CustomEmojiEditor changeStatusButtonSubmit={changeStatusButtonSubmit} />
                        </div>
                        <div className="modal-share-post-main">
                            <div className="modal-share-post-main-img">
                                <ModalSharePostImage />
                            </div>
                            <div className="modal-share-post-main-title">
                                <div className="modal-share-post-main-title-avatar">
                                      {data.user_admin_post.user_avatar_cropX === null ?
                                        <img src={data.user_admin_post.user_avatar} alt={data.user_admin_post.user_last_name} />
                                        :
                                        <Image cloudName="mohi-vn" publicId={data.user_admin_post.user_avatar+ ".jpg"} version="1607061343">
                                          <Transformation height={data.user_admin_post.user_avatar_cropH}  width={data.user_admin_post.user_avatar_cropW} x={data.user_admin_post.user_avatar_cropX} y={data.user_admin_post.user_avatar_cropY} crop="crop" />
                                        </Image>
                                      }
                                </div>
                                <div className="modal-share-post-main-title-name-and-privacy">
                                    <div className="modal-share-post-main-title-name">{data.user_admin_post.user_first_name + ' ' + data.user_admin_post.user_last_name}</div>
                                    <p className="modal-share-post-main-title-privacy">{moment(moment.utc(data.created_at).toDate()).fromNow()} <PrivacyPost /></p>
                                </div>
                            </div>
                            <div className="modal-share-post-main-content">{data.post_Content}</div>
                        </div>
                    </div>

                    <div className="modal-share-post-footer">
                      {!loadingShare ? <button onClick={() => sharePost(data.id)}>Đăng</button>
                      : <Button loading>Đăng</Button>}
                    </div>
                </div>
            </div>
            </Space>
        </React.Fragment>
    )
}

export default ModalSharePost;
