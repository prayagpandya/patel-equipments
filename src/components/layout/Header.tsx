'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown } from 'lucide-react';
import { primaryNav } from '@/data/navigation';
import { company } from '@/data/company';
import UtilityBar from './UtilityBar';
import MobileMenu from './MobileMenu';
import Button from '@/components/ui/Button';

export default function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  // Handle scroll to sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar */}
      <UtilityBar />

      {/* Main Navbar */}
      <header
        className={`w-full z-40 transition-all duration-200 ${
          isSticky
            ? 'fixed top-0 bg-white shadow-md border-b border-brand-border py-1.5'
            : 'relative bg-white border-b border-brand-border py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 flex justify-between items-center gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 min-w-0 group flex-1 sm:flex-initial">
            <Image
              src="/patel_equipments_logo.webp"
              alt="Patel Material Handling Equipment Logo"
              width={150}
              height={96}
              className="w-14 sm:w-20 md:w-28 h-auto object-contain transition-transform duration-200 group-hover:scale-105 shrink-0"
              priority
            />
            <div className="flex flex-col justify-center border-l border-brand-border pl-2 sm:pl-3 ml-0.5 sm:ml-1 min-w-0">
              <span className="text-[11px] sm:text-sm md:text-lg font-black text-brand-dark leading-tight tracking-tight uppercase group-hover:text-brand-red transition-colors duration-200 line-clamp-2 sm:line-clamp-none">
                {company.name}
              </span>
              <span className="hidden sm:inline text-[10px] md:text-xs text-gray-500 font-bold tracking-wider uppercase mt-0.5 truncate">
                {company.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {primaryNav.filter(item => item.label !== 'Contact').map((item, idx) => {
              const hasChildren = item.children && item.children.length > 0;
              const isActive = (() => {
                if (item.href === '/') {
                  return pathname === '/';
                }
                if (item.href === '/products') {
                  return pathname.startsWith('/products');
                }
                if (item.label === 'Resources') {
                  return (
                    pathname === '/company/corporate-brochure' ||
                    pathname === '/company/corporate-video' ||
                    pathname === '/company/corporate-presentation' ||
                    pathname === '/company/news' ||
                    pathname === '/company/careers'
                  );
                }
                if (item.label === 'Company') {
                  const isResourceRoute =
                    pathname === '/company/corporate-brochure' ||
                    pathname === '/company/corporate-video' ||
                    pathname === '/company/corporate-presentation' ||
                    pathname === '/company/news' ||
                    pathname === '/company/careers';
                  return (pathname.startsWith('/company') && !isResourceRoute) || pathname === '/distributor-enquiry';
                }
                return pathname.startsWith(item.href);
              })();

              return (
                <div
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => hasChildren && setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors focus-ring hover:text-brand-red ${
                      isActive ? 'text-brand-red' : 'text-brand-dark'
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasChildren && <ChevronDown className="w-3.5 h-3.5 ml-1 text-brand-muted group-hover:text-brand-red transition-colors" />}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {hasChildren && item.mega && activeDropdown === idx && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[560px] z-50">
                      <div className="bg-white border border-brand-border shadow-xl p-6 grid grid-cols-2 gap-x-6 gap-y-4">
                        <div className="col-span-2 border-b border-brand-border pb-2 mb-1">
                          <span className="text-xs font-extrabold tracking-widest text-brand-red uppercase">
                            Product Range
                          </span>
                        </div>
                        {item.children?.map((child, cIdx) => (
                          <Link
                            key={cIdx}
                            href={child.href}
                            className="text-xs font-semibold text-brand-dark hover:text-brand-red transition-colors py-1.5 border-b border-gray-50 flex justify-between items-center group/child"
                          >
                            <span>{child.label}</span>
                            <span className="text-gray-300 group-hover/child:text-brand-red transition-colors">→</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Regular Dropdown */}
                  {hasChildren && !item.mega && activeDropdown === idx && (
                    <div className="absolute left-0 top-full pt-2 w-60 z-50">
                      <div className="bg-white border border-brand-border shadow-xl p-3 flex flex-col space-y-1">
                        {item.children?.map((child, cIdx) => {
                          const isChildActive = pathname === child.href;
                          return (
                            <Link
                              key={cIdx}
                              href={child.href}
                              className={`px-3 py-2 text-xs font-bold uppercase tracking-wider hover:bg-brand-soft hover:text-brand-red transition-colors ${
                                isChildActive ? 'text-brand-red bg-brand-soft' : 'text-brand-dark'
                              }`}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            {/* Header Contact Button */}
            <Link href="/contact" className="hidden sm:inline-block">
              <Button size="sm" className="font-extrabold uppercase tracking-wider text-xs px-4 py-2.5">
                Contact Us
              </Button>
            </Link>

            {/* Mobile Hamburger menu */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-1.5 sm:p-2 text-brand-dark hover:text-brand-red hover:bg-brand-soft transition-colors cursor-pointer rounded-none focus-ring shrink-0"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Offset for sticky header if fixed */}
      {isSticky && <div className="h-[57px] md:h-[65px]" />}
    </>
  );
}
