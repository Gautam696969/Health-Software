import React from 'react';
import './HeroSection.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Transforming Healthcare with AI Intelligence</h1>
        <p>
          Empower your practice with smarter diagnostics, predictive analytics, and personalized patient care.
        </p>
        <div className="hero-buttons">
          <button className="btn primary">Book a Demo</button>
          <button className="btn secondary">See It in Action</button>
        </div>
      </div>
      <div className="hero-animation">
        {/* Place the animation file in the public folder */}
        <DotLottieReact
          src="/ai-Animation.json"
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
