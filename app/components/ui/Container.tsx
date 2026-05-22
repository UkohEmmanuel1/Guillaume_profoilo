interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Container({ children, className = '', style }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-[1200px] px-6 md:px-12 ${className}`} style={style}>
      {children}
    </div>
  );
}
