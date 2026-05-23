export function Footer({ dict }: { dict: any }) {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 bg-white px-6 py-10 md:flex-row md:px-12">
      <span className="font-serif text-[0.95rem] text-slate-600">{dict.site.name}</span>
      <span className="text-2xs tracking-wider text-slate-400">{dict.site.copyright}</span>
    </footer>
  );
}
