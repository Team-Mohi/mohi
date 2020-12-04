import React, {useState} from 'react';
import './ModalAddWorkSpace.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusPresentialModal } from './../../Actions/index.jsx';
import { useForm } from "react-hook-form";
import { WaveLoading } from 'react-loadingg';
import axios from 'axios';
import {RiErrorWarningLine} from 'react-icons/ri';
import {Tooltip} from 'antd';
import CheckOtp from './checkOtp.jsx';

function ModalEditEmail({ presentialModal}) {
    const statusPresentialModal = useSelector(state => state.presentialModal);
    const [isCheckOtp, setIsCheckOtp] = useState(false);
    const [otp, setOtp] = useState();
    const [formData, setFormData] = useState(false);
    const [loadingOtp, setLoadingOtp] = useState(false);
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, errors, setError } = useForm();
    const [errorEmail, setErrorEmail] = useState('Email không đúng định dạng');


    const onSubmit = (data) => {
      if(statusPresentialModal.data !== data.user_email){
        setLoadingOtp(true)

        axios.post("https://www.api.mohi.vn/api/auth/send-otp-add", {user_email:data.user_email, action: 'update'})
        .then((res) => {
          setLoadingOtp(false)
          setOtp(res.data.veri_code)
          setFormData(data)
          setIsCheckOtp(true)
        })
        .catch((e) => {
          setLoadingOtp(false)
          if(e.response.status === 400){
            setError("user_email", {
                  type: "manual",
                  message: "Email hoặc số điện thoại đã được đăng kí"
                });
            setErrorEmail('Email đã được đăng kí')
          }
        })
      }else {
        dispatch(toggleStatusPresentialModal())
      }
    }

    const validateInputEmail = (value) => {
      /* Email Test */
      var filter = /^[\w.+\-]+@gmail\.com$/;
      if (filter.test(value)) {
        return true;
      }
      return false;
    }


    if(isCheckOtp){
        return(
          <CheckOtp formData={formData} otp={otp}/>
        )
    }

    return (
        <React.Fragment>
            <div className="modal-custom modal-add-work-space">
                <div className="modal-add-work-space-header">
                    Chỉnh sửa email của bạn
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="modal-add-work-space-main">
                        <div className="modal-add-work-space-main-input">
                            <label htmlFor="">Email của bạn</label>
                          <input type="text" name="user_email" id="" defaultValue={statusPresentialModal.data} ref={register({
                              validate: value => validateInputEmail(value)
                            })} />
                          {errors.user_email && <Tooltip placement="bottom" trigger="click" title={<p className = "error_sex_tooltip" >
                              {errorEmail}
                              </p>}><RiErrorWarningLine className="error_sex"/></Tooltip>
                          }
                        </div>

                    </div>
                    <div className="modal-add-work-space-footer">
                        <button type="submit">Xác nhận</button>
                        <button onClick={ () => dispatch(toggleStatusPresentialModal())} >Hủy</button>
                    </div>
                </form>
                { loadingOtp && <div style={{background: 'rgba(255,255,255,0.7)', position: 'absolute', width: '100%', height: '100%', top: 0, left: 0}}><WaveLoading /></div>}
            </div>
        </React.Fragment>
    )
}

export default ModalEditEmail;
