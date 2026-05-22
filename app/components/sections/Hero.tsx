import Image from 'next/image';
import { BlueButton } from '@/app/components/ui/BlueButton';
import { GhostButton } from '@/app/components/ui/GhostButton';
import { HERO_TAGLINE, HERO_HEADING_LINE1, HERO_HEADING_ACCENT, HERO_HEADING_LINE2, HERO_DESCRIPTION, SITE_NAME } from '@/app/constants/content';

export function Hero() {
  return (
    <section className="relative flex flex-col min-h-[calc(100vh-62px)] bg-slate-900 overflow-hidden md:grid md:grid-cols-[1fr_46%] lg:grid-cols-[1fr_43%]">

      {/* Modern Deep Blue Layered Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Rich Midnight Blue base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1528] via-[#0F2042] to-[#0A111F]" />
        
        {/* Soft Electric Sapphire light spill */}
        <div className="absolute -top-40 right-0 md:left-[20%] h-[500px] w-[500px] md:h-[700px] md:w-[700px] rounded-full bg-blue-600/[0.12] blur-[100px] md:blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-5%] h-[350px] w-[350px] rounded-full bg-cyan-500/[0.06] blur-[90px]" />
        
        {/* Luminescent technical micro-grid line structures */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]" />
      </div>

      {/* Left Content Column */}
      <div className="relative z-10 flex flex-col justify-center order-2 md:order-1 px-6 py-16 sm:px-12 md:py-24 md:pl-12 md:pr-10 lg:pl-20 lg:pr-14 xl:pl-28">

        {/* Tagline Accent */}
        <div className="mb-6 md:mb-10 flex animate-[fadeInUp_0.8s_both_0.1s] items-center gap-3 md:gap-4">
          <div className="h-[1px] w-[30px] md:w-[40px] bg-blue-400/80" />
          <span className="text-[10px] md:text-2xs uppercase tracking-[0.25em] md:tracking-[0.3em] font-semibold text-blue-400">
            {HERO_TAGLINE}
          </span>
        </div>

        {/* Dynamic Editorial Typography - Contrast adjusted for Blue backdrop */}
        <h1 className="mb-6 md:mb-8 font-serif text-[clamp(2.25rem,5.5vw,4rem)] font-light leading-[1.12] tracking-tight text-white animate-[fadeInUp_0.8s_both_0.2s]">
          {HERO_HEADING_LINE1}
          <br />
          <em className="font-serif italic text-blue-400 font-normal">{HERO_HEADING_ACCENT}</em>
          <br />
          {HERO_HEADING_LINE2}
        </h1>

        {/* Description Text */}
        <p className="mb-8 md:mb-12 max-w-[540px] text-[15px] font-light leading-[1.8] text-slate-300 animate-[fadeInUp_0.8s_both_0.3s] md:text-[16px]">
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
            {/* Added standard border overrides to keep ghost clear against dark blue canvas */}
            <GhostButton href="#about" className="w-full sm:w-auto justify-center text-center text-white border-white/20 hover:bg-white/10">
              Explore Journey
            </GhostButton>
          </div>
          <div className="w-full sm:w-auto">
            <GhostButton
              variant="blue"
              href="https://www.amazon.com/Electrochoc-R%C3%A9armer-l%C3%A9nergie-GUILLAUME-NIARFEIX/dp/274918567X"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center text-center text-blue-400 border-blue-400/30 hover:bg-blue-400/10"
            >
              Buy the Book
            </GhostButton>
          </div>
        </div>
      </div>

      {/* Right Media Column: Premium Framed Layout on Blue */}
      <div className="relative order-1 md:order-2 h-[50vh] min-h-[360px] w-full md:h-full md:min-h-screen border-b border-slate-800 md:border-b-0 md:border-l border-slate-800/60 bg-slate-950/20 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 flex items-center justify-center">
        
        {/* Outer Framer Container Element */}
        <div className="relative w-full h-full rounded-md border border-slate-700/50 bg-[#0E1B35]/90 p-2 sm:p-3 shadow-[0_12px_40px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col justify-between">
          
          {/* Inner Absolute Image Container */}
          <div className="absolute inset-2 sm:inset-3 rounded-sm overflow-hidden z-0 bg-slate-900">
            <Image
              src="/assets/hero.jpg"
              alt="Executive Portrait"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover object-center brightness-[1.02] contrast-[1.05] mix-blend-normal transition-transform duration-700 ease-out hover:scale-[1.02]"
            />
            {/* Dark contrast mask layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent mix-blend-multiply" />
          </div>

          {/* Spacer layout alignment */}
          <div className="relative z-10 pointer-events-none" />

          {/* Frosted Glass Information Display Card */}
          <div className="relative z-10 m-3 sm:m-4 backdrop-blur-md bg-slate-900/80 border border-slate-700/50 p-4 sm:p-5 rounded shadow-lg transition-all duration-500 hover:bg-slate-900 hover:border-blue-500/50">
            <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-blue-400 font-semibold mb-1">
              Featured Publication
            </p>
            <h3 className="font-serif text-sm sm:text-base md:text-md text-white font-light italic leading-tight">
              "Electrochoc" — Available Worldwide
            </h3>
          </div>

        </div>
      </div>

    </section>
  );
}