import React from 'react';
import Header from './Header'; // Import the Header component
import './AboutSection.css';
import "./WellbeingFooter.css";
import PricingPlanz from './PricingPlanz';
import WellbeingFooter from './WellbeingFooter';

const Pricing = () => {
  return (
    <div>
      {/* Include the Header component */}
      <Header />

      <section className="about-section">
        <div className="about-content">
          <h1>Pricing Plan</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="breadcrumbs">
            <a href="/">Home</a> <span>~</span> <span>Pricing</span>
          </div>
        </div>
      </section>
      <PricingPlanz />
      <WellbeingFooter />
    </div>
  );
};

export default Pricing;
