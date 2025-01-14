// src/components/NextSection.jsx

import React from 'react';
import './NextSection.css';
import speaker1 from '../assets/speaker1.png';
import speaker2 from '../assets/speaker2.png';
import speaker3 from '../assets/speaker3.png';
import speaker4 from '../assets/speaker4.png';

const NextSection = () => {
  return (
    <div className="next-sectionz">
      <div className="images-container1">
        <div className="image-row1">
          <img src={speaker1} alt="Person 1" className="profile-image1" />
          <img src={speaker2} alt="Person 2" className="profile-image" />
        </div>
        <div className="image-row">
          <img src={speaker3} alt="Person 3" className="profile-image" />
          <img src={speaker4} alt="Person 4" className="profile-image1" />
        </div>
      </div>
      <div className="content-container1">
        <h2>We Care About Your Life <br /> For Better Future!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing
          eiusm tempor incididunt ut labore etdolor emagnaal
          iquanen imremonsectetur.
        </p>
        <div className="certification1">
          <div className="certification-item1">
            <span className="check-icon2">✔️</span>
            <div>
              <h4>Master Certified Coach</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore.</p>
            </div>
          </div>
          <div className="certification-item1">
            <span className="check-icon2">✔️</span>
            <div>
              <h4>Coach Certification Program</h4>
              <p>Hsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna suspendisse</p>
            </div>
          </div>
        </div>
        <button className="about-us-btn2">About Us</button>
      </div>
    </div>
  );
};

export default NextSection;
