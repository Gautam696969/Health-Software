import React, { lazy, useEffect, Suspense } from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
// import CanvasDots from './context/canvas';

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
const Footer = lazy(()=> import('./component/Footer/Footer.jsx'))
// const Animate = lazy(()=> import('./component/Animte/Animte.jsx'))

function App() {
  useEffect(() => {
    document.title = "Welcome to Healthcare";
  }, []);

  return (
    <div className='relative '>
      {/* <CanvasDots /> */}
    <ThemeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <Navbar />
          <HeroSection />
          <FeaturesSection />
          <TrustCompliance />
          <DashboardDemo />
          <Testimonials />
          <Integrations />
          <CTASection />
          <UseCases />
          <AppPromo />
          <Footer/>
          {/* <Animate/> */}
        </div>
      </Suspense>
    </ThemeProvider>
    </div>

  );
}

export default App;
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

