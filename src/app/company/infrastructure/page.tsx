import React from 'react';
import { Metadata } from 'next';
import { getInfrastructureSections } from '@/services/companyService';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import CompanySidebar from '@/components/layout/CompanySidebar';
import Image from 'next/image';
import { Factory, CheckCircle } from 'lucide-react';
import CtaSection from '@/components/layout/CtaSection';

export const metadata: Metadata = {
  title: 'Infrastructure & Facility | Patel Material Handling Equipment',
  description: 'Inside our manufacturing facility at Shreeji Estate, near Naroda GIDC, Ahmedabad: fabrication bays, quality checkpoints, storage, and dispatch.',
};

const FACTORY_IMAGE = "/6f97ae80-f0b8-479c-9421-25df682e7399.jpg";

export default async function CompanyInfrastructurePage() {
  const sections = await getInfrastructureSections();

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Company', href: '/company' }, { label: 'Infrastructure' }]} />

        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          <CompanySidebar />

          <div className="flex-1 space-y-8">
            <SectionHeading
              align="left"
              eyebrow="Manufacturing Plant"
              title="Infrastructure & Facilities"
              subtitle="Our fabrication and assembly unit is set up to control dimensional and mechanical tolerances across cutting, welding, and hydraulic fitments."
              className="!mb-6"
            />

            {/* Big factory visual */}
            <div className="relative w-full aspect-video md:aspect-[21/9] border border-brand-border bg-brand-soft overflow-hidden">
              <Image
                src={FACTORY_IMAGE}
                alt="Inside the welding and assembly floor of Patel Material Handling Equipment"
                fill
                sizes="(min-width: 1024px) 800px, 92vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-brand-dark text-white px-3 py-1.5 text-[9px] font-black uppercase tracking-widest border border-brand-border">
                Shreeji Estate, Ahmedabad
              </div>
            </div>

            {/* Facility detail sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {sections.map((sec, idx) => (
                <div key={idx} className="border border-brand-border p-6 bg-white space-y-4 hover:border-brand-red transition-colors">
                  <h3 className="text-base font-bold text-brand-dark uppercase tracking-tight flex items-center gap-2">
                    <Factory className="w-5 h-5 text-brand-red shrink-0" />
                    <span>{sec.title}</span>
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {sec.description}
                  </p>
                  <div className="flex flex-col space-y-2 text-xs font-semibold text-brand-dark">
                    {sec.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-brand-red mr-2.5 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
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
