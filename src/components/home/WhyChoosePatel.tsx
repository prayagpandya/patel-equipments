'use client';

import React from 'react';
import * as Icons from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

interface ChooseItem {
  title: string;
  description: string;
  icon: string;
}

interface WhyChoosePatelProps {
  items: ChooseItem[];
}

export default function WhyChoosePatel({ items }: WhyChoosePatelProps) {
  return (
    <section className="w-full bg-brand-soft py-16 md:py-24 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <SectionHeading
          eyebrow="The Patel Advantage"
          title="Why Choose Patel Material Handling Equipment?"
          subtitle="We focus on mechanical integrity, reliable engineering, and long-term utility for heavy B2B application."
        />

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => {
            // Dynamically resolve icon from Lucide React
            const IconComponent = (Icons as any)[item.icon] || Icons.HelpCircle;

            return (
              <ScrollReveal
                key={idx}
                delay={idx * 0.05}
                className="bg-white border border-brand-border p-8 hover:border-brand-red transition-all duration-300 relative group"
              >
                {/* Tech Line Decor */}
                <div className="absolute top-0 left-0 w-1.5 h-0 bg-brand-red group-hover:h-full transition-all duration-300" />

                {/* Icon */}
                <div className="w-12 h-12 bg-red-50 flex items-center justify-center mb-6 border border-red-100 group-hover:bg-brand-red group-hover:border-transparent transition-colors">
                  <IconComponent className="w-6 h-6 text-brand-red group-hover:text-white transition-colors" />
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold text-brand-dark uppercase tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
