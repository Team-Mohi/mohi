import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home.jsx';
import LoginContainer from './../Containers/LoginContainer.jsx';

function App() {
  let ustk = localStorage.getItem('ustk') ? JSON.parse(localStorage.getItem('ustk')) : '';
  let token = ustk.access_token ? ustk.access_token : '';

  const setLoginFunc = async (res) => {
    localStorage.setItem('ustk', JSON.stringify(res.data));
    window.location = '/';
}

  return (<div className="App">
    <Router>
        { token ? <Home /> : <LoginContainer setLoginFunc={setLoginFunc}/>}
    </Router>
  </div>);
}

export default App;
