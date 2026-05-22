import Image from 'next/image';
import { BlueButton } from '@/app/components/ui/BlueButton';
import { GhostButton } from '@/app/components/ui/GhostButton';
import { HERO_TAGLINE, HERO_HEADING_LINE1, HERO_HEADING_ACCENT, HERO_HEADING_LINE2, HERO_DESCRIPTION, SITE_NAME } from '@/app/constants/content';

export function Hero() {
  return (
    <section className="relative flex flex-col min-h-[calc(100vh-62px)] bg-white overflow-hidden md:grid md:grid-cols-[1fr_45%] lg:grid-cols-[1fr_42%]">

      {/* Background Micro-Grid & Ambient Accent */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.015)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]" />
        <div className="absolute -top-40 right-0 md:left-[20%] h-[400px] w-[400px] md:h-[600px] md:w-[600px] rounded-full bg-blue-600/[0.02] blur-[80px] md:blur-[120px]" />
      </div>

      {/* Left Content Column */}
      <div className="relative z-10 flex flex-col justify-center order-2 md:order-1 px-6 py-16 sm:px-12 md:py-24 md:pl-12 md:pr-8 lg:pl-24 lg:pr-16 xl:pl-32">

        {/* Tagline Accent */}
        <div className="mb-6 md:mb-10 flex animate-[fadeInUp_0.8s_both_0.1s] items-center gap-3 md:gap-4">
          <div className="h-[1px] w-[30px] md:w-[40px] bg-blue-600/60" />
          <span className="text-[10px] md:text-2xs uppercase tracking-[0.25em] md:tracking-[0.3em] font-medium text-blue-600">
            {HERO_TAGLINE}
          </span>
        </div>

        {/* Dynamic Editorial Typography */}
        <h1 className="mb-6 md:mb-8 font-serif text-[clamp(2.25rem,6vw,4.25rem)] font-light leading-[1.15] tracking-tight text-slate-900 animate-[fadeInUp_0.8s_both_0.2s]">
          {HERO_HEADING_LINE1}
          <br />
          <em className="font-serif italic text-blue-600 font-normal">{HERO_HEADING_ACCENT}</em>
          <br />
          {HERO_HEADING_LINE2}
        </h1>

        {/* Description Text */}
        <p className="mb-8 md:mb-12 max-w-[540px] text-[15px] font-light leading-[1.75] text-slate-600 animate-[fadeInUp_0.8s_both_0.3s] md:text-[16px] md:leading-[1.75]">
          {HERO_DESCRIPTION}
        </p>

        {/* Fully Responsive CTA Button Group */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 animate-[fadeInUp_0.8s_both_0.4s]">
          <div className="w-full sm:w-auto">
            <BlueButton href="#speaking" className="w-full sm:w-auto justify-center text-center">
              Book for Speaking
            </BlueButton>
          </div>
          <div className="w-full sm:w-auto">
            <GhostButton href="#about" className="w-full sm:w-auto justify-center text-center">
              Explore Journey
            </GhostButton>
          </div>
          <div className="w-full sm:w-auto">
            <GhostButton
              variant="blue"
              href="https://www.amazon.com/Electrochoc-R%C3%A9armer-l%C3%A9nergie-GUILLAUME-NIARFEIX/dp/274918567X"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center text-center"
            >
              Buy the Book
            </GhostButton>
          </div>
        </div>
      </div>

      {/* Right Media Column */}
      <div className="relative order-1 md:order-2 h-[45vh] min-h-[320px] w-full md:h-full md:min-h-screen border-b border-slate-100 md:border-b-0 md:border-l bg-slate-50 overflow-hidden">
        <Image
          src="/assets/hero.jpg"
          alt="Executive Portrait"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 45vw"
          className="object-cover object-center brightness-[1.01]"
        />

        {/* Subtle Bottom Light Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />

        {/* Floating Context Card */}
        <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-8 md:right-8 lg:left-12 lg:right-12 z-10 backdrop-blur-md bg-white/85 border border-white/60 p-5 md:p-6 rounded-lg shadow-sm transition-transform duration-500 hover:translate-y-[-4px]">
          <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-blue-600 font-medium mb-1">
            Featured Publication
          </p>
          <h3 className="font-serif text-base md:text-lg text-slate-900 font-light italic">
            "Electrochoc" — Available Worldwide
          </h3>
        </div>
      </div>

    </section>
  );
}
