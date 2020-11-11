import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {RiErrorWarningLine} from "react-icons/ri";
import {Tooltip} from 'antd';

function ForgotPassword(props){
  const {register, handleSubmit, errors, setError} = useForm();
  const [errorEmailAndPhone, setErrorEmailAndPhone] = useState('Vui lòng nhập số điện thoại hoặc email');

  useEffect(() => {
    if(props.error){
      setError("user_email", {
            type: "manual",
            message: "Email hoặc số điện thoại đã được đăng kí"
          });
      setErrorEmailAndPhone('Email hoặc số điện thoại chưa được đăng kí')
    }
  },[props.error])

  const onSubmit = (data) => {
    props.onSubmitForgotPass(data)
  }

  return(
    <React.Fragment>
      <div className="veri-code-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Quên mật khẩu</h2>
        <div className="veri-code-message"><span style={{color: 'black'}}>Sử dụng số điện thoại hoặc email mà bạn đã đăng kí để lấy lại mật khẩu</span></div>
          <div className="submit-error-veri-code"></div>
          <div className="form-veri-code-group">
            <input
              type="text"
              name="user_email"
              placeholder="Nhập tên tài khoản"
              ref={register({required:true})}
              style={errors.user_email ? {border: '1px solid red'} : null}
            />
          {errors.user_email && <Tooltip placement="right" title={<p className = "error_sex_tooltip" >{errorEmailAndPhone}</p>}><RiErrorWarningLine className="error_sex error_code"/></Tooltip>}
          </div>
          <div className="form-veri-code-group">
            <button type="submit">Xác nhận</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default ForgotPassword;
