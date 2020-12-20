import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import { toggleStatusPresentialModal } from './../../Actions/index.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { responseUpdateProfile } from './../../Actions/index.jsx';
import { requestUpdateProfile } from './../../Actions/index.jsx';
import editInfo from './../../axios/axiosEditInfoProfile.jsx';
import { WaveLoading } from 'react-loadingg';
import {RiErrorWarningLine} from 'react-icons/ri';
import {Tooltip} from 'antd';

function CheckOtp(props, { profile }){
  const { register, handleSubmit, watch, errors, setError } = useForm();
  const dispatch = useDispatch();
  const {loadingUpdateProfile} = useSelector(state => state.profile);
  const [errorOtp, setErrorOtp] = useState('Bạn chưa nhập mã xác nhận');

  const onSubmit = (data) => {
    if(props.otp === Number(data.otp)){
      dispatch(requestUpdateProfile())

      editInfo({type: 'user_phone', value: props.formData.user_phone})
      .then(res => {
        dispatch(responseUpdateProfile({type: 'user_phone', value: props.formData.user_phone}))
        dispatch(toggleStatusPresentialModal())
      })
    }else {
      setError("otp", {
            type: "manual",
            message: "Số điện thoại đã được đăng kí"
          });
      setErrorOtp('Mã xác nhận không hợp lệ')
    }
  }

  return(
    <React.Fragment>
        <div className="modal-custom modal-add-work-space">
            <div className="modal-add-work-space-header">
                Xác nhận mã
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="modal-add-work-space-main">
                    <div className="modal-add-work-space-main-input">
                      <label htmlFor="">Nhập mã xác nhận bạn nhận được</label>
                      <div className="modal-add-email-main-input">
                        <input type="text" name="otp" ref={register({required: true})} />
                        {errors.otp && <Tooltip placement="bottom" trigger="click" title={<p className = "error_sex_tooltip" >
                            {errorOtp}
                            </p>}><RiErrorWarningLine className="error_sex"/></Tooltip>
                        }
                      </div>
                    </div>

                </div>
                <div className="modal-add-work-space-footer">
                  {loadingUpdateProfile ?
                    <button disabled type="submit">Xác nhận</button>
                    :
                    <button type="submit">Xác nhận</button>
                  }
                  <button onClick={ () => dispatch(toggleStatusPresentialModal())} >Hủy</button>
                </div>
            </form>
            { loadingUpdateProfile && <div style={{background: 'rgba(255,255,255,0.7)', position: 'absolute', width: '100%', height: '100%', top: 0, left: 0}}><WaveLoading /></div>}
        </div>
    </React.Fragment>
  )
}

export default CheckOtp;
