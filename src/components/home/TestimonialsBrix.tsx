import React from 'react';

export const TestimonialsBrix: React.FC = () => {
  const testimonials = [
    {
      name: 'Matthew Hickerson',
      role: 'Founder',
      company: 'TechVentures',
      quote: 'Working with them was a seamless experience. The branding and website exceeded our expectations and made our product feel truly world-class.',
      avatar: 'MH',
    },
    {
      name: 'Madan Lal',
      role: 'Owner',
      company: 'Shree Nagneshi Jewellers',
      linkedin: true,
      quote: "Their design elevated our brand's online presence and made luxury accessible to thousands of new customers nationwide.",
      avatar: 'ML',
    },
    {
      name: 'Ronnie K. Udesen',
      role: 'CEO',
      company: 'Dansk Lamsikring',
      linkedin: true,
      quote: 'Fast, responsive, and incredibly talented. Delivered exactly on schedule with outstanding UI fidelity and design polish.',
      avatar: 'RU',
    },
    {
      name: 'Rana Raza',
      role: 'Founder and CEO',
      company: 'Digitat Optimisers',
      linkedin: true,
      quote: 'A rare team that understands both high-level business strategy and down-to-the-pixel execution.',
      avatar: 'RR',
    },
    {
      name: 'Nikhil Mehta',
      role: 'Head of Marketing',
      company: 'Shivalik Group',
      linkedin: true,
      quote: 'Their architectural real estate portal brought unprecedented lead engagement and customer trust to our property portfolio.',
      avatar: 'NM',
    },
    {
      name: 'Abhiraj',
      role: 'Product Lead',
      company: 'Creative Labs',
      quote: 'Incredibly supportive during the entire design process, iterating quickly and purposefully on every single feedback request.',
      avatar: 'AB',
    },
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-[#F5F5F5] relative overflow-hidden">
      
      {/* Giant Faded Watermark Behind (Matching Exact Screenshot) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden"
      >
        <span className="text-[13vw] font-black uppercase text-black/[0.03] tracking-tighter whitespace-nowrap leading-none text-center">
          studio primedev
        </span>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14 sm:mb-20 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-[#FF5819] uppercase font-mono">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#242424]">
            Real words from those who trusted our work
          </h2>
        </div>

        {/* Testimonials 3-Column Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-[24px] p-7 sm:p-8 flex flex-col justify-between gap-6 shadow-sm border border-black/[0.04] transition-all duration-300 hover:shadow-md"
            >
              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-black/[0.04]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ECECEC] text-[#242424] font-bold text-xs flex items-center justify-center font-mono">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#242424] leading-tight">
                      {t.name}
                    </h4>
                    <p className="text-[11px] text-[#888888]">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>

                {t.linkedin && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#0A66C2] text-white font-mono">
                    in
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
