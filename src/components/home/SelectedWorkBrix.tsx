import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from '../../context/RouterContext';

export interface ProjectItem {
  id: string;
  client: string;
  title: string;
  tag: string;
  headline: string;
  subtitle?: string;
  imageUrl?: string;
  link?: string;
  badges?: {
    topLeft?: string;
    topRight?: string;
    bottomLeft?: string;
    bottomRight?: string;
  };
  gradientClass: string;
  accentColor?: string;
}

export const SelectedWorkBrix: React.FC = () => {
  const { navigate } = useRouter();

  const projects: ProjectItem[] = [
    {
      id: 'strikz-esports',
      client: 'Strikz Esports',
      title: 'A professional esports platform featuring tournament registration, gaming content, team branding, player information, and management features.',
      tag: 'Esports / Gaming / Web Development',
      headline: 'STRIKZ ESPORTS',
      subtitle: 'Odisha Pride of India',
      imageUrl: '/images/strikz_banner.png',
      gradientClass: 'from-red-950 via-zinc-950 to-black',
      accentColor: 'text-amber-400',
      badges: {
        topLeft: 'PRO ESPORTS ARENA',
        topRight: 'ODISHA PRIDE',
        bottomLeft: 'TEAM ROSTERS & STATS',
        bottomRight: 'LIVE MATCH FEED',
      },
    },
    {
      id: 'primenet',
      client: 'PrimeNet',
      title: 'A modern networking and connectivity project focused on internet infrastructure, network services, performance, and reliable digital connectivity.',
      tag: 'Networking / Internet / Infrastructure',
      headline: 'PRIMENET',
      subtitle: 'Campus Fiber Broadband, Without The Waiting',
      imageUrl: '/images/primenet_banner.png',
      gradientClass: 'from-[#051329] via-[#0A192F] to-black',
      accentColor: 'text-sky-400',
      badges: {
        topLeft: 'CAMPUS FIBER BROADBAND',
        topRight: 'GIGABIT INTERNET',
        bottomLeft: 'MAC AUTO-CONNECTION',
        bottomRight: 'ZERO CAPTIVE PORTAL',
      },
    },
    {
      id: 'pointx',
      client: 'PointX',
      title: 'An online esports management platform built to manage tournaments from start to finish with points tables, live standings, and OBS overlay integration.',
      tag: 'Esports / Tournament OS / Web App',
      headline: 'POINTX',
      subtitle: 'Powering the Complete Esports Experience',
      imageUrl: '/images/pointx_banner.png',
      gradientClass: 'from-[#0d1117] via-[#161b22] to-black',
      accentColor: 'text-amber-400',
      badges: {
        topLeft: 'TOURNAMENT MANAGEMENT',
        topRight: 'LIVE STANDINGS & OBS',
        bottomLeft: 'LIVE FREE FIRE SCORING',
        bottomRight: 'AUTOMATED BRACKETS',
      },
    },
    {
      id: 'darkedge-ai',
      client: 'DarkEdge AI',
      title: 'An offline AI assistant Android application designed to run AI models locally on-device, providing private and intelligent assistance without internet connectivity.',
      tag: 'Android App / Offline AI / Productivity',
      headline: 'DARKEDGE AI',
      subtitle: 'Private Intelligence. Powered Locally.',
      imageUrl: '/images/darkedge_banner.png',
      gradientClass: 'from-[#080d13] via-[#0f172a] to-black',
      accentColor: 'text-emerald-400',
      badges: {
        topLeft: 'ANDROID APPLICATION',
        topRight: '100% PRIVATE & OFFLINE',
        bottomLeft: 'ON-DEVICE LLM ENGINE',
        bottomRight: 'ZERO CLOUD LATENCY',
      },
    },
    {
      id: 'primedev',
      client: 'PrimeDev',
      title: 'A professional technology and web development brand focused on creating modern websites, applications, digital experiences, and custom software solutions.',
      tag: 'Web Development / Digital Solutions',
      headline: 'PRIMEDEV',
      subtitle: 'Build. Innovate. Deliver.',
      imageUrl: '/images/primedev_banner.png',
      gradientClass: 'from-[#FF5819] via-[#E04810] to-[#992B05]',
      accentColor: 'text-white/90',
      badges: {
        topLeft: 'DIGITAL CRAFT & ENGINEERING',
        topRight: 'FULL-STACK SUITE',
        bottomLeft: 'BESPOKE SOFTWARE SOLUTIONS',
        bottomRight: 'GLOBAL DELIVERY',
      },
    },
    {
      id: 'premium-portfolio',
      client: 'Premium Portfolio',
      title: 'A premium personal portfolio website showcasing projects, skills, services, experience, and achievements through a modern, polished interface.',
      tag: 'Portfolio / Web Design / UI/UX',
      headline: 'PREMIUM PORTFOLIO',
      subtitle: 'Developer + WebDevelopment',
      imageUrl: '/images/portfolio_banner.png',
      gradientClass: 'from-[#0a1113] via-[#0d1f22] to-black',
      accentColor: 'text-teal-300',
      badges: {
        topLeft: 'SHAKTI PRASAD HOTA',
        topRight: 'EDITORIAL CRAFT',
        bottomLeft: 'INTERACTIVE UI/UX',
        bottomRight: 'HIGH PERFORMANCE',
      },
    },
    {
      id: 'openwrt-router-os',
      client: 'OpenWrt Router OS Design',
      title: 'A customized router operating-system project based on OpenWrt, focused on router management, network configuration, and performance optimization.',
      tag: 'Networking / Router OS / Linux',
      headline: 'OPENWRT OS',
      subtitle: 'Custom Networking, Built Your Way',
      imageUrl: '/images/openwrt_router_banner.png',
      gradientClass: 'from-[#04201b] via-[#0b332b] to-black',
      accentColor: 'text-emerald-300',
      badges: {
        topLeft: 'PRABINA • ROUTER OS',
        topRight: 'WI-FI 6 GIGABIT',
        bottomLeft: 'ADGUARD • TOR • VPN',
        bottomRight: 'WAN / LAN TELEMETRY',
      },
    },
    {
      id: 'hostel-management',
      client: 'Mahima Chatrabas',
      title: 'A signature hostel meal system for attendance, food preference, daily planning, room management, and automated student billing at Dhenkanal College.',
      tag: 'Full-Stack SaaS / Campus Portal',
      headline: 'MAHIMA CHATRABAS',
      subtitle: 'Hostel Meal Management Portal',
      imageUrl: '/images/hostel_banner.png',
      gradientClass: 'from-[#0c1813] via-[#112d21] to-black',
      accentColor: 'text-emerald-400',
      badges: {
        topLeft: 'DHENKANAL COLLEGE',
        topRight: 'MEAL MANAGEMENT PORTAL',
        bottomLeft: 'STUDENT & ADMIN PORTAL',
        bottomRight: 'AUTOMATED BILLING',
      },
    },
  ];

  return (
    <section id="work" className="py-20 sm:py-32 bg-white relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2 mb-14 sm:mb-20 text-left"
        >
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-bold tracking-widest text-[#FF5819] uppercase font-mono">
              SELECTED WORK
            </span>
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#F4F4F6] text-[#666666] border border-black/5">
              Click any project to view full case study & details
            </span>
          </div>
          <h2
            style={{
              fontFamily: '"Pangea Afrikan Trial", "Suisse Int\'l", sans-serif',
              fontWeight: 500,
              letterSpacing: '-0.04em',
              lineHeight: '1.08',
            }}
            className="text-4xl sm:text-6xl text-[#1E1E1E]"
          >
            Proof that our strategy <br />
            <span className="text-[#999999] font-normal">works and converts.</span>
          </h2>
        </motion.div>

        {/* Responsive Grid with Staggered Entrance and Smooth Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              onClick={() => navigate('project-detail', project.id)}
              className="bg-[#F5F5F5] rounded-[32px] p-6 sm:p-8 flex flex-col justify-between gap-6 transition-all duration-300 hover:shadow-2xl cursor-pointer group relative border border-black/[0.03]"
            >
              {/* Card Header Info */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#242424] group-hover:text-[#FF5819] transition-colors duration-200 flex items-center gap-1.5">
                    <span>{project.client}</span>
                    <span className="text-[11px] text-[#FF5819] font-semibold flex items-center gap-0.5 opacity-80 group-hover:opacity-100 transition-opacity">
                      <span>• View Case Study</span>
                      <span>→</span>
                    </span>
                  </span>
                  <span className="text-[11px] font-mono text-[#888888] px-2.5 py-0.5 rounded-full bg-white border border-black/[0.04] shadow-xs group-hover:border-[#FF5819]/30 transition-colors">
                    {project.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed line-clamp-2">
                  {project.title}
                </p>
              </div>

              {/* Project Canvas Banner (Image or Stylized Card) */}
              <div className={`w-full h-56 sm:h-72 rounded-2xl bg-gradient-to-br ${project.gradientClass} p-5 sm:p-6 flex flex-col justify-between border border-white/10 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 shadow-inner`}>
                
                {/* Background image if provided */}
                {project.imageUrl ? (
                  <>
                    <img
                      src={project.imageUrl}
                      alt={project.client}
                      className="absolute inset-0 w-full h-full object-cover object-top sm:object-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/50 pointer-events-none" />
                  </>
                ) : null}

                {/* Top badges */}
                <div className="relative z-10 flex justify-between items-center text-[10px] sm:text-xs font-mono tracking-wider">
                  <span className={`px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-md border border-white/10 ${project.accentColor || 'text-white/80'}`}>
                    {project.badges?.topLeft || project.client}
                  </span>
                  {project.badges?.topRight && (
                    <span className="px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-md border border-white/10 text-white/70">
                      {project.badges?.topRight}
                    </span>
                  )}
                </div>

                {/* Center headline / branding (if no image or clean overlay) */}
                {!project.imageUrl && (
                  <div className="relative z-10 text-center my-auto px-2">
                    <span
                      style={{
                        fontFamily: '"Pangea Afrikan Trial", "Suisse Int\'l", sans-serif',
                        letterSpacing: '-0.03em',
                      }}
                      className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white drop-shadow-md tracking-tight leading-tight"
                    >
                      {project.headline}
                    </span>
                    {project.subtitle && (
                      <span className="block text-xs sm:text-sm text-white/80 mt-1.5 font-mono tracking-wide">
                        {project.subtitle}
                      </span>
                    )}
                  </div>
                )}

                {/* Bottom badges */}
                <div className="relative z-10 flex justify-between items-center text-[9px] sm:text-[11px] text-white/70 font-mono tracking-wider">
                  {project.badges?.bottomLeft && (
                    <span className="px-2 py-0.5 rounded-md bg-black/50 backdrop-blur-md border border-white/10">
                      {project.badges?.bottomLeft}
                    </span>
                  )}
                  {project.badges?.bottomRight && (
                    <span className={`px-2 py-0.5 rounded-md bg-black/50 backdrop-blur-md border border-white/10 ${project.accentColor || 'text-white/80'}`}>
                      {project.badges?.bottomRight}
                    </span>
                  )}
                </div>

                {/* Glow accent effect */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
