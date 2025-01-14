import React from 'react';
import Header from './Header'; // Import the Header component
import './AboutSection.css';
import "./WellbeingFooter.css";
import WellbeingFooter from './WellbeingFooter';
import LiveStream from './LiveStream';
import Newsletter from './Newsletter';

const Tutorials = () => {
  return (
    <div>
      {/* Include the Header component */}
      <Header />

      <section className="about-section">
        <div className="about-content">
          <h1>Video Tutorials</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="breadcrumbs">
            <a href="/">Home</a> <span>~</span> <span>Tutorials</span>
          </div>
        </div>
      </section>
      <LiveStream />
      <Newsletter />
      <WellbeingFooter />
    </div>
  );
};

export default Tutorials;
