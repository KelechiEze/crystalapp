// BenefitsSection.js
import React from 'react';
import './BenefitsSection.css';

// Import images from the assets folder
import lifeMentoringImg from '../assets/life-mentoring.png';
import selfDevelopmentImg from '../assets/self-development.png';
import askConsultancyImg from '../assets/ask-consultancy.png';

const benefitsData = [
    {
        img: lifeMentoringImg,
        title: 'Life Mentoring',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.'
    },
    {
        img: selfDevelopmentImg,
        title: 'Self Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.'
    },
    {
        img: askConsultancyImg,
        title: 'Ask Consultancy',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.'
    },
];

const BenefitsSection = () => (
    <section className="benefits-section">
        <h2 className="benefits-title">Online Coaching Benefits</h2>
        <p className="benefits-description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua enim justo.
        </p>
        <div className="benefits-grid">
            {benefitsData.map((benefit, index) => (
                <div key={index} className="benefit-card">
                    <img src={benefit.img} alt={benefit.title} className="benefit-image" />
                    <h3 className="benefit-title">{benefit.title}</h3>
                    <p className="benefit-description">{benefit.description}</p>
                    <a href="#" className="read-more">Read More →</a>
                </div>
            ))}
        </div>
    </section>
);

export default BenefitsSection;
