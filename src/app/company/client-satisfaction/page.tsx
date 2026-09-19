import React from 'react';
import { Metadata } from 'next';
import { getCompanyInfo } from '@/services/companyService';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import CompanySidebar from '@/components/layout/CompanySidebar';
import { ShieldCheck, Check } from 'lucide-react';
import CtaSection from '@/components/layout/CtaSection';

export const metadata: Metadata = {
  title: 'Client Satisfaction | Patel Material Handling Equipment',
  description: 'How we ensure customer satisfaction: application review, clear specification commitments, and post-dispatch spares assistance.',
};

export default async function ClientSatisfactionPage() {
  const info = await getCompanyInfo();

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Company', href: '/company' }, { label: 'Client Satisfaction' }]} />

        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          <CompanySidebar />

          <div className="flex-1 space-y-8">
            <SectionHeading
              align="left"
              eyebrow="Customer Relations"
              title="Client Satisfaction"
              subtitle="Our client relationships are based on supply transparency, detailed specifications, and responsive support."
              className="!mb-6"
            />

            <div className="border border-brand-border bg-brand-soft p-6 flex items-start gap-4 max-w-xl">
              <ShieldCheck className="w-10 h-10 text-brand-red shrink-0" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold uppercase tracking-wider text-brand-dark">
                  No Over-Promising
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  We supply equipment designed for factory operations. If a custom length or height falls outside safe mechanical loads, we will recommend modifications rather than accept a design destined for failure.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {info.clientSatisfactionPoints?.map((pt, idx) => (
                <div key={idx} className="border border-brand-border p-6 bg-white space-y-2 hover:border-brand-red transition-colors">
                  <h4 className="text-xs font-black uppercase tracking-wider text-brand-red flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-red" />
                    {pt.title}
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
}
