import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home.jsx';
import Login from './Authen/Login.jsx';

function App() {
  const login = true;

  return (<div className="App">
    <Router>
      {login ? <Home /> : <Login />}
    </Router>
  </div>);
}

export default App;
