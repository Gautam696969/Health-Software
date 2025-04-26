import React from 'react';
import './TrustCompliance.css';

const complianceData = [
  {
    icon: 'https://img.freepik.com/premium-vector/hipaa-compliant-checkmark-icon-vector-design-logo-symbol-vector-stock-illustration_100456-10275.jpg?w=2000',
    text: 'HIPAA Compliant',
  },
  {
    icon: 'https://img.icons8.com/color/96/iso.png',
    text: 'ISO Certified',
  },
  {
    icon: 'https://img.icons8.com/color/96/lock.png',
    text: 'Secure Data Encryption',
  },
  {
    icon: 'https://img.icons8.com/color/96/gdpr.png',
    text: 'GDPR Ready',
  },
];

const trustedByLogos = [
  'https://i2.wp.com/newsnowgh.com/wp-content/uploads/2020/09/TRUST-HOSPITAL.png?fit=1969%2C1721&ssl=1',
  'https://th.bing.com/th/id/OIP.6m-iZ9HuKV8rOO36Ft6V6gHaEP?rs=1&pid=ImgDetMain',
  'https://png.pngtree.com/png-vector/20220307/ourmid/pngtree-white-background-featuring-a-medical-cross-logo-with-a-hand-symbol-representing-family-health-care-vector-png-image_29884050.png',
  'https://harshhospital.in/wp-content/uploads/2022/03/Harsh-Logo-Website-1024x773.png',
];

const TrustCompliance = () => {
  return (
    <section className="trust-compliance">
      <h2 className="trust-compliance-title">🔒 Trust & Compliance</h2>

      <div className="trust-compliance-grid">
        {complianceData.map((item, index) => (
          <div key={index} className="compliance-item">
            <div className="compliance-icon">
              <img src={item.icon} alt={item.text} />
            </div>
            <div className="compliance-text">{item.text}</div>
          </div>
        ))}
      </div>

      <div className="trusted-by-section">
        <h3 className="trusted-by-title">We’re trusted by leading healthcare institutions</h3>
        <div className="trusted-logos">
          {trustedByLogos.map((logo, index) => (
            <img key={index} src={logo} alt={`Trusted Hospital ${index + 1}`} className="trusted-logo" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustCompliance;
