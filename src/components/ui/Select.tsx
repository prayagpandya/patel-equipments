import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
}

export default function Select({
  label,
  options,
  error,
  className = '',
  id,
  ...props
}: SelectProps) {
  const selectId = id || label.toLowerCase().replace(/\s+/g, '-');
  const baseClasses = `w-full border p-3 text-brand-dark focus:outline-none focus:border-brand-red transition-colors text-base rounded-none appearance-none bg-white cursor-pointer ${
    error ? 'border-red-500 bg-red-50/20' : 'border-brand-border'
  }`;

  return (
    <div className={`w-full relative ${className}`}>
      <label htmlFor={selectId} className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1.5">
        {label} {props.required && <span className="text-brand-red">*</span>}
      </label>
      <div className="relative">
        <select
          id={selectId}
          className={baseClasses}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-brand-muted">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600 font-medium">
          {error}
        </p>
      )}
    </div>
  );
}
