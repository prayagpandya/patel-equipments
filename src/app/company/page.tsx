import React from 'react';
import { Metadata } from 'next';
import { getCompanyInfo, getCompanyStats, getCompanyFacts } from '@/services/companyService';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import CompanySidebar from '@/components/layout/CompanySidebar';
import { Check } from 'lucide-react';
import CtaSection from '@/components/layout/CtaSection';

export const metadata: Metadata = {
  title: 'About Company | Patel Material Handling Equipment',
  description: 'Learn about Patel Material Handling Equipment, an Ahmedabad based manufacturer of hydraulic pallet trucks, stackers, drum tilters, and customized systems.',
};

export default async function CompanyAboutPage() {
  const info = await getCompanyInfo();
  const stats = await getCompanyStats();
  const facts = await getCompanyFacts();

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Company' }]} />

        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          {/* Sidebar */}
          <CompanySidebar />

          {/* Main Content */}
          <div className="flex-1 space-y-8">
            <SectionHeading
              align="left"
              eyebrow="Corporate Profile"
              title="About Patel Material Handling Equipment"
              subtitle={info.intro}
              className="!mb-6"
            />

            {/* Manufacturing range */}
            <div className="space-y-4">
              <h3 className="text-lg font-black uppercase tracking-widest text-brand-dark border-b border-brand-border pb-2">
                Manufacturing Range
              </h3>
              <p className="text-sm text-brand-muted">
                We design and fabricate complete material handling systems, standard moving gear, and custom storage solutions:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {info.manufacturingRange.map((item: string) => (
                  <li key={item} className="flex items-start text-sm text-brand-dark font-semibold">
                    <Check className="w-4 h-4 text-brand-red mr-2.5 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats list */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border border-brand-border bg-brand-soft p-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <span className="block text-2xl font-black text-brand-red tracking-tight">
                    {stat.value}
                  </span>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-brand-muted mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Factsheet short block */}
            <div className="space-y-4">
              <h3 className="text-lg font-black uppercase tracking-widest text-brand-dark border-b border-brand-border pb-2">
                Firm Details Summary
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {facts.slice(0, 4).map((fact) => (
                  <div key={fact.label} className="flex justify-between border-b border-brand-soft pb-2">
                    <span className="text-brand-muted">{fact.label}</span>
                    <span className="font-bold text-brand-dark">{fact.value}</span>
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
