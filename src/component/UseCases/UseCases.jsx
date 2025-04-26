import React from 'react';
import './UseCases.css';

const useCases = [
  { icon: '🏥', title: 'Clinics & Hospitals', description: 'Streamline workflows and enhance diagnostic accuracy with AI support.' },
  { icon: '🧑‍⚕️', title: 'Independent Practitioners', description: 'Leverage predictive insights to personalize patient care with fewer resources.' },
  { icon: '🧓', title: 'Senior Care', description: 'Monitor aging populations with AI-driven vitals tracking and alert systems.' },
  { icon: '🧪', title: 'Lab Diagnostics', description: 'Accelerate test processing with intelligent lab report summarization.' },
  { icon: '🧠', title: 'Mental Health', description: 'Empower therapists with AI bots and behavior pattern recognition.' },
];

const UseCases = () => {
  return (
    <section className="use-cases">
      <h2 className="use-cases-title">🖼️ Use Cases by Industry</h2>
      <p className="use-cases-subtext">AI tailored to every corner of healthcare innovation.</p>

      <div className="use-cases-grid">
        {useCases.map((caseItem, index) => (
          <div className="use-case-card" key={index}>
            <div className="icon">{caseItem.icon}</div>
            <h3>{caseItem.title}</h3>
            <p>{caseItem.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCases;
