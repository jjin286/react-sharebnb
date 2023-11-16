import React from 'react';
import { useState } from "react";

function LoginForm({ login }) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    login(formData);
    setFormData({
      username: "",
      password: ""
    });
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={formData.username}
          onChange={handleChange} />

        <label htmlFor="password">Password</label>
        <input
          type="text"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={handleChange} />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
