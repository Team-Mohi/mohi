import React, {useState} from 'react';
import ForgotPassword from './../app/Authen/ForgotPassword.jsx';
import axios from 'axios';
import {API_FORGOT_PASSWORD} from './../Constants/Api.jsx';
import { useDispatch } from 'react-redux';
import { toggleStatusSpin } from './../Actions/index.jsx';
import {useHistory} from 'react-router-dom';

function ForgotPasswordContainer(){
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState();
  const onSubmitForgotPass = async (data) => {
    //load Spin
    dispatch(toggleStatusSpin())

    await axios.post('https://www.api.mohi.vn/api/forgot-password', {action: 'forget_password', user_email: data.user_email})
    .then((res) => {
      console.log(res);
      history.push('/forgot-password/step-2', {
        user_name: res.data.user_name,
        user_avatar: res.data.user_avatar,
        code: res.data.veriCode,
        id_user: res.data.idUser,
        user_email: res.data.user_email
      });
    })
    .catch((err) => {
      setError(Math.random())
    })

    //close Spin
    dispatch(toggleStatusSpin())
  }

  return(
    <ForgotPassword onSubmitForgotPass={onSubmitForgotPass} error={error}/>
  )
}

export default ForgotPasswordContainer;
