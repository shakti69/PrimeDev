import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { SERVICES_LIST } from '../data/servicesData';
import { Container, Section } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, SpotlightCard } from '../components/ui/Card';
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
    <div className="w-full">
      {/* Services Header */}
      <Section withGrid className="pt-12 pb-20 border-b border-white/[0.08]">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Reveal direction="up" delay={50}>
              <Badge variant="accent" size="md" dot>
                Services & Capabilities
              </Badge>
            </Reveal>

            <Reveal direction="up" delay={150}>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-editorial text-obsidian-100 leading-tight">
                Full-Lifecycle Software &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-500">
                  Web Architecture.
                </span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={250}>
              <p className="text-base sm:text-xl text-obsidian-300 max-w-2xl mx-auto leading-relaxed">
                From initial architecture and responsive UI design to production backend hardening and assistive tech integrations.
              </p>
            </Reveal>

            {/* Filter Tabs */}
            <Reveal direction="up" delay={350}>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                      selectedCategory === cat
                        ? 'bg-brand-600 text-white shadow-glow-sm border border-brand-400/30'
                        : 'bg-obsidian-900 text-obsidian-400 hover:text-white border border-white/[0.08] hover:bg-obsidian-850'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section bordered>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <SpotlightCard
                key={service.id}
                className="cursor-pointer flex flex-col justify-between"
                onClick={() => navigate('service-detail', service.slug)}
              >
                <div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="accent" size="sm">
                        {service.category}
                      </Badge>
                      <span className="text-xs font-mono text-obsidian-500">Spec Sheet</span>
                    </div>
                    <CardTitle className="mt-2 text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-sm">{service.tagline}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-xs text-obsidian-300 leading-relaxed">
                      {service.overview}
                    </p>

                    {/* Key Deliverables Bullet Points */}
                    <div className="space-y-2 pt-2 border-t border-white/[0.05]">
                      <span className="text-[11px] font-mono text-brand-400 block uppercase">
                        Key Deliverables
                      </span>
                      <ul className="space-y-1.5 text-xs text-obsidian-300">
                        {service.deliverables.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Icons.Check className="w-3.5 h-3.5 text-brand-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>

                <CardFooter className="mt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-obsidian-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-brand-400 flex items-center gap-1">
                    View Specification
                    <Icons.ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </CardFooter>
              </SpotlightCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Engagement Models */}
      <Section bordered withDots>
        <Container>
          <div className="space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <Badge variant="accent" size="sm">02 / ENGAGEMENT</Badge>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-obsidian-100">
                Engagement Models
              </h2>
              <p className="text-sm text-obsidian-400">
                Flexible technical collaboration structures designed around your delivery roadmap.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="default" className="p-6 space-y-4">
                <Badge variant="default" size="sm" className="font-mono">MODEL 01</Badge>
                <h3 className="text-lg font-bold text-obsidian-100">Fixed-Scope Sprint</h3>
                <p className="text-xs text-obsidian-400 leading-relaxed">
                  Defined deliverables, milestones, and deliverables timeline for targeted web applications, portals, or migrations.
                </p>
                <div className="pt-2 text-xs text-brand-400 font-mono">Milestone-based delivery</div>
              </Card>

              <Card variant="default" className="p-6 space-y-4 border-brand-500/30 bg-obsidian-850/80">
                <Badge variant="accent" size="sm" className="font-mono">MODEL 02</Badge>
                <h3 className="text-lg font-bold text-obsidian-100">Dedicated Engineering</h3>
                <p className="text-xs text-obsidian-300 leading-relaxed">
                  Continuous development partnership handling full-stack feature releases, API integrations, and ongoing optimizations.
                </p>
                <div className="pt-2 text-xs text-brand-400 font-mono">Agile iterations & support</div>
              </Card>

              <Card variant="default" className="p-6 space-y-4">
                <Badge variant="default" size="sm" className="font-mono">MODEL 03</Badge>
                <h3 className="text-lg font-bold text-obsidian-100">Architectural Advisory</h3>
                <p className="text-xs text-obsidian-400 leading-relaxed">
                  System design reviews, code audits, database schema optimization, and WCAG accessibility remediation.
                </p>
                <div className="pt-2 text-xs text-brand-400 font-mono">Expert guidance & audit reports</div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Conversion CTA */}
      <Section className="py-16 text-center">
        <Container>
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Need a Custom Solution?
            </h2>
            <p className="text-sm text-obsidian-300">
              Submit your technical requirements and receive an architectural roadmap within 24 hours.
            </p>
            <Button
              variant="primary"
              size="lg"
              rightIcon={<Icons.ArrowRight className="w-4 h-4" />}
              onClick={() => navigate('contact')}
            >
              Start Project Inquiry
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
};
