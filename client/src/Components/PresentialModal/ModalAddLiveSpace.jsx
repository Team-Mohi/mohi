import React from 'react';
import './ModalAddWorkSpace.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusPresentialModal } from './../../Actions/index.jsx';
import { useForm } from "react-hook-form";
import { WaveLoading } from 'react-loadingg';
import { requestAddInfoProfile } from './../../Actions/index.jsx';
import { responseAddInfoProfile } from './../../Actions/index.jsx';
import editInfo from './../../axios/axiosEditInfoProfile.jsx';

function ModalAddLiveSpace({ profile }) {

    const { loadingAddInfoProfile } = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        dispatch(requestAddInfoProfile())

        editInfo({type: 'user_currentPlace', value: data.user_currentPlace})
        .then(res => {
          dispatch(responseAddInfoProfile({type: 'user_currentPlace', value: data.user_currentPlace}))
          dispatch(toggleStatusPresentialModal())
        })
    }

    return (
        <React.Fragment>
            <div className="modal-custom modal-add-work-space">
                <div className="modal-add-work-space-header">
                    Thêm nơi sống
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="modal-add-work-space-main">
                        <div className="modal-add-work-space-main-input">
                            <label htmlFor="">Nơi đang sống</label>
                            <input type="text" name="user_currentPlace" id="" placeholder="Nhập nơi đang sống..." ref={register} />
                        </div>
                    </div>
                    <div className="modal-add-work-space-footer">
                        <button type="submit">Xác nhận</button>
                        <button onClick={ () => dispatch(toggleStatusPresentialModal())} >Hủy</button>
                    </div>
                </form>
                { loadingAddInfoProfile && <div style={{background: 'rgba(255,255,255,0.7)', position: 'absolute', width: '100%', height: '100%', top: 0, left: 0}}><WaveLoading /></div>}
            </div>
        </React.Fragment>
    )
}

export default ModalAddLiveSpace;