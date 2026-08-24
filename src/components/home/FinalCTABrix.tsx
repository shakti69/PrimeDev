import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from '../../context/RouterContext';

export const FinalCTABrix: React.FC = () => {
  const { navigate } = useRouter();
  const socials = [
    {
      name: 'INSTAGRAM',
      href: 'https://instagram.com/primedev',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
    },
    {
      name: 'LINKEDIN',
      href: 'https://linkedin.com/company/primedev',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
    {
      name: 'TWITTER / X',
      href: 'https://twitter.com/primedev',
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: 'GITHUB',
      href: 'https://github.com/shakti69',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-[#110F0F] text-white pt-24 sm:pt-36 pb-12 rounded-t-[44px] sm:rounded-t-[56px] overflow-hidden">
      
      {/* Dynamic Drifting Atmospheric Aurora Light & Geometric Mesh */}
      <div
        aria-hidden="true"
        className="absolute inset-0 select-none pointer-events-none overflow-hidden z-0"
      >
        {/* Primary Ambient Drifting Spotlight */}
        <div className="absolute top-[-10%] left-1/2 w-[950px] sm:w-[1400px] h-[800px] bg-gradient-to-b from-[#FF5018]/55 via-[#D92B00]/35 to-transparent blur-[140px] rounded-full pointer-events-none animate-aura-drift" />
        
        {/* Secondary Warm Orange Flare */}
        <div className="absolute top-[8%] left-1/2 w-[700px] h-[500px] bg-[#FF451A]/45 blur-[100px] rounded-full pointer-events-none animate-aura-drift-secondary" />
        
        {/* Geometric Low-Poly Architectural Mesh */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20 mix-blend-overlay object-cover"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern id="cta-mesh-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <polygon points="0,0 80,0 40,40" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.15" />
              <polygon points="0,0 40,40 0,80" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.15" />
              <polygon points="80,0 80,80 40,40" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.15" />
              <polygon points="0,80 80,80 40,40" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-mesh-pattern)" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered CTA Content with Staggered Kinetic Rise */}
        <div className="text-center max-w-3xl mx-auto space-y-8 pt-4 pb-16 sm:pb-20">
          
          {/* Animated Display Headline with Mask Slide */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: '"Pangea Afrikan Trial", "Suisse Int\'l", sans-serif',
              fontWeight: 500,
              letterSpacing: '-0.035em',
              lineHeight: '1.12',
            }}
            className="text-4xl sm:text-6xl lg:text-[4.25rem] text-white drop-shadow-lg"
          >
            Your vision deserves the <br />
            <span className="text-white/95">right design partner.</span>
          </motion.h2>

          {/* Interactive Magnetic CTA Button with Radiant Glow */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pt-2">
              <button
                onClick={() => navigate('book')}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.09)',
                  border: '1px solid rgba(255, 255, 255, 0.85)',
                  boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.45), 0 10px 30px -4px rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                }}
                className="btn-sheen inline-flex items-center justify-center gap-2.5 px-10 h-[54px] rounded-[40px] text-white font-medium text-sm sm:text-base hover:bg-white/20 hover:scale-[1.06] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(255,88,25,0.45)] hover:border-white active:translate-y-0 active:scale-[0.97] transition-all duration-300 cursor-pointer select-none group/btn"
              >
                <span>Contact us</span>
                <svg className="transition-transform duration-300 group-hover/btn:translate-x-1.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Floating Social Media Placement Bar with Staggered Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            {socials.map((s, idx) => (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 + idx * 0.06 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] hover:bg-white/20 border border-white/15 hover:border-[#FF5819]/50 text-xs font-mono text-white/90 hover:text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 active:scale-95 shadow-sm"
              >
                <span className="text-[#FF5819] transition-transform duration-200 group-hover:scale-110">{s.icon}</span>
                <span>{s.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* 100% Fully Visible Scalable PRIMEDEV SVG Watermark with Radiant Shimmer & Floating Kinetic Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full flex flex-col items-center justify-center overflow-hidden pb-4 sm:pb-6 select-none pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full flex items-center justify-center"
          >
            <svg
              viewBox="0 0 1200 230"
              className="w-full max-w-[1180px] h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="primedev_watermark_grad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.55" />
                  <stop offset="50%" stopColor="white" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="white" stopOpacity="0.04" />
                </linearGradient>

                <linearGradient id="primedev_shimmer_glow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2">
                    <animate attributeName="stop-opacity" values="0.2;0.65;0.2" dur="4s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="50%" stopColor="#FF5819" stopOpacity="0.6">
                    <animate attributeName="offset" values="0.15;0.85;0.15" dur="6s" repeatCount="indefinite" />
                    <animate attributeName="stop-opacity" values="0.3;0.75;0.3" dur="4s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2">
                    <animate attributeName="stop-opacity" values="0.2;0.65;0.2" dur="4s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>
              </defs>

              {/* Base Gradient Layer */}
              <text
                x="50%"
                y="78%"
                textAnchor="middle"
                fill="url(#primedev_watermark_grad)"
                style={{
                  fontFamily: '"Pangea Afrikan Trial", "Suisse Int\'l", sans-serif',
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  fontSize: '195px',
                  textTransform: 'uppercase',
                }}
              >
                PRIMEDEV
              </text>

              {/* Radiant Dynamic Shimmer Overlay */}
              <text
                x="50%"
                y="78%"
                textAnchor="middle"
                fill="url(#primedev_shimmer_glow)"
                style={{
                  fontFamily: '"Pangea Afrikan Trial", "Suisse Int\'l", sans-serif',
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  fontSize: '195px',
                  textTransform: 'uppercase',
                }}
              >
                PRIMEDEV
              </text>
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-right w-full max-w-[1120px] pr-4 sm:pr-8 text-white/40 text-xs sm:text-sm font-mono tracking-widest uppercase -mt-4 sm:-mt-6"
          >
            STUDIO PRIMEDEV
          </motion.div>
        </motion.div>

        {/* Bottom Bar: Copyright & Capabilities */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-mono">
          <div className="flex items-center gap-4">
            <span>FULL-STACK WEB & DESIGN ARCHITECTURE</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="hidden sm:inline">GLOBAL DELIVERY</span>
          </div>

          <div>
            © 2026 PrimeDev. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
