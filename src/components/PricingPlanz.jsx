import React from 'react';
import './PricingPlanz.css';

const pricingPlans = [
  {
    id: 1,
    title: 'Plan - 01',
    price: '$29.99',
    features: [
      'Free Consultation',
      'Coaching Plan',
      '1 Hour Coaching by (Email - Skype - Person)',
      'Supporting Videos',
      'Online Worksheets',
    ],
  },
  {
    id: 2,
    title: 'Plan - 02',
    price: '$29.99',
    features: [
      'Free Consultation',
      'Coaching Plan',
      '1 Hour Coaching by (Email - Skype - Person)',
      'Supporting Videos',
      'Online Worksheets',
    ],
  },
  {
    id: 3,
    title: 'Plan - 03',
    price: '$29.99',
    features: [
      'Free Consultation',
      'Coaching Plan',
      '1 Hour Coaching by (Email - Skype - Person)',
      'Supporting Videos',
      'Online Worksheets',
    ],
  },
  {
    id: 4,
    title: 'Plan - 04',
    price: '$39.75',
    features: [
      'Free Consultation',
      'Coaching Plan',
      '1 Hour Coaching by (Email - Skype - Person)',
      'Supporting Videos',
      'Online Worksheets',
    ],
  },
  {
    id: 5,
    title: 'Plan - 05',
    price: '$45.25',
    features: [
      'Free Consultation',
      'Coaching Plan',
      '1 Hour Coaching by (Email - Skype - Person)',
      'Supporting Videos',
      'Online Worksheets',
    ],
  },
  {
    id: 6,
    title: 'Plan - 06',
    price: '$49.89',
    features: [
      'Free Consultation',
      'Coaching Plan',
      '1 Hour Coaching by (Email - Skype - Person)',
      'Supporting Videos',
      'Online Worksheets',
    ],
  },
];

const PricingPlanz = () => {
  return (
    <section className="pricing">
      <div className="pricing-grid">
        {pricingPlans.map((plan) => (
          <div key={plan.id} className="pricing-card">
            <h3 className="pricing-plan-title">{plan.title}</h3>
            <p className="pricing-price">{plan.price}</p>
            <ul className="pricing-features">
              {plan.features.map((feature, index) => (
                <li key={index} className="pricing-feature">
                  <span className="feature-check">✔</span> {feature}
                </li>
              ))}
            </ul>
            <button className="get-started-btn">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlanz;
