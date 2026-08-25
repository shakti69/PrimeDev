import React from 'react';
import { useRouter } from '../context/RouterContext';
import { PROJECTS_LIST, type ProjectDetail } from '../data/projectsData';
import { Container, Section } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, SpotlightCard } from '../components/ui/Card';
import { Icons } from '../components/ui/Icons';

export interface ProjectDetailPageProps {
  projectId?: string;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ projectId }) => {
  const { navigate } = useRouter();

  // Find matching project or fallback
  const project: ProjectDetail =
    PROJECTS_LIST.find((p) => p.id === projectId || p.slug === projectId) || PROJECTS_LIST[0];

  const otherProjects = PROJECTS_LIST.filter((p) => p.id !== project.id);

  const getStatusBadgeVariant = (status: ProjectDetail['status']) => {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'Beta Testing':
        return 'warning';
      case 'In Development':
      default:
        return 'accent';
    }
  };

  return (
    <div className="w-full">
      {/* Breadcrumb & Project Header */}
      <Section withGrid className="pt-8 pb-16 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="space-y-6 max-w-4xl">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
              <button
                onClick={() => navigate('work')}
                className="hover:text-[var(--text-primary)] transition-colors cursor-pointer"
              >
                Work & Portfolio
              </button>
              <span>/</span>
              <span className="text-brand-500 dark:text-brand-400 font-semibold">{project.title}</span>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={getStatusBadgeVariant(project.status)} size="sm" dot pulse>
                  {project.status}
                </Badge>
                <Badge variant="outline" size="sm">
                  {project.category}
                </Badge>
                <Badge variant="default" size="sm" className="font-mono">
                  {project.timeframe}
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-editorial text-[var(--text-primary)] leading-tight">
                {project.title}
              </h1>

              <p className="text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed max-w-3xl">
                {project.tagline}
              </p>
            </div>

            {/* Trust Badges & Action buttons (No source code repository button) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="primary"
                size="md"
                rightIcon={<Icons.ArrowRight className="w-4 h-4" />}
                onClick={() => navigate('book')}
              >
                Book a Strategy Call
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={() => navigate('contact')}
              >
                Discuss Similar Project
              </Button>
            </div>

            {/* Visual Project Banner */}
            {project.imageUrl && (
              <div className="w-full h-64 sm:h-96 rounded-2xl overflow-hidden border border-[var(--border-subtle)] shadow-lg mt-6">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Challenge, Solution & Specs */}
      <Section bordered>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left 2 Cols: Deep Case Study */}
            <div className="lg:col-span-2 space-y-12">
              {/* The Challenge */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)] flex items-center gap-2">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-brand-500/10 text-brand-500 dark:text-brand-400 border border-brand-500/20">
                    01
                  </span>
                  The Engineering Challenge
                </h2>
                <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-sm">
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              </div>

              {/* The Architectural Solution */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)] flex items-center gap-2">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-brand-500/10 text-brand-500 dark:text-brand-400 border border-brand-500/20">
                    02
                  </span>
                  Architectural Solution & Implementation
                </h2>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Key Features Built */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold tracking-tight text-[var(--text-primary)]">
                  Key Implemented Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-start gap-3"
                    >
                      <div className="p-1 rounded-md bg-brand-500/10 text-brand-500 dark:text-brand-400 mt-0.5 shrink-0">
                        <Icons.Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Specifications */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold tracking-tight text-[var(--text-primary)]">
                  System Architecture Details
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {project.architectureSpecs.map((spec, idx) => (
                    <Card key={idx} variant="default" className="p-5">
                      <div className="flex items-center gap-2 text-xs font-mono text-brand-500 dark:text-brand-400 mb-1">
                        <Icons.Terminal className="w-3.5 h-3.5" />
                        <span>{spec.title}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {spec.detail}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Project Metadata & Tech Stack */}
            <div className="space-y-6">
              {/* Tech Stack Matrix */}
              <SpotlightCard className="p-6 space-y-4">
                <h3 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
                  Technologies Utilized
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="default" size="md">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </SpotlightCard>

              {/* Project Meta Card */}
              <Card variant="default" className="p-6 space-y-4">
                <h3 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
                  Project Metadata
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-[var(--border-subtle)]">
                    <span className="text-[var(--text-muted)]">Category:</span>
                    <span className="text-[var(--text-primary)] font-medium">{project.category}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[var(--border-subtle)]">
                    <span className="text-[var(--text-muted)]">Status:</span>
                    <span className="text-[var(--text-primary)] font-medium">{project.status}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[var(--border-subtle)]">
                    <span className="text-[var(--text-muted)]">Release Cycle:</span>
                    <span className="text-[var(--text-primary)] font-mono">{project.timeframe}</span>
                  </div>
                </div>
              </Card>

              {/* Inquire Card */}
              <Card variant="interactive" className="p-6 space-y-4 border-brand-500/30 bg-[var(--bg-card)]">
                <div className="space-y-1.5">
                  <Badge variant="accent" size="sm">Custom Build</Badge>
                  <h4 className="text-base font-bold text-[var(--text-primary)]">Need a platform like this?</h4>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    We architect end-to-end custom software solutions tailored to your operational specifications.
                  </p>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  fullWidth
                  rightIcon={<Icons.ArrowRight className="w-3.5 h-3.5" />}
                  onClick={() => navigate('contact')}
                >
                  Start Project Inquiry
                </Button>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Other Projects */}
      <Section bordered withDots>
        <Container>
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-brand-500 dark:text-brand-400 block uppercase">Selected Work</span>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">Explore Related Projects</h3>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('work')}
              >
                All Projects
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.slice(0, 3).map((item) => (
                <Card
                  key={item.id}
                  variant="interactive"
                  onClick={() => navigate('project-detail', item.slug)}
                >
                  <CardHeader>
                    <Badge variant={getStatusBadgeVariant(item.status)} size="sm" className="mb-2">
                      {item.status}
                    </Badge>
                    <CardTitle className="text-base">{item.title}</CardTitle>
                    <CardDescription className="line-clamp-2 text-xs">
                      {item.tagline}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center text-xs font-semibold text-brand-500 dark:text-brand-400 gap-1 mt-2">
                      <span>View Case Study</span>
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
