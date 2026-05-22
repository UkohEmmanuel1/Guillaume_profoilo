import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { BlueButton } from '@/app/components/ui/BlueButton';
import { BookCover } from '@/app/components/ui/BookCover';
import { BOOK_TITLE, BOOK_SUBTITLE, BOOK_AUTHOR } from '@/app/constants/content';

export function Book() {
  return (
    <section className="border-b border-slate-200 py-20 sm:py-24 md:py-32" id="book">
      <Container>
        <SectionHeader
          label="Publication"
          title={
            <>
              The Book That
              <br />
              <em className="font-serif not-italic text-blue-600">Changes the Conversation</em>
            </>
          }
        />

        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.3fr] md:gap-24">
          <div className="reveal-item flex justify-center opacity-0 transition-all duration-700 translate-y-7">
            <BookCover title={BOOK_TITLE} subtitle={BOOK_SUBTITLE} author={BOOK_AUTHOR} />
          </div>

          <div
            className="reveal-item opacity-0 transition-all duration-700 translate-y-7"
            style={{ transitionDelay: '100ms' }}
          >
            <h3 className="mb-5 font-serif text-[clamp(1.4rem,2.5vw,2rem)] font-light leading-snug text-slate-900">
              A manifesto for{' '}
              <em className="font-serif not-italic text-blue-600">energy sovereignty</em> and the
              future of power in Africa
            </h3>

            <p className="mb-9 text-[14px] leading-loose text-slate-600">
              In <em className="italic">Electrochoc: Réarmer l&apos;énergie</em>, Guillaume Niarfeix
              delivers a bold and unflinching analysis of the global energy crisis.
            </p>

            <div className="mb-9 flex flex-wrap gap-4">
              <BlueButton
                href="https://www.amazon.com/Electrochoc-R%C3%A9armer-l%C3%A9nergie-GUILLAUME-NIARFEIX/dp/274918567X"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
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
