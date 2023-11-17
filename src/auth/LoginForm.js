import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FormControl } from '@mui/base/FormControl';

import Button from '@mui/material/Button';
import "./Login.css";

function LoginForm({ login }) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    login(formData);
    setFormData({
      username: "",
      password: ""
    });
    navigate("/listings");
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }


  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <div className='mb-3'>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={formData.username}
              onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleChange} />
          </div>
          <Button className="btn" type="submit">Login</Button>
        </FormControl>
      </form>
    </div>
  );
}

export default LoginForm;
