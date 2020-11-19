import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {RiErrorWarningLine} from "react-icons/ri";
import {Tooltip} from 'antd';
import { useCookies } from "react-cookie";
var CryptoJS = require("crypto-js");

function VeriCode(props) {
  const history = useHistory();
  console.log(history);
  const code_encrypt = history.location.state ? history.location.state.code : '';
  if (!code_encrypt) {
    history.push('/')
  }
  //  Giải mã code
  const bytes = CryptoJS.AES.decrypt(code_encrypt, 'code_veri');
  const code = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  const user_email = history.location.state.user_email;
  const user_password = history.location.state.user_password;
  const id_user = history.location.state.id_user;
  const {register, handleSubmit, errors} = useForm();
  const [errorCode, setErrorCode] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(["vrctrgt"]);
  const now = new Date().getTime();

  useEffect(() => {
    if(code){
      const timeExpiredCode = now + 300000;
      setCookie("vrctrgt", timeExpiredCode, {
        path: "/"
      })
    }
  }, [code]);

  const onSubmit = (data) => {

    if(Number(data.code) === code){
      if(cookies.vrctrgt - new Date().getTime() > 0){
        setErrorCode('');
        removeCookie("vrctrgt");
        let new_data = {
          id: id_user,
          user_email: user_email,
          user_password: user_password
        }
        props.submitVeriCode(new_data)
      }else {
        setErrorCode('Mã xác nhận đã hết hạn');
      }
    }else {
      setErrorCode('Mã xác nhận không đúng');
    }

  }

  const validateInputCode = (value) => {
    if(!value) return false
    if(!Number(value)) return false

    return true
  }
  return (<div className="veri-code-container">
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Xác nhận mã</h2>
    <div className="veri-code-message"><span style={{color: 'black'}}>Chúng tôi đã gửi mã đến</span> {user_email}<span style={{color: 'black'}}>. Mã này sẽ tồn tại trong vòng 5 phút. Vui lòng kiểm tra và tiếp tục hoàn thành quá trình đăng kí tài khoản.</span></div>
      <div className="submit-error-veri-code">{errorCode}</div>
      <div className="form-veri-code-group">
        <label htmlFor="code">Mã code:
        </label>
        <input
          type="text"
          name="code"
          id="code"
          placeholder="Nhập mã gồm 6 số..."
          ref={register({
              validate: value => validateInputCode(value)
            })}
          style={errors.code ? {border: '1px solid red'} : null}
        />
      {errors.code && <Tooltip placement="right" title={<p className = "error_sex_tooltip" > Vui lòng nhập mã gồm 6 số</p>}><RiErrorWarningLine className="error_sex error_code"/></Tooltip>}
      </div>
      <div className="form-veri-code-group">
        <button type="submit">Xác nhận</button>
      </div>
    </form>
  </div>)
}

export default VeriCode;
