'use client';

import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { Input } from '@/app/components/ui/Input';
import { BlueButton } from '@/app/components/ui/BlueButton';
import { SPEAKING_TOPICS } from '@/app/constants/content';
import React from 'react';

export function Speaking() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="relative bg-white py-20 sm:py-28 md:py-32 lg:py-36 border-b border-slate-100 overflow-hidden" id="speaking">
      
      {/* Background Ambient Aura Graphic */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.015] blur-[120px]" />
      </div>

      <Container className="relative z-10">
        
        {/* Adjusted Title Wrapping Fragment */}
        <div className="mb-14 md:mb-20 text-slate-900">
          <SectionHeader
            label="Speaking"
            title={
              <>
                Engage a World-Class
                <br className="hidden sm:block" />
                <em className="font-serif italic text-blue-600 font-normal">Executive Speaker</em>
              </>
            }
          />
        </div>

        {/* Master Split Grid Architecture Layout */}
        <div className="grid items-start gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-24">
          
          {/* Left Column: Context Introduction & Interactive Agenda List */}
          <div className="w-full">
            <p className="mb-10 text-[15px] md:text-[16px] font-light leading-[1.8] text-slate-600 max-w-[560px]">
              Guillaume Niarfeix brings a rare combination of operational authority and intellectual
              depth to every stage appearance, sparking critical macro discussions worldwide.
            </p>

            <ul className="my-6 list-none p-0 m-0">
              {SPEAKING_TOPICS.map((topic) => (
                <li
                  key={topic.number}
                  className="group flex items-start gap-5 border-b border-slate-100 py-5 last:border-b-0 transition-colors duration-300"
                >
                  {/* Accent Counter Tag */}
                  <span className="min-w-[28px] font-sans text-xs font-semibold tracking-wider text-blue-600/80 group-hover:text-blue-600 transition-colors duration-300 pt-0.5">
                    0{topic.number}
                  </span>
                  
                  {/* Content Title */}
                  <div className="font-serif text-base sm:text-lg font-light tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    {topic.title}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Premium Inset Form Stage Panel */}
          <div className="w-full">
            <div className="rounded-2xl border border-slate-200/70 bg-slate-50/50 p-6 sm:p-8 lg:p-10 shadow-[0_12px_40px_rgba(241,245,249,0.6)]">
              
              <div className="mb-6 space-y-1.5">
                <h3 className="font-serif text-xl font-light tracking-tight text-slate-900">
                  Request an Engagement
                </h3>
                <p className="text-xs font-light text-slate-500 leading-relaxed">
                  Provide your event logistics below to check schedule availability.
                </p>
              </div>

              {/* Booking Submission Node */}
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  {/* Assuming your Input component is built to look high-end in light-mode */}
                  <Input
                    type="text"
                    label="Your name"
                    placeholder="Your name"
                    autoComplete="name"
                    className="w-full bg-white border-slate-200 focus:border-blue-600 rounded-md transition-colors"
                  />
                </div>
                
                <div className="mt-2">
                  <BlueButton as="button" type="submit" className="w-full justify-center text-center py-3">
                    Submit Inquiry →
                  </BlueButton>
                </div>
              </form>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}