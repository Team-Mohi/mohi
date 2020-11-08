import React, {useState} from 'react';
import 'antd/dist/antd.css';
import './Login.css';
import Register from './Register.jsx';
import VeriCodeForm from './VeriCodeForm.jsx';
import {Layout, Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {PUBLIC_URL} from './../../Constants/public.jsx';
import {useForm} from 'react-hook-form';
import {Route, Switch, Link} from 'react-router-dom';

function Login(props) {
  const {Header, Content, Footer} = Layout;
  const {register, handleSubmit, errors} = useForm();
  const isVeriCode = localStorage.getItem('vrc')
    ? localStorage.getItem('vrc')
    : '';

  const onSubmit = (data) => {
    props.setLoginFunc(data)
  }

  return (<Layout className="layout layout-login">
    <Header className="header-login">
      <div className=" header-login-container" style={{
          alignItems: 'center',
          position: 'relative'
        }}>
        <Link to="/" className="logo">
          <div >
            <span>Mohi</span>
          </div>
        </Link>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <div className="form-login-group">
            <input name="login_username" placeholder="Tài khoản" ref={register({required: true})} style={errors.login_username
                ? {
                  border: '1px solid red'
                }
                : null}/>
          </div>
          <div className="form-login-group">
            <input name="login_password" type="password" placeholder="Mật khẩu" ref={register({required: true})} style={errors.login_password
                ? {
                  border: '1px solid red'
                }
                : null}/>
          </div>
          <div className="form-login-group">
            <button type="submit">
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </Header>
    <Content style={{
        padding: '0 50px'
      }}>
      <div className="site-layout-content">
        <Switch>
          <Route exact path="/">
            <div className="site-layout-viet-nam">
              <img src={PUBLIC_URL + `/vietnam.png`} alt="Bản đồ Việt Nam"/>
            </div>
            <div className="site-layout-register">
              <Register/>
            </div>
          </Route>
          <Route path="/register/step-2">
            <VeriCodeForm/>
          </Route>
        </Switch>
      </div>
    </Content>
  </Layout>)
}

export default Login;
