'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { companyFacts, companyIntro, manufacturingRange } from '@/data/company';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function AboutPatel() {
  return (
    <section className="w-full bg-brand-soft py-16 md:py-24 border-b border-brand-border" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Info */}
        <div className="lg:col-span-7 space-y-6">
          <SectionHeading
            align="left"
            eyebrow="Company Overview"
            title="Ahmedabad-Based Manufacturer Focused on Material Movement"
            subtitle={companyIntro}
            className="mb-6"
          />
          
          <ScrollReveal delay={0.1}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-2">
              {manufacturingRange.map((item) => (
                <li key={item} className="flex items-start text-sm text-brand-dark font-semibold">
                  <Check className="w-4 h-4 text-brand-red mr-2.5 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="flex flex-wrap gap-4 pt-4">
            <Link href="/company">
              <Button variant="secondary" className="uppercase tracking-widest text-xs font-bold py-3.5 px-6 flex items-center justify-center gap-2">
                <span>About Company</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/company/infrastructure">
              <Button variant="outline" className="uppercase tracking-widest text-xs font-bold py-3.5 px-6 bg-white">
                <span>Our Infrastructure</span>
              </Button>
            </Link>
          </ScrollReveal>
        </div>

        {/* Right Side Factsheet */}
        <div className="lg:col-span-5">
          <ScrollReveal
            delay={0.15}
            className="bg-white border border-brand-border shadow-md"
          >
            <h3
              id="about-heading"
              className="border-b border-brand-border px-6 py-4 text-xs font-bold uppercase tracking-wider text-brand-muted bg-brand-soft"
            >
              Company Factsheet
            </h3>
            <dl className="divide-y divide-brand-border">
              {companyFacts.map((fact) => (
                <div key={fact.label} className="flex justify-between gap-6 px-6 py-3.5 text-sm">
                  <dt className="text-brand-muted font-medium">{fact.label}</dt>
                  <dd className="text-right font-bold text-brand-dark">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
