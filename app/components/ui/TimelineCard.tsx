interface TimelineCardProps {
  year: string;
  role: string;
  org: string;
}

export function TimelineCard({ year, role, org }: TimelineCardProps) {
  return (
    <div className="group relative">
      <div className="absolute -left-[calc(2.2rem+4px)] top-1.5 h-[7px] w-[7px] rounded-full bg-blue-600" />
      <div className="mb-1 text-2xs uppercase tracking-[0.2em] text-blue-600">{year}</div>
      <div className="font-serif text-[1.05rem] font-medium text-slate-900">{role}</div>
      <div className="text-xsm font-light text-slate-500">{org}</div>
    </div>
  );
}
