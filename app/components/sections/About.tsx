import Image from 'next/image';
import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { SITE_NAME, ABOUT_PARAGRAPHS, TIMELINE } from '@/app/constants/content';

function LocalTimelineCard({ year, title, company, description }: { year: string; title: string; company?: string; description: string }) {
  return (
    <div className="group relative flex flex-col gap-1.5 transition-all duration-300">
      <div className="absolute -left-[31px] sm:-left-[43px] top-1.5 h-2.5 w-2.5 rounded-full border border-blue-500 bg-white group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300" />

      <span className="font-serif text-xs md:text-sm font-medium tracking-wider text-blue-600">
        {year}
      </span>

      <h4 className="font-serif text-base md:text-lg font-light tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
        {title} {company && <span className="text-slate-400 font-sans text-xs md:text-sm font-light">| {company}</span>}
      </h4>

      <p className="text-xs md:text-sm font-light leading-[1.75] text-slate-500 max-w-[500px]">
        {description}
      </p>
    </div>
  );
}

export function About() {
  return (
    <section className="relative bg-white py-20 sm:py-28 md:py-36 border-b border-slate-100 overflow-hidden" id="about">

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.015] blur-[100px]" />
      </div>

      <Container className="relative z-10">

        <div className="mb-12 md:mb-20 text-slate-900">
          <SectionHeader
            label="About"
            title={
              <>
                A Visionary Shaping
                <br className="hidden sm:block" />
                <em className="font-serif italic text-blue-600 font-normal">Africa&apos;s Energy Future</em>
              </>
            }
          />
        </div>

        <div className="grid items-start gap-12 md:grid-cols-[1fr_1.5fr] lg:grid-cols-[1fr_1.6fr] md:gap-16 lg:gap-24">

          <div className="reveal-item w-full max-w-sm mx-auto md:max-w-none md:sticky md:top-28 opacity-0 transition-all duration-700 translate-y-7">
            <div className="relative p-2.5 bg-slate-50/80 rounded-md border border-slate-100 shadow-md shadow-slate-200/40">
              <div className="overflow-hidden rounded-sm bg-slate-200">
                <Image
                  src="/assets/about.jpg"
                  alt={`${SITE_NAME} portrait`}
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-sm object-cover grayscale-[15%] hover:grayscale-0 contrast-[1.02] scale-100 hover:scale-[1.02] transition-all duration-700 ease-out"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="w-full">

            <div className="space-y-6 md:space-y-8 mb-16 md:mb-20">
              {ABOUT_PARAGRAPHS.map((p, index) => (
                <p
                  key={index}
                  className="reveal-item text-[15px] md:text-[16px] font-light leading-[1.8] text-slate-600 opacity-0 transition-all duration-700 translate-y-7"
                  style={{ transitionDelay: `${index * 100}ms` }}
                  dangerouslySetInnerHTML={{ __html: p.text }}
                />
              ))}
            </div>

            <div
              className="reveal-item relative flex flex-col gap-10 border-l [border-image:linear-gradient(to_bottom,rgba(37,99,235,0.4)_0%,rgba(241,245,249,0.8)_100%)_1_100%] pl-6 sm:pl-9 opacity-0 transition-all duration-700 translate-y-7"
              style={{ transitionDelay: `${ABOUT_PARAGRAPHS.length * 100}ms` }}
            >
              {TIMELINE.map((entry, index) => (
                <LocalTimelineCard key={index} {...entry} />
              ))}
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
