import { Form, Input, Modal } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Announcement = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='announcement-container'>
        <div className='social-media-container'>
          <div>Twitter</div>
          <div>Facebook</div>
          <div>Instagram</div>
        </div>
        <div className='btn-group'>
          <button className='btn-login' onClick={() => navigate("login")}>
            Login
          </button>
          <button className='btn-register'>Register</button>
        </div>
      </div>
    </>
  );
};

export default Announcement;
