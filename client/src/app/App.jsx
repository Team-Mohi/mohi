import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home.jsx';
import LoginContainer from './../Containers/LoginContainer.jsx';

function App() {
  const token = localStorage.getItem('ustk') ? localStorage.getItem('ustk') : '';

  const [isLogin, setIsLogin] = useState({
    status: false,
    token: ''
  })

  const setLoginFunc = () => {
    setIsLogin({
      status: true,
      token: token
    })
    localStorage.setItem('ustk', 'a')
  }

  return (<div className="App">
    <Router>
      {isLogin.status || token ? <Home /> : <LoginContainer setLoginFunc={setLoginFunc}/>}
    </Router>
  </div>);
}

export default App;
