import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import ResourcesSidebar from '@/components/layout/ResourcesSidebar';
import { FileText, Download } from 'lucide-react';
import Button from '@/components/ui/Button';
import CtaSection from '@/components/layout/CtaSection';

export const metadata: Metadata = {
  title: 'Corporate Brochure | Patel Material Handling Equipment',
  description: 'Download the product catalog and corporate brochure of Patel Material Handling Equipment.',
};

export default function CorporateBrochurePage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Resources', href: '/company/corporate-brochure' }, { label: 'Corporate Brochure' }]} />

        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          <ResourcesSidebar />

          <div className="flex-1 space-y-6">
            <SectionHeading
              align="left"
              eyebrow="Media Center"
              title="Corporate Brochure"
              subtitle="Browse our comprehensive product catalog containing technical drawings, dimensions, load ratings, and options."
              className="!mb-6"
            />

            {/* Brochure Mock Container */}
            <div className="border border-brand-border bg-white shadow-sm overflow-hidden max-w-md">
              <div className="bg-brand-soft border-b border-brand-border p-8 flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-20 border border-brand-border bg-white shadow-sm flex items-center justify-center">
                  <FileText className="w-8 h-8 text-brand-red" />
                </div>
                <div className="text-center">
                  <h3 className="text-base font-bold text-brand-dark uppercase tracking-wider">
                    Patel Product Catalog 2026
                  </h3>
                  <p className="text-[10px] text-brand-muted uppercase font-bold tracking-widest mt-1">
                    PDF Document — 2.4 MB
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-xs text-brand-muted leading-relaxed">
                  Our official brochure details model-wise load capacity curves, wheel material selections, lowering speed adjustments, and maintenance guidelines for all stackers, drum tilters, and hydraulic tables.
                </p>
                <a href="#" className="block w-full">
                  <Button className="w-full py-3.5 uppercase tracking-widest font-black text-xs flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    <span>Download Brochure</span>
                  </Button>
                </a>
              </div>
            </div>

            <p className="text-[10px] text-brand-muted italic max-w-sm">
              *Technical product documentation and equipment specifications can also be requested directly via our sales desk.
            </p>
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
}
