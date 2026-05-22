import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { LEADERSHIP_CARDS } from '@/app/constants/content';

interface LocalLeadershipCardProps {
  num: string;
  title: string;
  org: string;
  desc: string;
  icon: React.ReactNode;
  index: number;
}

function LocalLeadershipCard({ num, title, org, desc, icon, index }: LocalLeadershipCardProps) {
  return (
    <div className="group relative flex flex-col justify-between bg-white px-6 py-8 sm:p-8 lg:p-10 transition-all duration-500 ease-out overflow-hidden hover:shadow-[0_20px_40px_rgba(15,23,42,0.03)]">
      
      {/* Dynamic Slide-Up Background Accent */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out pointer-events-none" />

      {/* Structural Minimalist Watermark Number */}
      <span className="absolute right-6 top-4 font-serif text-5xl font-light text-slate-100 select-none transition-colors duration-500 group-hover:text-blue-100/40 z-0">
        {num}
      </span>

      <div className="relative z-10 flex flex-col gap-5">
        
        {/* Animated Icon Framer Block */}
        <div className="flex h-11 w-11 items-center justify-center rounded-md border border-slate-200/80 bg-white transition-all duration-500 ease-out shadow-sm group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:shadow-md group-hover:shadow-blue-200">
          <svg
            className="h-5 w-5 fill-none stroke-blue-600 group-hover:stroke-white stroke-[1.5] transition-colors duration-500"
            viewBox="0 0 24 24"
          >
            <g>{icon}</g>
          </svg>
        </div>

        {/* Text Details Stack */}
        <div className="space-y-1.5">
          <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-light tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-600">
            {org}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm font-light leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
          {desc}
        </p>
      </div>

      {/* Dynamic Action Trigger Ribbon */}
      <div className="relative z-10 mt-8 flex items-center gap-1.5 text-xs font-medium text-blue-600 transition-all duration-300 opacity-100 translate-x-0 md:opacity-0 md:-translate-x-2 md:group-hover:opacity-100 md:group-hover:translate-x-0">
        <span>View Initiatives</span>
        <svg className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
      
    </div>
  );
}

export function Leadership() {
  return (
    <section className="relative bg-white py-20 sm:py-28 md:py-32 lg:py-36 border-b border-slate-100 overflow-hidden" id="leadership">
      <Container>

        {/* Section Header Wrapper */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-slate-900">
          <SectionHeader
            label="Positions"
            title={
              <>
                Executive
                <br />
                <em className="font-serif italic text-blue-600 font-normal">Leadership Portfolio</em>
              </>
            }
          />
        </div>

        {/* Fluid Adaptive Grid Canvas */}
        <div className="grid grid-cols-1 gap-px bg-slate-100 border-y border-slate-100 sm:grid-cols-2 md:grid-cols-3">
          {LEADERSHIP_CARDS.map((card, index) => (
            <LocalLeadershipCard key={index} {...card} index={index} />
          ))}
        </div>

      </Container>
    </section>
  );
}