import React from 'react';
import { useRouter } from '../context/RouterContext';
import { SERVICES_LIST, type ServiceDetail } from '../data/servicesData';
import { Container, Section } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, SpotlightCard } from '../components/ui/Card';
import { Icons } from '../components/ui/Icons';

export interface ServiceDetailPageProps {
  serviceId?: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceId }) => {
  const { navigate } = useRouter();

  // Find matching service or fallback to first
  const service: ServiceDetail =
    SERVICES_LIST.find((s) => s.id === serviceId || s.slug === serviceId) || SERVICES_LIST[0];

  const otherServices = SERVICES_LIST.filter((s) => s.id !== service.id);

  return (
    <div className="w-full">
      {/* Breadcrumb & Hero Header */}
      <Section withGrid className="pt-8 pb-16 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="space-y-6 max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
              <button
                onClick={() => navigate('services')}
                className="hover:text-[var(--text-primary)] transition-colors cursor-pointer"
              >
                Services
              </button>
              <span>/</span>
              <span className="text-brand-500 dark:text-brand-400 font-semibold">{service.title}</span>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <Badge variant="accent" size="sm" dot>
                  {service.category}
                </Badge>
                <Badge variant="outline" size="sm">
                  Engineering Spec
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-editorial text-[var(--text-primary)] leading-tight">
                {service.title}
              </h1>

              <p className="text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed max-w-3xl">
                {service.tagline}
              </p>
            </div>

            {/* Quick Action CTA buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="primary"
                size="md"
                rightIcon={<Icons.ArrowRight className="w-4 h-4" />}
                onClick={() => navigate('contact')}
              >
                Request Architecture Proposal
              </Button>
              <Button
                variant="secondary"
                size="md"
                leftIcon={<Icons.ArrowRight className="w-4 h-4 rotate-180" />}
                onClick={() => navigate('services')}
              >
                All Services
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Main Overview & Deliverables */}
      <Section bordered>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left 2 Cols: Deep Dive & Deliverables */}
            <div className="lg:col-span-2 space-y-10">
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                  Engineering Overview
                </h2>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {service.overview}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold tracking-tight text-[var(--text-primary)] flex items-center gap-2">
                  <Icons.Check className="w-5 h-5 text-brand-500 dark:text-brand-400" />
                  Key Technical Deliverables
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-start gap-3"
                    >
                      <div className="p-1 rounded-md bg-brand-500/10 text-brand-500 dark:text-brand-400 mt-0.5 shrink-0">
                        <Icons.Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Highlights */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-bold tracking-tight text-[var(--text-primary)]">
                  Architectural Pillars
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {service.architectureHighlights.map((pillar, idx) => (
                    <Card key={idx} variant="default" className="p-5 space-y-2">
                      <span className="text-xs font-mono text-brand-500 dark:text-brand-400 block">
                        0{idx + 1} // ARCH
                      </span>
                      <h4 className="text-sm font-bold text-[var(--text-primary)]">{pillar.title}</h4>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                        {pillar.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Tech Stack & Use Cases Sidebar */}
            <div className="space-y-6">
              {/* Tech Stack Box */}
              <SpotlightCard className="p-6 space-y-4">
                <h3 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech) => (
                    <Badge key={tech} variant="default" size="md">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </SpotlightCard>

              {/* Target Use Cases */}
              <Card variant="default" className="p-6 space-y-3">
                <h3 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
                  Primary Use Cases
                </h3>
                <ul className="space-y-2.5 text-xs text-[var(--text-secondary)]">
                  {service.useCases.map((uc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-brand-500 dark:text-brand-400 font-bold">•</span>
                      <span>{uc}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Engagement Consultation Card */}
              <Card variant="interactive" className="p-6 space-y-4 border-brand-500/30 bg-[var(--bg-card)]">
                <div className="space-y-1.5">
                  <Badge variant="accent" size="sm">Discovery Call</Badge>
                  <h4 className="text-base font-bold text-[var(--text-primary)]">Have a project in mind?</h4>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    Schedule an architectural discovery session to review requirements and timelines.
                  </p>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  fullWidth
                  rightIcon={<Icons.ArrowRight className="w-3.5 h-3.5" />}
                  onClick={() => navigate('contact')}
                >
                  Initiate Inquiry
                </Button>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Other Services Navigation */}
      <Section bordered withDots>
        <Container>
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-brand-500 dark:text-brand-400 block uppercase">Explore More</span>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">Other Engineering Disciplines</h3>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('services')}
              >
                View All Services
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherServices.slice(0, 3).map((item) => (
                <Card
                  key={item.id}
                  variant="interactive"
                  onClick={() => navigate('service-detail', item.slug)}
                >
                  <CardHeader>
                    <Badge variant="accent" size="sm" className="mb-2">
                      {item.category}
                    </Badge>
                    <CardTitle className="text-base">{item.title}</CardTitle>
                    <CardDescription className="line-clamp-2 text-xs">
                      {item.tagline}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center text-xs font-semibold text-brand-500 dark:text-brand-400 gap-1 mt-2">
                      <span>View Specification</span>
                      <Icons.ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
