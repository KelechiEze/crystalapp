import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./billingDetails.css";
import Logo from "../assets/LOGO.png";

const BillingDetailsPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // Spinner state
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility
  const navigate = useNavigate(); // Navigation hook

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true); // Show spinner

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false); // Hide spinner
      setIsModalVisible(true); // Show modal
    }, 6000); // 6-second delay
  };

  // Handle redirection after modal fades out
  useEffect(() => {
    if (isModalVisible) {
      const timer = setTimeout(() => {
        setIsModalVisible(false); // Hide modal
      }, 34000); // 4 seconds for modal display

      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [isModalVisible, navigate]);

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

      {/* Billing Details Right Section */}
      <div className="billingDetails-right">
        <h2 className="billingDetails-title">Billing Address</h2>
        <p className="billingDetails-subtitle">
          Enter payment information to go to the next step. Don’t worry, it’s optional & skip-able!
        </p>
        <form className="billingDetails-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select id="country" className="input-select" required>
              <option value="">Select country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="UK">Nigeria</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder="e.g. New York" required />
          </div>
          <div className="form-group">
            <label htmlFor="addressLine1">Address Line 1</label>
            <input
              type="text"
              id="addressLine1"
              placeholder="e.g. 2707 Par Drive"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="addressLine2">Address Line 2</label>
            <input
              type="text"
              id="addressLine2"
              placeholder="e.g. Los Angeles, CA 90013"
            />
          </div>
          <div className="form-group">
            <label htmlFor="postcode">Postcode</label>
            <input type="text" id="postcode" placeholder="e.g. 0000" required />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number (Optional)</label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="e.g. +55 589 6999 369"
            />
          </div>
          <div className="form-group full-width">
            <label className="checkbox-label">
              <input type="checkbox" id="terms" required />
              I accept the <a href="#">Terms & Conditions</a> and{" "}
              <a href="#">Privacy Policy</a>
            </label>
          </div>
          <button type="submit" className="btn-complete">
            {isSubmitting ? (
              <span className="spinner"></span> // Show spinner during submission
            ) : (
              "Complete"
            )}
          </button>
        </form>
      </div>

      {/* Modal */}
      {isModalVisible && (
  <div className="modal-overlay">
    <div className="modal">
      <div className="modal-icon">
        <div className="checkmark-circle">
          <div className="checkmark"></div>
        </div>
      </div>
      <h2 className="modal-title">Complete Account</h2>
      <p className="modal-message">
        Hey dude! Welcome to Wellbeing, an amazing interface waiting for you.
      </p>
      <button
        className="modal-button"
        onClick={() => {
          setIsModalVisible(false);
          navigate("/login");
        }}
      >
        LOGIN NOW
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default BillingDetailsPage;
