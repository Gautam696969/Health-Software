import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import './HeroSection.css';
import { AnimatePresence, motion } from 'framer-motion';
import CanvasDots from '../../context/canvas.jsx';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState( false );
  const [animationError, setAnimationError] = useState( false );
  const [animationData, setAnimationData] = useState( null );
  const [index, setIndex] = useState( 0 );
  const rotatingWords = ['Health-Care', 'Healing with Heart', 'Caring for Life'];

  const words = rotatingWords;

  useEffect( () => {
    const interval = setInterval( () => {
      setIndex( ( prevIndex ) => ( prevIndex + 1 ) % words.length );
    }, 3000 );

    return () => clearInterval( interval );
  }, [words.length] );

  useEffect( () => {
    fetch( 'https://assets10.lottiefiles.com/packages/lf20_hx7ddrx9.json' )
      .then( response => {
        if ( !response.ok ) throw new Error( 'Animation network error' );
        return response.json();
      } )
      .then( data => setAnimationData( data ) )
      .catch( () => setAnimationError( true ) );

    setIsVisible( true );
  }, [] );

  return (
    <div className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
      <CanvasDots />
      <div className="hero-text">
        <h1 className="animate-title">
          Transforming    <AnimatePresence mode="wait">
            <motion.div
              key={words[index]}
              className="text-[#2f82ff] inline-flex justify-end"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'translateZ(100px)'
              }}
              initial={{ opacity: 0, rotateX: 90, rotateY: 0, rotateZ: 0 }}
              animate={{
                opacity: 1,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.17, 0.67, 0.83, 0.67]
                }
              }}
              exit={{
                opacity: 0,
                rotateX: -90,
                rotateY: 0,
                rotateZ: 0,
                transition: {
                  duration: 0.4,
                  ease: [0.55, 0.085, 0.68, 0.53]
                }
              }}>
              <span>{words[index]}</span>
            </motion.div>
          </AnimatePresence>
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
        {animationData && !animationError ? (
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            className="lottie-animation"
            onError={() => setAnimationError( true )}
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <div className="video-error">
            {animationError ? "Animation could not be loaded" : "Loading..."}
          </div>
        )}
      </div>

    </div>
  );
};

export default HeroSection;
