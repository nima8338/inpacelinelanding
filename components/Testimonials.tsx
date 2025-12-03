import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "Clay and the Inpaceline team have been extremely helpful in my journey as a founder. I walk away from every conversation with Clay with greater clarity and a well-defined list of actionable steps to drive my company's growth.",
    author: "Erik Thompson",
    role: "Founder",
    initial: "E"
  },
  {
    quote: "Clay has been an instrumental resource for guidance and insight. When I first engaged with him, I was solo-foundering things. My pitch deck and story had much to be desired. Since then, I've closed our Pre-Seed round with amazing strategic investors.",
    author: "Greg Prosser",
    role: "Founder, Hansel",
    initial: "G"
  },
  {
    quote: "Inpaceline helped me see SecureConnect's strengths, clarify our direction, and make a pivotal shift in our model. It shaped our SaaS build and gave me tools I use daily. I'd tell any founder: don't hesitate — this program moves you forward.",
    author: "Erika Johnson",
    role: "Founder, SecureConnect",
    initial: "E"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#f8f6f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold tracking-wider text-sm uppercase">Testimonials</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-navy-900">
            Trusted by <span className="text-brand-orange">Founders</span>
          </h2>
          <p className="mt-4 text-navy-800 text-lg max-w-2xl mx-auto">
            Join hundreds of founders who are building better startups with Inpaceline.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 flex flex-col justify-between border border-gray-100"
            >
              <div>
                <div className="w-12 h-12 bg-brand-orange rounded-lg rounded-tl-none flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20">
                  <Quote className="text-white w-6 h-6" />
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-orange fill-brand-orange" />
                  ))}
                </div>

                <p className="text-navy-900 leading-relaxed mb-8 font-medium">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-navy-900 text-brand-cream font-bold text-xl flex items-center justify-center">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-bold text-navy-900">{testimonial.author}</h4>
                  <p className="text-sm text-navy-700">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;