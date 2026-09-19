'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { infrastructureSections } from '@/data/company';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const FACTORY_IMAGE = "/6f97ae80-f0b8-479c-9421-25df682e7399.jpg";

export default function InfrastructurePreview() {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-b border-brand-border" aria-labelledby="infra-heading">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <SectionHeading
          eyebrow="Manufacturing Plant"
          title="Fabrication, Hydraulics, and Assembly Under One Roof"
          subtitle="The unit at Shreeji Estate, near Naroda GIDC, is laid out for sequential movement from raw steel to finished, function-tested equipment."
          className="mb-12"
        />
        
        <div id="infra-heading" className="sr-only">
          Manufacturing and infrastructure
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left image */}
          <div className="lg:col-span-7">
            <ScrollReveal
              delay={0.1}
              className="relative w-full aspect-[16/10] bg-brand-soft border border-brand-border overflow-hidden"
            >
              <Image
                src={FACTORY_IMAGE}
                alt="Fabrication workshop with welding bays and partially assembled material handling equipment frames"
                fill
                sizes="(min-width: 1024px) 720px, 92vw"
                className="object-cover"
              />
            </ScrollReveal>
          </div>

          {/* Right listing */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal
              delay={0.15}
              className="divide-y divide-brand-border border-y border-brand-border"
            >
              {infrastructureSections.slice(0, 4).map((section) => (
                <div key={section.title} className="py-4">
                  <h3 className="text-base font-bold text-brand-dark uppercase tracking-tight">
                    {section.title}
                  </h3>
                  <p className="mt-1 text-xs md:text-sm text-brand-muted leading-relaxed">
                    {section.description}
                  </p>
                </div>
              ))}
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <Link href="/company/infrastructure">
                <Button variant="secondary" className="uppercase tracking-widest text-xs font-bold py-3.5 px-6 flex items-center justify-center gap-2">
                  <span>See the Facility</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
