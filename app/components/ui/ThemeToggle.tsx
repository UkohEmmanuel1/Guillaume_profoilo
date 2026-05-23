'use client';

import { useEffect, useState } from 'react';

type Theme = 'system' | 'light' | 'dark';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored) setTheme(stored);
    applyTheme(stored || 'system');
  }, []);

  function applyTheme(t: Theme) {
    const isDark = t === 'dark' || (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', isDark);
  }

  function cycle() {
    const order: Theme[] = ['system', 'light', 'dark'];
    const next = order[(order.indexOf(theme) + 1) % order.length];
    setTheme(next);
    localStorage.setItem('theme', next);
    applyTheme(next);
  }

  const icons: Record<Theme, string> = {
    system: '◑',
    light: '☀',
    dark: '☾',
  };

  return (
    <button
      onClick={cycle}
      className="px-2 py-1 text-sm transition-colors duration-200 hover:text-blue-600 text-slate-400"
      title={`Theme: ${theme}`}
    >
      {icons[theme]}
    </button>
  );
}
