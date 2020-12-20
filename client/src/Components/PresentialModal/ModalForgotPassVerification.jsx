import React, { useState } from 'react';
import './ModalForgotPassVerification.css';
import { useDispatch, useSelector } from 'react-redux';
import { WaveLoading } from 'react-loadingg';
import { toggleStatusPresentialModal } from './../../Actions/index.jsx';


function ModalForgotPassVerification() {

    const { loadingAddInfoProfile } = useSelector(state => state.profile);
    const dispatch = useDispatch();

    const ModalNewPassFunc = () => {
        dispatch(toggleStatusPresentialModal());
        dispatch(toggleStatusPresentialModal('modal_new_pass'));
    }

    return (
        <React.Fragment>
            <div className="modal-custom modal-add-work-space">
                <div className="modal-add-work-space-header">
                    Quên mật khẩu
                </div>
                <form >
                    <div className="modal-forgot-pass-controller">
                        <div className="modal-forgot-pass-header">
                            Mã xác thực đã được gửi về email vui lòng nhập mã xác nhận để được đổi mật khẩu
                        </div>
                        <div className="modal-forgot-pass-main">
                            <div className="modal-add-email-main-input">
                                <input type="text" name="veri_code" id="" placeholder="Nhập mã xác thực"  />
                            </div>
                        </div>
                        <div className="modal-forgot-pass-footer">
                            <button onClick={ModalNewPassFunc}>Xác nhận</button>
                        </div>
                    </div>
                </form>
                {loadingAddInfoProfile && <div style={{ background: 'rgba(255,255,255,0.7)', position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}><WaveLoading /></div>}
            </div>
        </React.Fragment>
    )
}

export default ModalForgotPassVerification;
