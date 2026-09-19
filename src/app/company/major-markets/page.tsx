import React from 'react';
import { Metadata } from 'next';
import { getCompanyInfo, getMajorMarkets } from '@/services/companyService';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import CompanySidebar from '@/components/layout/CompanySidebar';
import { Map, MapPin } from 'lucide-react';
import CtaSection from '@/components/layout/CtaSection';

export const metadata: Metadata = {
  title: 'Major Markets | Patel Material Handling Equipment',
  description: 'Regional logistics reach and market coverage for Patel Material Handling Equipment in India.',
};

export default async function MajorMarketsPage() {
  const info = await getCompanyInfo();
  const markets = await getMajorMarkets();

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[
          { label: 'Company', href: '/company' },
          { label: 'Major Markets' }
        ]} />

        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          <CompanySidebar />

          <div className="flex-1 space-y-8">
            <SectionHeading
              align="left"
              eyebrow="Market Presence"
              title="Major Markets"
              subtitle="We manufacture and supply handling gear across manufacturing corridors in West, North, South, and East India."
              className="!mb-6"
            />

            <div className="border border-brand-border bg-brand-soft p-4 flex items-center space-x-3 text-xs text-brand-muted">
              <Map className="w-5 h-5 text-brand-red shrink-0" />
              <span>{info.marketNote}</span>
            </div>

            {/* Region grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {markets.map((m, idx) => (
                <div key={idx} className="border border-brand-border bg-white p-6 space-y-4 shadow-sm">
                  <h3 className="text-sm font-black uppercase tracking-widest text-brand-red border-b border-brand-soft pb-2">
                    {m.region}
                  </h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {m.states.map((st) => (
                      <div key={st} className="flex items-center text-xs font-semibold text-brand-dark">
                        <MapPin className="w-3.5 h-3.5 text-brand-yellow mr-2 shrink-0" />
                        <span>{st}</span>
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
