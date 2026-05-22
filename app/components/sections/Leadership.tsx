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
    <div className="group relative flex flex-col justify-between bg-white px-6 py-8 sm:p-8 lg:p-10 transition-all duration-500 hover:bg-slate-50/50">
      <div className="flex flex-col gap-3.5">
        <div className="flex items-center gap-3">
          <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-widest text-blue-600 uppercase">
            {num}
          </span>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-slate-200 transition-colors duration-400 group-hover:border-blue-600/35">
          <svg
            className="h-[18px] w-[18px] fill-none stroke-blue-600 stroke-[1.5]"
            viewBox="0 0 24 24"
          >
            <g>{icon}</g>
          </svg>
        </div>

        <div className="space-y-1">
          <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-light tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="font-sans text-xs sm:text-sm font-medium text-blue-600">
            {org}
          </p>
        </div>

        <p className="mt-1 text-sm font-light leading-relaxed text-slate-600">
          {desc}
        </p>
      </div>

      <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-blue-600 transition-all duration-300 opacity-100 translate-x-0 md:opacity-0 md:-translate-x-2 md:group-hover:opacity-100 md:group-hover:translate-x-0">
        <span>View Initiatives</span>
        <svg className="h-3 w-3 transition-transform duration-300 md:group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </div>
  );
}

export function Leadership() {
  return (
    <section className="relative bg-white py-16 sm:py-24 md:py-32 lg:py-36 border-b border-slate-100 overflow-hidden" id="leadership">
      <Container>

        <div className="mb-10 sm:mb-14 md:mb-18 lg:mb-24 text-slate-900">
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

        <div className="grid grid-cols-1 gap-px bg-slate-100 border-y border-slate-100 sm:grid-cols-2 md:grid-cols-3">
          {LEADERSHIP_CARDS.map((card, index) => (
            <LocalLeadershipCard key={index} {...card} index={index} />
          ))}
        </div>

      </Container>
    </section>
  );
}
