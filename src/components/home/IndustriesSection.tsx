'use client';

import React from 'react';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import { Industry } from '@/types';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

interface IndustriesSectionProps {
  industries: Industry[];
}

export default function IndustriesSection({ industries }: IndustriesSectionProps) {
  // Show 6 industries on homepage, link to full list
  const featuredIndustries = industries.slice(0, 6);

  return (
    <section className="w-full bg-white py-16 md:py-24 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Heavy Machinery Matched to Your Sector"
          subtitle="Our equipment is operational across diverse industrial environments, handling chemical hazards, hygienic foods, and heavy engineering loads."
        />

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredIndustries.map((ind, idx) => {
            const IconComponent = (Icons as any)[ind.icon] || Icons.Building;
            
            return (
              <ScrollReveal
                key={ind.slug}
                delay={idx * 0.05}
                className="flex items-start bg-brand-soft border border-brand-border p-6 hover:bg-white hover:border-brand-red transition-all duration-300"
              >
                <div className="mr-5 p-3 bg-white border border-brand-border text-brand-dark flex items-center justify-center shrink-0">
                  <IconComponent className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-dark uppercase tracking-wider mb-2">
                    {ind.name}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {ind.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/company/industries">
            <Button variant="outline" className="font-bold uppercase tracking-widest px-8 py-3 bg-white">
              <span>View All Industries</span>
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
