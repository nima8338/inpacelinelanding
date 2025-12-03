import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const stats = [
  { value: 72, suffix: '', label: 'Startups coached and achieved Product Market Fit' },
  { value: 321, suffix: '%', label: 'Average annual revenue growth' },
  { value: 21, suffix: '', label: 'Products invented and launched in market' },
  { value: 533, suffix: '', label: 'Startups coached' },
  { value: 76, suffix: '%', label: 'of brands go from $0 to $1M in 18 months' },
  { value: 92, suffix: '%', label: 'of founders raise capital with InPaceline' },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  // Reduced damping from 50 to 30 for a snappier response that settles faster
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        // Changed Math.floor to Math.round so it snaps to the final number 
        // as soon as it's close, preventing the "hanging on number below" issue.
        ref.current.textContent = Math.round(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} />;
};

const KPISection: React.FC = () => {
  return (
    <section className="py-24 bg-[#f8f6f4] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-orange rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block"
          >
             <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Putting the <span className="text-brand-orange">“Performance”</span> in KPI.
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-navy-800/80 max-w-2xl mx-auto font-light"
          >
            We take pride in the journey, putting in the reps and overcoming big challenges.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center hover:border-brand-orange/30 transition-all group shadow-xl shadow-gray-200/50"
            >
              <div className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-brand-orange to-orange-400 mb-4 font-sans tracking-tight">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-lg text-navy-900 font-medium leading-snug max-w-[200px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KPISection;