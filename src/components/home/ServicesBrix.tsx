import React from 'react';
import { motion } from 'framer-motion';

export const ServicesBrix: React.FC = () => {
  const services = [
    {
      title: 'WEBSITE DESIGN',
      desc: 'Clean websites for SaaS, dashboards, and digital products',
      icon: (
        <svg
          className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5"
          width="28"
          height="24"
          viewBox="0 0 28 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Rounded Browser Frame (Exact Match to Screenshot) */}
          <rect
            x="1"
            y="1"
            width="26"
            height="21"
            rx="4"
            stroke="#1E1E1E"
            strokeWidth="1.8"
          />
          {/* 3 Top-Left Dots / Dashes */}
          <line x1="4.5" y1="5.5" x2="6.5" y2="5.5" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="8.5" y1="5.5" x2="10.5" y2="5.5" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="12.5" y1="5.5" x2="14.5" y2="5.5" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" />
          {/* Orange Accent Underline at Bottom */}
          <line
            x1="5"
            y1="16.5"
            x2="23"
            y2="16.5"
            stroke="#FF5819"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: 'MOBILE APPS',
      desc: 'Seamless, intuitive apps for iOS, Android, and cross-platform.',
      icon: (
        <svg
          className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="5" y="2" width="14" height="20" rx="3.5" stroke="#1E1E1E" strokeWidth="1.8" />
          <circle cx="12" cy="18" r="1" fill="#FF5819" stroke="#FF5819" />
          <line x1="10" y1="4.5" x2="14" y2="4.5" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'BRANDING & LOGO',
      desc: 'Strong, memorable brand identities and logos that build trust',
      icon: (
        <svg
          className="transition-transform duration-300 group-hover:scale-110"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 19 C 7 14, 11 9, 17 6" stroke="#1E1E1E" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="4" cy="19" r="2.5" stroke="#1E1E1E" strokeWidth="1.5" fill="white" />
          <polygon points="17,3 22,8 18,12 13,7" fill="#FF5819" className="animate-icon-bezier" />
        </svg>
      ),
    },
    {
      title: 'PACKAGING DESIGN',
      desc: 'Creative packaging that stands out and tells your story and communicates.',
      icon: (
        <svg
          className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="7" width="18" height="14" rx="2.5" stroke="#1E1E1E" strokeWidth="1.8" />
          <path d="M7 7 V5 a2 2 0 0 1 2-2 h6 a2 2 0 0 1 2 2 v2" stroke="#1E1E1E" strokeWidth="1.8" />
          <line x1="9" y1="12" x2="15" y2="12" stroke="#FF5819" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'NO-CODE DEVELOPMENT',
      desc: 'Fast, scalable no-code websites — flexible and easy to manage.',
      icon: (
        <svg
          className="transition-transform duration-300 group-hover:scale-110"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 4 h16 v16 h-16 Z" stroke="#1E1E1E" strokeWidth="1.6" strokeDasharray="3.5 3.5" />
          <polygon points="11,10 18,17 14,18 16,22 14,23 12,19 9,21" fill="#FF5819" className="animate-icon-pencil" />
        </svg>
      ),
    },
    {
      title: 'RETAINER PLANS',
      desc: 'Priority design support with unlimited requests and consistent quality.',
      icon: (
        <svg
          className="transition-transform duration-300 group-hover:scale-115 group-hover:-translate-y-1 group-hover:translate-x-1"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" stroke="#1E1E1E" strokeWidth="1.8" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" stroke="#FF5819" strokeWidth="1.8" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" stroke="#1E1E1E" strokeWidth="1.8" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke="#1E1E1E" strokeWidth="1.8" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-32 bg-[#F8F8F8]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-3 mb-14 sm:mb-20"
        >
          <span className="text-[12px] font-bold tracking-widest text-[#FF5819] uppercase font-mono">
            OUR SERVICES
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
            All the things you need <br />
            <span className="text-[#999999] font-normal">under one roof</span>
          </h2>
        </motion.div>

        {/* 6 Cards Grid with Staggered Scroll Rise and Elevation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-[28px] sm:rounded-[32px] p-8 sm:p-10 flex flex-col justify-start gap-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-black/[0.03] transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] cursor-default"
            >
              <div className="w-8 h-8 flex items-center justify-start">
                {service.icon}
              </div>

              <div className="space-y-2">
                <h3
                  style={{
                    fontFamily: '"Pangea Afrikan Trial", sans-serif',
                    letterSpacing: '-0.01em',
                  }}
                  className="text-base sm:text-lg font-bold tracking-wider uppercase text-[#1E1E1E] group-hover:text-[#FF5819] transition-colors duration-200"
                >
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#676F83] leading-relaxed font-normal">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Promotional Card with Scroll Entrance, Animated Loop Arrow and Bobbing Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 bg-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-14 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-black/[0.03] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden group"
        >
          {/* Left Message */}
          <div className="lg:col-span-5 space-y-1 text-left">
            <h3
              style={{
                fontFamily: '"Pangea Afrikan Trial", sans-serif',
                letterSpacing: '-0.02em',
                lineHeight: '1.25',
              }}
              className="text-2xl sm:text-3xl lg:text-[2.25rem] text-[#A9A9A9] font-medium"
            >
              More capabilities on the <br />
              way, <span className="text-[#1E1E1E] font-bold">built for scale</span> 🚀
            </h3>
          </div>

          {/* Center Orange Hand-Drawn Loop Arrow (Clean Stroke Vector with Float Animation) */}
          <div className="lg:col-span-3 flex items-center justify-center">
            <svg
              className="w-28 sm:w-32 h-auto text-[#FF5819] animate-icon-float hover:scale-110 transition-transform duration-300"
              viewBox="0 0 120 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Smooth Loop Path */}
              <path
                d="M 22 52 C 42 46, 68 42, 78 56 C 88 72, 62 88, 44 76 C 26 64, 28 36, 56 18 C 72 8, 92 12, 102 16"
                stroke="#FF5819"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Arrow Head */}
              <path
                d="M 90 9 L 104 16 L 95 28"
                stroke="#FF5819"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Right Floating Dashed Pill Badges (Interactive Bobbing & Hover Scale) */}
          <div className="lg:col-span-4 flex flex-wrap items-center justify-center lg:justify-end gap-2.5 relative">
            <span className="px-3.5 py-1.5 rounded-full border border-dashed border-[#CCCCCC] hover:border-[#FF5819] hover:text-[#FF5819] hover:scale-110 text-[12px] text-[#444444] bg-white shadow-sm rotate-[-5deg] transition-all duration-200 cursor-default animate-icon-float">
              Social Media Management
            </span>
            <span className="px-3.5 py-1.5 rounded-full border border-dashed border-[#CCCCCC] hover:border-[#FF5819] hover:text-[#FF5819] hover:scale-110 text-[12px] text-[#444444] bg-white shadow-sm rotate-[14deg] transition-all duration-200 cursor-default" style={{ animation: 'iconFloat 3.5s ease-in-out infinite 0.5s' }}>
              Video ads
            </span>
            <span className="px-3.5 py-1.5 rounded-full border border-dashed border-[#CCCCCC] hover:border-[#FF5819] hover:text-[#FF5819] hover:scale-110 text-[12px] text-[#444444] bg-white shadow-sm rotate-[-12deg] transition-all duration-200 cursor-default" style={{ animation: 'iconFloat 3.2s ease-in-out infinite 1s' }}>
              Digital Advertising
            </span>
            <span className="px-3 py-1.5 rounded-full border border-dashed border-[#CCCCCC] hover:border-[#FF5819] hover:text-[#FF5819] hover:scale-110 text-[12px] text-[#444444] bg-white shadow-sm transition-all duration-200 cursor-default">
              SEO
            </span>
            <span className="px-3 py-1.5 rounded-full border border-dashed border-[#CCCCCC] hover:border-[#FF5819] hover:text-[#FF5819] hover:scale-110 text-[12px] text-[#444444] bg-white shadow-sm rotate-[18deg] transition-all duration-200 cursor-default" style={{ animation: 'iconFloat 2.8s ease-in-out infinite 0.2s' }}>
              + More
            </span>
            <span className="px-3.5 py-1.5 rounded-full border border-dashed border-[#CCCCCC] hover:border-[#FF5819] hover:text-[#FF5819] hover:scale-110 text-[12px] text-[#444444] bg-white shadow-sm rotate-[3deg] transition-all duration-200 cursor-default" style={{ animation: 'iconFloat 3.6s ease-in-out infinite 0.8s' }}>
              Digital Marketing
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

