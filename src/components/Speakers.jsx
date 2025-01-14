import React from 'react';
import './Speakers.css';

// Import images directly
import smile1 from '/src/assets/smile1.jpg';
import smile2 from '/src/assets/smile2.jpg';
import smile3 from '/src/assets/smile3.jpg';
import smile4 from '/src/assets/smile4.jpg';

const speakers = [
  {
    name: 'Taylor Parkes',
    role: 'Motivation Speaker',
    imgSrc: smile1, // Use imported image
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Alexandra Lowe',
    role: 'Motivation Speaker',
    imgSrc: smile2, // Use imported image
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Hollie Blake',
    role: 'Coach Teacher',
    imgSrc: smile3, // Use imported image
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Morgan Nicholson',
    role: 'Motivation Speaker',
    imgSrc: smile4, // Use imported image
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
];

const Speakers = () => {
  return (
    <section className="speakers-section">
      <h2>Meet Our Professional</h2>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipiscing lit sed do eiusmod tempor incididunt ut labore etdolor emagna aliquan enim justo.
      </p>
      <div className="speakers-grid">
        {speakers.map((speaker, index) => (
          <div key={index} className="speaker-card">
            <div className="image-container">
              <img src={speaker.imgSrc} alt={speaker.name} className="speaker-image" />
            </div>
            <h3>{speaker.name}</h3>
            <p className="role">{speaker.role}</p>
            <div className="social-icons">
              <a href={speaker.social.facebook} aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href={speaker.social.twitter} aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href={speaker.social.linkedin} aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;
