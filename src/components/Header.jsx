import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import HeaderImage from '../assets/LOGO.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={HeaderImage} alt="Logo"  />
      </div>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/About" className={({ isActive }) => (isActive ? 'active' : '')}>
          About
        </NavLink>
        <NavLink to="/Tutorials" className={({ isActive }) => (isActive ? 'active' : '')}>
          Tutorials
        </NavLink>
        <NavLink to="/Pricing" className={({ isActive }) => (isActive ? 'active' : '')}>
          Pricing
        </NavLink>
        <NavLink to="/Contact" className={({ isActive }) => (isActive ? 'active' : '')}>
          Contact
        </NavLink>
      </nav>
      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <NavLink to="/register" className="register-btn">
  Register
</NavLink>

      </div>
    </header>
  );
};

export default Header;
