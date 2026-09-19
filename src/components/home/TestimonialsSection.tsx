'use client';

import React from 'react';
import Link from 'next/link';
import { Quote, CheckCircle } from 'lucide-react';
import { Testimonial } from '@/types';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  note: string;
}

export default function TestimonialsSection({ testimonials, note }: TestimonialsSectionProps) {
  return (
    <section className="w-full bg-brand-soft py-16 md:py-24 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <SectionHeading
          eyebrow="Client Reviews"
          title="What Our Partners Say"
          subtitle="Feedback from plant operations heads, stores supervisors, and logistics managers who rely on Patel material handling equipment."
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((test, idx) => (
            <ScrollReveal
              key={test.id}
              delay={idx * 0.05}
              className="bg-white border border-brand-border p-8 flex flex-col justify-between relative shadow-sm"
            >
              {/* Quote Mark Icon */}
              <Quote className="absolute top-6 right-8 w-12 h-12 text-gray-100 rotate-180 pointer-events-none" />

              <div>
                <p className="text-brand-dark italic text-base leading-relaxed mb-6 relative z-10">
                  "{test.quote}"
                </p>
              </div>

              <div className="flex justify-between items-center border-t border-brand-soft pt-4">
                <div>
                  <h4 className="text-sm font-black text-brand-dark uppercase tracking-wider">
                    {test.author}
                  </h4>
                  <p className="text-xs text-brand-muted font-medium">
                    {test.role} — {test.location}
                  </p>
                </div>
                {test.verified && (
                  <span className="flex items-center text-xs text-green-600 font-bold uppercase tracking-wider">
                    <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                    Verified
                  </span>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Disclosure Notice */}
        <p className="text-center text-xs text-brand-muted italic max-w-xl mx-auto">
          *Note: {note}
        </p>

      </div>
    </section>
  );
}
