import { ScrollReveal } from '@/app/components/ScrollReveal';
import { Navbar } from '@/app/components/layout/Navbar';
import { Footer } from '@/app/components/layout/Footer';
import { Hero } from '@/app/components/sections/Hero';
import { Ticker } from '@/app/components/sections/Ticker';
import { StatsRow } from '@/app/components/sections/StatsRow';
import { About } from '@/app/components/sections/About';
import { Leadership } from '@/app/components/sections/Leadership';
//import { Award } from '@/app/components/sections/Award';
import { SpeakingExpertise } from '@/app/components/sections/Award';
import { Book } from '@/app/components/sections/Book';
import { Speaking } from '@/app/components/sections/Speaking';
import { Vision } from '@/app/components/sections/Vision';
import { Contact } from '@/app/components/sections/Contact';
import { TICKER_ITEMS } from '@/app/constants/content';

export default function PortfolioPage() {
  return (
    <ScrollReveal>
      <div className="min-h-screen select-none bg-white text-slate-900 selection:bg-blue-600/20 selection:text-blue-900">
        <Navbar />
        <Hero />
        <Ticker items={TICKER_ITEMS} />
        <StatsRow />
        <About />
        <Leadership />
        <SpeakingExpertise />
        <Book />
        <Speaking />
        <Vision />
        <Contact />
        <Footer />
      </div>
    </ScrollReveal>
  );
}
