// src/components/Hero.jsx
import React from 'react';
import './Hero.css';
import ProfileImage from '../assets/aunt_crystal-removebg-preview.png'; // Replace with actual image path

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="subheading">Secret of Successful Life!</p>
        <h1>Become The Leader of Your Own Life</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="appointment-btn">Make Appointment</button>

       <div className="split">
         <div className="profile-card">
          <img src={ProfileImage} alt="Profile" className="profile-img" />
          <div className="profile-info">
            <h3>Crystal Chigbu</h3>
            <p>Professional Life Coach</p>
            <p>29 August 2021</p>
            <p>20 Clients</p>
          </div>
        </div>

        <div className="client-comments">
          <p><strong>98% Positive Review</strong></p>
          <p>100 Coach Efficiency</p>
        </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/src/assets/aunt_crystal-removebg-preview.png" alt="Person with laptop" />
      </div>
    </section>
  );
};

export default Hero;
