import React from 'react';
import './FeaturesSection.css';
import { FaMicroscope, FaChartLine, FaRobot, FaDna } from 'react-icons/fa';

const features = [
  {
    icon: <FaMicroscope />,
    title: "AI-Powered Diagnostics",
    description: "Accurate & fast assessments for improved patient outcomes.",
  },
  {
    icon: <FaChartLine />,
    title: "Predictive Patient Outcomes",
    description: "Leverage data to reduce readmissions and complications.",
  },
  {
    icon: <FaRobot />,
    title: "Automated Workflows",
    description: "Streamline everything from appointments to follow-ups.",
  },
  {
    icon: <FaDna />,
    title: "Personalized Treatment Plans",
    description: "Tailored care using EHR and patient history data.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2 className="section-title">🧠 AI That Powers Better Healthcare</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
