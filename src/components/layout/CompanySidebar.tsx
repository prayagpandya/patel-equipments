'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CompanySidebar() {
  const pathname = usePathname();

  const links = [
    { label: 'About Patel', href: '/company' },
    { label: 'Company Profile', href: '/company/profile' },
    { label: 'Quality Standards', href: '/company/quality-standards' },
    { label: 'Vision Statement', href: '/company/vision' },
    { label: 'Mission Statement', href: '/company/mission' },
    { label: 'About Director', href: '/company/director' },
    { label: 'Our Team', href: '/company/team' },
    { label: 'Company Milestones', href: '/company/milestones' },
    { label: 'Infrastructure & Plant', href: '/company/infrastructure' },
    { label: 'Client Satisfaction', href: '/company/client-satisfaction' },
    { label: 'Testimonials', href: '/company/testimonials' },
    { label: 'Industries Catered', href: '/company/industries' },
    { label: 'Major Markets', href: '/company/major-markets' },
    { label: 'Distributor Enquiry', href: '/distributor-enquiry' }
  ];

  return (
    <aside className="w-full lg:w-64 border border-brand-border bg-brand-soft p-4 space-y-1 shrink-0 lg:sticky lg:top-24 lg:self-start max-h-[calc(100vh-7rem)] overflow-y-auto">
      <div className="border-b border-brand-border pb-3 mb-2 px-3">
        <span className="text-[10px] font-black uppercase tracking-widest text-brand-red">
          Company Navigation
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
