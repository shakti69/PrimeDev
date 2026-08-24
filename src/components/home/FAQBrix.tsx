import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PrimeDevLogoMark } from '../common/PrimeDevLogoMark';
import { useRouter } from '../../context/RouterContext';

export const FAQBrix: React.FC = () => {
  const { navigate } = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What's included in the subscription?",
      a: "Your subscription covers end-to-end digital design services: website & app UI/UX, brand identity, social media graphics, no-code development, and more. You'll also get unlimited requests, revisions, and ongoing support (based on your plan).",
    },
    {
      q: 'How does the design delivery process work?',
      a: 'Once subscribed, you get access to a private Trello board where you can queue requests. We work through tasks one by one with fast iterations, sharing Figma links directly for rapid feedback.',
    },
    {
      q: 'How do I provide feedback?',
      a: 'You can provide feedback directly on Figma comments, Loom videos, Slack, or Trello cards. We refine until you are 100% satisfied with the outcome.',
    },
    {
      q: "What if I'm not satisfied with the design?",
      a: "No problem at all. We offer unlimited revisions until the design matches your exact vision and standards. We won't stop until you love it.",
    },
    {
      q: 'Which plan is right for me — Monthly or Fixed?',
      a: 'If you have a defined project with set deliverables (e.g., a one-time website redesign), the Fixed Project package is best. If you need ongoing design work every week, the Unlimited Monthly Subscription is ideal.',
    },
    {
      q: 'How does the pause feature work?',
      a: 'Billing cycles are 31 days. If you only use 20 days of service and have no more immediate requests, you can pause your subscription and use the remaining 11 days whenever you need them in the future.',
    },
    {
      q: 'What if I only have a single design request?',
      a: 'You can subscribe for a single month, get your design completed, and pause or cancel before the renewal date.',
    },
    {
      q: 'Is there a limit to what I can request?',
      a: 'There is no limit to the number of requests you can add to your queue. They will be delivered sequentially, one by one, with top priority.',
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2 mb-14 sm:mb-20 text-left"
        >
          <span className="text-[12px] font-bold tracking-widest text-[#FF5819] uppercase font-mono">
            FAQS
          </span>
          <h2
            style={{
              fontFamily: '"Pangea Afrikan Trial", "Suisse Int\'l", sans-serif',
              fontWeight: 500,
              letterSpacing: '-0.04em',
              lineHeight: '1.08',
            }}
            className="text-4xl sm:text-6xl text-[#1E1E1E]"
          >
            <span className="text-[#999999] font-normal">Frequently</span> <br />
            <span>asked questions</span>
          </h2>
        </motion.div>

        {/* 2-Column FAQ Layout (1:1 with Screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Sticky Intro Call Card with Scroll Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-[#F4F4F6] rounded-[36px] sm:rounded-[40px] p-9 sm:p-12 text-center space-y-6 lg:sticky lg:top-28 border border-black/[0.02] shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Orange Monogram Badge */}
            <div className="w-20 h-20 rounded-full bg-[#FF5819] text-white flex items-center justify-center shadow-lg shadow-[#FF5819]/30 mx-auto animate-icon-pulse-glow">
              <PrimeDevLogoMark size={32} color="white" />
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1.5 pt-1">
              <h3
                style={{
                  fontFamily: '"Pangea Afrikan Trial", sans-serif',
                  letterSpacing: '-0.02em',
                }}
                className="text-2xl sm:text-3xl font-bold text-[#1E1E1E]"
              >
                Book an intro call
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] font-normal">
                Let&apos;s get started with a brief intro call.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => navigate('book')}
                style={{
                  backgroundColor: '#FF5819',
                  boxShadow: '2px 2px 10px rgba(36,36,36,0.1), inset 4px 4px 6px rgba(255,255,255,0.25)',
                }}
                className="group/btn btn-sheen w-full inline-flex items-center justify-center gap-2 h-[52px] rounded-[40px] text-white font-medium text-sm hover:scale-[1.04] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-6px_rgba(255,88,25,0.5)] active:translate-y-0 active:scale-[0.97] transition-all duration-300 cursor-pointer select-none"
              >
                <span>Book a Free Call</span>
                <svg className="transition-transform duration-300 group-hover/btn:translate-x-1.5" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>

            {/* WhatsApp Communication Row (Exact Match) */}
            <div className="pt-6 flex items-center justify-center sm:justify-start gap-3.5 text-left border-t border-black/[0.04]">
              <div className="w-10 h-10 rounded-full bg-[#E8F8EE] flex items-center justify-center shrink-0 shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zM17.62 15.6c-.24.67-1.19 1.23-1.66 1.29-.44.06-.99.09-3.21-.83-2.69-1.12-4.42-3.86-4.55-4.04-.13-.18-1.07-1.42-1.07-2.71 0-1.29.68-1.92.92-2.18.24-.26.53-.33.71-.33.18 0 .36 0 .52.01.17.01.39-.06.61.47.23.55.78 1.9.85 2.04.07.14.12.31.02.5-.1.19-.15.31-.3.49-.15.18-.31.4-.44.54-.15.15-.31.31-.13.62.18.31.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.49 1.53.31.15.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.15.28.11 1.78.84 2.09.99.31.15.52.23.6.36.08.13.08.75-.16 1.42z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm text-[#242424] font-medium leading-snug">
                Do you prefer whatsapp communication?
              </span>
            </div>

          </motion.div>

          {/* Right Accordion List with Smooth Height Morph */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#F4F4F6] rounded-[22px] overflow-hidden transition-colors duration-200 border border-black/[0.02] hover:border-black/[0.06]"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-8 py-5 sm:py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none select-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#1E1E1E]">
                      {faq.q}
                    </span>
                    <span className={`text-xl font-light text-[#242424] shrink-0 transition-transform duration-300 leading-none ${isOpen ? 'rotate-45 font-normal' : ''}`}>
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6 text-xs sm:text-sm text-[#555555] leading-relaxed pt-1">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

