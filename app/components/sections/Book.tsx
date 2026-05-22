import Image from 'next/image';
import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { BlueButton } from '@/app/components/ui/BlueButton';
import { BOOK_TITLE, BOOK_SUBTITLE } from '@/app/constants/content';

export function Book() {
  return (
    <section className="relative bg-white border-b border-slate-100 py-16 sm:py-24 md:py-32 overflow-hidden" id="book">
      
      {/* Background Micro Accent Spotlight */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/3 left-[40%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.01] blur-[120px]" />
      </div>

      <Container className="relative z-10">

        <div className="mb-12 md:mb-20 text-slate-900">
          <SectionHeader
            label="Publication"
            title={
              <>
                The Book That
                <br className="hidden sm:block" />
                <em className="font-serif italic text-blue-600 font-normal">Changes the Conversation</em>
              </>
            }
          />
        </div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16 lg:gap-24">

          <div className="flex justify-center order-1 md:order-2">
            <div className="relative group w-full max-w-[280px] sm:max-w-[320px] aspect-[2/3] p-4 bg-slate-50/50 border border-slate-100 rounded-2xl shadow-[0_15px_40px_rgba(226,232,240,0.6)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] transition-all duration-700 ease-out">

              <div className="relative w-full h-full rounded-sm overflow-hidden shadow-[5px_5px_20px_rgba(15,23,42,0.18)] border border-slate-200/40 transform group-hover:scale-[1.015] group-hover:-rotate-1 transition-transform duration-500 ease-out">
                <Image
                  src="/assets/book.jpg"
                  alt={`Official Publication Cover for ${BOOK_TITLE} by Guillaume Niarfeix`}
                  fill
                  priority
                  sizes="(max-width: 768px) 280px, 320px"
                  className="object-cover object-center"
                />
                <div className="absolute top-0 bottom-0 left-0 w-3.5 bg-gradient-to-r from-black/25 via-black/5 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 z-10 pointer-events-none" />
              </div>

            </div>
          </div>

          <div className="order-2 md:order-1">

            <h3 className="mb-6 font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-light leading-[1.25] tracking-tight text-slate-900">
              A manifesto for{' '}
              <em className="font-serif italic text-blue-600 font-normal">energy sovereignty</em> and the
              future of power in Africa
            </h3>

            <div className="space-y-4 mb-8 text-[15px] md:text-[16px] font-light leading-[1.8] text-slate-600 max-w-[540px]">
              <p>
                In <em className="italic font-normal text-slate-800">Electrochoc: Réarmer l&apos;énergie</em>,
                Guillaume Niarfeix delivers a bold, unflinching strategic analysis of the global energy architecture.
              </p>
              <p className="text-sm text-slate-500 font-light">
                {BOOK_SUBTITLE}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <BlueButton
                href="https://www.amazon.com/Electrochoc-R%C3%A9armer-l%C3%A9nergie-GUILLAUME-NIARFEIX/dp/274918567X"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center text-center"
              >
                Order on Amazon
              </BlueButton>
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}