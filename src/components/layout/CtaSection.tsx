'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, PhoneCall } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

export default function CtaSection() {
  return (
    <section className="w-full bg-brand-red text-white py-16 md:py-20 relative overflow-hidden">
      {/* Structural Tech lines background */}
      <div className="absolute inset-0 industrial-grid opacity-5" />

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10 space-y-6">
        <ScrollReveal>
          <span className="block text-[10px] font-black uppercase tracking-widest text-brand-yellow mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight max-w-3xl mx-auto leading-tight">
            Looking for the Right Material Handling Solution?
          </h2>
          <p className="text-red-100 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Tell us what you need. Our team will help you configure the exact capacities, lift heights, and specifications required for your application.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <Link href="/contact?quote=true" className="w-full sm:w-auto">
            <Button variant="secondary" className="w-full sm:w-auto bg-brand-dark text-white hover:bg-black uppercase tracking-widest text-xs font-bold py-4 px-8 flex items-center justify-center gap-2">
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-brand-red uppercase tracking-widest text-xs font-bold py-4 px-8 flex items-center justify-center gap-2">
              <PhoneCall className="w-4 h-4" />
              <span>Talk to Patel</span>
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
