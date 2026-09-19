import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav className={`flex py-4 text-brand-muted text-sm font-medium ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center hover:text-brand-red transition-colors">
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-1" />
            {item.href ? (
              <Link href={item.href} className="hover:text-brand-red transition-colors capitalize">
                {item.label}
              </Link>
            ) : (
              <span className="text-brand-dark font-semibold capitalize" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
