import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-form">
      <h2>Contact Our Friendly Reception Staff with any Enquiry</h2>
      <form className="form-grid">
        {/* First Row */}
        <div className="form-group">
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Your Email" required />
        </div>
        
        {/* Second Row */}
        <div className="form-group">
          <input type="tel" placeholder="Phone" required />
        </div>
        <div className="form-group">
          <select required>
            <option value="" disabled selected>
              Subject:
            </option>
            <option value="English">English</option>
            <option value="Marketing">Marketing</option>
            <option value="Business">Business</option>
          </select>
        </div>
        
        {/* Third Row */}
        <div className="form-group full-width">
          <textarea placeholder="Message:" rows="5" required></textarea>
        </div>
        
        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
