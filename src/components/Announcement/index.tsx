import { Button, Form, Input, Modal } from 'antd';
import React, { useState, useEffect } from 'react';
import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './style.css';

const Announcement = () => {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token_user');
    console.log('token', token);
    if (token) {
      setIsSignedIn(true);
    }
  }, []);

  return (
    <>
      <div className='flex bg-burnt-orange justify-between items-center p-1 px-20'>
        <div className='social-media-container'>
          <TwitterOutlined />
          <FacebookOutlined />
          <InstagramOutlined />
        </div>
        <div className='flex gap-5 text-white py-2'>
          <div>Products</div>
          <div>Features</div>
          <div>Marketplace</div>
          <div>Company</div>
        </div>
        {isSignedIn ? (
          <div className='btn-group'>
            <button className='btn-login'>Logout</button>
          </div>
        ) : (
          <div className='btn-group'>
            <button className='btn-login' onClick={() => navigate('login')}>
              Login
            </button>
            <button className='btn-register'>Register</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Announcement;
