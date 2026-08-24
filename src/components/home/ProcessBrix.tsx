import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const currentVal = Math.floor(easeOutExpo(progress) * target);
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export const ProcessBrix: React.FC = () => {
  const steps = [
    {
      target: 100,
      suffix: '%',
      title: 'Understand',
      desc: 'We start by deeply understanding your brand, audience, and goals — uncovering insights that guide every creative decision with 100% dedicated focus.',
      icon: (
        <svg className="transition-transform duration-300 group-hover:scale-110" width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" stroke="#242424" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 7h10" stroke="#242424" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M7 11h7" stroke="#242424" strokeWidth="1.75" strokeLinecap="round" />
          <polygon points="15,13 19,9 21,11 17,15" fill="#FF5819" className="animate-icon-pencil" />
        </svg>
      ),
    },
    {
      target: 48,
      suffix: 'h',
      title: 'Design',
      desc: "We craft purposeful designs that balance beauty and functionality, translating strategy into high-fidelity UI/UX with fast 48h turnaround loops.",
      icon: (
        <svg className="transition-transform duration-300 group-hover:scale-110" width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M4 19 C 7 14, 11 9, 17 6" stroke="#242424" strokeWidth="1.75" strokeLinecap="round" />
          <circle cx="4" cy="19" r="2.5" stroke="#242424" strokeWidth="1.5" fill="white" />
          <polygon points="17,3 22,8 18,12 13,7" fill="#FF5819" className="animate-icon-bezier" />
        </svg>
      ),
    },
    {
      target: 99,
      suffix: '%',
      title: 'Deliver',
      desc: 'We provide high-impact production outputs and ongoing support, delivering 99% client satisfaction and long-term trust.',
      icon: (
        <svg className="transition-transform duration-300 group-hover:scale-110" width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" stroke="#242424" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" stroke="#242424" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" stroke="#242424" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.83L7 15" stroke="#242424" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 1.5 C 12 0.5, 13.5 0.5, 14 1.5 C 14.5 0.5, 16 0.5, 16 1.5 C 16 2.5, 14 4, 14 4 C 14 4, 12 2.5, 12 1.5 Z" fill="#FF5819" className="animate-icon-heart" />
        </svg>
      ),
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 mb-16 sm:mb-24"
        >
          <span className="text-[12px] font-bold tracking-widest text-[#FF5819] uppercase font-mono">
            HOW WE WORK
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
            <span className="text-[#999999] font-normal">Simple steps,</span> <br />
            <span>extraordinary result.</span>
          </h2>
        </motion.div>

        {/* 3 Unified Process Cards with Integrated Animated Countdown Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-14">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group space-y-4 cursor-default p-7 sm:p-8 rounded-[28px] bg-[#F8F8F9] hover:bg-[#F4F4F6] border border-black/[0.03] hover:border-black/[0.07] hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between pb-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xs">
                  {step.icon}
                </div>
                <div
                  style={{
                    fontFamily: '"Pangea Afrikan Trial", sans-serif',
                    letterSpacing: '-0.04em',
                  }}
                  className="text-3xl sm:text-4xl font-bold text-[#A8A8A8] group-hover:text-[#FF5819] transition-colors duration-300 font-mono"
                >
                  <AnimatedCounter target={step.target} suffix={step.suffix} duration={2} />
                </div>
              </div>
              <h3
                style={{
                  fontFamily: '"Pangea Afrikan Trial", sans-serif',
                  letterSpacing: '-0.02em',
                }}
                className="text-xl sm:text-2xl font-bold text-[#1E1E1E] group-hover:text-[#FF5819] transition-colors duration-200"
              >
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed font-normal">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
