import Image from 'next/image';
import { Container } from '@/app/components/ui/Container';
import { AWARD_TITLE, AWARD_SUBTITLE, AWARD_DATE } from '@/app/constants/content';

const SLIDING_IMAGES = [
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
        @keyframes rawMarquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .marquee-track-container:hover .marquee-moving-track {
          animation-play-state: paused !important;
        }
      `}} />

      <section id="award" className="relative overflow-hidden border-y border-slate-100 bg-white px-6 py-16 sm:py-20 lg:p-10">

        <div className="pointer-events-none absolute top-1/2 left-[-10%] z-0 h-[400px] w-[400px] rounded-full bg-blue-600/[0.01] blur-[80px]" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.3fr] md:items-center lg:grid-cols-[1.1fr_1.3fr]">

            <div className="order-1 flex flex-col items-center gap-8 md:order-2">
              <div className="marquee-track-container relative w-full max-w-[500px] overflow-hidden px-4 py-4"
                style={{
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                  maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                }}
              >
                <div
                  className="marquee-moving-track flex w-max gap-6"
                  style={{ animation: 'rawMarquee 25s linear infinite' }}
                >
                  {SLIDING_IMAGES.map((img, index) => (
                    <div
                      key={index}
                      className="relative h-[200px] w-[150px] shrink-0 overflow-hidden rounded-md border border-slate-200 bg-slate-50 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 150px, 150px"
                        className="object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <span className="text-center text-[10px] font-medium uppercase tracking-[0.25em] text-slate-400">
                République Française
              </span>
            </div>

            <div className="order-2 md:order-1">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-6 bg-blue-600/60" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-600">
                  Recognition · 2025
                </span>
              </div>

              <h2 className="mb-4 font-serif text-[clamp(1.6rem,2.5vw,3rem)] font-light leading-tight tracking-tight text-slate-900">
                {AWARD_TITLE}
              </h2>

              <p className="mb-6 font-serif text-[1.05rem] italic leading-relaxed text-slate-500">
                {AWARD_SUBTITLE}
              </p>

              <p className="mb-8 max-w-[540px] text-[15px] font-light leading-[1.8] text-slate-600">
                On November 21, 2025, Guillaume Niarfeix was awarded the prestigious Chevalier de
                l&apos;Ordre National du Mérite by the French Republic — one of France&apos;s highest
                civilian honours.
              </p>

              <div className="inline-flex items-center gap-3 rounded-sm border border-blue-600/15 bg-blue-600/[0.02] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600 shadow-[0_1px_2px_rgba(37,99,235,0.02)]">
                <span aria-hidden="true" className="text-xs">⚜</span>
                <span>{AWARD_DATE}</span>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}