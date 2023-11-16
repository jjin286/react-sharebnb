import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Register({ register }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    is_host: false
  });
  const navigate = useNavigate();

  //TODO: need to convert the is_host value to boolean

  async function handleSubmit(evt) {
    evt.preventDefault();
    await register(formData);
    setFormData({
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
      is_host: false
    });
    navigate("/listings")
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
          type="password"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={handleChange} />

        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          placeholder="first_name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange} />

        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          placeholder="last_name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange} />

        <fieldset>
          <legend>Are you a host?</legend>
          <label htmlFor="is_host">Yes</label>
          <input
            type="radio"
            name="is_host"
            value="true"
            checked={formData.is_host === "true"}
            onChange={handleChange} />

          <label htmlFor="is_host">No</label>
          <input
            type="radio"
            name="is_host"
            value="false"
            checked={formData.is_host === "false"}
            onChange={handleChange} />
        </fieldset>



        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
