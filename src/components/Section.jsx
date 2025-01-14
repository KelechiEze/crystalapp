import React from "react";
import "./Section.css"; // Import the CSS file for styling

const Section = () => {
  return (
    <div className="section-container">
      <div className="section-content">
        <div className="section-image-container">
          <img
            src="/src/assets/image.png"
            alt="Business Meeting"
            className="section-image"
          />
        </div>
        <div className="section-text">
          <h2>We Motivate your life and bring you to the next level of business.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit usm tempor
            incididunt ut labore etdolor.
          </p>
          <ul className="section-list">
            <li>Integer tincidunt cras dapibus vivamus</li>
            <li>Curabitur ullamcorper ultricies nislnam</li>
            <li>Maecenas nec odio et ante tincidunt tempus</li>
          </ul>
        </div>
      </div>

      <div className="section-content reverse">

      <div className="section-image-container">
          <img
            src="/src/assets/image2.png"
            alt="Empowering Potential"
            className="section-image"
          />
        </div>
        <div className="section-text">
          <h2>We Commit to Empowering Your Potential</h2>
          <p>
            Duis leo. Sed fringilla mauris sit amet nibhdonec Etiam rhoncus
            maecenas tempus tellus eget Aliquam lorem ante dapibus in viverra
            quis feugiat.
          </p>
          <ul className="section-list">
            <li>Duis leo. Sed fringilla mauris sit amet nibhdonec</li>
            <li>Etiam rhoncus maecenas tempus tellus eget</li>
            <li>Aliquam lorem ante dapibus in viverra quis feugiat</li>
          </ul>
          <button className="contact-button">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Section;
