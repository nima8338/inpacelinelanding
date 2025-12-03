import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, TrendingUp, DollarSign, Settings, ArrowRight } from 'lucide-react';
import { Advisor } from '../types';

const advisors: Advisor[] = [
  {
    id: 'cmo',
    role: 'CMO',
    fullName: 'Chief Marketing Officer',
    description: 'Get AI-powered marketing strategies, positioning advice, and go-to-market guidance tailored to your startup stage.',
    bullets: ['Market positioning', 'Brand messaging', 'Growth strategies', 'Channel optimization']
  },
  {
    id: 'cfo',
    role: 'CFO',
    fullName: 'Chief Financial Officer',
    description: 'Navigate financial decisions with AI insights on runway, fundraising, unit economics, and investor-ready metrics.',
    bullets: ['Runway analysis', 'Fundraising prep', 'Unit economics', 'Financial modeling']
  },
  {
    id: 'coo',
    role: 'COO',
    fullName: 'Chief Operations Officer',
    description: 'Scale your operations with AI recommendations on processes, team structure, and operational efficiency.',
    bullets: ['Process optimization', 'Team structure', 'Operational scaling', 'Efficiency audits']
  }
];

const AIAdvisors: React.FC = () => {
  const [activeAdvisor, setActiveAdvisor] = useState<Advisor>(advisors[0]);

  const getIcon = (id: string) => {
    switch(id) {
      case 'cmo': return <TrendingUp className="w-8 h-8 text-white" />;
      case 'cfo': return <DollarSign className="w-8 h-8 text-white" />;
      case 'coo': return <Settings className="w-8 h-8 text-white" />;
      default: return <Sparkles className="w-8 h-8 text-white" />;
    }
  };

  return (
    <section id="advisors" className="py-24 bg-navy-800 relative overflow-hidden scroll-mt-28">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">AI-Powered Advisory</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Virtual <br/>
            <span className="text-brand-orange">C-Suite Team</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Access AI executives trained on startup best practices. Get strategic advice whenever you need it.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Selection */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {advisors.map((advisor) => (
              <button
                key={advisor.id}
                onClick={() => setActiveAdvisor(advisor)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 group ${
                  activeAdvisor.id === advisor.id
                    ? 'bg-blue-600/10 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.1)]'
                    : 'bg-white/5 border-white/5 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      activeAdvisor.id === advisor.id ? 'bg-brand-orange' : 'bg-white/10'
                    }`}>
                      {getIcon(advisor.id)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xl font-bold ${activeAdvisor.id === advisor.id ? 'text-white' : 'text-gray-300'}`}>
                          {advisor.role}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                        <span className="text-sm text-gray-400">{advisor.fullName}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                        {advisor.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                    activeAdvisor.id === advisor.id ? 'text-brand-orange translate-x-1' : 'text-gray-600'
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* Right Side: Detail View */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAdvisor.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-blue-900/40 to-navy-900 border border-blue-500/20 rounded-3xl p-8 md:p-12 h-full min-h-[500px] flex flex-col justify-center relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[80px] rounded-full pointer-events-none"></div>

                <div className="w-20 h-20 bg-gradient-to-br from-brand-orange to-orange-400 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-orange-500/20">
                   {getIcon(activeAdvisor.id)}
                </div>

                <h3 className="text-3xl font-bold text-white mb-2">AI {activeAdvisor.role}</h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {activeAdvisor.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {activeAdvisor.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
                      <span className="text-gray-300 font-medium">{bullet}</span>
                    </div>
                  ))}
                </div>

                <button className="self-start bg-brand-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-orange-500/30">
                  Chat with AI {activeAdvisor.role}
                  <Sparkles size={18} />
                </button>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAdvisors;