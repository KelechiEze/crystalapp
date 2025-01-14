import React from 'react';
import Header from './Header'; // Import the Header component
import './AboutSection.css';
import "./WellbeingFooter.css";
import SupportTeam from './SupportTeam';
import ContactForm from './ContactForm';
import WellbeingFooter from './WellbeingFooter';

const ContactPage = () => {
  return (
    <div>
      {/* Include the Header component */}
      <Header />

      <section className="about-section">
        <div className="about-content">
          <h1>Contact Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="breadcrumbs">
            <a href="/">Home</a> <span>~</span> <span>Contact</span>
          </div>
        </div>
      </section>
      <SupportTeam />
      <ContactForm />
      <WellbeingFooter />
    </div>
  );
};

export default ContactPage;
