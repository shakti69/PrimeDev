import React from 'react';

export const StatsBrix: React.FC = () => {
  const stats = [
    { value: '1+ yrs', label: 'Creative and Digital experiences' },
    { value: '3+', label: 'Projects Delivered across worldwide' },
    { value: '7%', label: 'Repeat clients, Strong trust and long-term partnerships' },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#F5F5F5] border-t border-b border-black/[0.04]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {stats.map((stat) => (
            <div key={stat.value} className="space-y-1">
              <div className="text-4xl sm:text-6xl font-medium tracking-tight text-[#242424]">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm text-[#777777] max-w-[240px] leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
