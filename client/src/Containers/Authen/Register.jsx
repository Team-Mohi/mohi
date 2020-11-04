import React, {useState, useEffect} from 'react';
import RegisterForm from './RegisterForm.jsx';

function Register() {
  const [wellCome, setWellCome] = useState();

  useEffect(() => {
    setWellCome('Chào mừng bạn tham gia Mohi')
  }, [])

  return (<div className="site-layout-register-container">
    <h2>{wellCome}</h2>
    <h4>Đăng kí</h4>
    <RegisterForm/>
  </div>)
}

export default Register;
