import React from 'react';
import { Sparkles, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-brand-orange to-red-500 flex items-center justify-center text-white">
                <Sparkles size={16} fill="currentColor" />
              </div>
              <span className="text-xl font-bold text-white">Inpaceline</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              AI-powered tools, expert-curated resources, and proven frameworks to help you grow your startup.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">AI Advisors</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Workshops</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-orange transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Legal</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Inpaceline Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;