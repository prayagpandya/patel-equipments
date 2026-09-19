import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus-ring cursor-pointer';
  
  const variants = {
    primary: 'bg-brand-red text-white hover:bg-red-800 active:bg-red-900 border border-transparent',
    secondary: 'bg-brand-dark text-white hover:bg-brand-charcoal active:bg-black border border-transparent',
    outline: 'bg-transparent text-brand-dark hover:bg-brand-soft border border-brand-border active:bg-gray-200',
    ghost: 'bg-transparent text-brand-dark hover:bg-brand-soft active:bg-gray-200 border border-transparent'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
