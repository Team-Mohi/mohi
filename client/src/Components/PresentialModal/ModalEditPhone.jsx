import React,{useState} from 'react';
import './ModalAddWorkSpace.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusPresentialModal } from './../../Actions/index.jsx';
import { useForm } from "react-hook-form";
import { WaveLoading } from 'react-loadingg';
import CheckOtp from './checkOtpPhone.jsx';
import axios from 'axios';
import {RiErrorWarningLine} from 'react-icons/ri';
import {Tooltip} from 'antd';

function ModalEditPhone({ presentialModal}) {
    const statusPresentialModal = useSelector(state => state.presentialModal);
    const [isCheckOtp, setIsCheckOtp] = useState(false);
    const [otp, setOtp] = useState();
    const [formData, setFormData] = useState(false);
    const [loadingOtp, setLoadingOtp] = useState(false);
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, errors, setError } = useForm();
    const [errorEmail, setErrorEmail] = useState('Số điện thoại không đúng');

    const onSubmit = (data) => {
      if(Number(`0` + statusPresentialModal.data) !== Number(data.user_phone)){
        setLoadingOtp(true)

        axios.post("https://www.api.mohi.vn/api/auth/send-otp-add", {user_email:data.user_phone, action: 'update'})
        .then((res) => {
          setLoadingOtp(false)
          setOtp(res.data.veri_code)
          setFormData(data)
          setIsCheckOtp(true)
        })
        .catch((e) => {
          setLoadingOtp(false)
          if(e.response.status === 400){
            setError("user_phone", {
                  type: "manual",
                  message: "Email hoặc số điện thoại đã được đăng kí"
                });
            setErrorEmail('Số điện thoại đã được đăng kí')
          }
        })
      }else {
        dispatch(toggleStatusPresentialModal())
      }
    }

    const validateInputPhone = (value) => {
      /* Phone Test */
      var filter = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
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
                    Chỉnh sửa số điện thoại
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="modal-add-work-space-main">
                        <div className="modal-add-work-space-main-input">
                            <label htmlFor="">Số điện thoại của bạn</label>
                            <input type="text" name="user_phone" id="" defaultValue={`0` + statusPresentialModal.data} ref={register({
                                validate: value => validateInputPhone(value)
                              })} />
                            {errors.user_phone && <Tooltip placement="bottom" trigger="click" title={<p className = "error_sex_tooltip" >
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

export default ModalEditPhone;
