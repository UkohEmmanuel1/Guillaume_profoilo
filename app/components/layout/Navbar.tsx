'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BlueButton } from '@/app/components/ui/BlueButton';
import { LanguageSwitcher } from '@/app/components/ui/LanguageSwitcher';
import { ThemeToggle } from '@/app/components/ui/ThemeToggle';

export function Navbar({ dict }: { dict: any }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-100 bg-white/80 px-6 py-4 backdrop-blur-md dark:border-dark-border dark:bg-dark-bg/80 sm:px-8 md:px-12">
      <div className="flex items-center gap-3">
        <div className="relative h-9 w-9 overflow-hidden rounded-full border border-slate-200/60 shadow-sm dark:border-dark-border">
          <Image
            src="/assets/about.jpg"
            alt={dict.site.name}
            fill
            sizes="36px"
            loading="eager"
            className="object-cover"
          />
        </div>
        <span className="font-serif text-[1.05rem] font-semibold tracking-wider text-blue-600">
          {dict.site.name}
        </span>
      </div>

      <ul className="hidden list-none gap-9 md:flex">
        {dict.nav.links.map((link: { label: string; href: string }) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-micro uppercase tracking-[0.18em] text-slate-500 transition-colors duration-300 hover:text-blue-600 dark:text-dark-muted dark:hover:text-blue-500"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <LanguageSwitcher />
        <BlueButton href="#speaking" className="hidden sm:inline-block">{dict.nav.bookNow}</BlueButton>
        <button
          onClick={() => setOpen(!open)}
          className="relative flex size-8 flex-col items-center justify-center gap-[4.5px] md:hidden"
          aria-label="Menu"
        >
          <span
            className={`block h-[2px] w-5 rounded-full bg-slate-600 transition-all duration-300 dark:bg-dark-text ${
              open ? 'translate-y-[6.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-5 rounded-full bg-slate-600 transition-all duration-300 dark:bg-dark-text ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-5 rounded-full bg-slate-600 transition-all duration-300 dark:bg-dark-text ${
              open ? '-translate-y-[6.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full flex flex-col border-b border-slate-100 bg-white/95 px-6 pb-6 pt-4 backdrop-blur-md dark:border-dark-border dark:bg-dark-bg/95 md:hidden">
          {dict.nav.links.map((link: { label: string; href: string }) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-micro uppercase tracking-[0.18em] text-slate-500 transition-colors duration-300 hover:text-blue-600 dark:text-dark-muted dark:hover:text-blue-500"
            >
              {link.label}
            </a>
          ))}
          <BlueButton href="#speaking" as="button" onClick={() => setOpen(false)} className="mt-3 w-full sm:hidden">
            {dict.nav.bookNow}
          </BlueButton>
        </div>
      )}
    </nav>
  );
}
