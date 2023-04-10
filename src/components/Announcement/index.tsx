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
import NavItem from './Nav';

const items = [
  { label: 'Products', active: true },
  { label: 'Features' },
  { label: 'Marketplace' },
  { label: 'Company' },
];

const NavItemsContainer = () => (
  <>
    {items.map((item, index) => (
      <NavItem item={item} key={index} />
    ))}
  </>
);
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
      <div className='flex bg-air-blue justify-between items-center p-1 px-20 font-source-sans text-black'>
        <div className='social-media-container'>
          <button >
            <TwitterOutlined />
          </button>
          <button >
            <FacebookOutlined />
          </button>
          <button>
            <InstagramOutlined />
          </button>
        </div>
        <div className='flex gap-5 text-white py-2'>
          <NavItemsContainer />
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
