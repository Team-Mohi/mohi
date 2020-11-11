import React, {useState} from 'react';
import ChangePassword from './../app/Authen/ChangePassword.jsx';
import axios from 'axios';
import {API_CHANGE_PASSWORD} from './../Constants/Api.jsx';
import { useDispatch } from 'react-redux';
import { toggleStatusSpin } from './../Actions/index.jsx';
import {useHistory} from 'react-router-dom';

function ChangePassContainer(){
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState();

  const onSubmitChangePass = async (data) => {
    //load Spin
    dispatch(toggleStatusSpin())

    await axios.post('/api/change-password', data)
    .then((res) => {
      console.log(res);
      localStorage.setItem('ustk', JSON.stringify(res.data));
      window.location = '/';
    })
    .catch((err) => {
      setError(Math.random())
    })

    //close Spin
    dispatch(toggleStatusSpin())
  }

  return(
    <ChangePassword onSubmitChangePass={onSubmitChangePass} />
  )
}

export default ChangePassContainer;
