import Image from 'next/image';
import { Container } from '@/app/components/ui/Container';
import { AWARD_TITLE, AWARD_SUBTITLE, AWARD_DATE } from '@/app/constants/content';

const GALLERY = [
  { src: '/assets/image_1.jpg', alt: 'Award Ceremony Document' },
  { src: '/assets/image_2.jpg', alt: 'Chevalier Medal Close-up' },
  { src: '/assets/image_3.jpg', alt: 'Official French Republic Insignia' },
  { src: '/assets/image_1.jpg', alt: 'Award Ceremony Document' },
  { src: '/assets/image_2.jpg', alt: 'Chevalier Medal Close-up' },
  { src: '/assets/image_3.jpg', alt: 'Official French Republic Insignia' },
];

export function Award() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes awardMarquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .marquee-wrap:hover .marquee-rail {
          animation-play-state: paused !important;
        }
      `}} />

      <section id="award" className="relative overflow-hidden border-y border-slate-100 bg-white py-20 sm:py-28 md:py-36">

        <div className="pointer-events-none absolute top-1/3 left-[-5%] z-0 h-[500px] w-[500px] rounded-full bg-blue-600/[0.012] blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-16 lg:gap-24">

            {/* ─── VISUAL COLUMN ─── */}
            <div className="order-1 flex flex-col items-center gap-8 md:order-2">

              {/* Medallion focal point */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-blue-600/15 bg-blue-600/[0.02] shadow-[0_0_0_6px_rgba(37,99,235,0.04)]">
                <span className="text-2xl tracking-[0.15em] text-blue-600 font-medium">⚜</span>
              </div>

              {/* Marquee gallery rail */}
              <div className="marquee-wrap relative w-full max-w-[540px] overflow-hidden"
                style={{
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                  maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                }}
              >
                <div
                  className="marquee-rail flex w-max gap-8"
                  style={{ animation: 'awardMarquee 30s linear infinite' }}
                >
                  {GALLERY.map((img, index) => (
                    <div
                      key={index}
                      className="relative h-[260px] w-[200px] shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-[0_4px_16px_rgba(15,23,42,0.04)] transition-shadow duration-500 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)]"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 200px, 240px"
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 border border-white/10 rounded-lg pointer-events-none" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-slate-300" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                  République Française
                </span>
                <span className="h-px w-6 bg-slate-300" />
              </div>
            </div>

            {/* ─── TEXT COLUMN ─── */}
            <div className="order-2 md:order-1">

              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-6 bg-blue-600/60" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-600">
                  Recognition · 2025
                </span>
              </div>

              <h2 className="mb-5 font-serif text-[clamp(1.8rem,3vw,3.2rem)] font-light leading-[1.15] tracking-tight text-slate-900">
                {AWARD_TITLE}
              </h2>

              <p className="mb-6 font-serif text-[1.1rem] italic leading-relaxed text-slate-500">
                {AWARD_SUBTITLE}
              </p>

              <p className="mb-10 max-w-[520px] text-[15px] font-light leading-[1.8] text-slate-600">
                On November 21, 2025, Guillaume Niarfeix was awarded the prestigious Chevalier de
                l&apos;Ordre National du Mérite by the French Republic — one of France&apos;s highest
                civilian honours.
              </p>

              <div className="inline-flex items-center gap-3 rounded-md border border-blue-600/15 bg-blue-600/[0.02] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                <span className="text-sm">⚜</span>
                <span>{AWARD_DATE}</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}