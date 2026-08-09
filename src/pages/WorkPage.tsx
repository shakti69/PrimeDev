import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { PROJECTS_LIST, type ProjectDetail } from '../data/projectsData';
import { Container, Section } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { CardHeader, CardTitle, CardDescription, CardContent, CardFooter, SpotlightCard } from '../components/ui/Card';
import { Icons } from '../components/ui/Icons';
import { Reveal } from '../components/animation/Reveal';

export const WorkPage: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Full-Stack SaaS',
    'Web Systems',
    'Assistive & Audio Tech',
    'Digital Platforms',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS_LIST
      : PROJECTS_LIST.filter((p) => p.category === selectedCategory);

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
      {/* Portfolio Header */}
      <Section withGrid className="pt-12 pb-20 border-b border-white/[0.08]">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Reveal direction="up" delay={50}>
              <Badge variant="accent" size="md" dot>
                Engineering Portfolio
              </Badge>
            </Reveal>

            <Reveal direction="up" delay={150}>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-editorial text-obsidian-100 leading-tight">
                Selected Work &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-500">
                  Case Studies.
                </span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={250}>
              <p className="text-base sm:text-xl text-obsidian-300 max-w-2xl mx-auto leading-relaxed">
                A showcase of production-ready full-stack applications, accessible assistive tools, and systems architectures.
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

      {/* Projects Grid */}
      <Section bordered>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <SpotlightCard
                key={project.id}
                className="cursor-pointer flex flex-col justify-between"
                onClick={() => navigate('project-detail', project.slug)}
              >
                <div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant={getStatusBadgeVariant(project.status)} size="sm" dot>
                        {project.status}
                      </Badge>
                      <span className="text-xs font-mono text-obsidian-400">
                        {project.timeframe}
                      </span>
                    </div>
                    <CardTitle className="mt-2 text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {project.tagline}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-xs text-obsidian-300 leading-relaxed line-clamp-3">
                      {project.solution}
                    </p>

                    {/* Key features bullets */}
                    <div className="space-y-1.5 pt-2 border-t border-white/[0.05]">
                      <span className="text-[11px] font-mono text-brand-400 block uppercase">
                        Architecture Highlights
                      </span>
                      <ul className="space-y-1 text-xs text-obsidian-400">
                        {project.keyFeatures.slice(0, 2).map((feat, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Icons.Check className="w-3 h-3 text-brand-400 shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>

                <CardFooter className="mt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-obsidian-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-brand-400 flex items-center gap-1">
                    Read Case Study
                    <Icons.ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </CardFooter>
              </SpotlightCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Conversion CTA */}
      <Section className="py-16 text-center">
        <Container>
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Have a Project in Mind?
            </h2>
            <p className="text-sm text-obsidian-300">
              Let&apos;s build a secure, high-performance web platform tailored to your specific requirements.
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
