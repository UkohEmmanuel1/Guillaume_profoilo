'use client';
import React from 'react';
import { AnimatedCounter } from '../AnimatedCounter';

export const StatsRow = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#E2E8F0] bg-[#F9F9FB]">
    {[
      { label: 'Years of Leadership', target: 20, suffix: '+' },
      { label: 'Countries of Influence', target: 15, suffix: '+' },
      { label: 'Published Book', target: 1, suffix: '' },
      { label: 'National du Mérite · 2025', isSpecial: true }
    ].map((stat, i) => (
      <div key={i} className="reveal-item opacity-0 translate-y-7 transition-all duration-700 p-10 border-r border-[#E2E8F0] last:border-none bg-white hover:bg-[#F9F9FB] transition-colors duration-300" style={{ transitionDelay: `${i * 100}ms` }}>
        <div className="font-serif text-[2.6rem] md:text-[3rem] font-light text-[#0D121F] leading-none flex items-baseline gap-1">
          {!stat.isSpecial ? (
            <>
              <AnimatedCounter targetValue={stat.target || 0} />
              <span className="text-xl text-[#C5A059] font-normal">{stat.suffix}</span>
            </>
          ) : (
            <span className="text-xl text-[#C5A059] font-serif italic">Ordre</span>
          )}
        </div>
        <div className="text-[10px] tracking-[0.15em] uppercase text-[#64748B] mt-3 font-semibold">{stat.label}</div>
      </div>
    ))}
  </div>
);