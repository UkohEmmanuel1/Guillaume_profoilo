'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, id, className = '', ...props }: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div>
      {label && (
        <label htmlFor={inputId} className="sr-only">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`w-full rounded-sm border border-slate-200 bg-white p-3 px-4 text-[13px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 ${className}`}
        {...props}
      />
    </div>
  );
}
