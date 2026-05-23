import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import { ScrollReveal } from '@/app/components/ScrollReveal';
import { Navbar } from '@/app/components/layout/Navbar';
import { Footer } from '@/app/components/layout/Footer';
import { Hero } from '@/app/components/sections/Hero';
import { Ticker } from '@/app/components/sections/Ticker';
import { StatsRow } from '@/app/components/sections/StatsRow';
import { About } from '@/app/components/sections/About';
import { Leadership } from '@/app/components/sections/Leadership';
import { Award } from '@/app/components/sections/Award';
import { Book } from '@/app/components/sections/Book';
import { Speaking } from '@/app/components/sections/Speaking';
import { Vision } from '@/app/components/sections/Vision';
import { Contact } from '@/app/components/sections/Contact';

export default async function PortfolioPage({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <ScrollReveal>
      <div className="min-h-screen select-none bg-white text-slate-900 selection:bg-blue-600/20 selection:text-blue-900">
        <Navbar dict={dict} />
        <Hero dict={dict} />
        <Ticker items={dict.ticker.items} />
        <StatsRow stats={dict.stats.items} />
        <About dict={dict} />
        <Leadership dict={dict} />
        <Award dict={dict} />
        <Book dict={dict} />
        <Speaking dict={dict} />
        <Vision dict={dict} />
        <Contact dict={dict} />
        <Footer dict={dict} />
      </div>
    </ScrollReveal>
  );
}
