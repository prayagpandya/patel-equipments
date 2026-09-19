import React from 'react';
import { Metadata } from 'next';
import { getTeamGroups, getCompanyInfo } from '@/services/companyService';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import CompanySidebar from '@/components/layout/CompanySidebar';
import { Users, CheckCircle } from 'lucide-react';
import CtaSection from '@/components/layout/CtaSection';

export const metadata: Metadata = {
  title: 'Our Team | Patel Material Handling Equipment',
  description: 'Learn about our functional departments, designers, welders, and quality inspectors at Patel Material Handling Equipment.',
};

export default async function CompanyTeamPage() {
  const info = await getCompanyInfo();
  const groups = await getTeamGroups();

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Company', href: '/company' }, { label: 'Our Team' }]} />

        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          <CompanySidebar />

          <div className="flex-1 space-y-8">
            <SectionHeading
              align="left"
              eyebrow="Organization Structure"
              title="Our Team"
              subtitle="Manufacturing operations are managed across specialized teams covering design, steel fabrication, hydraulics assembly, and quality verification."
              className="!mb-6"
            />

            {/* Note about named profiles */}
            <div className="border border-brand-border bg-brand-soft p-4 flex items-center space-x-3 text-xs text-brand-muted">
              <Users className="w-5 h-5 text-brand-red shrink-0" />
              <span>{info.teamNote}</span>
            </div>

            {/* Functional team groups */}
            <div className="space-y-6">
              {groups.map((group, idx) => (
                <div key={idx} className="border border-brand-border bg-white p-6 grid grid-cols-1 md:grid-cols-4 gap-6 items-start shadow-sm">
                  <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-brand-soft pb-3 md:pb-0 md:pr-4">
                    <h3 className="text-base font-extrabold text-brand-dark uppercase tracking-tight">
                      {group.name}
                    </h3>
                    <span className="block text-[9px] font-bold uppercase tracking-widest text-brand-red mt-1">
                      Department
                    </span>
                  </div>
                  <div className="md:col-span-3 space-y-4">
                    <p className="text-sm text-brand-muted leading-relaxed">
                      {group.description}
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      {group.focus.map((f, fIdx) => (
                        <div key={fIdx} className="flex items-center text-xs font-semibold text-brand-dark">
                          <CheckCircle className="w-4 h-4 text-brand-red mr-2" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
