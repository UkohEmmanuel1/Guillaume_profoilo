'use client';

import { useEffect, useRef } from 'react';

export function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-7');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );

    if (ref.current) {
      ref.current.querySelectorAll('.reveal-item').forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
