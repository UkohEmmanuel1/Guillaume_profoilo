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
    <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24 md:py-32" id="speaking">
      <Container>
        <SectionHeader
          label="Speaking"
          title={
            <>
              Engage a World-Class
              <br />
              <em className="font-serif not-italic text-blue-600">Executive Speaker</em>
            </>
          }
        />

        <div className="grid items-start gap-12 md:grid-cols-[1.2fr_1fr] md:gap-24">
          <div>
            <p className="mb-8 text-[14px] leading-[1.75] text-slate-600">
              Guillaume Niarfeix brings a rare combination of operational authority and intellectual
              depth to every stage appearance.
            </p>

            <ul className="my-8">
              {SPEAKING_TOPICS.map((topic) => (
                <li
                  key={topic.number}
                  className="reveal-item flex items-start gap-4 border-b border-slate-200 py-4 opacity-0 transition-all duration-700 last:border-b-0 translate-y-7"
                >
                  <span className="min-w-[20px] text-2xs uppercase tracking-[0.15em] text-blue-600">
                    0{topic.number}
                  </span>
                  <div className="font-serif text-base font-normal text-slate-900">{topic.title}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal-item bg-transparent opacity-0 transition-all duration-700 translate-y-7">
            <h3 className="mb-7 font-serif text-[1.4rem] font-light text-slate-900">
              Request a Speaking Engagement
            </h3>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <Input
                type="text"
                label="Your name"
                placeholder="Your name"
                autoComplete="name"
              />
              <BlueButton as="button" type="submit" className="w-full sm:w-auto">
                Submit Inquiry →
              </BlueButton>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
