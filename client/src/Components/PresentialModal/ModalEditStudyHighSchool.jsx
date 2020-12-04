import React from 'react';
import './ModalAddWorkSpace.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusPresentialModal } from './../../Actions/index.jsx';
import { useForm } from "react-hook-form";
import { responseUpdateProfile } from './../../Actions/index.jsx';
import { requestUpdateProfile } from './../../Actions/index.jsx';
import editInfo from './../../axios/axiosEditInfoProfile.jsx';
import { WaveLoading } from 'react-loadingg';

function ModalEditStudyHighSchool({ presentialModal, profile }) {
  const {loadingUpdateProfile} = useSelector(state => state.profile);
    const statusPresentialModal = useSelector(state => state.presentialModal);
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        dispatch(requestUpdateProfile())

        editInfo({type: 'user_high_school', value: data.user_high_school})
        .then(res => {
          dispatch(responseUpdateProfile({type: 'user_high_school', value: data.user_high_school}))
          dispatch(toggleStatusPresentialModal())
        })
    }

    return (
        <React.Fragment>
            <div className="modal-custom modal-add-work-space">
                <div className="modal-add-work-space-header">
                    Chỉnh sửa trường trung học
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="modal-add-work-space-main">
                        <div className="modal-add-work-space-main-input">
                            <label htmlFor="">Chỉnh sửa trường trung học</label>
                          <input type="text" name="user_high_school" id="" defaultValue={statusPresentialModal.data} ref={register} />
                        </div>

                    </div>
                    <div className="modal-add-work-space-footer">
                        <button type="submit">Xác nhận</button>
                        <button onClick={ () => dispatch(toggleStatusPresentialModal())} >Hủy</button>
                    </div>
                </form>
                { loadingUpdateProfile && <div style={{background: 'rgba(255,255,255,0.7)', position: 'absolute', width: '100%', height: '100%', top: 0, left: 0}}><WaveLoading /></div>}
            </div>
        </React.Fragment>
    )
}

export default ModalEditStudyHighSchool;
