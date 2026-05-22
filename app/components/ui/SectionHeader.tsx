interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
}

export function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className="reveal-item flex flex-col items-start gap-4 opacity-0 transition-all duration-700 md:flex-row md:gap-16 translate-y-7 mb-10 sm:mb-14 md:mb-20">
      <div className="min-w-[100px] text-2xs tracking-[0.25em] uppercase text-blue-600 before:mb-3 before:block before:h-[0.5px] before:w-7 before:bg-blue-600 before:content-['']">
        {label}
      </div>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light leading-tight text-slate-900">
        {title}
      </h2>
    </div>
  );
}
