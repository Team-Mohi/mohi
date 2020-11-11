import React, { useState} from 'react';
import {useForm} from 'react-hook-form';
import './LoginTwo.css';
import {RiErrorWarningLine} from "react-icons/ri";
import {Link} from 'react-router-dom';

function LoginTwo(props){
  const {register, handleSubmit, errors} = useForm();
  const error = props.errorLogin ? props.errorLogin.error : '';

  const onSubmit = (data) => {
    props.setLoginFunc(data)
  }

  return(
    <React.Fragment>
      <div className="login-two-container">
        <div className="login-two">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Mohi</h2>
            <div className="login-two-message">{error}</div>
            <div className="form-login-two-group">
              <input
                type="text"
                name="user_email"
                placeholder="Tên đăng nhập"
                ref={register({required: true})}
                style={errors.user_email
                  ? {
                    border: '1px solid red'
                  }
                  : null}
                />
              {errors.user_email && <div className = "error_login_two" ><RiErrorWarningLine className="error_sex"/></div>}
            </div>
            <div className="form-login-two-group">
              <input
                type="password"
                name="user_password"
                placeholder="Mật khẩu"
                ref={register({required: true})}
                style={errors.user_password
                  ? {
                    border: '1px solid red'
                  }
                  : null}
                />
              {errors.user_password && <div className = "error_login_two" ><RiErrorWarningLine className="error_sex"/></div>}
            </div>
            <div className="form-login-two-group">
              <Link to="/forgot-password" className="forget-password">Quên mật khẩu?</Link>
            </div>
            <div className="form-login-two-group">
              <button type="submit">Đăng nhập</button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LoginTwo;
