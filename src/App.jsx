import React, { lazy, useEffect, Suspense } from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';

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

function App() {
  useEffect(() => {
    document.title = "Welcome to Healthcare";
  }, []);

  return (
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
        </div>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

