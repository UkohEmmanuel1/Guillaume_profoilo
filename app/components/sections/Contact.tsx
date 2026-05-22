'use client';

import React from 'react';
import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { Input } from '@/app/components/ui/Input';
import { BlueButton } from '@/app/components/ui/BlueButton';

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="border-b border-slate-200 bg-slate-50 py-20 sm:py-24 md:py-32" id="contact">
      <Container>
        <SectionHeader
          label="Contact"
          title={
            <>
              Begin a
              <br />
              <em className="font-serif not-italic text-blue-600">Strategic Conversation</em>
            </>
          }
        />

        <div className="grid items-start gap-12 md:grid-cols-[1fr_1.5fr] md:gap-24">
          <div className="reveal-item opacity-0 transition-all duration-700 translate-y-7">
            <p className="text-[14px] leading-[1.75] text-slate-600">
              For speaking engagements or business collaborations, reach out below.
            </p>
          </div>

          <form
            className="grid gap-4 md:grid-cols-2"
            onSubmit={handleSubmit}
          >
            <Input
              type="text"
              label="First name"
              placeholder="First name"
              autoComplete="given-name"
            />
            <BlueButton as="button" type="submit" className="w-full sm:w-auto self-start">
              Send Message →
            </BlueButton>
          </form>
        </div>
      </Container>
    </section>
  );
}
