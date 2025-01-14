import React from 'react';
import './SupportTeam.css';

// Import images
import supportIcon1 from '/src/assets/support-icon1.png';
import supportIcon2 from '/src/assets/support-icon2.png';
import supportIcon3 from '/src/assets/support-icon3.png';

const SupportTeam = () => {
  const supportCards = [
    {
      id: 1,
      title: 'Help and Support',
      description: [
        { text: 'support@wellbeing.com', link: 'mailto:support@wellbeing.com' },
        { text: 'help@wellbeing.com', link: 'mailto:help@wellbeing.com' },
      ],
      icon: supportIcon1, // Use imported image
    },
    {
      id: 2,
      title: 'Location',
      description: [
        { text: '121 King Street Melbourne,', link: '#' },
        { text: '3000, Australia', link: '#' },
      ],
      icon: supportIcon2, // Use imported image
    },
    {
      id: 3,
      title: 'Live Support',
      description: [
        { text: '+123 45 678 901', link: 'tel:+12345678901' },
        { text: '+234 56 789 012', link: 'tel:+23456789012' },
      ],
      icon: supportIcon3, // Use imported image
    },
  ];

  return (
    <section className="support-team">
      <h2>We Have a Professional Support Team</h2>
      <div className="support-grid">
        {supportCards.map((card) => (
          <div className="support-card" key={card.id}>
            <img src={card.icon} alt={card.title} className="card-icon" />
            <h3>{card.title}</h3>
            {card.description.map((desc, index) => (
              <p key={index}>
                <a href={desc.link} className="description-link">
                  {desc.text}
                </a>
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportTeam;
