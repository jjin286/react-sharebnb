import React from 'react';
import { Link, NavLink } from "react-router-dom";


function Nav() {
  return (
    <div className="nav">
      <NavLink to="/listing">ShareBnB</NavLink> |
      <NavLink to="/login">Login</NavLink> |

      <NavLink to="/register">Register</NavLink> |
      <NavLink to="/listing/add">ShareBnb Your Space</NavLink>
    </div>
  );
}

export default Nav;
