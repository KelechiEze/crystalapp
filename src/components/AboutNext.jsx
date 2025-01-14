import React from 'react';
import './AboutNext.css';
import mainImage from '../assets/about-care-img.png';
import mainImages from '../assets/about-care-img2.png'

const AboutNext = () => {
  return (
    <section className="next-section">
      <div className="content-container">
        {/* Left Section: Images */}
        <div className="image-section">
          <img
            className="main-image"
            src={mainImage}
            alt="Teacher"
          />
          <img
            className="overlay-image"
            src={mainImages}
            alt="Student"
          />
        </div>

        {/* Right Section: Text and Features */}
        <div className="text-section">
          <h2>We Care About Your Life For Better Future!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            incidunt ut labore et dolore magna aliqua.
          </p>
          <div className="features">
            <div className="feature-item">
              <i className="fa fa-check-circle"></i>
              <div>
                <h4>Master Coach</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="feature-item">
              <i className="fa fa-check-circle"></i>
              <div>
                <h4>Professional Advisors</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="feature-item">
              <i className="fa fa-check-circle"></i>
              <div>
                <h4>Coach Certification</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="feature-item">
              <i className="fa fa-check-circle"></i>
              <div>
                <h4>Coaching Scholars</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <button className="cta-button">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default AboutNext;
