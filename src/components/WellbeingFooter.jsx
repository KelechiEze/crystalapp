import React from "react";
import "./WellbeingFooter.css";
import { NavLink } from "react-router-dom";


// Import images
import logo from "/src/assets/LOGO.png";
import mastercard from "/src/assets/mastercard.jpg";
import visa from "/src/assets/visa.jpg";
import americanexpress from "/src/assets/americanexpress.png";
import paypal from "/src/assets/paypal.jpg";

const WellbeingFooter = () => {
  // Function to scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section: Logo and Description */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="Wellbeing Logo" />
          </div>
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="footer-payment-icons">
            <img src={mastercard} alt="Mastercard" />
            <img src={visa} alt="Visa" />
            <img src={americanexpress} alt="American Express" />
            <img src={paypal} alt="PayPal" />
          </div>
        </div>

        {/* Middle Section: Quick Links and Support */}
        <div className="footer-middle">
  <div className="footer-column">
    <h3 className="footer-heading">Quick Links</h3>
    <ul className="footer-links">
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
           Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/news">Latest News</NavLink>
      </li>
      <li>
        <NavLink to="/Pricing" className={({ isActive }) => (isActive ? 'active' : '')}>
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink to="/Tutorials" className={({ isActive }) => (isActive ? 'active' : '')}>
           Tutorials
        </NavLink>
      </li>
    </ul>
  </div>
  <div className="footer-column">
    <h3 className="footer-heading">Support</h3>
    <ul className="footer-links">
      <li>
        <NavLink to="/About" className={({ isActive }) => (isActive ? 'active' : '')}>
           About
        </NavLink>
      </li>
      <li>
        <NavLink to="/Contact" className={({ isActive }) => (isActive ? 'active' : '')}>
           Contact Us
         </NavLink>
      </li>
      <li>
        <NavLink to="/team">Team</NavLink>
      </li>
      <li>
        <NavLink to="/faq">FAQ</NavLink>
      </li>
      <li>
        <NavLink to="/testimonials">Testimonial</NavLink>
      </li>
    </ul>
  </div>
</div>


        {/* Right Section: Contact Information */}
        <div className="footer-right">
          <h3 className="footer-heading">Get in Touch</h3>
          <p>Email: info@wellbeing.com</p>
          <p>Phone: +1 234 567 89 0 0</p>
          <p>Fax: +1 (987) 654 321 9 9</p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="footer-back-to-top">
        <button id="backToTopButton" onClick={scrollToTop}>
          ↑
        </button>
      </div>
    </footer>
  );
};

export default WellbeingFooter;
