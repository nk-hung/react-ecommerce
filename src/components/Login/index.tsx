import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { UserType } from "../../utils/types";
import "./style.css";

const Login = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: UserType) => {
    const [form] = Form.useForm();
    console.log("login!", values);

    const { username, password } = values;
  };

  return (
    <div className='login-container'>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item label='Username' name='username'>
          <Input />
        </Form.Item>
        <Form.Item label='Password' name='password'>
          <Input />
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
