import React, {useState, useEffect} from 'react';
import RegisterContainer from './../../Containers/RegisterContainer.jsx';

function Register(props) {
  const [wellCome, setWellCome] = useState();

  useEffect(() => {
    setWellCome('Chào mừng bạn tham gia Mohi')
  }, [])

  const onSubmitRegister = (data) => {
    props.onSubmitRegister(data)
  }

  return (<div className="site-layout-register-container">
    <h2>{wellCome}</h2>
    <h4>Đăng kí</h4>
  <RegisterContainer onSubmitRegister={props.onSubmitRegister} duplicateEmail={props.duplicateEmail}/>
  </div>)
}

export default Register;
