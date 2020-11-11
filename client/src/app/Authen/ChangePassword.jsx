import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {RiErrorWarningLine} from "react-icons/ri";
import {Tooltip} from 'antd';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleStatusSpin } from './../../Actions/index.jsx';

function ChangePassword(props){
  const history = useHistory();
  if(!history.location.state){
    history.push('/')
  }
  const id = history.location.state ? history.location.state.idUser : '';
  const email = history.location.state ? history.location.state.user_email : '';

  const {register, handleSubmit, errors, setError} = useForm();
  const [errorConfirmPass, setErrorConfirmPass] = useState('Vui lòng nhập lại mật khẩu');

  const onSubmit = (data) => {
    if(data.user_password !== data.user_confirm_password){
      setError("user_confirm_password", {
            type: "manual",
            message: "Nhập lại mật khẩu không đúng"
          });
      setErrorConfirmPass('Nhập lại mật khẩu không đúng')
    }else {
      setErrorConfirmPass('')
      let user_password = data.user_password;
      props.onSubmitChangePass({id:id, user_password: user_password, user_email: email})
    }
  }

  return(
    <React.Fragment>
      <div className="veri-code-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Đổi mật khẩu</h2>
        <div className="veri-code-message"><span style={{color: 'black'}}>Vui lòng đặt lại mật khẩu để hoàn thành quá trình đổi mật khẩu</span></div>
          <div className="submit-error-veri-code"></div>
          <div className="form-veri-code-group">
            <input
              type="password"
              name="user_password"
              placeholder="Mật khẩu mới"
              ref={register({required:true})}
              style={errors.user_password ? {border: '1px solid red'} : null}
            />
          {errors.user_password && <Tooltip placement="right" title={<p className = "error_sex_tooltip" >Vui lòng nhập mật khẩu mới</p>}><RiErrorWarningLine className="error_sex error_code"/></Tooltip>}
          </div>
          <div className="form-veri-code-group">
            <input
              type="password"
              name="user_confirm_password"
              placeholder="Nhập lại mật khẩu"
              ref={register({required:true})}
              style={errors.user_confirm_password ? {border: '1px solid red'} : null}
            />
          {errors.user_confirm_password && <Tooltip placement="right" title={<p className = "error_sex_tooltip" >{errorConfirmPass}</p>}><RiErrorWarningLine className="error_sex error_code"/></Tooltip>}
          </div>
          <div className="form-veri-code-group">
            <button type="submit">Xác nhận</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default ChangePassword;
