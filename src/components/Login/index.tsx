import { Button, Form, Input, message } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import { signIn } from '../../services';

import { UserType } from '../../utils/types';
import './style.css';

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState<boolean>(false);

  const handleSubmit = async (values: UserType) => {
    console.log('login!', values);

    const { username, password } = values;
    const res: any = await signIn({ username, password });
    console.log('res login', res);
    if (res && res.success) {
      console.log('login::', res);
      Cookies.set('token_user', res.accessToken);
      setIsSignIn(true);
      message.success('Thành công!');
      navigate('/');
    } else {
      message.error('Error');
    }
  };

  return (
    <div className='login-container'>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item label='Username' name='username'>
          <Input />
        </Form.Item>
        <Form.Item label='Password' name='password'>
          <Input type='password' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Log In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
