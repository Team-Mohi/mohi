import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';

var CryptoJS = require("crypto-js");

function VeriCode() {
  const history = useHistory();
  const code_encrypt = history.location.state ? history.location.state.code : '';
  if (!code_encrypt) {
    history.push('/')
  }
  //  Giải mã code
  let bytes = CryptoJS.AES.decrypt(code_encrypt, 'code_veri');
  let code = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  const message = history.location.state.message;
  const {register, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (<div className="veri-code-container">
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Xác nhận mã</h2>
      <div className="veri-code-message">{message}Chúng tôi đã gửi mãChúng tôi đã gửi mãChúng tôi đã gửi mãChúng tôi đã gửi mãChúng tôi đã gửi mãChúng tôi đã gửi mãChúng tôi đã gửi mã</div>
      <div className="form-veri-code-group">
        <label htmlFor="code">Mã code:
        </label>
        <input type="text" name="code" id="code" placeholder="Nhập mã gồm 6 số..." ref={register({required: true})}/>
      </div>
      <div className="form-veri-code-group">
        <button type="submit">Xác nhận</button>
      </div>
    </form>
  </div>)
}

export default VeriCode;
