import React from 'react';
import { motion } from 'framer-motion';

export const SelectedWorkBrix: React.FC = () => {
  const projects = [
    {
      id: 'aquon',
      client: 'AQUON',
      title: 'Hydration brand build by Yuzvendra chahal and bhant sharma',
      tag: 'Brand & Packaging',
      bgClass: 'bg-[#111111] text-white',
      preview: (
        <div className="w-full h-56 sm:h-72 rounded-2xl bg-gradient-to-br from-zinc-900 to-black p-6 flex flex-col justify-between border border-white/10 relative overflow-hidden group-hover:scale-[1.03] transition-transform duration-500">
          <div className="flex justify-between items-center text-xs font-mono text-amber-400">
            <span>AQUON HYDRO</span>
            <span>CHAMPIONS EDITION</span>
          </div>
          <div className="text-center my-auto">
            <span className="text-2xl sm:text-4xl font-extrabold tracking-tight uppercase text-white">
              Built by champions.
            </span>
            <span className="block text-xs text-zinc-400 mt-1 font-mono">Premium Electrolyte Formulation</span>
          </div>
          <div className="flex justify-between items-center text-[11px] text-zinc-400 font-mono">
            <span>YUZVENDRA CHAHAL</span>
            <span className="text-amber-400">LIMITED BATCH</span>
          </div>
        </div>
      ),
    },
    {
      id: 'off-road',
      client: 'OFF ROAD',
      title: 'Luxury watch brand in India',
      tag: 'UI/UX & Branding',
      bgClass: 'bg-[#991B1B] text-white',
      preview: (
        <div className="w-full h-56 sm:h-72 rounded-2xl bg-gradient-to-br from-red-700 to-red-950 p-6 flex flex-col justify-between border border-white/10 relative overflow-hidden group-hover:scale-[1.03] transition-transform duration-500">
          <div className="flex justify-between text-xs font-mono text-red-200">
            <span>SWISS CHRONO</span>
            <span>OFF ROAD</span>
          </div>
          <div className="text-center my-auto">
            <span className="text-2xl sm:text-4xl font-black italic tracking-tighter uppercase text-white drop-shadow">
              TIME FOR THE JOURNEY
            </span>
          </div>
          <div className="flex justify-between text-[11px] text-red-200 font-mono">
            <span>AUTOMATIC MOVEMENT</span>
            <span>300M WATERPROOF</span>
          </div>
        </div>
      ),
    },
    {
      id: 'swiss-time-house',
      client: 'SWISS TIME HOUSE',
      title: "Kerala's oldest and largest authorized watch retailer, founded in 1946.",
      tag: 'E-commerce Platform',
      bgClass: 'bg-[#18181B] text-white',
      preview: (
        <div className="w-full h-56 sm:h-72 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 p-6 flex flex-col justify-between border border-white/10 relative overflow-hidden group-hover:scale-[1.03] transition-transform duration-500">
          <div className="flex justify-between text-xs font-mono text-zinc-400">
            <span>SINCE 1946</span>
            <span>AUTHORIZED DEALER</span>
          </div>
          <div className="text-center my-auto">
            <span className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
              SWISS TIME HOUSE
            </span>
            <span className="block text-xs text-zinc-400 mt-1 font-mono">Luxury Horology Retail Experience</span>
          </div>
          <div className="flex justify-between text-[11px] text-zinc-400 font-mono">
            <span>OMEGA • RADO • TISSOT</span>
            <span className="text-emerald-400">100% AUTHENTIC</span>
          </div>
        </div>
      ),
    },
    {
      id: 'rock-revival',
      client: 'ROCK REVIVAL',
      title: 'Premium denim & lifestyle brand born in Los Angeles, California.',
      tag: 'Design System',
      bgClass: 'bg-[#09090B] text-white',
      preview: (
        <div className="w-full h-56 sm:h-72 rounded-2xl bg-gradient-to-br from-zinc-900 to-black p-6 flex flex-col justify-between border border-white/10 relative overflow-hidden group-hover:scale-[1.03] transition-transform duration-500">
          <div className="flex justify-between text-xs font-mono text-zinc-500">
            <span>EST. LOS ANGELES</span>
            <span>PREMIUM DENIM</span>
          </div>
          <div className="text-center my-auto">
            <span className="text-3xl sm:text-4xl font-serif tracking-wider uppercase text-white">
              ROCK REVIVAL
            </span>
            <span className="block text-xs text-amber-500/90 mt-1 font-mono">SIGNATURE FLEUR-DE-LIS</span>
          </div>
          <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
            <span>FALL / WINTER &apos;26</span>
            <span>GLOBAL FLAGSHIP</span>
          </div>
        </div>
      ),
    },
    {
      id: 'primedev-studio',
      client: 'PRIMEDEV STUDIO',
      title: 'Building digital products that combine strategy with craft.',
      tag: 'Studio Identity',
      bgClass: 'bg-[#FF5819] text-white',
      preview: (
        <div className="w-full h-56 sm:h-72 rounded-2xl bg-gradient-to-br from-[#FF5819] via-[#FF4500] to-[#CC3700] p-6 flex flex-col justify-between border border-white/20 relative overflow-hidden group-hover:scale-[1.03] transition-transform duration-500">
          <div className="flex justify-between text-xs font-mono text-white/80">
            <span>STUDIO BRAND</span>
            <span>DIGITAL CRAFT</span>
          </div>
          <div className="text-center my-auto">
            <span className="text-4xl sm:text-6xl font-black tracking-tighter uppercase text-white">
              PRIMEDEV
            </span>
            <span className="block text-xs text-white/80 mt-1 font-mono">BRICK BY BRICK</span>
          </div>
          <div className="flex justify-between text-[11px] text-white/80 font-mono">
            <span>STRATEGY + CRAFT</span>
            <span>GLOBAL DELIVERY</span>
          </div>
        </div>
      ),
    },
    {
      id: 'shivalik',
      client: 'SHIVALIK',
      title: 'Modern real estate development and urban infrastructure firm.',
      tag: 'Brand & Web Architecture',
      bgClass: 'bg-[#1C1917] text-white',
      preview: (
        <div className="w-full h-56 sm:h-72 rounded-2xl bg-gradient-to-br from-stone-900 to-black p-6 flex flex-col justify-between border border-white/10 relative overflow-hidden group-hover:scale-[1.03] transition-transform duration-500">
          <div className="flex justify-between text-xs font-mono text-stone-400">
            <span>ARCHITECTURE</span>
            <span>URBAN SPACES</span>
          </div>
          <div className="text-center my-auto">
            <span className="text-3xl sm:text-4xl font-light tracking-widest uppercase text-white">
              SHIVALIK
            </span>
            <span className="block text-xs text-stone-400 mt-1 font-mono">Skyline Residences & Commercial</span>
          </div>
          <div className="flex justify-between text-[11px] text-stone-400 font-mono">
            <span>SUSTAINABLE BUILDINGS</span>
            <span className="text-amber-400">LEED CERTIFIED</span>
          </div>
        </div>
      ),
    },
    {
      id: 'jawai',
      client: 'JAWAI SAFARI',
      title: 'Wild luxury Leopard sanctuary & eco-tourism camp in Rajasthan.',
      tag: 'Digital Experience',
      bgClass: 'bg-[#451A03] text-white',
      preview: (
        <div className="w-full h-56 sm:h-72 rounded-2xl bg-gradient-to-br from-amber-950 to-stone-950 p-6 flex flex-col justify-between border border-white/10 relative overflow-hidden group-hover:scale-[1.03] transition-transform duration-500">
          <div className="flex justify-between text-xs font-mono text-amber-300">
            <span>WILD LUXURY</span>
            <span>RAJASTHAN</span>
          </div>
          <div className="text-center my-auto">
            <span className="text-2xl sm:text-4xl font-serif tracking-wide text-amber-100">
              JAWAI LEOPARD LODGE
            </span>
            <span className="block text-xs text-amber-300/80 mt-1 font-mono">Untamed Granite Wilderness</span>
          </div>
          <div className="flex justify-between text-[11px] text-amber-300 font-mono">
            <span>EXPEDITIONS</span>
            <span>FIVE STAR RETREAT</span>
          </div>
        </div>
      ),
    },
    {
      id: 'feel-good-pizza',
      client: 'FEEL GOOD PIZZA',
      title: 'Artisanal sourdough pizzeria and lifestyle casual dining brand.',
      tag: 'Brand & Packaging',
      bgClass: 'bg-[#B91C1C] text-white',
      preview: (
        <div className="w-full h-56 sm:h-72 rounded-2xl bg-gradient-to-br from-red-600 to-red-900 p-6 flex flex-col justify-between border border-white/10 relative overflow-hidden group-hover:scale-[1.03] transition-transform duration-500">
          <div className="flex justify-between text-xs font-mono text-white/80">
            <span>SOURDOUGH ARTISAN</span>
            <span>WOODFIRED</span>
          </div>
          <div className="text-center my-auto">
            <span className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              FEEL GOOD PIZZA
            </span>
            <span className="block text-xs text-red-200 mt-1 font-mono">100% Organic San Marzano</span>
          </div>
          <div className="flex justify-between text-[11px] text-white/80 font-mono">
            <span>NAPOLI STYLE</span>
            <span>SLOW FERMENTED</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="work" className="py-20 sm:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2 mb-14 sm:mb-20 text-left"
        >
          <span className="text-[12px] font-bold tracking-widest text-[#FF5819] uppercase font-mono">
            SELECTED WORK
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
            Proof that our strategy <br />
            <span className="text-[#999999] font-normal">works and converts.</span>
          </h2>
        </motion.div>

        {/* 2-Column Responsive Card Grid with Staggered Entrance and Smooth Tilt Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="bg-[#F5F5F5] rounded-[32px] p-6 sm:p-8 flex flex-col justify-between gap-6 transition-shadow duration-300 hover:shadow-xl cursor-pointer group"
            >
              {/* Card Header Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#242424] group-hover:text-[#FF5819] transition-colors duration-200">
                    {project.client}
                  </span>
                  <span className="text-[11px] font-mono text-[#888888] px-2.5 py-0.5 rounded-full bg-white border border-black/[0.04] shadow-xs group-hover:border-[#FF5819]/30 transition-colors">
                    {project.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {project.title}
                </p>
              </div>

              {/* Mockup Canvas */}
              {project.preview}
            </motion.div>
          ))}
        </div>

        {/* More Works Wide Card with Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
          className="mt-8 bg-[#F5F5F5] rounded-[32px] p-8 sm:p-12 transition-shadow duration-300 hover:shadow-xl group cursor-pointer"
        >
          <div className="max-w-2xl space-y-3 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#242424] group-hover:text-[#FF5819] transition-colors duration-200">
              MORE WORKS
            </span>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
              Showcasing more of our crafted design stories across fintech, retail, mobile applications, and hardware IoT interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="h-56 sm:h-72 rounded-2xl bg-gradient-to-br from-amber-700 to-amber-950 p-6 flex flex-col justify-between text-white border border-white/10 group-hover:scale-[1.02] transition-transform duration-500">
              <span className="text-xs font-mono text-amber-200">SN JEWELLERS</span>
              <div className="text-center my-auto">
                <span className="text-2xl sm:text-3xl font-serif italic text-amber-100">
                  Where Luxury meets Infinite Possibilities
                </span>
              </div>
              <span className="text-[11px] font-mono text-amber-200">ESTD. 1998 • GOLD & DIAMONDS</span>
            </div>

            <div className="h-56 sm:h-72 rounded-2xl bg-gradient-to-br from-emerald-800 to-teal-950 p-6 flex flex-col justify-between text-white border border-white/10 group-hover:scale-[1.02] transition-transform duration-500">
              <span className="text-xs font-mono text-emerald-200">DOOBTI PRODUCTIVITY</span>
              <div className="text-center my-auto">
                <span className="text-2xl sm:text-3xl font-sans font-bold text-white">
                  Modern Time & Habit Tracking
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-200">WEB & MOBILE APP SUITE</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
