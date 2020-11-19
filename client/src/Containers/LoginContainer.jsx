import React, {useState} from 'react';
import Login from './../app/Authen/Login.jsx';
import axios from 'axios';
import {API_LOGIN} from './../Constants/Api.jsx';
import {useHistory} from 'react-router-dom';
import {Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleStatusSpin } from './../Actions/index.jsx';
var CryptoJS = require("crypto-js");

export default function LoginContainer(props){
  const dispatch = useDispatch();
  const history = useHistory();
  const [errorLogin, setErrorLogin] = useState();

  const setLoginFunc = async (data) => {
    //load Spin
    dispatch(toggleStatusSpin())

    //check credentials
    await axios.post('api/auth/login', data).then((res) => {
      props.setLoginFunc(res)
      history.push('/')
    }).catch((err) => {
        //if unveri send otp to email or phone when register
        if(err && err.response.status === 301){

          let user_email = JSON.parse(err.response.config.data).user_email;
          let user_password = JSON.parse(err.response.config.data).user_password;

          axios.post('/api/resend-otp', {
            action: 'register',
            user_email: user_email
          }).then((response) => {
            console.log(response);
            let code = CryptoJS.AES.encrypt(JSON.stringify(response.data.veriCode), 'code_veri').toString();
            history.push('/register/step-2', {
              user_email: user_email,
              code: code,
              id_user: err.response.data.idUser,
              user_password: user_password
            });
          }).catch((error) => {
            setErrorLogin('Đã có lỗi không mong muốn xảy ra, vui lòng đăng nhập lại')
            history.push('/login')
          })

        }

        //if uncredentials redirect to login fail
        if(err.response.status === 401){
          setErrorLogin(err.response ? err.response.data : '')
          history.push('/login')
        }

    });
    //close Spin
    dispatch(toggleStatusSpin())
  }


  return(
      <Login setLoginFunc={setLoginFunc} errorLogin={errorLogin} />
  )
}
