import { SITE_NAME, COPYRIGHT } from '@/app/constants/content';

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 bg-white px-6 py-10 md:flex-row md:px-12">
      <span className="font-serif text-[0.95rem] text-slate-600">{SITE_NAME}</span>
      <span className="text-2xs tracking-wider text-slate-400">{COPYRIGHT}</span>
    </footer>
  );
}
