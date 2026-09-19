import React from 'react';
import { Metadata } from 'next';
import { getCompanyInfo } from '@/services/companyService';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import CompanySidebar from '@/components/layout/CompanySidebar';
import { Eye, ShieldAlert } from 'lucide-react';
import CtaSection from '@/components/layout/CtaSection';

export const metadata: Metadata = {
  title: 'Vision Statement | Patel Material Handling Equipment',
  description: 'Our long-term target: to be a dependable manufacturing partner for Indian industry in material handling.',
};

export default async function CompanyVisionPage() {
  const info = await getCompanyInfo();

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Company', href: '/company' }, { label: 'Vision' }]} />

        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          <CompanySidebar />

          <div className="flex-1 space-y-8">
            <SectionHeading
              align="left"
              eyebrow="Target Direction"
              title="Our Vision"
              subtitle="To be a dependable long-term manufacturing partner for Indian industry in material handling — building equipment that keeps working shift after shift."
              className="!mb-6"
            />

            <div className="bg-brand-soft border border-brand-border p-8 flex flex-col md:flex-row gap-6 items-start">
              <Eye className="w-12 h-12 text-brand-red shrink-0" />
              <div className="space-y-4">
                <blockquote className="text-base md:text-lg italic font-semibold text-brand-dark leading-relaxed">
                  "{info.vision}"
                </blockquote>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-black uppercase tracking-widest text-brand-dark border-b border-brand-border pb-2">
                Core Vision Elements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {info.visionPoints?.map((pt, idx) => (
                  <div key={idx} className="border border-brand-border p-6 bg-white space-y-2">
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
