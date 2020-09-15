import React from 'react';
import 'antd/dist/antd.css';
import './Login.css';
import { Layout, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

function Login() {
    const { Header, Content, Footer } = Layout;

    return (
        <>
            <Layout className="layout layout-login">
                <Header>
                    <div className="container d-flex" style={{ alignItems: 'center', position: 'relative' }}>
                        <div className="logo">
                            <img src={"logo.png"} alt="Mohi.vn" title="Mohi.vn" />
                        </div>
                        <Form name="horizontal_login" layout="inline" style={{ position: 'absolute', right: 0 }}>
                            <Form.Item name="username">
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tài khoản" />
                            </Form.Item>
                            <Form.Item name="password">
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Mật khẩu"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button className="button-login">
                                    Đăng nhập
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout >
        </>
    )
}

export default Login;
