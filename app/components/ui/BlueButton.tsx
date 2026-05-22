import React from 'react';

type BlueButtonProps =
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { as?: 'a' })
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { as: 'button' });

export function BlueButton(props: BlueButtonProps) {
  const { className = '', as, children, ...rest } = props;
  const base =
    'inline-block rounded-sm bg-blue-600 px-8 py-3 text-2xs font-medium uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:ring-offset-1 focus:ring-offset-white';

  if (as === 'button') {
    const { ...buttonProps } = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button className={`${base} ${className}`} {...buttonProps}>
        {children}
      </button>
    );
  }

  const { ...anchorProps } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
  return (
    <a className={`${base} ${className}`} {...anchorProps}>
      {children}
    </a>
  );
}
