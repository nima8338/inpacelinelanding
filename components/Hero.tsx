import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const phrases = [
    "get funded",
    "think strategically",
    "build traction",
    "accelerate growth",
    "prove product-market-fit"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
        >
          <Sparkles className="text-brand-orange w-4 h-4" />
          <span className="text-sm font-medium text-gray-300">Built by Founders, for Founders</span>
        </motion.div>

        {/* Main Headline with Rotating Text */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight flex flex-col items-center"
        >
          <span className="block mb-2 text-white">Everything your StartUp needs to:</span>
          
          <div className="h-[1.3em] relative w-full flex justify-center overflow-hidden">
             <AnimatePresence mode='wait'>
                <motion.span 
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-200 py-1"
                >
                  {phrases[index]}
                </motion.span>
             </AnimatePresence>
          </div>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          AI-powered tools, expert-curated resources, and proven frameworks to help you grow your startup. Everything you need, all in one place.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-orange to-orange-600 rounded-full font-bold text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/50 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
            Start Free Today
            <ArrowRight size={18} />
          </button>
        </motion.div>

        {/* Featured In Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 pt-10 border-t border-white/5"
        >
          <p className="text-sm text-gray-500 font-semibold mb-10 uppercase tracking-widest">Trusted by founders from</p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-500 text-white">
            
            {/* Forbes */}
            <span className="font-serif font-bold text-3xl tracking-tight">Forbes</span>
            
            {/* Popular Mechanics */}
            <div className="flex flex-col items-center leading-none font-serif font-bold uppercase">
              <span className="text-sm tracking-wide">Popular</span>
              <span className="text-[10px] tracking-widest border-t border-current w-full text-center mt-0.5 pt-0.5">Mechanics</span>
            </div>
            
            {/* Inc. */}
            <span className="font-serif font-black text-4xl tracking-tighter">Inc.</span>
            
            {/* Shark Tank */}
            <div className="flex flex-col items-center leading-none font-sans font-black uppercase tracking-tighter -skew-x-6">
              <span className="text-xl">Shark</span>
              <span className="text-xl">Tank</span>
            </div>
            
            {/* TechCrunch */}
            <div className="flex items-center gap-1 group">
              <span className="font-bold text-lg font-mono bg-white text-navy-900 px-1 rounded-sm group-hover:bg-[#00D563] group-hover:text-white transition-colors">TC</span>
              <span className="font-sans font-bold text-2xl tracking-tighter group-hover:text-[#00D563] transition-colors">TechCrunch</span>
            </div>
            
            {/* Entrepreneur */}
            <span className="font-serif font-bold text-2xl tracking-tight">Entrepreneur</span>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;