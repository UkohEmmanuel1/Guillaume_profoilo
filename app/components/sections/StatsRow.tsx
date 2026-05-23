import { AnimatedCounter } from '@/app/components/ui/AnimatedCounter';

export function StatsRow({ stats }: { stats: any[] }) {
  return (
    <div className="grid grid-cols-2 border-b border-slate-200 md:grid-cols-4">
      {stats.map((stat: any, index: number) => (
        <div
          key={index}
          className="reveal-item border-r border-slate-200 px-6 py-8 sm:p-8 lg:p-10 opacity-0 transition-all duration-700 last:border-none hover:bg-blue-50 translate-y-7"
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="flex items-baseline gap-1 font-serif text-[2.5rem] font-light leading-none text-blue-600 md:text-[2.8rem]">
            {!stat.isSpecial ? (
              <>
                <AnimatedCounter targetValue={stat.target || 0} />
                <span className="text-2xl">{stat.suffix}</span>
              </>
            ) : (
              <span className="text-2xl text-slate-900">Ordre</span>
            )}
          </div>
          <div className="mt-2 text-2xs uppercase tracking-[0.15em] text-slate-500">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
