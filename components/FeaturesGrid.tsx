import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  LineChart, 
  Library, 
  GraduationCap, 
  ChevronRight, 
  List, 
  MessageSquare, 
  HelpCircle, 
  Calculator, 
  BarChart3, 
  TrendingUp, 
  CheckSquare, 
  FileText, 
  Video, 
  Newspaper 
} from 'lucide-react';

const featureGroups = [
  {
    id: 'fundraising',
    title: 'Fundraising Command Center',
    subtitle: 'Manage investors & close rounds',
    description: 'A complete operating system for your fundraising. Manage your pipeline, access vetted investor lists, and communicate effectively.',
    mainIcon: Users,
    image: 'https://images.squarespace-cdn.com/content/v1/677d4de1cf46b04883f1f5a2/79c09c2e-436f-4720-9418-4667d4f40d17/InPaceline-CRM-Screenshot-01.jpg', // Placeholder for actual tool screenshot
    tools: [
      { name: 'Investor CRM', icon: Users, desc: 'Track pipeline & interactions' },
      { name: 'VC & Angel List', icon: List, desc: 'Vetted list to jump-start raising' },
      { name: 'Investor FAQ', icon: HelpCircle, desc: 'Database for common questions' },
      { name: 'Communication', icon: MessageSquare, desc: 'Craft updates & track performance' }
    ]
  },
  {
    id: 'finance',
    title: 'Financial Intelligence Suite',
    subtitle: 'Model runway & growth',
    description: 'Stop guessing. Use proven financial models to forecast revenue, manage burn, and present your financials with confidence.',
    mainIcon: LineChart,
    image: 'https://images.squarespace-cdn.com/content/v1/677d4de1cf46b04883f1f5a2/8d2e8b0b-2e9a-4c9f-9b0a-0b0b0b0b0b0b/InPaceline-Financials-Screenshot.jpg', // Placeholder for actual tool screenshot
    tools: [
      { name: 'SaaS Financial Model', icon: TrendingUp, desc: 'Forecast revenue & runway' },
      { name: 'P&L Calculator', icon: Calculator, desc: 'Analyze financial scenarios' },
      { name: 'Business Scorecard', icon: BarChart3, desc: 'Track key stage metrics' }
    ]
  },
  {
    id: 'resources',
    title: 'Founder Resources',
    subtitle: 'Guides, Checklists & Templates',
    description: "Don't reinvent the wheel. Access our library of essential guides, due diligence checklists, and worksheets designed for early-stage founders.",
    mainIcon: Library,
    image: 'https://images.squarespace-cdn.com/content/v1/677d4de1cf46b04883f1f5a2/9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a/InPaceline-Resources.jpg', // Placeholder for actual tool screenshot
    tools: [
      { name: 'Due Diligence Checklist', icon: CheckSquare, desc: 'Organize docs investors need' },
      { name: 'Downloadable Guides', icon: FileText, desc: 'Essential worksheets for growth' }
    ]
  },
  {
    id: 'learning',
    title: 'Learning & Community',
    subtitle: 'Workshops & Insights',
    description: 'Continuous learning with expert-led workshops and deep-dive content to keep you ahead of the curve.',
    mainIcon: GraduationCap,
    image: 'https://images.squarespace-cdn.com/content/v1/677d4de1cf46b04883f1f5a2/learning-platform.jpg', // Placeholder for actual tool screenshot
    tools: [
      { name: 'Workshops', icon: Video, desc: 'Upcoming online sessions' },
      { name: 'Substack', icon: Newspaper, desc: 'Latest insights & guides' }
    ]
  }
];

const FeaturesGrid: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState(featureGroups[0]);

  return (
    <section id="features" className="py-24 bg-navy-800 relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-brand-orange font-semibold tracking-wider text-sm uppercase">Comprehensive Toolkit</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold text-white">
            Everything You Need to <br />
            <span className="text-brand-orange">Raise Successfully</span>
          </h2>
          <p className="mt-4 text-brand-cream/80 max-w-2xl mx-auto">
            From investor management to financial modeling, we've built the tools that founders actually need.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Navigation */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {featureGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => setActiveGroup(group)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 group relative overflow-hidden ${
                  activeGroup.id === group.id
                    ? 'bg-navy-900 border-brand-orange shadow-lg'
                    : 'bg-navy-900/40 border-white/5 hover:bg-navy-900/80 hover:border-white/10'
                }`}
              >
                {/* Active Indicator Strip */}
                {activeGroup.id === group.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-orange"></div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      activeGroup.id === group.id ? 'bg-brand-orange text-white' : 'bg-white/10 text-gray-400'
                    }`}>
                      <group.mainIcon size={24} />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg ${activeGroup.id === group.id ? 'text-white' : 'text-gray-300'}`}>
                        {group.title}
                      </h3>
                      <p className="text-sm text-gray-500">{group.subtitle}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    activeGroup.id === group.id ? 'text-brand-orange translate-x-1' : 'text-gray-600'
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Display Area */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGroup.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-navy-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
              >
                {/* Mock Browser/App Header */}
                <div className="bg-black/20 px-6 py-4 border-b border-white/5 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                  <div className="ml-4 text-xs text-gray-500 font-mono bg-white/5 px-3 py-1 rounded-full">
                    Inpaceline Toolkit / {activeGroup.title}
                  </div>
                </div>

                {/* Main Content */}
                <div className="p-8">
                  {/* Image Placeholder area */}
                  <div className="aspect-video w-full bg-gradient-to-br from-navy-800 to-black rounded-xl border border-white/10 mb-8 relative overflow-hidden group">
                     {/* Using a solid color fallback if image fails, or the placeholder URL */}
                     <div className="absolute inset-0 flex items-center justify-center bg-navy-800">
                        <img 
                          src={activeGroup.image} 
                          alt={activeGroup.title} 
                          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                          onError={(e) => {
                            // Fallback if placeholder image is broken
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                        {/* Fallback overlay text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                             <div className="bg-navy-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 text-brand-cream text-sm font-semibold flex items-center gap-2">
                                <activeGroup.mainIcon size={16} />
                                {activeGroup.title} Interface Preview
                             </div>
                        </div>
                     </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{activeGroup.title}</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {activeGroup.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {activeGroup.tools.map((tool, idx) => (
                      <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/5 flex items-start gap-3 hover:bg-white/10 transition-colors">
                        <div className="mt-1 min-w-[20px] text-brand-orange">
                          <tool.icon size={20} />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-sm">{tool.name}</h4>
                          <p className="text-xs text-gray-500 mt-1">{tool.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturesGrid;