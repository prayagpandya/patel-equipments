'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { primaryNav } from '@/data/navigation';
import Button from '@/components/ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white border-l border-brand-border flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-brand-border bg-brand-soft">
              <span className="text-sm font-bold uppercase tracking-widest text-brand-dark">Navigation Menu</span>
              <button
                onClick={onClose}
                className="text-brand-dark hover:text-brand-red p-2 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
              {primaryNav.map((item, idx) => {
                const hasChildren = item.children && item.children.length > 0;
                const isExpanded = expandedIndex === idx;

                return (
                  <div key={idx} className="border-b border-gray-100 pb-1">
                    {hasChildren ? (
                      <div>
                        <button
                          onClick={() => toggleExpand(idx)}
                          className="w-full flex justify-between items-center py-3 px-4 text-left font-bold text-brand-dark uppercase tracking-wider text-sm hover:bg-brand-soft transition-colors cursor-pointer"
                        >
                          <span>{item.label}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-brand-red" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-brand-muted" />
                          )}
                        </button>
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-brand-soft/50 pl-4 py-1"
                            >
                              {item.children?.map((child, cIdx) => (
                                <Link
                                  key={cIdx}
                                  href={child.href}
                                  onClick={onClose}
                                  className="block py-2.5 px-4 text-sm font-medium text-brand-charcoal hover:text-brand-red transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block py-3 px-4 font-bold text-brand-dark uppercase tracking-wider text-sm hover:bg-brand-soft hover:text-brand-red transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-brand-border bg-brand-soft space-y-3">
              <Link href="/contact?quote=true" onClick={onClose} className="block w-full">
                <Button className="w-full py-3 uppercase tracking-wider text-sm font-bold">
                  Get a Quote
                </Button>
              </Link>
              <Link href="/contact" onClick={onClose} className="block w-full">
                <Button variant="outline" className="w-full py-3 uppercase tracking-wider text-sm font-bold bg-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
