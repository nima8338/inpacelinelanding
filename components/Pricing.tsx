import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap } from 'lucide-react';

const plans = [
  {
    name: "Toolkit Subscription",
    desc: "Get full access to all AI-powered tools and resources.",
    price: "$49",
    period: "/month",
    features: [
      "Full access to all toolkit features",
      "24/7 access to AI concierge (Inpaceline GPT)",
      "Access to the Substack newsletter",
      "Entry to monthly workshops",
      "Discounted 1-on-1 sessions for $200/hour"
    ],
    cta: "Get Started",
    popular: false,
    highlight: false
  },
  {
    name: "Founders Round",
    desc: "Everything in the toolkit, plus live coaching and an exclusive community.",
    price: "$249",
    period: "/month",
    features: [
      "Everything in the Toolkit, plus:",
      "Weekly live group coaching calls",
      "Interactive community of founders & coaches",
      "Member-exclusive pro webinars",
      "Personalized coaching & feedback",
      "Proprietary resources, frameworks, and templates",
      "Invites to exclusive live events and member meetups"
    ],
    cta: "Join the Round",
    popular: true,
    highlight: true
  },
  {
    name: "1-on-1 Session",
    desc: "Book a dedicated coaching hour with Clay (no subscription required).",
    price: "$300",
    period: "/hour",
    features: [
      "Personalized strategic advice",
      "Pitch review and feedback",
      "Fundraising strategy session"
    ],
    cta: "Book a Session",
    popular: false,
    highlight: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-navy-900 relative overflow-hidden scroll-mt-28">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold tracking-wider text-sm uppercase">Pricing</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-white">
            Choose Your <span className="text-brand-orange">Path Forward</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Select the plan that fits your stage and needs. All plans include access to our proven frameworks.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-[#f7f5f2] border-2 border-brand-orange shadow-2xl shadow-orange-500/20 scale-105 z-10' 
                  : 'bg-[#f7f5f2] border border-transparent hover:border-brand-orange/30 shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-lg">
                  Best Value
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-navy-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-600 h-10">{plan.desc}</p>
              </div>

              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-extrabold text-navy-900">{plan.price}</span>
                <span className="text-gray-500 ml-2">{plan.period}</span>
              </div>

              <button 
                className={`w-full py-3 px-6 rounded-lg font-bold text-sm transition-all mb-8 flex items-center justify-center gap-2 ${
                  plan.highlight
                    ? 'bg-brand-orange hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25'
                    : 'bg-navy-900 hover:bg-navy-800 text-white'
                }`}
              >
                {plan.highlight && <Sparkles size={16} />}
                {plan.cta}
              </button>

              <div className="space-y-4 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`mt-1 min-w-[18px] w-[18px] h-[18px] rounded-full flex items-center justify-center ${
                      plan.highlight ? 'bg-brand-orange/20 text-brand-orange' : 'bg-navy-100 text-navy-700'
                    }`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className={`text-sm leading-relaxed ${
                      idx === 0 && plan.highlight ? 'font-bold text-navy-900' : 'text-gray-700'
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;