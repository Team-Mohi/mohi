import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WaveLoading } from 'react-loadingg';
import { useForm } from "react-hook-form";
import { toggleStatusPresentialModal } from './../../Actions/index.jsx';
import { updateCommentPostProfile } from './../../Actions/index.jsx';
import axios from 'axios';
import { message, Space } from 'antd';

function ModalEditComment({ presentialModal }) {
  const statusPresentialModal = useSelector(state => state.presentialModal);
  const [loadingUpdateComment, setLoadingUpdateComment] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = async (data) => {
    setLoadingUpdateComment(true)
      await axios.post("https://www.api.mohi.vn/api/auth/update-comment", {id: statusPresentialModal.data.id, comment_Content: data.comment})
      .then((res) => {
        setLoadingUpdateComment(false)
        dispatch(updateCommentPostProfile({idPost: statusPresentialModal.data.idPost, id: statusPresentialModal.data.id, value: data.comment}))
        dispatch(toggleStatusPresentialModal())
        message.success('Chỉnh sửa bình luận thành công');
      })
      .catch((e) => {
        console.log(e);
        dispatch(toggleStatusPresentialModal())
        message.error('Đã xảy ra lỗi vui lòng thử lại');
      })
  }

    return (
        <React.Fragment>
          <Space>
          <div className="modal-custom modal-add-work-space">
              <div className="modal-add-work-space-header">
                  Chỉnh sửa bình luận của bạn
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="modal-add-work-space-main">
                      <div className="modal-add-work-space-main-input">
                        <input type="text" name="comment" id="" defaultValue={statusPresentialModal.data.value} ref={register} />
                      </div>
                  </div>
                  <div className="modal-add-work-space-footer">
                    {loadingUpdateComment ?
                      <button disabled type="submit">Xác nhận</button>
                      :
                      <button type="submit">Xác nhận</button>
                    }
                      <button onClick={ () => dispatch(toggleStatusPresentialModal())} >Hủy</button>
                  </div>
              </form>
              { loadingUpdateComment && <div style={{background: 'rgba(255,255,255,0.7)', position: 'absolute', width: '100%', height: '100%', top: 0, left: 0}}><WaveLoading /></div>}
          </div>
        </Space>
        </React.Fragment>
    )
}

export default ModalEditComment;
