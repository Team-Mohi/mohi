import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home.jsx';
import LoginContainer from './../Containers/LoginContainer.jsx';
import Spin from './../Components/Spin/index.jsx';
import {PresentialModal} from './../Components/PresentialModal/index.jsx';
import { useSelector, useDispatch } from 'react-redux';
import {toggleStatusPresentialModal} from './../Actions/index.jsx';

function App({ spin, presentialModal }) {
  const statusSpin = useSelector(state => state.spin);
  const statusPresentialModal = useSelector(state => state.presentialModal);
  const dispatch = useDispatch();

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
        { token ? <Home /> : <LoginContainer setLoginFunc={setLoginFunc}/>}
        {statusSpin.status && <Spin />}
        {statusPresentialModal.status && <PresentialModal />}
        <button onClick={() => dispatch(toggleStatusPresentialModal())}>tesst</button>
    </Router>
  </div>);
}

export default App;
