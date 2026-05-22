import { NAV_LINKS, SITE_NAME } from '@/app/constants/content';
import { BlueButton } from '@/app/components/ui/BlueButton';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 bg-white/85 px-6 py-4 backdrop-blur-md md:px-12">
      <span className="font-serif text-[1.15rem] font-semibold tracking-wider text-blue-600">
        {SITE_NAME}
      </span>

      <ul className="hidden list-none gap-9 md:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-micro uppercase tracking-[0.18em] text-slate-500 transition-colors duration-300 hover:text-blue-600"
            >
              {link.display}
            </a>
          </li>
        ))}
      </ul>

      <BlueButton href="#speaking">Book Now</BlueButton>
    </nav>
  );
}
