import React, { useState } from 'react';
import './ModalForgotPassVerification.css';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { WaveLoading } from 'react-loadingg';
import { RiErrorWarningLine } from 'react-icons/ri';
import { toggleStatusPresentialModal } from './../../Actions/index.jsx';
import { Tooltip } from 'antd';


function ModalNewPass() {

    const { loadingAddInfoProfile } = useSelector(state => state.profile);
    const dispatch = useDispatch();

    const ModalPasswordVeriFunc = () => {
        dispatch(toggleStatusPresentialModal());
        dispatch(toggleStatusPresentialModal('modal_forgot_pass_verification'));
    }


    return (
        <React.Fragment>
            <form >
                <div className="modal-custom modal-add-work-space">
                    <div className="modal-add-work-space-header">
                        Quên mật khẩu
                </div>
                    <form >
                        <div className="modal-forgot-pass-controller">
                            <div className="modal-forgot-pass-header">
                                Mật khẩu mới
                        </div>
                            <div className="modal-forgot-pass-main">
                                <div className="modal-add-email-main-input">
                                    <input type="text" name="new_pass" id="" placeholder="Nhập mật khẩu mới..." />
                                </div>
                            </div>
                            <div className="modal-forgot-pass-footer">
                                <button type="submit">Xác nhận</button>
                            </div>
                        </div>
                    </form>
                    {loadingAddInfoProfile && <div style={{ background: 'rgba(255,255,255,0.7)', position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}><WaveLoading /></div>}
                </div>
            </form>
        </React.Fragment>
    )
}

export default ModalNewPass;
