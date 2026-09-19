import React from 'react';
import { Metadata } from 'next';
import { getNews } from '@/services/companyService';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import ResourcesSidebar from '@/components/layout/ResourcesSidebar';
import { Newspaper, Calendar } from 'lucide-react';
import CtaSection from '@/components/layout/CtaSection';

export const metadata: Metadata = {
  title: 'News Coverage | Patel Material Handling Equipment',
  description: 'Recent press updates, product range announcements, and fabrication capacity notes for Patel Material Handling Equipment.',
};

export default async function NewsCoveragePage() {
  const newsData = await getNews();

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Resources', href: '/company/corporate-brochure' }, { label: 'News Coverage' }]} />

        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          <ResourcesSidebar />

          <div className="flex-1 space-y-8">
            <SectionHeading
              align="left"
              eyebrow="Media Coverage"
              title="News & Announcements"
              subtitle="Press articles, media items, and product announcements concerning Patel Material Handling Equipment."
              className="!mb-6"
            />

            {/* News list */}
            <div className="space-y-6">
              {newsData.items.map((item) => (
                <div key={item.id} className="border border-brand-border bg-white p-6 space-y-4 hover:border-brand-red transition-colors shadow-sm">
                  <div className="flex items-center justify-between text-xs text-brand-muted font-bold uppercase tracking-wider">
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {item.date}
                    </span>
                    <span className="bg-brand-soft border border-brand-border px-2 py-0.5 text-[9px] text-brand-red">
                      {item.category}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-brand-dark uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-brand-muted leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div className="flex items-center text-xs text-brand-muted font-semibold justify-between border-t border-brand-soft pt-3">
                    <span>Source: {item.source}</span>
                    {item.placeholder && (
                      <span className="text-[9px] uppercase tracking-wider font-extrabold px-1.5 py-0.5 border border-dashed border-brand-border text-brand-muted">
                        Placeholder
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Disclosure */}
            <p className="text-xs text-brand-muted italic leading-relaxed border-t border-brand-soft pt-4 max-w-xl">
              *Disclaimer: {newsData.note}
            </p>
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
}
