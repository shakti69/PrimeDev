import React, { useState } from 'react';
import { Container, Section } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, SpotlightCard } from '../components/ui/Card';
import { Icons } from '../components/ui/Icons';
import { Reveal } from '../components/animation/Reveal';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: 'Full-Stack Web Engineering',
    timeline: '1-3 months',
    budget: '$1,000 - $3,000',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full">
      {/* Contact Header */}
      <Section withGrid className="pt-12 pb-20 border-b border-white/[0.08]">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Reveal direction="up" delay={50}>
              <Badge variant="accent" size="md" dot pulse>
                Inquiries & Discovery
              </Badge>
            </Reveal>

            <Reveal direction="up" delay={150}>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-editorial text-obsidian-100 leading-tight">
                Initiate an Engineering{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-500">
                  Discovery Session.
                </span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={250}>
              <p className="text-base sm:text-xl text-obsidian-300 max-w-2xl mx-auto leading-relaxed">
                Whether you need a full-stack platform built from scratch, an architecture review, or accessible assistive software, let&apos;s discuss your roadmap.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Main Form & Contact Info Section */}
      <Section bordered>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 7 Cols: Interactive Form */}
            <div className="lg:col-span-7">
              <SpotlightCard className="p-6 sm:p-10 border-white/[0.1]">
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4 animate-fade-in" role="status" aria-live="polite">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                      <Icons.Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                    <p className="text-sm text-obsidian-300 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. We will review your project requirements and respond within 24 business hours.
                    </p>
                    <div className="pt-4">
                      <Button
                        variant="secondary"
                        size="md"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            serviceType: 'Full-Stack Web Engineering',
                            timeline: '1-3 months',
                            budget: '$1,000 - $3,000',
                            message: '',
                          });
                        }}
                      >
                        Submit Another Inquiry
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-white">Project Discovery Form</h3>
                      <p className="text-xs text-obsidian-400">
                        Please provide basic context about your software goals.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="contact-name" className="text-xs font-mono text-obsidian-300 block">
                          Your Name <span className="text-rose-400" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          aria-required="true"
                          autoComplete="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Alex Chen"
                          className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-obsidian-950 border border-white/[0.08] text-sm text-white placeholder-obsidian-500 focus:outline-none focus:border-brand-500/50"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="contact-email" className="text-xs font-mono text-obsidian-300 block">
                          Email Address <span className="text-rose-400" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          aria-required="true"
                          autoComplete="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-obsidian-950 border border-white/[0.08] text-sm text-white placeholder-obsidian-500 focus:outline-none focus:border-brand-500/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="contact-service" className="text-xs font-mono text-obsidian-300 block">
                          Service Interest
                        </label>
                        <select
                          id="contact-service"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                          className="w-full min-h-[44px] px-3 py-2.5 rounded-xl bg-obsidian-950 border border-white/[0.08] text-xs text-white focus:outline-none focus:border-brand-500/50"
                        >
                          <option>Full-Stack Web Engineering</option>
                          <option>SaaS Platform & Multi-Tenant</option>
                          <option>Cloud Infrastructure & APIs</option>
                          <option>Accessible Tech & IoT</option>
                          <option>Custom Architectural Advisory</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="contact-timeline" className="text-xs font-mono text-obsidian-300 block">
                          Timeline
                        </label>
                        <select
                          id="contact-timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full min-h-[44px] px-3 py-2.5 rounded-xl bg-obsidian-950 border border-white/[0.08] text-xs text-white focus:outline-none focus:border-brand-500/50"
                        >
                          <option>&lt; 1 month</option>
                          <option>1-3 months</option>
                          <option>3-6 months</option>
                          <option>Flexible / Ongoing</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="contact-budget" className="text-xs font-mono text-obsidian-300 block">
                          Budget Range
                        </label>
                        <select
                          id="contact-budget"
                          name="budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full min-h-[44px] px-3 py-2.5 rounded-xl bg-obsidian-950 border border-white/[0.08] text-xs text-white focus:outline-none focus:border-brand-500/50"
                        >
                          <option>&lt; $1,000</option>
                          <option>$1,000 - $3,000</option>
                          <option>$3,000 - $10,000</option>
                          <option>$10,000+</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-message" className="text-xs font-mono text-obsidian-300 block">
                        Project Overview & Technical Requirements <span className="text-rose-400" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        aria-required="true"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your platform goals, required roles/features, and key technical considerations..."
                        className="w-full p-4 rounded-xl bg-obsidian-950 border border-white/[0.08] text-sm text-white placeholder-obsidian-500 focus:outline-none focus:border-brand-500/50"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      isLoading={isSubmitting}
                      rightIcon={<Icons.Send className="w-4 h-4" />}
                    >
                      Transmit Project Inquiry
                    </Button>
                  </form>
                )}
              </SpotlightCard>
            </div>

            {/* Right 5 Cols: Direct Contact Channels & SLA */}
            <div className="lg:col-span-5 space-y-6">
              {/* Response SLA Badge */}
              <div className="p-6 rounded-2xl bg-obsidian-900/60 border border-white/[0.08] space-y-3">
                <Badge variant="success" size="md" dot pulse>
                  Operational Response Guarantee
                </Badge>
                <h4 className="text-base font-bold text-white">Direct Communication SLA</h4>
                <p className="text-xs text-obsidian-400 leading-relaxed">
                  Every inquiry is reviewed directly by our engineering leadership. You will receive an initial technical feasibility response within 24 business hours.
                </p>
              </div>

              {/* Direct Channels Card */}
              <Card variant="default" className="p-6 space-y-4">
                <h4 className="text-sm font-bold text-obsidian-200 uppercase tracking-wider font-mono">
                  Direct Communication
                </h4>
                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400 shrink-0">
                      <Icons.Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-obsidian-400 block">Headquarters:</span>
                      <span className="text-obsidian-200 font-medium">Dhenkanal, Odisha, India</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400 shrink-0">
                      <Icons.Send className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-obsidian-400 block">Engineering Inquiries:</span>
                      <a
                        href="mailto:shaktiprasadhota07@gmail.com"
                        className="text-brand-400 hover:underline font-medium break-all"
                      >
                        shaktiprasadhota07@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400 shrink-0">
                      <Icons.Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-obsidian-400 block">Source Repositories:</span>
                      <a
                        href="https://github.com/shakti69"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-400 hover:underline font-medium"
                      >
                        github.com/shakti69
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Discovery FAQ Snippet */}
              <Card variant="default" className="p-6 space-y-3">
                <h4 className="text-sm font-bold text-obsidian-200 uppercase tracking-wider font-mono">
                  What Happens Next?
                </h4>
                <ol className="space-y-2 text-xs text-obsidian-400 list-decimal list-inside leading-relaxed">
                  <li>We review your requirements and scope architecture.</li>
                  <li>We coordinate a discovery call to align on specifics.</li>
                  <li>We deliver a milestone roadmap and technical proposal.</li>
                </ol>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
