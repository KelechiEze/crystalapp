import React from 'react';
import Header from './Header'; // Import the Header component
import './AboutSection.css';
import AboutNext from './AboutNext';
import "./WellbeingFooter.css";
import WellbeingFooter from './WellbeingFooter';

const AboutSection = () => {
  return (
    <div>
      {/* Include the Header component */}
      <Header />

      <section className="about-section">
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="breadcrumbs">
            <a href="/">Home</a> <span>~</span> <span>About</span>
          </div>
        </div>
      </section>
      <AboutNext />
      <WellbeingFooter />
    </div>
  );
};

export default AboutSection;
