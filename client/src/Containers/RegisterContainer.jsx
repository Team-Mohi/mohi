import React, {useState} from 'react';
import RegisterForm from './../app/Authen/RegisterForm.jsx';
import axios from 'axios';
import {API_VERI_CODE} from './../Constants/Api.jsx';
import { useDispatch } from 'react-redux';
import { toggleStatusSpin } from './../Actions/index.jsx';
import {useHistory} from 'react-router-dom';
var CryptoJS = require("crypto-js");

function RegisterContainer(){
  const history = useHistory();
  const dispatch = useDispatch();
  const [duplicateEmail, setDuplicateEmail] = useState()
  const onSubmitRegister = async (data) => {
    //load Spin
    dispatch(toggleStatusSpin())

    await axios.post('https://www.api.mohi.vn/api/register', data)
    .then((response) => {
      console.log(response);
      let code = CryptoJS.AES.encrypt(JSON.stringify(response.data.veriCode), 'code_veri').toString();
      let user_email = response.data.email;
      let user_password = response.data.password;
      let id_user = response.data.idUser;
      history.push('/register/step-2', {
        user_email: user_email,
        code: code,
        id_user: id_user,
        user_password: user_password
      });
    })
    .catch((err) => {
      setDuplicateEmail(Math.random())
    })

    //close Spin
    dispatch(toggleStatusSpin())
  }

  return(
    <RegisterForm onSubmitRegister={onSubmitRegister} duplicateEmail={duplicateEmail}/>
  )
}

export default RegisterContainer;
