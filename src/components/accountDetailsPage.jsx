import React, { useState } from "react"; // Import useState
import { Link, NavLink } from "react-router-dom";
import "./accountDetails.css";
import Logo from "../assets/LOGO.png";

const AccountDetailsPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); // useState is now correctly imported

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="account-details-page">
      {/* Left Section */}
      <div className="accountDetails-left">
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
      <div className="accountDetails-right">
        <h1>Account details</h1>
        <p>Enter some of your information & secure password to go to the next step!</p>

        {/* First Row: First Name and Last Name */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              placeholder="e.g. Robert"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              placeholder="e.g. Smith"
              className="form-input"
            />
          </div>
        </div>

        {/* Second Row: Phone Number and Date of Birth */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone-number">Phone Number</label>
            <input
              type="tel"
              id="phone-number"
              placeholder="e.g. 000 0000 0000"
              className="form-input"
            />
          </div>
          <div className="form-group dob">
            <label>Date of Birth</label>
            <div className="dob-fields">
              <select className="dob-input">
                <option value="" disabled selected>
                  Date
                </option>
                {/* Add options for days */}
              </select>
              <select className="dob-input">
                <option value="" disabled selected>
                  Month
                </option>
                {/* Add options for months */}
              </select>
              <select className="dob-input">
                <option value="" disabled selected>
                  Year
                </option>
                {/* Add options for years */}
              </select>
            </div>
          </div>
        </div>

        {/* Third Row: Password */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-field">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="8+ Characters"
                className="form-input"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? "🙈" : "👁️"}
              </button>
            </div>
          </div>
        </div>

        {/* Fourth Row: Gender */}
<div className="form-row">
  <div className="form-group">
    <label>Gender</label>
    <div className="gender-options">
      {/* Male Option */}
      <div className="gender-option-box">
        <input type="checkbox" id="male" name="gender" value="Male" />
        <label htmlFor="male">Male</label>
      </div>

      {/* Female Option */}
      <div className="gender-option-box">
        <input type="checkbox" id="female" name="gender" value="Female" />
        <label htmlFor="female">Female</label>
      </div>
    </div>
  </div>
</div>


        {/* Submit Button */}
        <button type="submit" className="next-button">
            Next step →
          </button>
      </div>
    </div>
  );
};

export default AccountDetailsPage;
