import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./VerificationPage.css";
import Logo from "../assets/LOGO.png";
import { Link } from "react-router-dom";

const VerificationPage = () => {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const navigate = useNavigate();

  const handleInputChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value.slice(-1); // Only allow one character per box
    setCode(newCode);

    // Automatically move to the next input
    if (value && index < 4) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.join("").length === 5) {
      // Redirect to the next step
      navigate("/category");
    } else {
      alert("Please enter a valid 5-digit code.");
    }
  };

  return (
    <div className="verification-page">
      {/* Left Section */}
      <div className="verification-left">
      <Link to="/">
       <img src={Logo} alt="Logo" className="verification-logo" />
     </Link>
        <ul className="steps">
          <li>
            <NavLink
              to="/verification"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              1. Email Verification
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              2. Category
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/accountDetails"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              3. Account Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/payment-details"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              4. Payment Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/billing-details"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              5. Billing Details
            </NavLink>
          </li>
        </ul>
        <div className="illustration">
          {/* Placeholder for bottom-left illustration */}
        </div>
      </div>

      {/* Right Section */}
      <div className="verification-right">
        <h1>Verify email address</h1>
        <p>
          Please check your email <b>mail@example.com</b> and put the
          verification code here.
        </p>
        <form onSubmit={handleSubmit} className="verification-form">
          <div className="code-inputs">
            {code.map((num, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength="1"
                value={num}
                onChange={(e) => handleInputChange(e.target.value, index)}
                className="code-input"
              />
            ))}
          </div>
          <button type="submit" className="next-button">
            Next →
          </button>
        </form>
        <p className="resend">
          Didn’t get it? <a href="#">Resend code</a>
        </p>
      </div>
    </div>
  );
};

export default VerificationPage;
