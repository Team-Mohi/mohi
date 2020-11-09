import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {RiErrorWarningLine} from "react-icons/ri";
import {Tooltip} from 'antd';
import {useHistory} from 'react-router-dom';

var CryptoJS = require("crypto-js");

function RegisterForm(props) {
  const history = useHistory();
  const {register, handleSubmit, errors, setError} = useForm();
  const dates = [];
  const months = [];
  const years = [];
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('Vui lòng nhập lại mật khẩu');
  const [errorEmailAndPhone, setErrorEmailAndPhone] = useState('Vui lòng nhập số điện thoại hoặc email');

  const onSubmit = (data) => {
    //callapi
    // Encrypt
    let code = CryptoJS.AES.encrypt(JSON.stringify(897263), 'code_veri').toString();
    let message = "Chúng tôi đã gửi mã";
    history.push('/register/step-2', {
      message: message,
      code: code
    });
  }

  for (let i = 1; i <= 31; i++) {
    dates.push(<option key={i} value={i}>{i}</option>);
  }

  for (let i = 1; i <= 12; i++) {
    months.push(<option key={i} value={i}>{i}</option>);
  }

  for (let i = 0; i <= 60; i++) {
    const year = (new Date()).getFullYear() - i;
    years.push(<option key={i} value={year}>{year}</option>);
  }

  const validateInputEmailAndPhone = (value) => {
    /* Phone Test */
    var filter = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (filter.test(value)) {
      return true;
    }

    /* Email Test */
    var filter = /^[\w.+\-]+@gmail\.com$/;
    if (filter.test(value)) {
      return true;
    }
    return false;
  }
  
  return (<form onSubmit={handleSubmit(onSubmit)}>
    <div className="site-layout-register-group">
      <div className="register-first-name">
        <label htmlFor="register_first_name">Họ</label>
        <div className="site-layout-register-input">
          <input id="register_first_name" name="user_first_name" type="text" placeholder="Họ..." ref={register({required: true})} style={errors.user_first_name
              ? {
                border: '1px solid red'
              }
              : null}/> {errors.user_first_name && <Tooltip placement="right" title={<p className = "error_sex_tooltip" > Vui lòng nhập họ của bạn</p>}><RiErrorWarningLine className="error_sex"/></Tooltip>}
        </div>
      </div>
      <div className="register-last-name">
        <label htmlFor="register_last_name">Tên</label>
        <div className="site-layout-register-input">
          <input id="register_last_name" name="user_last_name" type="text" placeholder="Tên..." ref={register({required: true})} style={errors.user_last_name
              ? {
                border: '1px solid red'
              }
              : null}/> {errors.user_last_name && <Tooltip placement="right" title={<p className = "error_sex_tooltip" > Vui lòng nhập tên của bạn</p>}><RiErrorWarningLine className="error_sex"/></Tooltip>}
        </div>
      </div>
    </div>
    <div className="site-layout-register-group">
      <div className="register-email">
        <label htmlFor="register_email">Số điện thoại di động hoặc email</label>
        <div className="site-layout-register-input">
          <input id="register_email" name="user_email" type="text" placeholder="Số điện thoại di động hoặc email..." ref={register({
              validate: value => validateInputEmailAndPhone(value)
            })} style={errors.user_email
              ? {
                border: '1px solid red'
              }
              : null}/> {
            errors.user_email && <Tooltip placement="right" title={<p className = "error_sex_tooltip" > {
                  errorEmailAndPhone
                }
                </p>}><RiErrorWarningLine className="error_sex"/></Tooltip>
          }
        </div>
      </div>
    </div>
    <div className="site-layout-register-group">
      <div className="register-password">
        <label htmlFor="register_password">Mật khẩu mới</label>
        <div className="site-layout-register-input">
          <input id="register_password" name="user_password" type="password" placeholder="Mật khẩu mới..." ref={register({required: true})} style={errors.user_password
              ? {
                border: '1px solid red'
              }
              : null}/> {errors.user_password && <Tooltip placement="right" title={<p className = "error_sex_tooltip" > Vui lòng nhập mật khẩu mới</p>}><RiErrorWarningLine className="error_sex"/></Tooltip>}
        </div>
      </div>
    </div>
    <div className="site-layout-register-group">
      <div className="register-birthday">
        <label htmlFor="register_birthday">Ngày sinh</label>
        <select id="register_birthday_date" name="user_birthday_date" ref={register({required: true})}>
          {dates}
        </select>
        <select id="register_birthday_month" name="user_birthday_month" ref={register({required: true})}>
          {months}
        </select>
        <select id="register_birthday_year" name="user_birthday_year" ref={register({required: true})}>
          {years}
        </select>
      </div>
    </div>
    <div className="site-layout-register-group">
      <label htmlFor="register_sex">Giới tính</label>
      <div className="register-sex">
        <input id="register_sex_men" name="user_sex" value="nam" type="radio" ref={register({required: true})}/>
        <label htmlFor="register_sex_men">Nam</label>
      </div>
      <div className="register-sex">
        <input id="register_sex_women" name="user_sex" value="nữ" type="radio" ref={register({required: true})}/>
        <label htmlFor="register_sex_women">Nữ</label>
      </div>
      <div className="register-sex">
        <input id="register_sex_lt" name="user_sex" value="other" type="radio" ref={register({required: true})}/>
        <label htmlFor="register_sex_lt">Không xác định</label>
      </div>
      {errors.user_sex && <Tooltip placement="right" title={<p className = "error_sex_tooltip" > Vui lòng chọn giới tính</p>}><RiErrorWarningLine className="error_sex"/></Tooltip>}
    </div>
    <div className="site-layout-register-group">
      <button type="submit">Đăng kí</button>
    </div>
  </form>)
}

export default RegisterForm;
