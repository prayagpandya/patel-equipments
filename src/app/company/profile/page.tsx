import React from 'react';
import { Metadata } from 'next';
import { getCompanyFacts } from '@/services/companyService';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import CompanySidebar from '@/components/layout/CompanySidebar';
import CtaSection from '@/components/layout/CtaSection';

export const metadata: Metadata = {
  title: 'Company Profile Facts | Patel Material Handling Equipment',
  description: 'Official corporate factsheet, registration year, firm ownership status, annual turnover, IEC, and GST details for Patel Material Handling Equipment.',
};

export default async function CompanyProfilePage() {
  const facts = await getCompanyFacts();

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Company', href: '/company' }, { label: 'Profile' }]} />

        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          <CompanySidebar />

          <div className="flex-1 space-y-6">
            <SectionHeading
              align="left"
              eyebrow="Firm Profile"
              title="Company Factsheet"
              subtitle="Verified business registrations, legal identifiers, and turnover parameters indicating firm operations."
              className="!mb-6"
            />

            {/* Factsheet Table */}
            <div className="border border-brand-border bg-white shadow-sm overflow-hidden">
              <div className="bg-brand-soft border-b border-brand-border px-6 py-4 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-brand-dark">
                  Registration Parameters
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-red bg-white border border-brand-border px-2 py-0.5">
                  Verified Data
                </span>
              </div>
              <div className="divide-y divide-brand-border">
                {facts.map((fact) => (
                  <div key={fact.label} className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 px-6 py-4 text-sm items-center">
                    <span className="sm:col-span-4 text-brand-muted font-semibold uppercase tracking-wider text-[10px]">
                      {fact.label}
                    </span>
                    <span className="sm:col-span-8 font-extrabold text-brand-dark">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-xs text-brand-muted italic leading-relaxed">
              *Note: Factual firm parameters correspond to the registered proprietorship details dating from 2017 operations.
            </p>
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
}
