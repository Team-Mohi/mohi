import React, { useState } from 'react';
import './ModalForgotPassVerification.css';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { WaveLoading } from 'react-loadingg';
import { RiErrorWarningLine } from 'react-icons/ri';
import { toggleStatusPresentialModal } from './../../Actions/index.jsx';
import { Tooltip } from 'antd';


function ModalForgotPass() {

    const { loadingAddInfoProfile } = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, errors } = useForm();
    const [errorEmail, setErrorEmail] = useState('Số điện thoại không đúng');

    const validateInputPhone = (value) => {
        /* Phone Test */
        var filter = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        if (filter.test(value)) {
            return true;
        }
        return false;
    }
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
                                Email hoặc số điện thoại
                        </div>
                            <div className="modal-forgot-pass-main">
                                <div className="modal-add-email-main-input">
                                    <input type="text" name="user_phone" id="" placeholder="Vui lòng nhập đúng email hoặc số điện thoại" ref={register({
                                        validate: value => validateInputPhone(value)
                                    })} />
                                    {errors.user_phone && <Tooltip placement="bottom" trigger="click" title={<p className="error_sex_tooltip" >
                                        {errorEmail}
                                    </p>}><RiErrorWarningLine className="error_sex" /></Tooltip>
                                    }
                                </div>
                            </div>
                            <div className="modal-forgot-pass-footer">
                                <button onClick={ModalPasswordVeriFunc}>Xác nhận</button>
                            </div>
                        </div>
                    </form>
                    {loadingAddInfoProfile && <div style={{ background: 'rgba(255,255,255,0.7)', position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}><WaveLoading /></div>}
                </div>
            </form>
        </React.Fragment>
    )
}

export default ModalForgotPass;
