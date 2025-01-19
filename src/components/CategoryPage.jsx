import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./CategoryPage.css";
import Logo from "../assets/LOGO.png";
import { FaUserAlt, FaBriefcase } from "react-icons/fa";

const CategoryPage = () => {
  const navigate = useNavigate();

  // Handle navigation to the account-details page
  const handleCardClick = (accountType) => {
    // Optionally, you can pass the accountType as state or log it for now
    console.log(`Selected Account Type: ${accountType}`);
    navigate("/accountDetails");
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
      <div className="category-right">
        <h1>Choose account type</h1>
        <p>Your email confirmed! Let's select your account type and go to the next step.</p>
        <div className="account-options">
          {/* Personal Account */}
          <div
            className="account-card"
            onClick={() => handleCardClick("personal")}
          >
            <FaUserAlt className="account-icon" />
            <h3>Personal</h3>
            <button className="account-button">→</button>
          </div>
          {/* Business Account */}
          <div
            className="account-card"
            onClick={() => handleCardClick("business")}
          >
            <FaBriefcase className="account-icon" />
            <h3>Business</h3>
            <button className="account-button">→</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
