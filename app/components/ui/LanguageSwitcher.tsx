'use client';

import { usePathname, useRouter } from 'next/navigation';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const current = pathname.startsWith('/en') ? 'en' : 'fr';
  const target = current === 'fr' ? 'en' : 'fr';

  function toggle() {
    const nextPath = pathname.replace(/^\/[a-z]{2}/, `/${target}`);
    router.push(nextPath);
  }

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1 px-2 py-1 text-2xs font-semibold uppercase tracking-wider text-slate-400 transition-colors duration-200 hover:text-blue-600"
    >
      <span className={current === 'fr' ? 'text-blue-600' : ''}>FR</span>
      <span className="text-slate-300">|</span>
      <span className={current === 'en' ? 'text-blue-600' : ''}>EN</span>
    </button>
  );
}
