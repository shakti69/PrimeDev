import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollWordReveal } from '../animation/ScrollWordReveal';
import { useRouter } from '../../context/RouterContext';

export const HeroBrix: React.FC = () => {
  const { navigate } = useRouter();
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: 'Branding',
      arrow: '↘',
      bgWords: ['Visual Identity', 'Typography', 'Packaging', 'Art Direction'],
    },
    {
      title: 'Website',
      arrow: '↗',
      bgWords: ['Web Architecture', 'SaaS Platform', 'E-Commerce', 'Interactions'],
    },
    {
      title: 'Mobile apps',
      arrow: '→',
      bgWords: ['iOS & Android', 'UI/UX Systems', 'Product Design', 'Micro-Animations'],
    },
    {
      title: 'UI/UX Design',
      arrow: '✦',
      bgWords: ['User Research', 'Wireframing', 'Design Systems', 'Prototypes'],
    },
    {
      title: 'SaaS Platforms',
      arrow: '↗',
      bgWords: ['Full-Stack Cloud', 'API Architecture', 'Dashboards', 'Scalability'],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="pt-28 sm:pt-36 pb-20 md:pb-28 overflow-hidden relative bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Content */}
        <div className="text-center max-w-[840px] mx-auto space-y-5">
          
          {/* Limited seats Badge (1:1 with Screenshot 1) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="select-none pb-1 flex items-center justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4F4F6] border border-black/[0.06] text-xs sm:text-sm font-medium text-[#444444] shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5A623] shadow-[0_0_8px_rgba(245,166,35,0.7)] animate-pulse" />
              <span>Limited seats</span>
            </div>
          </motion.div>

          {/* Large Display Headline with Staggered In-Animation and Subtle Float */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: '"Pangea Afrikan Trial", "Suisse Int\'l", sans-serif',
              fontWeight: 500,
              letterSpacing: '-0.045em',
              lineHeight: '1.05',
            }}
            className="text-4xl sm:text-6xl lg:text-[4.5rem] text-[#242424]"
          >
            <motion.span
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block"
            >
              Architecting iconic brands,
            </motion.span> <br />
            <motion.span
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 5, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block"
            >
              <span className="text-[#8A8A8A]">crafted without compromise.</span>
            </motion.span>
          </motion.h1>

          {/* Subtitle with Delayed In-Animation */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: '"Pangea Afrikan Trial", sans-serif',
              lineHeight: '1.5',
            }}
            className="text-base sm:text-lg text-[#8A8A8A] max-w-[700px] mx-auto font-normal pt-1"
          >
            From websites and apps to packaging and brand systems &mdash; we combine strategy with craft to help you acquire customers, increase trust, and grow revenue.
          </motion.p>

          {/* Dual CTAs with Staggered Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-3 pt-3"
          >
            <button
              onClick={() => navigate('book')}
              style={{
                backgroundColor: '#FF5819',
                boxShadow: '2px 2px 10px rgba(36,36,36,0.1), inset 4px 4px 6px rgba(255,255,255,0.25)',
              }}
              className="group btn-sheen inline-flex items-center justify-center gap-2 w-[168px] h-[48px] rounded-[40px] text-white font-medium text-sm hover:scale-[1.04] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-6px_rgba(255,88,25,0.5)] active:translate-y-0 active:scale-[0.97] transition-all duration-300 cursor-pointer select-none"
            >
              <span>Book a Free Call</span>
              <svg className="transition-transform duration-300 group-hover:translate-x-1.5" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            <a
              href="#work"
              style={{
                border: '1px solid rgba(36, 36, 36, 0.12)',
              }}
              className="group btn-sheen inline-flex items-center justify-center gap-2 w-[130px] h-[46px] rounded-[40px] bg-white text-[#242424] font-medium text-sm hover:bg-[#F8F8F8] hover:border-black/25 hover:scale-[1.04] hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.97] transition-all duration-300 cursor-pointer select-none"
            >
              <span>Our Work</span>
              <svg className="transition-transform duration-300 group-hover:translate-x-1.5" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Giant Showcase Card (Radiant Orange Container with Rotating Circular Words & Foreground Typography) */}
        <div className="mt-14 sm:mt-18 relative">
          <div className="w-full max-w-[1140px] mx-auto rounded-[32px] sm:rounded-[44px] bg-gradient-to-br from-[#FF5819] via-[#FF5010] to-[#E63F00] text-white p-8 sm:p-16 lg:p-20 shadow-2xl relative overflow-hidden min-h-[380px] sm:min-h-[480px] flex flex-col justify-between">
            
            {/* Rotating Circular Words Ring 1 (Top-Right Clockwise) */}
            <div className="absolute -right-20 sm:-right-12 -top-24 sm:-top-20 w-[420px] sm:w-[560px] h-[420px] sm:h-[560px] pointer-events-none select-none opacity-45 mix-blend-screen">
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
                viewBox="0 0 500 500"
                className="w-full h-full"
              >
                <defs>
                  <path
                    id="hero-circle-path-1"
                    d="M 250, 250 m -190, 0 a 190,190 0 1,1 380,0 a 190,190 0 1,1 -380,0"
                  />
                </defs>
                <text
                  className="text-[13px] sm:text-[14px] font-black uppercase tracking-[0.22em] fill-white"
                  style={{ fontFamily: '"Pangea Afrikan Trial", "Suisse Int\'l", sans-serif' }}
                >
                  <textPath href="#hero-circle-path-1" startOffset="0%">
                    ✦ BRANDING ✦ WEBSITES ✦ MOBILE APPS ✦ UI/UX DESIGN ✦ DESIGN SYSTEMS ✦ SAAS PLATFORMS ✦ PACKAGING ✦ DIGITAL CRAFT ✦
                  </textPath>
                </text>
              </motion.svg>
            </div>

            {/* Rotating Half-Circle / Arc Ring 2 (Bottom-Left Counter-Clockwise) */}
            <div className="absolute -left-16 sm:-left-8 -bottom-24 sm:-bottom-20 w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] pointer-events-none select-none opacity-35 mix-blend-screen">
              <motion.svg
                animate={{ rotate: -360 }}
                transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
                viewBox="0 0 400 400"
                className="w-full h-full"
              >
                <defs>
                  <path
                    id="hero-circle-path-2"
                    d="M 200, 200 m -140, 0 a 140,140 0 1,1 280,0 a 140,140 0 1,1 -280,0"
                  />
                </defs>
                <text
                  className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] fill-white"
                  style={{ fontFamily: '"Pangea Afrikan Trial", "Suisse Int\'l", sans-serif' }}
                >
                  <textPath href="#hero-circle-path-2" startOffset="0%">
                    ✦ FRONT-END ENGINEERING ✦ CREATIVE STRATEGY ✦ ART DIRECTION ✦ VISUAL IDENTITY ✦ USER RESEARCH ✦
                  </textPath>
                </text>
              </motion.svg>
            </div>

            {/* Blurred Atmospheric Background Floating Words with AnimatePresence */}
            <div
              aria-hidden="true"
              className="absolute inset-0 select-none pointer-events-none overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                  className="w-full h-full relative"
                >
                  <div className="absolute -top-6 left-12 text-5xl sm:text-8xl font-black text-white/20 blur-[2px] tracking-tight">
                    {slides[activeSlide].bgWords[0]}
                  </div>
                  <div className="absolute top-1/3 right-8 sm:right-16 text-5xl sm:text-8xl font-black text-white/20 blur-[2.5px] tracking-tight">
                    {slides[activeSlide].bgWords[1]}
                  </div>
                  <div className="absolute -bottom-6 left-24 text-4xl sm:text-7xl font-black text-white/20 blur-[2px] tracking-tight">
                    {slides[activeSlide].bgWords[2]}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Top Bar inside Showcase */}
            <div className="relative z-10 flex items-center justify-between text-xs sm:text-sm font-mono text-white/80">
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 animate-pulse">
                CORE CAPABILITY
              </span>
              <span>0{activeSlide + 1} / 0{slides.length}</span>
            </div>

            {/* Main Foreground Huge Typography with Kinetic AnimatePresence Transition */}
            <div className="relative z-10 my-auto py-8 min-h-[140px] sm:min-h-[180px] flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 35, filter: 'blur(8px)', scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                  exit={{ opacity: 0, y: -35, filter: 'blur(8px)', scale: 0.96 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-4 sm:gap-8"
                >
                  <motion.span
                    initial={{ rotate: -25, scale: 0.7 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl sm:text-7xl lg:text-8xl font-light opacity-90 inline-block"
                  >
                    {slides[activeSlide].arrow}
                  </motion.span>
                  <h2
                    style={{
                      fontFamily: '"Pangea Afrikan Trial", sans-serif',
                      letterSpacing: '-0.04em',
                    }}
                    className="text-5xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-white drop-shadow-md"
                  >
                    {slides[activeSlide].title}
                  </h2>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Controls inside Showcase */}
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/15 text-xs sm:text-sm text-white/85">
              <span>PrimeDev Full-Stack Creative & Engineering Architecture</span>
              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      activeSlide === i ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Studio / Company Introduction Text Block with Scroll Reveal Animation */}
        <div className="mt-28 sm:mt-36 max-w-[920px] mx-auto text-center py-6">
          <ScrollWordReveal
            className="text-2xl sm:text-3xl lg:text-[2.25rem] font-medium text-[#1E1E1E]"
            text="PrimeDev is a modern design & engineering studio inspired by “bricks” — strong, reliable building blocks. Combining strategic design systems, clean engineering, and rapid iteration, we build high-impact brands and digital products that perform."
          />
        </div>

      </div>
    </section>
  );
};
