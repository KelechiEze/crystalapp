import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./LoginPage.css";
import LogoImage from "../assets/LOGO.png";

const LoginPage = () => {
  const quotes = [
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "The best way to predict the future is to create it.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Opportunities don't happen, you create them.",
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setFadeClass("fade-in");
      }, 1000); // Fade-out duration
    }, 5000); // Total duration for each quote

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [quotes.length]);

  return (
    <div className="login-page">
      {/* Left Section */}
      <div className="login-left">
        <img src={LogoImage} alt="Logo" className="login-logo" />
        <div className="login-left-content">
          <p className={`quote ${fadeClass}`}>{quotes[currentQuoteIndex]}</p>
          <p className="author">Ronna E. Gomez</p>
          <p className="designation">CEO, Google</p>
        </div>
        <div className="footer-logos"></div>
      </div>

      {/* Right Section */}
      <div className="login-right">
        <div className="login-form-container">
          <h1 className="login-title">Login your account</h1>
          <p className="login-description">
            Enter your valid email address and Password to login your account.
          </p>
          <form className="login-form">
            <label htmlFor="email">EMAIL ADDRESS</label>
            <input
              type="email"
              id="email"
              placeholder="e.g. mail@gmail.com"
              required
            />

            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              placeholder="********"
              required
            />

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                Remember me
              </label>
              <NavLink to="/forgot-password" className="forgot-password">
                Forget Password?
              </NavLink>
            </div>

            <button type="submit" className="login-button">
              LOGIN
            </button>
          </form>
          <p className="signup-link">
            Don’t have an account?{" "}
            <NavLink to="/register">Sign Up now!</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
