import React from 'react';
import { Metadata } from 'next';
import { getTestimonials } from '@/services/companyService';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import CompanySidebar from '@/components/layout/CompanySidebar';
import { Quote, CheckCircle } from 'lucide-react';
import CtaSection from '@/components/layout/CtaSection';

export const metadata: Metadata = {
  title: 'Client Reviews & Testimonials | Patel Material Handling Equipment',
  description: 'Verified client reviews and operational feedback from operations heads and warehouse managers utilizing Patel material handling equipment.',
};

export default async function TestimonialsPage() {
  const testimonialsData = await getTestimonials();

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Company', href: '/company' }, { label: 'Testimonials' }]} />

        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          <CompanySidebar />

          <div className="flex-1 space-y-8">
            <SectionHeading
              align="left"
              eyebrow="Reviews"
              title="Partner Testimonials"
              subtitle="Operational reviews and feedback from warehouse operations heads, production engineers, and industrial machinery dealers across India."
              className="!mb-6"
            />

            {/* Testimonials cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonialsData.items.map((test) => (
                <div key={test.id} className="bg-brand-soft border border-brand-border p-6 flex flex-col justify-between relative shadow-sm">
                  <Quote className="absolute top-4 right-4 w-10 h-10 text-brand-border select-none pointer-events-none rotate-180" />
                  <div>
                    <p className="text-brand-dark italic text-sm leading-relaxed mb-6">
                      "{test.quote}"
                    </p>
                  </div>
                  <div className="flex justify-between items-center border-t border-brand-border pt-3 mt-2 text-xs">
                    <div>
                      <h4 className="font-black text-brand-dark uppercase tracking-wider">{test.author}</h4>
                      <p className="text-[11px] text-brand-muted font-medium">{test.role} — {test.location}</p>
                    </div>
                    {test.verified && (
                      <span className="flex items-center text-[10px] text-green-600 font-bold uppercase tracking-wider">
                        <CheckCircle className="w-3.5 h-3.5 mr-1 text-green-500" />
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <p className="text-xs text-brand-muted italic leading-relaxed border-t border-brand-soft pt-4 max-w-xl">
              *{testimonialsData.note}
            </p>
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
}
