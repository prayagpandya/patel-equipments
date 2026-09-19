'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ResourcesSidebar() {
  const pathname = usePathname();

  const links = [
    { label: 'Corporate Video', href: '/company/corporate-video' },
    { label: 'Corporate Brochure', href: '/company/corporate-brochure' },
    { label: 'Corporate Presentation', href: '/company/corporate-presentation' },
    { label: 'News Coverage', href: '/company/news' },
    { label: 'Careers', href: '/company/careers' }
  ];

  return (
    <aside className="w-full lg:w-64 border border-brand-border bg-brand-soft p-4 space-y-1 shrink-0 lg:sticky lg:top-24 lg:self-start max-h-[calc(100vh-7rem)] overflow-y-auto">
      <div className="border-b border-brand-border pb-3 mb-2 px-3">
        <span className="text-[10px] font-black uppercase tracking-widest text-brand-red">
          Resources Navigation
        </span>
      </div>
      <nav className="flex flex-col space-y-1">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors hover:text-brand-red ${
                isActive
                  ? 'text-brand-red bg-white border-l-2 border-brand-red font-black pl-2'
                  : 'text-brand-dark hover:bg-white/50'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
