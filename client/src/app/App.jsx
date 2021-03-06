import React, {useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContainer from './../Containers/AppContainer.jsx';
import LoginContainer from './../Containers/LoginContainer.jsx';
import Spin from './../Components/Spin/index.jsx';
import {PresentialModal} from './../Components/PresentialModal/index.jsx';
import { useSelector } from 'react-redux';
import {toggleStatusPresentialModal} from './../Actions/index.jsx';
var socketIOClient = require('socket.io-client');

function App({ spin, presentialModal, profile }) {
  const statusSpin = useSelector(state => state.spin);
  const statusPresentialModal = useSelector(state => state.presentialModal);
  const {loadingUpdateProfile} = useSelector(state => state.profile);

  function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
  }
  let ustk = IsJsonString(localStorage.getItem('ustk')) ? JSON.parse(localStorage.getItem('ustk')) : '';
  let token = ustk ? ustk.access_token : '';
  if(!token){
    localStorage.removeItem('ustk');
  }

  const setLoginFunc = async (res) => {
    await localStorage.setItem('ustk', JSON.stringify(res.data));
  }

  return (<div className="App">
    <Router>
        { token ? <AppContainer /> : <LoginContainer setLoginFunc={setLoginFunc}/>}
        {statusSpin.status && <Spin />}
        {statusPresentialModal.status && <PresentialModal />}
    </Router>
  </div>);
}

export default App;
