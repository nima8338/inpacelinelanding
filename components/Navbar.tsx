import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-900/80 backdrop-blur-lg border-b border-white/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer group select-none">
           {/* Logo Placeholder: Replace the src below with your actual logo image path (e.g., /logo.png) */}
           <img 
             src="https://images.squarespace-cdn.com/content/v1/677d4de1cf46b04883f1f5a2/6d4ec8f9-8ac0-4312-ad5a-1846ddb59ff2/InPaceline-logo-white-01-v1.png" 
             alt="Inpaceline" 
             className="h-10 w-auto" 
           />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a 
            href="#features" 
            onClick={(e) => scrollToSection(e, 'features')}
            className="hover:text-white transition-colors"
          >
            Features
          </a>
          <a 
            href="#advisors" 
            onClick={(e) => scrollToSection(e, 'advisors')}
            className="hover:text-white transition-colors"
          >
            AI Advisors
          </a>
          <a 
            href="#pricing" 
            onClick={(e) => scrollToSection(e, 'pricing')}
            className="hover:text-white transition-colors"
          >
            Pricing
          </a>
          <a 
            href="#features" 
            onClick={(e) => scrollToSection(e, 'features')}
            className="hover:text-white transition-colors"
          >
            Resources
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-white hover:text-brand-orange transition-colors">
            Sign In
          </button>
          <a 
            href="#pricing"
            onClick={(e) => scrollToSection(e, 'pricing')}
            className="bg-brand-orange hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-navy-900 border-b border-white/10 p-4 flex flex-col gap-4 shadow-xl">
          <a 
            href="#features" 
            onClick={(e) => scrollToSection(e, 'features')} 
            className="text-gray-300 hover:text-white py-2"
          >
            Features
          </a>
          <a 
            href="#advisors" 
            onClick={(e) => scrollToSection(e, 'advisors')} 
            className="text-gray-300 hover:text-white py-2"
          >
            AI Advisors
          </a>
          <a 
            href="#pricing" 
            onClick={(e) => scrollToSection(e, 'pricing')} 
            className="text-gray-300 hover:text-white py-2"
          >
            Pricing
          </a>
          <a 
            href="#features" 
            onClick={(e) => scrollToSection(e, 'features')} 
            className="text-gray-300 hover:text-white py-2"
          >
            Resources
          </a>
          <div className="h-px bg-white/10 my-2"></div>
          <button className="text-left text-gray-300 hover:text-white py-2">Sign In</button>
          <a 
            href="#pricing"
            onClick={(e) => scrollToSection(e, 'pricing')}
            className="bg-brand-orange text-white px-5 py-3 rounded-lg font-semibold text-center block"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;