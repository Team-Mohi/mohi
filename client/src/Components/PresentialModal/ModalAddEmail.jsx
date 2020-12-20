import React, {useState} from 'react';
import './ModalAddWorkSpace.css';
import { useDispatch } from 'react-redux';
import { toggleStatusPresentialModal } from './../../Actions/index.jsx';
import { useForm } from "react-hook-form";
import { WaveLoading } from 'react-loadingg';
import CheckOtp from './checkOtp.jsx';
import axios from 'axios';
import {RiErrorWarningLine} from 'react-icons/ri';
import {Tooltip} from 'antd';

function ModalAddEmail() {
  const [isCheckOtp, setIsCheckOtp] = useState(false);
  const [otp, setOtp] = useState();
  const [formData, setFormData] = useState(false);
  const [loadingOtp, setLoadingOtp] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, errors, setError } = useForm();
  const [errorEmail, setErrorEmail] = useState('Email không đúng định dạng');


  const onSubmit = (data) => {
      setLoadingOtp(true)

      axios.post("https://www.api.mohi.vn/api/auth/send-otp-add", {user_email:data.user_email, action: 'addNew'})
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
                    Thêm email của bạn
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="modal-add-work-space-main">
                        <div className="modal-add-work-space-main-input">
                            <label htmlFor="">Nhập email của bạn</label>
                              <div className="modal-add-email-main-input">
                                <input type="text" name="user_email" id="" ref={register({
                                  validate: value => validateInputEmail(value)
                                })} />
                                {errors.user_email && <Tooltip placement="bottom" trigger="click" title={<p className="error_sex_tooltip" >
                                  {errorEmail}
                                </p>}><RiErrorWarningLine className="error_sex" /></Tooltip>
                                }
                              </div>
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

export default ModalAddEmail;
