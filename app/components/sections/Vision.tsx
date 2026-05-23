import { Container } from '@/app/components/ui/Container';

export function Vision({ dict }: { dict: any }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 py-20 sm:py-24 md:py-32" id="vision">
      <span
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[18vw] font-bold tracking-tighter text-blue-600/[0.02] whitespace-nowrap"
        aria-hidden="true"
      >
        AFRICA
      </span>

      <Container>
        <div className="reveal-item mx-auto max-w-[760px] text-center opacity-0 transition-all duration-700 translate-y-7 relative z-10">
          <span className="mb-8 block text-2xs uppercase tracking-[0.25em] text-blue-600">
            {dict.vision.label}
          </span>

          <div className="mb-7 font-serif text-[clamp(1.4rem,3vw,2.3rem)] font-light italic leading-[1.75] text-slate-900">
            {dict.vision.quote}
          </div>
        </div>
      </Container>
    </section>
  );
}
