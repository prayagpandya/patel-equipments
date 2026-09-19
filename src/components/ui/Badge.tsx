import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'red' | 'dark' | 'yellow' | 'gray';
  className?: string;
}

export default function Badge({
  children,
  variant = 'gray',
  className = ''
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center px-2 py-0.5 text-xs font-semibold uppercase tracking-wider border rounded-none';
  
  const variants = {
    red: 'bg-red-50 text-brand-red border-red-200',
    dark: 'bg-brand-dark text-white border-transparent',
    yellow: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    gray: 'bg-brand-soft text-brand-muted border-brand-border'
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
