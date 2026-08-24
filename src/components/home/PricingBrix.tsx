import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from '../../context/RouterContext';

export const PricingBrix: React.FC = () => {
  const { navigate } = useRouter();
  const [activeTab, setActiveTab] = useState<'fixed' | 'monthly'>('fixed');

  return (
    <section id="pricing" className="py-16 sm:py-32 bg-white relative overflow-hidden">
      
      {/* Giant Faded PRICING Watermark with subtle float */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        aria-hidden="true"
        style={{
          fontFamily: '"Pangea Afrikan Trial", sans-serif',
          letterSpacing: '-0.04em',
        }}
        className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 select-none pointer-events-none text-[18vw] sm:text-[16vw] font-black uppercase text-black/[0.04] whitespace-nowrap leading-none z-0"
      >
        PRICING
      </motion.div>

      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-16"
        >
          <h2
            style={{
              fontFamily: '"Pangea Afrikan Trial", "Suisse Int\'l", sans-serif',
              fontWeight: 500,
              letterSpacing: '-0.04em',
              lineHeight: '1.08',
            }}
            className="text-3xl sm:text-5xl lg:text-6xl text-[#1E1E1E]"
          >
            Our pricing is transparent, <br />
            <span className="text-[#999999] font-normal">just like our process.</span>
          </h2>
        </motion.div>

        {/* Mobile / Tablet Filter Toggle Pill (1:1 with Screenshot 5) */}
        <div className="flex items-center justify-center mb-10 sm:mb-14">
          <div className="inline-flex p-1.5 rounded-full bg-[#EAEAEA] border border-black/5 shadow-inner">
            <button
              onClick={() => setActiveTab('monthly')}
              className={`relative px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'monthly'
                  ? 'bg-[#242424] text-white shadow-md'
                  : 'text-[#444444] hover:text-[#1E1E1E]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setActiveTab('fixed')}
              className={`relative px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'fixed'
                  ? 'bg-[#242424] text-white shadow-md'
                  : 'text-[#444444] hover:text-[#1E1E1E]'
              }`}
            >
              Fixed Project
            </button>
          </div>
        </div>

        {/* Pricing Cards: Responsive View (Dynamic Tab on Mobile, Side-by-Side on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Custom Plan (Light Card) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className={`group/card bg-[#F4F4F6] rounded-[28px] sm:rounded-[36px] p-7 sm:p-10 flex flex-col justify-between shadow-sm relative border border-black/[0.04] transition-all duration-300 hover:shadow-2xl ${
              activeTab === 'monthly' ? 'hidden md:flex' : 'flex'
            }`}
          >
            <div className="space-y-6">
              <div>
                <span className="inline-block px-4 py-1 rounded-full border border-black/80 bg-white/50 text-[11px] sm:text-[12px] font-mono font-medium tracking-wider text-[#1E1E1E] uppercase">
                  CUSTOM PLAN
                </span>
              </div>

              <div className="space-y-2">
                <h3
                  style={{
                    fontFamily: '"Pangea Afrikan Trial", sans-serif',
                    letterSpacing: '-0.03em',
                  }}
                  className="text-2xl sm:text-3xl font-bold text-[#1E1E1E]"
                >
                  Project-Based Package
                </h3>
                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed font-normal">
                  Best for one-time projects with clear scope, timeline, and fixed budget.
                </p>
              </div>

              {/* Feature Items with Animated Orange Circle Checkmarks */}
              <div className="space-y-3.5 pt-2">
                {[
                  'A Dedicated Senior Designer',
                  'Defined scope, timeline & deliverables',
                  'Fixed price based on requirements',
                  'Optional no-code development',
                  'No hidden costs',
                  'Additional design support after delivery',
                ].map((feat) => (
                  <div key={feat} className="group/item flex items-center gap-3 text-xs sm:text-sm text-[#333333] font-medium">
                    <span className="w-5 h-5 rounded-full bg-[#E5E5E8] text-[#1E1E1E] flex items-center justify-center text-[10px] font-bold shrink-0 transition-transform duration-200 group-hover/item:scale-125 group-hover/item:bg-[#FF5819] group-hover/item:text-white shadow-xs">
                      ✓
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8">
              <button
                onClick={() => navigate('book')}
                style={{
                  backgroundColor: '#FF5819',
                  boxShadow: '2px 2px 10px rgba(36,36,36,0.1), inset 4px 4px 6px rgba(255,255,255,0.25)',
                }}
                className="group/btn btn-sheen w-full inline-flex items-center justify-center gap-2 px-6 h-[50px] sm:h-[52px] rounded-[40px] text-white font-medium text-sm sm:text-base hover:scale-[1.03] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-4px_rgba(255,88,25,0.5)] active:translate-y-0 active:scale-[0.97] transition-all duration-300 cursor-pointer select-none"
              >
                <span>Book a Free Call</span>
                <svg className="transition-transform duration-300 group-hover/btn:translate-x-1.5" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Card 2: Unlimited Design Subscription (Dark Card) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className={`group/card bg-[#242424] text-white rounded-[28px] sm:rounded-[36px] p-7 sm:p-10 flex flex-col justify-between shadow-xl relative border border-white/10 transition-all duration-300 hover:shadow-2xl ${
              activeTab === 'fixed' ? 'hidden md:flex' : 'flex'
            }`}
          >
            <div className="space-y-6">
              <div>
                <span className="inline-block px-4 py-1 rounded-full border border-white/25 bg-white/10 text-[11px] sm:text-[12px] font-mono font-medium tracking-wider text-white uppercase">
                  UNLIMITED DESIGN SUBSCRIPTION
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline gap-1.5">
                  <span
                    style={{
                      fontFamily: '"Pangea Afrikan Trial", sans-serif',
                      letterSpacing: '-0.04em',
                    }}
                    className="text-4xl sm:text-5xl font-extrabold text-white"
                  >
                    ₹9,999
                  </span>
                  <span className="text-xs sm:text-sm text-white/70 font-mono">/month</span>
                </div>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-normal">
                  Best for businesses needing ongoing design support with new requests every month.
                </p>
              </div>

              <div className="space-y-3.5 pt-2">
                {[
                  'Website or Mobile App UI Design',
                  'Branding & Packaging Design',
                  'No-code Development',
                  'Unlimited design requests (1 at a time)',
                  '48h turnaround on most requests',
                  'Direct communication with Founder',
                  'Pause or cancel anytime',
                ].map((feat) => (
                  <div key={feat} className="group/item flex items-center gap-3 text-xs sm:text-sm text-white/90 font-medium">
                    <span className="w-5 h-5 rounded-full bg-white/15 text-white flex items-center justify-center text-[10px] font-bold shrink-0 transition-transform duration-200 group-hover/item:scale-125 group-hover/item:bg-[#FF5819] group-hover/item:text-white">
                      ✓
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8">
              <button
                onClick={() => navigate('book')}
                style={{
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                }}
                className="group/btn btn-sheen w-full inline-flex items-center justify-center gap-2 px-6 h-[50px] sm:h-[52px] rounded-[40px] bg-white text-[#242424] font-semibold text-sm sm:text-base hover:bg-[#F8F8F8] hover:scale-[1.03] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.97] transition-all duration-300 cursor-pointer select-none"
              >
                <span>Book a Free Call</span>
                <svg className="transition-transform duration-300 group-hover/btn:translate-x-1.5" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
