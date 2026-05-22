import Image from 'next/image';
import { Container } from '@/app/components/ui/Container';

// Production asset array - Duplicated explicitly for a seamless tracking loop
const SCROLLING_IMAGES = [
  { src: '/assets/about.jpg', alt: 'Keynote Speaker Opening Session' },
  { src: '/assets/hero.jpg', alt: 'Panel Discussion Presentation' },
  { src: '/assets/about.jpg', alt: 'Executive Q&A Workshop' },
  // Exact duplicates to prevent snapping jumps on loop reload
  { src: '/assets/about.jpg', alt: 'Keynote Speaker Opening Session Loop' },
  { src: '/assets/hero.jpg', alt: 'Panel Discussion Presentation Loop' },
  { src: '/assets/about.jpg', alt: 'Executive Q&A Workshop Loop' },
];

const EXPERTISE_TOPICS = [
  { id: '01', title: 'Government Relations & Policy' },
  { id: '02', title: 'International Trade & Economics' },
  { id: '03', title: 'ESG & Sustainable Business' },
  { id: '04', title: 'Startup Ecosystem Development' },
  { id: '05', title: 'Franco-African Business Relations' },
  { id: '06', title: 'MSME Growth Strategies' },
];

export function SpeakingExpertise() {
  return (
    <>
      {/* 1. Hardware Accelerated Marquee Keyframes Injection */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes verticalMarquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(0, -50%, 0); }
        }
        .speaking-marquee-window:hover .speaking-moving-track {
          animation-play-state: paused !important;
        }
      `}} />

      {/* 2. Main Layout Canvas */}
      <section id="speaking-expertise" className="relative bg-white py-16 sm:py-24 border-b border-slate-100 overflow-hidden">
        
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute top-1/2 right-[-5%] h-[400px] w-[400px] rounded-full bg-blue-600/[0.01] blur-[100px]" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-[1.1fr_1.3fr] lg:gap-16 xl:gap-20">
            
            {/* Left Column: Rolling Infinite Motion Image Track Frame */}
            <div className="w-full">
              <div className="relative p-3 bg-slate-50 rounded-xl border border-slate-200/60 shadow-[0_8px_30px_rgba(241,245,249,0.5)]">
                
                {/* Fixed Viewport Window with Top-and-Bottom Fade Masking */}
                <div 
                  className="speaking-marquee-window relative h-[320px] sm:h-[400px] w-full overflow-hidden rounded-lg bg-slate-100 border border-slate-200/40"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
                  }}
                >
                  {/* Moving Continuous Track */}
                  <div 
                    className="speaking-moving-track flex flex-col gap-3 p-2"
                    style={{ animation: 'verticalMarquee 22s linear infinite' }}
                  >
                    {SCROLLING_IMAGES.map((img, index) => (
                      <div 
                        key={index} 
                        className="relative h-[160px] sm:h-[200px] w-full shrink-0 overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 550px"
                          className="object-cover object-center brightness-[1.01] contrast-[1.01] transition-transform duration-500 hover:scale-[1.02]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Image Footer Caption */}
                <div className="mt-3 px-1 flex items-center justify-between text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                  <span>Keynote Highlights</span>
                  <span>Live Scroll Track</span>
                </div>
              </div>
            </div>

            {/* Right Column: Speaking Expertise Content Info Layout */}
            <div className="w-full">
              
              {/* Header block */}
              <div className="mb-8 flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5 text-blue-600">
                  <svg className="h-5 w-5 fill-none stroke-current stroke-[1.75]" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                  </svg>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                    Engagements
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-slate-900 leading-tight">
                  Speaking Expertise
                </h2>
              </div>

              {/* 2-Column Grid Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {EXPERTISE_TOPICS.map((topic) => (
                  <div
                    key={topic.id}
                    className="group flex items-center gap-3.5 rounded-lg border border-slate-200/70 bg-white px-5 py-4 shadow-[0_1px_3px_rgba(241,245,249,0.4)] hover:border-blue-600/30 hover:bg-slate-50/40 transition-all duration-300"
                  >
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500 group-hover:bg-blue-600 transition-colors duration-300" />
                    
                    <span className="text-[13px] sm:text-sm font-medium text-slate-700 tracking-tight leading-snug group-hover:text-slate-900 transition-colors duration-300">
                      {topic.title}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </Container>
      </section>
    </>
  );
}