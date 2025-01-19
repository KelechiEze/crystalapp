import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./billingDetails.css";
import Logo from "../assets/LOGO.png";

const BillingDetailsPage = () => {

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
      <div className="category-right">
       
      </div>
    </div>
  );
};

export default BillingDetailsPage;
