interface PortraitCardProps {
  name: string;
  title: string;
  initials: string;
}

export function PortraitCard({ name, title, initials }: PortraitCardProps) {
  return (
    <div className="flex aspect-[3/4] w-full flex-col items-center justify-center overflow-hidden rounded-sm border border-slate-200 bg-gradient-to-br from-slate-100 to-white relative">
      <span className="font-serif text-[5rem] font-light tracking-widest text-blue-600/10">
        {initials}
      </span>
      <div className="absolute inset-x-0 bottom-0 border-t border-slate-200 bg-gradient-to-t from-white/90 to-transparent p-6">
        <div className="font-serif text-base font-normal text-slate-900">{name}</div>
        <div className="mt-1 text-2xs uppercase tracking-[0.15em] text-blue-600">{title}</div>
      </div>
    </div>
  );
}
