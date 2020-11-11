import React from 'react';
import VeriCode from './../app/Authen/VeriCodeForm.jsx';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { toggleStatusSpin } from './../Actions/index.jsx';
import {API_VERI_CODE} from './../Constants/Api.jsx';

function VeriCodeContainer(){
  const dispatch = useDispatch();

  const submitVeriCode = async (data) => {
    console.log(data);
    //load Spin
    dispatch(toggleStatusSpin())

    await axios.post('/api/very-regiser', data)
    .then((res) => {
      localStorage.setItem('ustk', JSON.stringify(res.data));
      window.location = '/';
    })

    //close Spin
    dispatch(toggleStatusSpin())
  }

  return(
    <VeriCode submitVeriCode={submitVeriCode}/>
  )
}

export default VeriCodeContainer;
