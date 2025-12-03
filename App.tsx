import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import AIAdvisors from './components/AIAdvisors';
import AboutFounder from './components/AboutFounder';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import KPISection from './components/KPISection';
import ProblemSection from './components/ProblemSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-900 text-brand-cream selection:bg-brand-orange selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <KPISection />
        <FeaturesGrid />
        <AIAdvisors />
        <AboutFounder />
        <Testimonials />
        <Pricing />
       
      </main>
      <Footer />
    </div>
  );
};

export default App;