import React from 'react';
import { motion } from 'framer-motion';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#f8f6f4] relative z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-6"
        >
          Feeling lost with scaling up your business?
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-900 mb-8 tracking-tight leading-tight"
        >
          Bring your <span className="text-brand-orange">bold ideas</span> to market
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-24 h-1.5 bg-brand-orange mx-auto mb-10 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-navy-800 leading-relaxed font-medium"
        >
          We have been in your shoes and lost sleep trying to grow our own businesses. With over 25 years of experience building products, starting brands and scaling up, we’ve found a better way to create a loyal fan base and build a brand people love.
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;