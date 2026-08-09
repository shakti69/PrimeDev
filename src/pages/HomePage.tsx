import React from 'react';
import { useRouter } from '../context/RouterContext';
import { Container, Section } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, SpotlightCard } from '../components/ui/Card';
import { Icons } from '../components/ui/Icons';
import { Reveal } from '../components/animation/Reveal';
import { TextReveal } from '../components/animation/TextReveal';
import { Magnetic } from '../components/animation/Magnetic';
import { HeroTerminal } from '../components/interactive/HeroTerminal';
import { ArchitectureExplorer } from '../components/interactive/ArchitectureExplorer';
import { SERVICES_LIST } from '../data/servicesData';
import { PROJECTS_LIST } from '../data/projectsData';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="w-full">
      {/* =========================================================================
          1. HERO SECTION (HIGH IMPACT COMPOSITION)
         ========================================================================= */}
      <Section withGrid className="pt-12 pb-24 border-b border-white/[0.08] relative overflow-hidden">
        {/* Subtle multi-layer ambient glows */}
        <div className="ambient-glow top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-brand-500/12" />
        <div className="ambient-glow top-1/2 right-10 w-[400px] h-[300px] bg-cyan-500/8" />

        <Container>
          <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
            {/* System Status Pill with Magnetic hover */}
            <Reveal direction="up" delay={50}>
              <Magnetic strength={0.15}>
                <div className="inline-flex items-center gap-2 cursor-pointer">
                  <Badge variant="accent" size="md" dot pulse>
                    PrimeDev Core — 2026 Architecture
                  </Badge>
                  <Badge variant="outline" size="md" className="hidden sm:inline-flex font-mono">
                    Strict Full-Stack Engineering
                  </Badge>
                </div>
              </Magnetic>
            </Reveal>

            {/* Kinetic Text Reveal Editorial Headline */}
            <div className="max-w-4xl mx-auto">
              <TextReveal
                text="Architecting Next-Gen Full-Stack Systems & Scalable Digital Products."
                as="h1"
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-editorial text-obsidian-100 leading-[1.08] justify-center"
                highlightWords={['Full-Stack', 'Systems', 'Digital', 'Products.']}
                delay={100}
              />
            </div>

            {/* Sub-Headline */}
            <Reveal direction="up" delay={250}>
              <p className="text-base sm:text-xl text-obsidian-300 max-w-2xl mx-auto leading-relaxed">
                We engineer high-performance web platforms, multi-tenant SaaS architectures, assistive software tools, and secure cloud infrastructure.
              </p>
            </Reveal>

            {/* Dual CTA Actions with Magnetic Pull */}
            <Reveal direction="up" delay={350}>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  magnetic
                  rightIcon={<Icons.ArrowRight className="w-4 h-4" />}
                  onClick={() => navigate('work')}
                >
                  Explore Selected Work
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  magnetic
                  leftIcon={<Icons.Terminal className="w-4 h-4" />}
                  onClick={() => navigate('contact')}
                >
                  Initiate Project Inquiry
                </Button>
              </div>
            </Reveal>

            {/* Interactive Live Capability Terminal */}
            <Reveal direction="up" delay={450}>
              <div className="pt-6">
                <HeroTerminal />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          2. WHAT PRIMEDEV DOES (ARCHITECTURAL PILLARS)
         ========================================================================= */}
      <Section bordered>
        <Container>
          <div className="space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.06] pb-6">
              <div>
                <span className="text-xs font-mono text-brand-400 block mb-1 uppercase">// 01.0 CAPABILITIES</span>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-obsidian-100">
                  What PrimeDev Engineers
                </h2>
              </div>
              <p className="text-sm text-obsidian-400 max-w-md">
                End-to-end technical execution from modular frontend design systems to secure multi-tenant backend architectures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Reveal direction="up" delay={0}>
                <SpotlightCard className="p-7 space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="p-3 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 w-fit">
                      <Icons.Code className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-obsidian-100">Full-Stack Web Engineering</h3>
                    <p className="text-xs sm:text-sm text-obsidian-400 leading-relaxed">
                      Fast, reactive web platforms engineered with React, Next.js, and TypeScript, optimized for sub-second page loads and zero layout shift.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/[0.05]">
                    <span className="text-xs font-mono text-brand-400">Strict Typing • Responsive Grids</span>
                  </div>
                </SpotlightCard>
              </Reveal>

              <Reveal direction="up" delay={150}>
                <SpotlightCard className="p-7 space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit">
                      <Icons.Layers className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-obsidian-100">Multi-Tenant Platforms & SaaS</h3>
                    <p className="text-xs sm:text-sm text-obsidian-400 leading-relaxed">
                      Role-based systems with granular permission tiers, automated billing calculation algorithms, dynamic PDF generators, and audit logging.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/[0.05]">
                    <span className="text-xs font-mono text-emerald-400">JWT Auth • Role Hierarchies</span>
                  </div>
                </SpotlightCard>
              </Reveal>

              <Reveal direction="up" delay={300}>
                <SpotlightCard className="p-7 space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit">
                      <Icons.Cpu className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-obsidian-100">Assistive Software & IoT</h3>
                    <p className="text-xs sm:text-sm text-obsidian-400 leading-relaxed">
                      Pioneering accessible web utilities including voice-operated learning tools for visually impaired students and automated WiFi presence detectors.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/[0.05]">
                    <span className="text-xs font-mono text-cyan-400">Web Speech API • Hardware Probes</span>
                  </div>
                </SpotlightCard>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          3. CORE SERVICES SHOWCASE
         ========================================================================= */}
      <Section bordered withDots>
        <Container>
          <div className="space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.06] pb-6">
              <div>
                <span className="text-xs font-mono text-brand-400 block mb-1 uppercase">// 02.0 SERVICES</span>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-obsidian-100">
                  Engineering Disciplines
                </h2>
              </div>
              <Button
                variant="outline"
                size="sm"
                magnetic
                rightIcon={<Icons.ArrowRight className="w-3.5 h-3.5" />}
                onClick={() => navigate('services')}
              >
                View Full Services Catalog
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES_LIST.map((service, idx) => (
                <Reveal key={service.id} direction="up" delay={idx * 100}>
                  <Card
                    variant="interactive"
                    className="h-full flex flex-col justify-between group"
                    onClick={() => navigate('service-detail', service.slug)}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="accent" size="sm">
                          {service.category}
                        </Badge>
                        <Icons.ChevronRight className="w-4 h-4 text-obsidian-400 transition-transform group-hover:translate-x-1" />
                      </div>
                      <CardTitle className="mt-2 text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-sm">{service.tagline}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <ul className="space-y-1.5 text-xs text-obsidian-300">
                        {service.deliverables.slice(0, 2).map((deliv, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Icons.Check className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center gap-2">
                        {service.techStack.slice(0, 3).map((t) => (
                          <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-obsidian-400">
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-brand-400">View Spec →</span>
                    </CardFooter>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          4. TECHNOLOGY & ARCHITECTURE EXPLORER
         ========================================================================= */}
      <Section bordered>
        <Container>
          <div className="space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.06] pb-6">
              <div>
                <span className="text-xs font-mono text-brand-400 block mb-1 uppercase">// 03.0 ARCHITECTURE EXPLORER</span>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-obsidian-100">
                  Interactive System Architecture
                </h2>
              </div>
              <p className="text-sm text-obsidian-400 max-w-md">
                Click any node below to inspect real-time latency specifications, protocols, and architectural safeguards.
              </p>
            </div>

            {/* Interactive Node Explorer */}
            <ArchitectureExplorer />
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          5. SELECTED WORK (FEATURED PROJECTS)
         ========================================================================= */}
      <Section bordered withGrid>
        <Container>
          <div className="space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.06] pb-6">
              <div>
                <span className="text-xs font-mono text-brand-400 block mb-1 uppercase">// 04.0 CASE STUDIES</span>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-obsidian-100">
                  Selected Engineering Case Studies
                </h2>
              </div>
              <Button
                variant="outline"
                size="sm"
                magnetic
                rightIcon={<Icons.ArrowRight className="w-3.5 h-3.5" />}
                onClick={() => navigate('work')}
              >
                View All Case Studies
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PROJECTS_LIST.slice(0, 4).map((project, idx) => (
                <Reveal key={project.id} direction="up" delay={idx * 100}>
                  <SpotlightCard
                    className="cursor-pointer h-full flex flex-col justify-between group"
                    onClick={() => navigate('project-detail', project.slug)}
                  >
                    <div>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="accent" size="sm">
                            {project.category}
                          </Badge>
                          <Badge variant="default" size="sm" className="font-mono">
                            {project.timeframe}
                          </Badge>
                        </div>
                        <CardTitle className="mt-2 text-xl">{project.title}</CardTitle>
                        <CardDescription className="text-sm line-clamp-2">
                          {project.tagline}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-xs text-obsidian-400 line-clamp-3 leading-relaxed">
                          {project.solution}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {project.techStack.slice(0, 4).map((t) => (
                            <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-obsidian-300 border border-white/[0.06]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                    <CardFooter>
                      <span className="text-xs font-semibold text-brand-400 flex items-center gap-1">
                        Read Engineering Case Study
                        <Icons.ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="text-xs font-mono text-obsidian-500">{project.status}</span>
                    </CardFooter>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          6. DEVELOPMENT PROCESS (LIFECYCLE TIMELINE)
         ========================================================================= */}
      <Section bordered>
        <Container>
          <div className="space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.06] pb-6">
              <div>
                <span className="text-xs font-mono text-brand-400 block mb-1 uppercase">// 05.0 LIFECYCLE</span>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-obsidian-100">
                  Engineering Lifecycle
                </h2>
              </div>
              <p className="text-sm text-obsidian-400 max-w-md">
                A structured 4-phase lifecycle ensuring rigorous quality, zero technical debt, and predictable delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Discovery & Blueprint',
                  desc: 'Comprehensive requirements gathering, schema modeling, role hierarchy definitions, and UX wireframing.',
                },
                {
                  step: '02',
                  title: 'System Architecture',
                  desc: 'Drafting data models, RESTful endpoint specs, authentication protocols, and design token integration.',
                },
                {
                  step: '03',
                  title: 'Precision Engineering',
                  desc: 'Iterative full-stack development with strict TypeScript, modular components, and continuous testing.',
                },
                {
                  step: '04',
                  title: 'Hardening & Handover',
                  desc: 'Performance audits, WCAG accessibility validation, production builds, and documentation delivery.',
                },
              ].map((phase, idx) => (
                <Reveal key={phase.step} direction="up" delay={idx * 100}>
                  <div className="p-6 rounded-2xl bg-obsidian-900/60 border border-white/[0.08] space-y-3 relative group hover:border-brand-500/40 transition-all h-full">
                    <span className="text-3xl font-black font-mono text-brand-400/30 group-hover:text-brand-400 transition-colors">
                      {phase.step}
                    </span>
                    <h3 className="text-base font-bold text-obsidian-100">{phase.title}</h3>
                    <p className="text-xs text-obsidian-400 leading-relaxed">{phase.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          7. ABOUT / BRAND SECTION
         ========================================================================= */}
      <Section bordered withDots>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono text-brand-400 block uppercase">// 06.0 ETHOS</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-obsidian-100">
                Built On Architectural Rigor & Craftsmanship.
              </h2>
              <p className="text-sm sm:text-base text-obsidian-300 leading-relaxed">
                PrimeDev was founded on a singular standard: build web software that is resilient, cleanly engineered, and thoughtfully structured from the first token to the production bundle.
              </p>
              <p className="text-xs sm:text-sm text-obsidian-400 leading-relaxed">
                Whether deploying multi-role campus management platforms or engineering speech-driven assistive tools for visually impaired learners, we prioritize maintainability, security-first authentication, and high-performance user experiences.
              </p>
              <div className="pt-2">
                <Button
                  variant="secondary"
                  size="md"
                  magnetic
                  rightIcon={<Icons.ArrowRight className="w-4 h-4" />}
                  onClick={() => navigate('about')}
                >
                  Read Our Philosophy & Standards
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <SpotlightCard className="p-6 sm:p-8 space-y-5 border-brand-500/20">
                <span className="text-xs font-mono text-brand-400 uppercase block">Foundational Tenets</span>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">01. Architecture Over Templates</h4>
                    <p className="text-xs text-obsidian-400">Custom design tokens and decoupled modular components.</p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">02. Security-by-Design</h4>
                    <p className="text-xs text-obsidian-400">Strict JWT authorization, input sanitation, and role guards.</p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">03. Accessibility First</h4>
                    <p className="text-xs text-obsidian-400">Semantic markup and assistive tech consideration built in.</p>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          8. HIGH-IMPACT CONVERSION CTA
         ========================================================================= */}
      <Section className="py-20 relative overflow-hidden">
        <Container>
          <div className="relative p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-brand-500/30 text-center space-y-6 shadow-2xl overflow-hidden">
            {/* Ambient inner glow */}
            <div className="ambient-glow top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-brand-500/15" />

            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              <Badge variant="accent" size="sm" dot pulse>
                Project Inquiries Open
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Ready to Architect Your Next Digital Platform?
              </h2>
              <p className="text-sm sm:text-base text-obsidian-300">
                Let&apos;s collaborate on your web engineering requirements, SaaS architecture, or custom software solution.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  magnetic
                  rightIcon={<Icons.ArrowRight className="w-4 h-4" />}
                  onClick={() => navigate('contact')}
                >
                  Start Discovery Session
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  magnetic
                  onClick={() => navigate('services')}
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
