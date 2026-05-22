interface TickerProps {
  items: string[];
}

export function Ticker({ items }: TickerProps) {
  return (
    <div className="group/ticker overflow-hidden border-y border-slate-200 bg-slate-50 py-3">
      <div className="flex w-max animate-ticker gap-12 whitespace-nowrap hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="flex shrink-0 items-center text-2xs uppercase tracking-[0.2em] text-slate-500"
          >
            <span className="mr-4 text-blue-400">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
