import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = 'center',
  className = ''
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center' : 'text-left';
  
  return (
    <div className={`mb-12 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="block text-xs font-bold uppercase tracking-widest text-brand-red mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight mb-4 break-words">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-brand-muted font-normal leading-relaxed break-words">
          {subtitle}
        </p>
      )}
    </div>
  );
}
