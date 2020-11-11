import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import './Login.css';
import LoginTwo from './LoginTwo.jsx';
import Register from './Register.jsx';
import VeriCodeContainer from './../../Containers/VeriCodeContainer.jsx';
import ForgotPassContainer from './../../Containers/ForgotPassContainer.jsx';
import ChangePassContainer from './../../Containers/ChangePassContainer.jsx';
import VeriChangePass from './VeriChangePass.jsx';
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
        <Switch>
          <Route exact path="/">
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
              <div className="form-login-group">
                <input name="user_email" placeholder="Tên đăng nhập" ref={register({required: true})} style={errors.user_email
                    ? {
                      border: '1px solid red'
                    }
                    : null}/>
              </div>
              <div className="form-login-group">
                <input name="user_password" type="password" placeholder="Mật khẩu" ref={register({required: true})} style={errors.user_password
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
          </Route>
          <Route>
            <button className="go-home-button"><Link to="/">Tạo tài khoản</Link></button>
          </Route>
        </Switch>
      </div>
    </Header>
    <Content style={{
        padding: '0 50px'
      }}>
      <div className="site-layout-content">
        <Switch>
          <Route exact path="/">
            <div className="site-layout-viet-nam">
              <img src={PUBLIC_URL + `vietnam.png`} alt="Bản đồ Việt Nam"/>
            </div>
            <div className="site-layout-register">
              <Register/>
            </div>
          </Route>
          <Route path="/register/step-2">
            <VeriCodeContainer/>
          </Route>
          <Route path="/login">
            <LoginTwo setLoginFunc={props.setLoginFunc} errorLogin={props.errorLogin}/>
          </Route>
          <Route exact path="/forgot-password">
            <ForgotPassContainer />
          </Route>
          <Route path="/forgot-password/step-2">
            <VeriChangePass />
          </Route>
          <Route path="/change-password">
            <ChangePassContainer />
          </Route>
        </Switch>
      </div>
    </Content>
  </Layout>)
}

export default Login;
