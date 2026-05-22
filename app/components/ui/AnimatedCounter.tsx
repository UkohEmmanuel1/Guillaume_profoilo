'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  targetValue: number;
}

export function AnimatedCounter({ targetValue }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            let start: number | null = null;
            const duration = 1800;
            const startValue = targetValue > 100 ? Math.round(targetValue * 0.9) : 0;

            const step = (timestamp: number) => {
              if (!start) start = timestamp;
              const progress = Math.min((timestamp - start) / duration, 1);
              const easeOut = 1 - Math.pow(1 - progress, 3);
              setCount(Math.round(startValue + (targetValue - startValue) * easeOut));
              if (progress < 1) requestAnimationFrame(step);
            };

            requestAnimationFrame(step);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [targetValue]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}
