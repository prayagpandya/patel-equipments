import React from 'react';
import { Metadata } from 'next';
import { getMilestones } from '@/services/companyService';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import CompanySidebar from '@/components/layout/CompanySidebar';
import { Calendar } from 'lucide-react';
import CtaSection from '@/components/layout/CtaSection';

export const metadata: Metadata = {
  title: 'Company Milestones | Patel Material Handling Equipment',
  description: 'Timeline of company registration, manufacturing expansion, and operations development at Patel Material Handling Equipment.',
};

export default async function CompanyMilestonesPage() {
  const milestones = await getMilestones();

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Company', href: '/company' }, { label: 'Milestones' }]} />

        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          <CompanySidebar />

          <div className="flex-1 space-y-8">
            <SectionHeading
              align="left"
              eyebrow="Milestones"
              title="Company Timeline"
              subtitle="Key steps in the setup and development of Patel Material Handling Equipment."
              className="!mb-6"
            />

            {/* Timeline component */}
            <div className="relative border-l border-brand-border ml-4 pl-8 space-y-12">
              {milestones.map((m, idx) => (
                <div key={idx} className="relative">
                  {/* Circle Indicator */}
                  <span className="absolute -left-12 top-0.5 bg-brand-red text-white w-8 h-8 rounded-full flex items-center justify-center border border-white font-black text-xs">
                    {idx + 1}
                  </span>
                  <div className="space-y-2">
                    <span className="inline-block text-xs font-black uppercase tracking-widest text-brand-red border border-brand-red px-2 py-0.5 bg-white">
                      Year: {m.year}
                    </span>
                    <h3 className="text-lg font-black text-brand-dark uppercase tracking-tight">
                      {m.title}
                    </h3>
                    <p className="text-sm text-brand-muted leading-relaxed max-w-xl">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-brand-muted italic leading-relaxed border-t border-brand-soft pt-4 mt-8">
              *Note: Factual dates correspond to the business registry records of the company since 2017.
            </p>
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
}
