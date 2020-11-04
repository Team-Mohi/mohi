import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home.jsx';
import Login from './Authen/Login.jsx';

function App() {
  const [login, setLogin] = useState(false);

  const setLoginFunc = () => {
    setLogin(true)
  }

  return (<div className="App">
    <Router>
      {login ? <Home /> : <Login setLoginFunc={setLoginFunc}/>}
    </Router>
  </div>);
}

export default App;
