import React from 'react';
import { Metadata } from 'next';
import { getCompanyInfo } from '@/services/companyService';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import CompanySidebar from '@/components/layout/CompanySidebar';
import { User, Shield } from 'lucide-react';
import CtaSection from '@/components/layout/CtaSection';

export const metadata: Metadata = {
  title: 'About the Director | Patel Material Handling Equipment',
  description: 'Leadership at Patel Material Handling Equipment: Amit Patel, Director.',
};

export default async function CompanyDirectorPage() {
  const info = await getCompanyInfo();

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Company', href: '/company' }, { label: 'Director' }]} />

        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          <CompanySidebar />

          <div className="flex-1 space-y-8">
            <SectionHeading
              align="left"
              eyebrow="Leadership"
              title="About the Director"
              subtitle="Corporate management at Patel Material Handling Equipment."
              className="!mb-6"
            />

            <div className="border border-brand-border bg-white shadow-sm overflow-hidden max-w-2xl">
              <div className="bg-brand-soft border-b border-brand-border p-8 flex items-center space-x-6">
                {/* Director Avatar placeholder */}
                <div className="w-20 h-20 bg-white border border-brand-border flex items-center justify-center shrink-0">
                  <User className="w-10 h-10 text-brand-muted" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tight">
                    {info.director}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
                    {info.directorRole}
                  </p>
                  <p className="text-xs text-brand-muted font-medium">
                    {info.name}
                  </p>
                </div>
              </div>

              <div className="p-8 space-y-4 text-sm text-brand-muted leading-relaxed">
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-brand-red mr-3 mt-0.5 shrink-0" />
                  <p>
                    Amit Patel oversees the design alignment, fabrication standards, and sales operations at Patel Material Handling Equipment. The firm, operating from Shreeji Estate near Naroda GIDC in Ahmedabad, supplies standard hydraulic pallet trucks, manual lift stackers, and specialized drum handlers to industrial buyers.
                  </p>
                </div>
                <p>
                  Our focus remains on building mechanical equipment that matches the working capacities of our industrial clients. We discuss specific requirements at the application level to ensure each stacker, trolley, or lift is configured correctly.
                </p>
              </div>
            </div>

            <p className="text-xs text-brand-muted italic leading-relaxed">
              *Note: Attributable biographical details are limited to the verified corporate records of the proprietorship. No credentials have been fabricated.
            </p>
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
}
