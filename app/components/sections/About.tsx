import Image from 'next/image';
import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { SITE_NAME, ABOUT_PARAGRAPHS } from '@/app/constants/content';

export function About() {
  return (
    <section className="relative bg-white py-20 sm:py-28 md:py-32 lg:py-36 border-b border-slate-100 overflow-hidden" id="about">

      {/* Background Ambient Spotlight Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.012] blur-[120px]" />
        <div className="absolute bottom-10 left-[-5%] h-[300px] w-[300px] rounded-full bg-slate-100/50 blur-[80px]" />
      </div>

      <Container className="relative z-10">

        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-slate-900">
          <SectionHeader
            label="Biography"
            title={
              <>
                A Visionary Shaping
                <br className="hidden sm:block" />
                <em className="font-serif italic text-blue-600 font-normal">Africa&apos;s Energy Future</em>
              </>
            }
          />
        </div>

        {/* Master Responsive Asymmetric Content Grid Matrix */}
        <div className="grid items-start gap-12 md:grid-cols-[1fr_1.4fr] lg:grid-cols-[1fr_1.5fr] md:gap-16 lg:gap-24">

          {/* Left Column: Premium Framed Gallery Portrait */}
          <div className="w-full max-w-sm mx-auto md:max-w-none md:sticky md:top-28">
            <div className="relative p-3 bg-slate-50 rounded-lg border border-slate-200/60 shadow-[0_8px_30px_rgb(241,245,249,0.6)]">
              
              {/* Inner Double-Matted Image Wrapper */}
              <div className="relative overflow-hidden rounded border border-slate-200 bg-white p-2">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-slate-100">
                  <Image
                    src="/assets/about.jpg"
                    alt={`${SITE_NAME} portrait`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 35vw, 400px"
                    className="object-cover brightness-[1.01] contrast-[1.01] grayscale-[10%] hover:grayscale-0 transition-all duration-700 ease-out hover:scale-[1.02]"
                    priority
                  />
                  {/* Elegant micro light overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Minimalist Structural Caption / Signature Accent */}
              
              
            </div>
          </div>

          {/* Right Column: Narrative Typography Block */}
          <div className="w-full">
            <div className="space-y-6 sm:space-y-8 lg:max-w-[620px]">
              {ABOUT_PARAGRAPHS.map((p, index) => (
                <p
                  key={index}
                  className="text-[15px] md:text-[16px] font-light leading-[1.85] text-slate-600 tracking-normal drop-shadow-[0_0_1px_rgba(255,255,255,1)]"
                  dangerouslySetInnerHTML={{ __html: p.text }}
                />
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}