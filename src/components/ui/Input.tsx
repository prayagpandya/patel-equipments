import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
  textarea?: boolean;
  rows?: number;
  showCount?: boolean;
  currentLength?: number;
}

export default function Input({
  label,
  error,
  helperText,
  textarea = false,
  rows = 4,
  showCount = false,
  currentLength,
  className = '',
  id,
  maxLength,
  ...props
}: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
  const baseClasses = `w-full border p-3 text-brand-dark focus:outline-none focus:border-brand-red transition-colors text-base rounded-none ${
    error ? 'border-red-500 bg-red-50/20' : 'border-brand-border bg-white'
  }`;

  const currentCount = currentLength !== undefined
    ? currentLength
    : (typeof props.value === 'string' ? props.value.length : 0);

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-1.5">
        <label htmlFor={inputId} className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
          {label} {props.required && <span className="text-brand-red">*</span>}
        </label>
        {showCount && maxLength && (
          <span className={`text-[11px] font-medium ${
            currentCount >= maxLength ? 'text-red-600 font-bold' : 'text-brand-muted'
          }`}>
            {currentCount} / {maxLength}
          </span>
        )}
      </div>

      {textarea ? (
        <textarea
          id={inputId}
          rows={rows}
          maxLength={maxLength}
          className={baseClasses}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={inputId}
          maxLength={maxLength}
          className={baseClasses}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}

      {error ? (
        <p className="mt-1 text-xs text-red-600 font-medium">
          {error}
        </p>
      ) : helperText ? (
        <p className="mt-1 text-[11px] text-brand-muted">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
