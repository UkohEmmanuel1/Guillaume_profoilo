'use client';

import React, { useState } from 'react';
import { Container } from '@/app/components/ui/Container';

export function Contact({ dict }: { dict: any }) {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Action implementation for handling production inquiries
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section className="relative bg-white py-20 sm:py-28 md:py-32 lg:py-36 border-b border-slate-100 overflow-hidden" id="contact">
      
      {/* Structural Minimalist Grid Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.01)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.015] blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20 items-start">
          
          {/* Left Column: Editorial Communications Copy */}
          <div className="w-full space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-700">
                {dict.contact.label}
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 leading-[1.15]">
                {dict.contact.heading} <br />
                <em className="font-serif italic text-blue-600 font-normal">{dict.contact.headingEm}</em>
              </h2>
            </div>

            <p className="text-[15px] md:text-[16px] font-light leading-[1.8] text-slate-600 max-w-[520px]">
              {dict.contact.description}
            </p>

            {/* Direct Channel Access Info Row */}
            <div className="pt-4 border-t border-slate-100 max-w-[400px] space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-slate-50 border border-slate-200/60 text-blue-600">
                  <svg className="h-5 w-5 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">{dict.contact.officeLabel}</h4>
                  <a href="mailto:relations@guillaumeniarfeix.com" className="text-sm font-medium text-slate-800 hover:text-blue-600 transition-colors">
                    {dict.contact.officeEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form Element Wrapper */}
          <div className="w-full">
            <div className="rounded-2xl border border-slate-200/70 bg-slate-50/40 p-6 sm:p-8 lg:p-10 shadow-[0_15px_50px_rgba(241,245,249,0.7)] backdrop-blur-sm">
              
              <div className="mb-8 space-y-1.5">
                <h3 className="font-serif text-xl font-light tracking-tight text-slate-900">
                  {dict.contact.formTitle}
                </h3>
                <p className="text-xs font-light text-slate-500">
                  {dict.contact.formDescription}
                </p>
              </div>

              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                
                {/* Name Field Row */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                    {dict.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder={dict.contact.namePlaceholder}
                    className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-md px-4 py-3 text-sm transition-all shadow-sm outline-none placeholder:text-slate-400 text-slate-900"
                  />
                </div>

                {/* Email Field Row */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                    {dict.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder={dict.contact.emailPlaceholder}
                    className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-md px-4 py-3 text-sm transition-all shadow-sm outline-none placeholder:text-slate-400 text-slate-900"
                  />
                </div>

                {/* Message Field Row */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                    {dict.contact.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder={dict.contact.messagePlaceholder}
                    className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-md px-4 py-3 text-sm transition-all shadow-sm outline-none placeholder:text-slate-400 text-slate-900"
                  />
                </div>

                {/* Submission Target Control Button */}
                <div className="mt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-blue-700 shadow-md shadow-blue-100 active:scale-[0.99] disabled:opacity-50 outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? dict.contact.submittedText : dict.contact.submitText}
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}