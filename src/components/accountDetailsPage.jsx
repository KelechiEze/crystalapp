import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./accountDetails.css";
import Logo from "../assets/LOGO.png";

const AccountDetailsPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); // Manage password visibility
  const [dob, setDob] = useState(null); // Manage Date of Birth state
  const [gender, setGender] = useState(""); // Manage Gender selection state
  const navigate = useNavigate(); // Hook for navigation

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleGenderSelection = (selectedGender) => {
    setGender(selectedGender); // Update gender state with the selected value
  };

  const handleNextStep = () => {
    navigate("/paymentDetails"); // Navigate to /paymentDetails
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
              to="/paymentDetails"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              4. Payment Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/billingDetails"
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
          <div className="form-group">
            <label>Date of Birth</label>
            <DatePicker
              selected={dob}
              onChange={(date) => setDob(date)}
              placeholderText="Click to select DOB"
              dateFormat="dd/MM/yyyy"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              className="dob-input"
            />
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
              <div
                className={`gender-option-box ${
                  gender === "Male" ? "selected" : ""
                }`}
                onClick={() => handleGenderSelection("Male")}
              >
                <input
                  type="checkbox"
                  id="male"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  readOnly
                />
                <label htmlFor="male">Male</label>
              </div>

              {/* Female Option */}
              <div
                className={`gender-option-box ${
                  gender === "Female" ? "selected" : ""
                }`}
                onClick={() => handleGenderSelection("Female")}
              >
                <input
                  type="checkbox"
                  id="female"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  readOnly
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button type="button" className="next-button" onClick={handleNextStep}>
          Next step →
        </button>
      </div>
    </div>
  );
};

export default AccountDetailsPage;
