import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import ResourcesSidebar from '@/components/layout/ResourcesSidebar';
import { Play } from 'lucide-react';
import CtaSection from '@/components/layout/CtaSection';

export const metadata: Metadata = {
  title: 'Corporate Video | Patel Material Handling Equipment',
  description: 'Watch the corporate presentation video of Patel Material Handling Equipment.',
};

export default function CorporateVideoPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Resources', href: '/company/corporate-brochure' }, { label: 'Corporate Video' }]} />

        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          <ResourcesSidebar />

          <div className="flex-1 space-y-6">
            <SectionHeading
              align="left"
              eyebrow="Media Center"
              title="Corporate Video"
              subtitle="Watch our walkthrough video detailing our engineering workflow and machinery range."
              className="!mb-6"
            />

            {/* Video Player Display */}
            <div className="aspect-video w-full max-w-3xl border border-brand-border bg-black relative overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/l5M90H21Sns"
                title="Patel Material Handling Equipment Corporate Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="https://www.youtube.com/watch?v=l5M90H21Sns"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-brand-red hover:bg-[#A60D25] text-white text-xs font-black uppercase tracking-wider px-6 py-3.5 flex items-center gap-2 transition-colors cursor-pointer shadow-sm">
                  <Play className="w-4 h-4 fill-current" />
                  <span>Watch on YouTube</span>
                </button>
              </a>
            </div>

            <p className="text-xs text-brand-muted leading-relaxed max-w-2xl">
              Official corporate showcase highlighting Patel Material Handling Equipment's manufacturing plant in Ahmedabad, fabrication processes, hydraulic assembly bays, and heavy-duty industrial machinery range.
            </p>
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
}
