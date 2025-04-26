import React from 'react';
import './AppPromo.css';


const AppPromo = () => {
  return (
    <section className="app-promo">
      <div className="promo-text">
        <h2>📱 Monitor Patients On-the-Go</h2>
        <p>
          Stay connected with real-time patient data from anywhere. Our mobile app supports iOS and Android – giving you AI-powered insights in your pocket.
        </p>
        <ul className="features-list">
          <li>🔔 Instant alerts for vitals</li>
          <li>📊 Mobile-friendly dashboards</li>
          <li>🧠 AI-recommended interventions</li>
          <li>🔒 HIPAA-compliant on all devices</li>
        </ul>
        <div className="store-buttons">
          <img src="/image/app.png" alt="Download on App Store" />
          <img src="/image/play.jpg" alt="Get it on Google Play" />
        </div>
      </div>

      <div className="promo-images">
        <img src="/image/OIP.jpg" alt="App screenshot 1" className="mobile-screen" />
        <img src="/image/phone.png" alt="App screenshot 2" className="mobile-screen second" />
      </div>
    </section>
  );
};

export default AppPromo;
