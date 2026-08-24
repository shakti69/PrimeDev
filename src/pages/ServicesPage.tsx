import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { SERVICES_LIST } from '../data/servicesData';
import { Container } from '../components/ui/Container';
import { Icons } from '../components/ui/Icons';
import { Reveal } from '../components/animation/Reveal';

export const ServicesPage: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Web Engineering', 'SaaS Architecture', 'Cloud & Systems', 'Accessible & IoT'];

  const filteredServices =
    selectedCategory === 'All'
      ? SERVICES_LIST
      : SERVICES_LIST.filter((s) => s.category === selectedCategory);

  return (
    <div className="w-full pt-28 sm:pt-36 pb-20 bg-[var(--bg-primary)]">
      <Container>
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Reveal direction="up" delay={50}>
            <span className="brix-eyebrow">
              SERVICES & CAPABILITIES
            </span>
          </Reveal>

          <Reveal direction="up" delay={150}>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-editorial text-[var(--text-primary)] leading-tight">
              Full-Lifecycle Software & Web Architecture.
            </h1>
          </Reveal>

          <Reveal direction="up" delay={250}>
            <p className="text-base sm:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
              From initial system design and responsive UI development to production backend hardening and assistive software integrations.
            </p>
          </Reveal>

          {/* Filter Tabs */}
          <Reveal direction="up" delay={350}>
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={selectedCategory === cat}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer focus:outline-none ${
                    selectedCategory === cat
                      ? 'bg-brand-500 text-white shadow-orange-glow'
                      : 'bg-white dark:bg-zinc-900 text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-black/[0.06] dark:border-white/[0.08]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              onClick={() => navigate('service-detail', service.slug)}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-9 border border-black/[0.06] dark:border-white/[0.08] shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold text-brand-500 uppercase">
                    {service.category}
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {service.overview}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 pt-3 border-t border-black/[0.04] dark:border-white/[0.04]">
                  <span className="text-[11px] font-mono text-[var(--text-subtle)] uppercase">
                    Key Deliverables
                  </span>
                  <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                    {service.deliverables.slice(0, 3).map((deliv, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icons.Check className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {service.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-brand-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Spec Sheet →
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
