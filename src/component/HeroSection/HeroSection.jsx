import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [videoError, setVideoError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
      <div className="hero-text">
        <h1 className="animate-title">
          Transforming <span className="text-gradient">Healthcare</span>
          <br />
          <span className="text-highlight">For The Future</span>
        </h1>
        <p className="hero-description">
          Empower your practice with smarter diagnostics, predictive analytics,
          and personalized patient care solutions.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">
            <span className="btn-icon">🚀</span>
            Book a Demo
          </button>
          <button className="secondary-btn">
            <span className="btn-icon">▶️</span>
            See It in Action
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Healthcare Partners</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Success Rate</p>
          </div>
        </div>
      </div>

      <div className="hero-video-box">
        {!videoError ? (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="small-video"
            onError={() => setVideoError(true)}
          >
            <source src="/video/health.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="video-error">Video could not be loaded</div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
