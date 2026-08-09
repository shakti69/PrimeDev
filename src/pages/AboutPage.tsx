import React from 'react';
import { useRouter } from '../context/RouterContext';
import { Container, Section } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, SpotlightCard } from '../components/ui/Card';
import { Icons } from '../components/ui/Icons';
import { Reveal } from '../components/animation/Reveal';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="w-full">
      {/* Hero Header */}
      <Section withGrid className="pt-12 pb-20 border-b border-white/[0.08]">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Reveal direction="up" delay={50}>
              <Badge variant="accent" size="md" dot>
                About PrimeDev
              </Badge>
            </Reveal>

            <Reveal direction="up" delay={150}>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-editorial text-obsidian-100 leading-tight">
                Architecting Modern Web Engineering with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-500">
                  Precision & Integrity.
                </span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={250}>
              <p className="text-base sm:text-xl text-obsidian-300 max-w-2xl mx-auto leading-relaxed">
                We believe exceptional software is built from first principles: clean architecture, modular tokens, secure authentication, and accessible interfaces.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Mission & Philosophy */}
      <Section bordered>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="accent" size="sm">01 / OUR MISSION</Badge>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-obsidian-100">
                Eliminating Complexity Through Intentional Engineering.
              </h2>
              <p className="text-sm sm:text-base text-obsidian-300 leading-relaxed">
                In an era of bloated dependencies and cookie-cutter templates, PrimeDev focuses on high-precision engineering. Every line of code, design token, and database schema is crafted with purpose.
              </p>
              <p className="text-xs sm:text-sm text-obsidian-400 leading-relaxed">
                From developing multi-role hostel catering systems to creating speech-driven learning platforms for blind students, our objective is simple: build software that solves real operational bottlenecks reliably and elegantly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card variant="default" className="p-6 space-y-3">
                <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400 w-fit">
                  <Icons.Shield className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-obsidian-100">Security by Design</h3>
                <p className="text-xs text-obsidian-400 leading-relaxed">
                  Zero trust token validation, sanitized payloads, and granular role-based authorization.
                </p>
              </Card>

              <Card variant="default" className="p-6 space-y-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 w-fit">
                  <Icons.Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-obsidian-100">Performance First</h3>
                <p className="text-xs text-obsidian-400 leading-relaxed">
                  Sub-second paint times, lightweight DOM trees, and zero unnecessary script bloat.
                </p>
              </Card>

              <Card variant="default" className="p-6 space-y-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 w-fit">
                  <Icons.Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-obsidian-100">Modular Tokens</h3>
                <p className="text-xs text-obsidian-400 leading-relaxed">
                  Unified design systems ensuring consistent scales, spacing, and micro-interactions.
                </p>
              </Card>

              <Card variant="default" className="p-6 space-y-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 w-fit">
                  <Icons.Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-obsidian-100">Accessibility</h3>
                <p className="text-xs text-obsidian-400 leading-relaxed">
                  WCAG compliant semantic markup, screen reader support, and voice command integrations.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Leadership & Engineering Ethos */}
      <Section bordered withDots>
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <Badge variant="accent" size="sm">02 / LEADERSHIP</Badge>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-obsidian-100">
                Engineering Leadership
              </h2>
              <p className="text-sm text-obsidian-400 max-w-lg mx-auto">
                Founded and led by full-stack developer Shakti Prasad Hota.
              </p>
            </div>

            <SpotlightCard className="p-8 sm:p-10 border-white/[0.1]">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-4 flex flex-col items-center text-center space-y-3">
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-900 border-2 border-brand-400/40 flex items-center justify-center text-white text-3xl font-extrabold shadow-glow-md">
                    SP
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Shakti Prasad Hota</h3>
                    <p className="text-xs text-brand-400 font-mono">Founder & Lead Engineer</p>
                    <p className="text-[11px] text-obsidian-400 mt-1">Dhenkanal, Odisha, India</p>
                  </div>
                  <div className="flex gap-2 pt-1">
                    <a
                      href="https://github.com/shakti69"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-obsidian-850 hover:text-white border border-white/[0.08] transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <Icons.Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="md:col-span-8 space-y-4 text-xs sm:text-sm text-obsidian-300 leading-relaxed border-t md:border-t-0 md:border-l border-white/[0.08] pt-6 md:pt-0 md:pl-8">
                  <p>
                    Shakti is a full-stack engineer and digital architect specializing in React, Node.js, TypeScript, and MongoDB architectures. With a focus on practical real-world automation, he has architected campus management systems, IoT WiFi attendance frameworks, and accessibility software.
                  </p>
                  <p>
                    His engineering methodology emphasizes clean codebase organization, modular design tokens, rigorous type safety, and direct collaboration with stakeholders to turn complex workflows into intuitive software.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    {['Full-Stack React & Node', 'TypeScript Architecture', 'MongoDB Aggregation', 'Cybersecurity Best Practices', 'Assistive Tech'].map((skill) => (
                      <span key={skill} className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.05] text-obsidian-300 border border-white/[0.06]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </Container>
      </Section>

      {/* Engineering Standards */}
      <Section bordered>
        <Container>
          <div className="space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.06] pb-6">
              <div>
                <Badge variant="accent" size="sm" className="mb-2">03 / STANDARDS</Badge>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-obsidian-100">
                  Technical Quality Standards
                </h2>
              </div>
              <p className="text-xs text-obsidian-400 max-w-sm">
                Every project delivered follows strict software engineering benchmarks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-obsidian-900/60 border border-white/[0.08] space-y-3">
                <span className="text-xs font-mono text-brand-400 block">STANDARD 01</span>
                <h4 className="text-base font-bold text-obsidian-100">Strict Type Safety</h4>
                <p className="text-xs text-obsidian-400 leading-relaxed">
                  Zero loose `any` types. Strict TypeScript compilers and schema validation prevent runtime errors before they happen.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-obsidian-900/60 border border-white/[0.08] space-y-3">
                <span className="text-xs font-mono text-brand-400 block">STANDARD 02</span>
                <h4 className="text-base font-bold text-obsidian-100">Zero Technical Debt</h4>
                <p className="text-xs text-obsidian-400 leading-relaxed">
                  Decoupled UI components, organized folder structures, and clear separation between data fetching and view layers.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-obsidian-900/60 border border-white/[0.08] space-y-3">
                <span className="text-xs font-mono text-brand-400 block">STANDARD 03</span>
                <h4 className="text-base font-bold text-obsidian-100">Reproducible Builds</h4>
                <p className="text-xs text-obsidian-400 leading-relaxed">
                  Deterministic package locks, automated CI checks, and lightweight containerization for cloud deployments.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section className="py-16 text-center">
        <Container>
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Let&apos;s Build Something Resilient.
            </h2>
            <p className="text-sm text-obsidian-300">
              Get in touch to discuss your next web application or software requirement.
            </p>
            <Button
              variant="primary"
              size="lg"
              rightIcon={<Icons.ArrowRight className="w-4 h-4" />}
              onClick={() => navigate('contact')}
            >
              Get In Touch
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
};
