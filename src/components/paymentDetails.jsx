import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./paymentDetails.css";
import Logo from "../assets/LOGO.png";

const PaymentDetails = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  // Format card number: Add space every 4 digits
  const handleCardNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    const formatted = input.match(/.{1,4}/g)?.join(" ") || ""; // Add space every 4 digits
    setCardNumber(formatted.slice(0, 19)); // Limit to 16 digits + 3 spaces
  };

  // Format expiry date: Add slash after 2 digits
  const handleExpiryDateChange = (e) => {
    const input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    const formatted =
      input.length <= 2 ? input : input.slice(0, 2) + "/" + input.slice(2);
    setExpiryDate(formatted.slice(0, 5)); // Limit to MM/YY format
  };

  // Limit CVV to 3 digits
  const handleCvvChange = (e) => {
    const input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setCvv(input.slice(0, 3)); // Limit to 3 digits
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
      <div className="paymentDetails-right">
        <h2 className="paymentDetails-title">Payment details</h2>
        <p className="paymentDetails-subtitle">
          Enter payment information to go to the next step. Don’t worry, it’s optional & skippable!
        </p>
        <form className="paymentDetails-form">
          {/* Card Number */}
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="e.g. 0000 0000 0000 0000"
              required
            />
          </div>

          {/* Cardholder Name */}
          <div className="form-group">
            <label htmlFor="cardHolderName">Cardholder Name</label>
            <input
              type="text"
              id="cardHolderName"
              placeholder="e.g. Robert Smith"
              required
            />
          </div>

          {/* Expiry Date and CVV */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="ccvCode">CCV Code</label>
              <input
                type="text"
                id="ccvCode"
                value={cvv}
                onChange={handleCvvChange}
                placeholder="e.g. 000"
                required
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="form-buttons">
            <button type="submit" className="btn-next">
              Next Step
            </button>
            <button type="button" className="btn-skip">
              Skip Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentDetails;
