import { Form, Input, Modal } from 'antd';
import React, { useState, useEffect } from 'react';
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
      <div className='announcement-container'>
        <div className='social-media-container'>
          <div>Twitter</div>
          <div>Facebook</div>
          <div>Instagram</div>
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
