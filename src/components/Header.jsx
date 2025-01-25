import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import HeaderImage from '../assets/LOGO.png';

const Header = () => {
  const [isPulsing, setIsPulsing] = useState(true);

  useEffect(() => {
    // Reset animation after a certain duration to avoid sticking issues
    const pulseInterval = setInterval(() => {
      setIsPulsing(false); // Remove the animation
      setTimeout(() => setIsPulsing(true), 50); // Reapply animation after a short delay
    }, 3000); // Adjust interval as needed (e.g., every 3 seconds)

    return () => clearInterval(pulseInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <img src={HeaderImage} alt="Logo" />
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
        <NavLink to="/login" className="login-btn">
          Login
        </NavLink>
        <NavLink
          to="/register"
          className={`register-btn ${isPulsing ? 'pulse' : ''}`} // Add pulse class dynamically
        >
          Register
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
