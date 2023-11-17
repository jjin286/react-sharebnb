import React from 'react';
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";


function Nav({ user, logout }) {

  function loggedIn() {
    return (
      <>
        <NavLink to="/listing">ShareBnB</NavLink>
        {user.is_host && <NavLink to="/listing/add">ShareBnb Your Space</NavLink>}
        <NavLink to={`/user/${user.username}`} >{user.username} profile</NavLink>
        <NavLink to="/listing" onClick={logout}>Log Out</NavLink>
      </>
    );
  }

  function loggedOut() {
    return (
      <>
        <NavLink to="/listing">ShareBnB</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </>
    );
  }

  return (
    <div className="nav">
      {
        user !== null
          ? loggedIn()
          : loggedOut()
      }
    </div>
  );
}

export default Nav;
