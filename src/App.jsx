import React, { lazy, useEffect, useState, Suspense } from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
// import CanvasDots from './context/canvas';

import { motion, useScroll, useSpring } from "framer-motion";

// Lazy load components
const Navbar = lazy(() => import('./component/Navbar/Navbar'));
const HeroSection = lazy(() => import('./component/HeroSection/HeroSection'));
const FeaturesSection = lazy(() => import('./component/FeaturesSection/FeaturesSection'));
const TrustCompliance = lazy(() => import('./component/TrustCompliance/TrustCompliance'));
const DashboardDemo = lazy(() => import('./component/DashboardDemo/DashboardDemo'));
const Testimonials = lazy(() => import('./component/Testimonials/Testimonials'));
const Integrations = lazy(() => import('./component/Integrations/Integrations'));
const CTASection = lazy(() => import('./component/CTASection/CTASection'));
const UseCases = lazy(() => import('./component/UseCases/UseCases'));
const AppPromo = lazy(() => import('./component/AppPromo/AppPromo'));
const Footer = lazy(() => import('./component/Footer/Footer.jsx'));
// const Animate = lazy(() => import('./component/Animte/Animte.jsx'));

function App() {
  useEffect(() => {
    document.title = "Welcome to Healthcare";
  }, []);

  const { scrollYProgress } = useScroll();
  const [pulsate, setPulsate] = useState(1);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPulsate(1.05);
      setTimeout(() => setPulsate(1), 200);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <ThemeProvider>
      <div className="app">
        <div className="relative">
          {/* <CanvasDots /> */}
          <Suspense fallback={<div>Loading...</div>}>
            <div>
              <Navbar />

              {/* Scroll Progress Bar */}
              <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gray-600 z-50"
                style={{ scaleX, scaleY: pulsate }}
              />

              <HeroSection />
              <FeaturesSection />
              <TrustCompliance />
              <DashboardDemo />
              <Testimonials />
              <Integrations />
              <CTASection />
              <UseCases />
              <AppPromo />
              <Footer />
              {/* <Animate /> */}
            </div>
          </Suspense>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
