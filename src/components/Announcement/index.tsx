import { Button, Form, Input, Modal } from 'antd';
import React, { useState, useEffect } from 'react';
import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  MenuOutlined,
  CloseOutlined,
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
    <div className=''>
      <div className='grid md:grid-cols-3 md:grid-flow-col md:min-w-[900px] bg-air-blue justify-between items-center p-1 px-20 font-source-sans text-black'>
        <div className='flex justify-between items-center text-white'>
          <div className='grid grid-cols-3 gap-2'>
            <button>
              <TwitterOutlined />
            </button>
            <button>
              <FacebookOutlined />
            </button>
            <button>
              <InstagramOutlined />
            </button>
          </div>
          <div className=''>
            <CloseOutlined />
            <MenuOutlined />
          </div>
        </div>
        <div className='flex gap-5 text-white py-2'>
          <NavItemsContainer />
        </div>
        {isSignedIn ? (
          <div className='btn-group'>
            <button className='btn-login'>Logout</button>
          </div>
        ) : (
          <div className='flex md:justify-end gap-4'>
            <button className='btn-login' onClick={() => navigate('login')}>
              Login
            </button>
            <button className='btn-register'>Register</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Announcement;
