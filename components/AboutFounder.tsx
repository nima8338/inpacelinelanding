import React from 'react';
import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutFounder: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-[#fafafa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left: Text Content */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-5xl md:text-6xl font-bold text-brand-orange tracking-tight">Clay Banks</h2>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0a66c2] hover:scale-110 transition-transform duration-300"
                aria-label="LinkedIn Profile"
              >
                {/* Simulating the solid LinkedIn logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </a>
            </div>
            
            <div className="text-lg md:text-xl text-navy-900/80 leading-relaxed font-light space-y-6">
              <p>
                Clay Banks has over 23 years of experience in starting, scaling, and leading innovative hardware and software companies. An 8-time startup founder, he's raised over $5M in capital, holds 3 patents, appeared on Shark Tank, and managed a $2M+ omni-channel brand.
              </p>
              <p>
                Clay’s expertise spans strategy and problem solving, e-commerce growth, and full-scale manufacturing.
              </p>
            </div>
          </motion.div>

          {/* Right: Photo Placeholder */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="relative"
          >
             <div className="relative w-full rounded-none overflow-hidden">
                {/* Removed max-w-md and fixed aspect ratio to allow filling the space naturally */}
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/677d4de1cf46b04883f1f5a2/f04ea963-42f3-4f02-bc49-e3fda5ed6996/InPaceline-founder-Clay-Banks-01-v2.jpg" 
                  alt="Clay Banks" 
                  className="w-full h-auto object-cover grayscale contrast-110"
                />
             </div>
             
             {/* Subtle decorative glow behind */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-brand-orange/5 to-transparent blur-3xl -z-10 pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutFounder;