import Image from 'next/image';
import { NAV_LINKS, SITE_NAME } from '@/app/constants/content';

// Built local, light-mode ready Blue Button to resolve missing module errors
function LocalBlueButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-100 active:scale-[0.98]"
    >
      {children}
    </a>
  );
}

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-100 bg-white/80 px-6 py-4 backdrop-blur-md sm:px-8 md:px-12">
      
      {/* Brand Identity: Fully Rounded Editorial Logo */}
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-200/60 shadow-sm">
          <Image 
            src="/assets/about.jpg" 
            alt={`${SITE_NAME} Logo`} 
            fill
            sizes="40px"
            className="object-cover" 
          />
        </div>
        {/* Optional text identifier to anchor branding space */}
        <span className="font-serif text-sm font-light tracking-tight text-slate-900 hidden sm:block">
          {SITE_NAME}
        </span>
      </div>

      {/* Balanced Navigation Center Links */}
      <ul className="hidden list-none items-center gap-8 md:flex m-0 p-0">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500 transition-colors duration-300 hover:text-blue-600"
            >
              {link.display || link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Action Trigger Block */}
      <div>
        <LocalBlueButton href="#speaking">Book Now</LocalBlueButton>
      </div>

    </nav>
  );
}