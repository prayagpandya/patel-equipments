import React from 'react';
import { Metadata } from 'next';
import { getCompanyInfo } from '@/services/companyService';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import CompanySidebar from '@/components/layout/CompanySidebar';
import { Target, Compass } from 'lucide-react';
import CtaSection from '@/components/layout/CtaSection';

export const metadata: Metadata = {
  title: 'Mission Statement | Patel Material Handling Equipment',
  description: 'Our commitment: to manufacture and supply material handling equipment that meets working requirements, at a competitive price with consistent quality.',
};

export default async function CompanyMissionPage() {
  const info = await getCompanyInfo();

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Company', href: '/company' }, { label: 'Mission' }]} />

        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          <CompanySidebar />

          <div className="flex-1 space-y-8">
            <SectionHeading
              align="left"
              eyebrow="Firm Commitment"
              title="Our Mission"
              subtitle="To manufacture and supply material handling equipment that meets the working requirements of our customers, at a competitive price, with consistent quality and reliable delivery."
              className="!mb-6"
            />

            <div className="bg-brand-soft border border-brand-border p-8 flex flex-col md:flex-row gap-6 items-start">
              <Target className="w-12 h-12 text-brand-red shrink-0" />
              <div className="space-y-4">
                <blockquote className="text-base md:text-lg italic font-semibold text-brand-dark leading-relaxed">
                  "{info.mission}"
                </blockquote>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-black uppercase tracking-widest text-brand-dark border-b border-brand-border pb-2">
                Operational Commitments
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {info.missionPoints?.map((pt, idx) => (
                  <div key={idx} className="border border-brand-border p-6 bg-white space-y-2 hover:border-brand-red transition-colors">
                    <h4 className="text-xs font-black uppercase tracking-wider text-brand-red">
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
      </div>
      <CtaSection />
    </>
  );
}
