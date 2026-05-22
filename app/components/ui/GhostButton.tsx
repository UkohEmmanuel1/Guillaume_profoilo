interface GhostButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: 'default' | 'blue';
}

export function GhostButton({
  children,
  variant = 'default',
  className = '',
  ...props
}: GhostButtonProps) {
  const borderStyle =
    variant === 'blue'
      ? 'border-blue-600/20 text-blue-600 hover:bg-blue-50'
      : 'border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600';

  return (
    <a
      className={`rounded-sm border px-8 py-3 text-2xs font-medium uppercase tracking-[0.15em] transition-all duration-300 ${borderStyle} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
