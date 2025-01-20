import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("");

  // Function to handle form submission
  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevent form default submission behavior
    setModalVisible(true); // Show modal
  };

  // Function to close the modal
  const closeModal = () => {
    setModalVisible(false);
    setEmail(""); // Clear the email input field
  };

  return (
    <div className="newsletter-section">
      <h2>Get More Every Single Update<br />To Join Our Newsletters</h2>
      <form className="newsletter-form" onSubmit={handleSubscribe}>
        <input 
          type="email" 
          placeholder="Enter Your Email Address:" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <button type="submit">Subscribe</button>
      </form>

      {/* Modal */}
      {isModalVisible && (
        <div className="modal-overlay">
          <div className="modal2">
            <div className="modal-content2">
              <div className="modal-icon">
                ✔ {/* You can replace this with an SVG or image of a tick */}
              </div>
              <p>You have successfully subscribed to our newsletter</p>
              <button className="modal-close-button" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
