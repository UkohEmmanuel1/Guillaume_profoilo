import Image from 'next/image';
import { NAV_LINKS, SITE_NAME } from '@/app/constants/content';
import { BlueButton } from '@/app/components/ui/BlueButton';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-100 bg-white/80 px-6 py-4 backdrop-blur-md sm:px-8 md:px-12">

      <div className="flex items-center gap-3">
        <div className="relative h-9 w-9 overflow-hidden rounded-full border border-slate-200/60 shadow-sm">
          <Image
            src="/assets/about.jpg"
            alt={`${SITE_NAME}`}
            fill
            sizes="36px"
            className="object-cover"
          />
        </div>
        <span className="font-serif text-[1.05rem] font-semibold tracking-wider text-blue-600">
          {SITE_NAME}
        </span>
      </div>

      <ul className="hidden list-none gap-9 md:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-micro uppercase tracking-[0.18em] text-slate-500 transition-colors duration-300 hover:text-blue-600"
            >
              {link.display || link.label}
            </a>
          </li>
        ))}
      </ul>

      <BlueButton href="#speaking">Book Now</BlueButton>

    </nav>
  );
}