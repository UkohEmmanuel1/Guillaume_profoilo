interface BookCoverProps {
  title: string;
  subtitle: string;
  author: string;
}

export function BookCover({ title, subtitle, author }: BookCoverProps) {
  return (
    <div className="flex w-[250px] shrink-0 justify-center [perspective:1200px]">
      <div className="relative h-[360px] w-[250px] [transform:rotateY(-16deg)_rotateX(4deg)] [transform-style:preserve-3d] transition-transform duration-500 hover:[transform:rotateY(-8deg)_rotateX(2deg)]">
        <div className="absolute left-[-16px] top-0 h-full w-4 rounded-l-sm border border-blue-600/12 bg-gradient-to-r from-blue-700 to-blue-600" />
        <div className="flex h-full flex-col rounded-r-sm rounded-l-[1px] border border-blue-600/18 border-l-[2.5px] border-l-blue-600/25 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 relative">
          <span className="mb-auto text-[2.5rem] text-blue-600 opacity-70">⚡</span>
          <div>
            <div className="mb-1 font-serif text-[1.7rem] font-semibold tracking-wide text-slate-900">
              {title}
            </div>
            <div className="mb-5 text-2xs uppercase tracking-[0.18em] text-slate-500">
              {subtitle}
            </div>
            <div className="text-2xs uppercase tracking-[0.12em] text-slate-400">{author}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
