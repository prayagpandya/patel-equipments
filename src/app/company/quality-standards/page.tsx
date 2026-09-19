import React from 'react';
import { Metadata } from 'next';
import { getQualitySections } from '@/services/companyService';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import CompanySidebar from '@/components/layout/CompanySidebar';
import { ShieldCheck, CheckCircle } from 'lucide-react';
import CtaSection from '@/components/layout/CtaSection';

export const metadata: Metadata = {
  title: 'Quality Standards | Patel Material Handling Equipment',
  description: 'Explore the manufacturing standards, inspection checks, and material selections that govern fabrication at Patel Material Handling Equipment.',
};

export default async function QualityStandardsPage() {
  const sections = await getQualitySections();

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Company', href: '/company' }, { label: 'Quality Standards' }]} />

        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          <CompanySidebar />

          <div className="flex-1 space-y-8">
            <SectionHeading
              align="left"
              eyebrow="Quality Commitment"
              title="Manufacturing & Quality Standards"
              subtitle="Quality is treated as a production requirement rather than a final check. Each stage of manufacture has a defined acceptance point."
              className="!mb-6"
            />

            {/* Quality Checklist Intro */}
            <div className="border border-brand-border bg-brand-soft p-6 flex flex-col sm:flex-row gap-4 items-start">
              <ShieldCheck className="w-10 h-10 text-brand-red shrink-0" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold uppercase tracking-wider text-brand-dark">
                  Quality Management Guidelines
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  We build lifting and moving equipment destined for hazardous factory floors, process bins, and warehouses. Our engineering focuses on thick steel channel dimensions, hydraulic seal integrity, and component load ratings.
                </p>
              </div>
            </div>

            {/* Quality sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections.map((section, idx) => (
                <div key={idx} className="border border-brand-border bg-white p-6 space-y-4 shadow-sm hover:border-brand-red transition-colors group">
                  <h3 className="text-base font-bold text-brand-dark uppercase tracking-tight group-hover:text-brand-red transition-colors border-b border-brand-soft pb-2">
                    {section.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {section.description}
                  </p>
                  <ul className="space-y-2 text-xs font-semibold text-brand-dark pt-1">
                    {section.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-red mr-2 mt-0.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
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
