import React, {useState} from 'react';
import Login from './../app/Authen/Login.jsx';
import axios from 'axios';
import {API_LOGIN} from './../Constants/Api.jsx';
import {useHistory} from 'react-router-dom';
import {Route} from 'react-router-dom';

export default function LoginContainer(props){

  const history = useHistory();
  const [errorLogin, setErrorLogin] = useState();

  const setLoginFunc = async (data) => {
    await axios.post('/api/auth/login', data).then((res) => {
      props.setLoginFunc(res)
    }).catch((err) => {
      if(err){
        setErrorLogin(err.response ? err.response.data : '')
        history.push('/login')
      }
    });
  }

  return(
      <Login setLoginFunc={setLoginFunc} errorLogin={errorLogin}/>
  )
}
