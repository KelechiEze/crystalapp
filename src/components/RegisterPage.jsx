import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import LogoImage from "../assets/LOGO.png";

const RegisterPage = () => {
  const quotes = [
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "The best way to predict the future is to create it.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Opportunities don't happen, you create them.",
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Quote animation effect
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

  // Spinner and navigation logic
  const handleStartClick = (e) => {
    e.preventDefault(); // Prevent form submission
    setIsLoading(true);

    // Simulate a 5-second delay before navigating
    setTimeout(() => {
      setIsLoading(false);
      navigate("/verification");
    }, 5000);
  };

  return (
    <div className="register-page">
      {/* Left Side */}
      <div className="register-left">
        <img src={LogoImage} alt="Logo" className="register-logo" />
        <div className="register-left-content">
          <p className={`quote ${fadeClass}`}>{quotes[currentQuoteIndex]}</p>
          <p className="author">Ronna E. Gomez</p>
          <p className="designation">CEO, Google</p>
        </div>
        <div className="footer-logos"></div>
      </div>

      {/* Right Side */}
      <div className="register-right">
        <div className="register-form">
          <h1>Let's Go!</h1>
          <h1>Join with our Platform</h1>
          <p>Enter your valid email address and complete some easy steps to register your account.</p>
          <form>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="e.g. mail@gmail.com" required />
            {/* Button with spinner */}
            <button
              onClick={handleStartClick}
              className="start-button"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="spinner"></div>
              ) : (
                "Let's Start →"
              )}
            </button>
          </form>
          <p className="login-link">
            Already have an account? <NavLink to="/login">Log in now!</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
