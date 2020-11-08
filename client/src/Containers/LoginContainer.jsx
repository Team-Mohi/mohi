import React from 'react';
import Login from './../app/Authen/Login.jsx';
import axios from 'axios';
import {API_LOGIN} from './../Constants/Api.jsx';

export default function LoginContainer(props){

  const setLoginFunc = (data) => {
    axios.post('/api/auth/login', data).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
    props.setLoginFunc()
  }

  return(
    <Login setLoginFunc={setLoginFunc}/>
  )
}
