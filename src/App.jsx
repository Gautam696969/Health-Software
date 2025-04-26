import HeroSection from './component/HeroSection/HeroSection.jsx' 
import FeaturesSection from './component/FeaturesSection/FeaturesSection.jsx'
import TrustCompliance from './component/TrustCompliance/TrustCompliance.jsx'
import DashboardDemo from './component/DashboardDemo/DashboardDemo.jsx'
import Testimonials from './component/Testimonials/Testimonials.jsx'
import Integrations from './component/Integrations/Integrations.jsx'
import CTASection from './component/CTASection/CTASection.jsx'
import UseCases from './component/UseCases/UseCases.jsx'
import AppPromo from './component/AppPromo/AppPromo.jsx'
import { useEffect } from 'react';
import './App.css'


function App() {
  useEffect(() => {
    document.title = "Welcomre to health care ";
  }, []);

  

  return (
    <>
      <div>
      
    <HeroSection/>
    <FeaturesSection/>
    <TrustCompliance/>
    <DashboardDemo/>
    <Testimonials/>
    <Integrations/>
    <CTASection/>
   <UseCases/>
   <AppPromo/>
        </div>
           </>
  )
}

export default App


 
  

