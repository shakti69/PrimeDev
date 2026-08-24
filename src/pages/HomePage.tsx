import React from 'react';
import { HeroBrix } from '../components/home/HeroBrix';
import { SelectedWorkBrix } from '../components/home/SelectedWorkBrix';
import { ServicesBrix } from '../components/home/ServicesBrix';
import { WhyPrimeDevBrix } from '../components/home/WhyPrimeDevBrix';
import { ProcessBrix } from '../components/home/ProcessBrix';
import { PricingBrix } from '../components/home/PricingBrix';
import { FAQBrix } from '../components/home/FAQBrix';
import { FinalCTABrix } from '../components/home/FinalCTABrix';

export const HomePage: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-[var(--bg-primary)] selection:bg-brand-500 selection:text-white">
      {/* 1. Hero with Pill, Showcase Collage, Studio Intro & Logos */}
      <HeroBrix />

      {/* 2. Selected Work (2-Column Grid) */}
      <SelectedWorkBrix />

      {/* 3. Services Grid & Promo Card */}
      <ServicesBrix />

      {/* 4. Why PrimeDev (Dark Section with 4 Principles) */}
      <WhyPrimeDevBrix />

      {/* 5. Process & Statistics (3-Step Lifecycle & 3-Stat Counters) */}
      <ProcessBrix />

      {/* 6. Transparent Pricing (Custom & Subscription Cards) */}
      <PricingBrix />

      {/* 8. FAQ Accordion & Intro Call Card */}
      <FAQBrix />

      {/* 9. Final Glowing Crimson/Orange CTA & Watermark Footer */}
      <FinalCTABrix />
    </main>
  );
};

