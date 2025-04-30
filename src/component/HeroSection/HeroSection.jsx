import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1 className="text-3xl">
          Transforming Healthcare <span className='
          '></span>
        </h1>


        <p>
          Empower your practice with smarter diagnostics, predictive analytics,
          and personalized patient care.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">Book a Demo</button>
          <button className="secondary-btn">See It in Action</button>
        </div>
      </div>

      <div className="hero-video-box">
        <video autoPlay loop muted className="small-video">
          <source src="/video/health.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
