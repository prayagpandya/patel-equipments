import React from 'react';
import { Metadata } from 'next';
import { getIndustries } from '@/services/companyService';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import CompanySidebar from '@/components/layout/CompanySidebar';
import * as Icons from 'lucide-react';
import CtaSection from '@/components/layout/CtaSection';

export const metadata: Metadata = {
  title: 'Industries We Cater | Patel Material Handling Equipment',
  description: 'Industrial sectors using our pallet trucks, stackers, drum rotators, and floor cranes: Chemicals, Bulk Drugs, Steel, Food Processing, etc.',
};

export default async function CompanyIndustriesPage() {
  const industries = await getIndustries();

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[
          { label: 'Company', href: '/company' },
          { label: 'Industries We Cater' }
        ]} />

        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          <CompanySidebar />

          <div className="flex-1 space-y-8">
            <SectionHeading
              align="left"
              eyebrow="Market Sectors"
              title="Industries We Cater"
              subtitle="Our material handling solutions are configured to match specific industrial working environments across India."
              className="!mb-6"
            />

            {/* Grid of industries */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {industries.map((ind) => {
                const IconComponent = (Icons as any)[ind.icon] || Icons.Building;
                return (
                  <div key={ind.slug} className="flex items-start border border-brand-border bg-brand-soft p-5 hover:bg-white hover:border-brand-red transition-all duration-300">
                    <div className="mr-4 p-2.5 bg-white border border-brand-border text-brand-dark flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5 text-brand-red" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-brand-dark mb-1.5">
                        {ind.name}
                      </h4>
                      <p className="text-xs text-brand-muted leading-relaxed">
                        {ind.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
}
