import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import DistributorForm from '@/components/forms/DistributorForm';
import { Network, FileCheck } from 'lucide-react';
import CtaSection from '@/components/layout/CtaSection';

export const metadata: Metadata = {
  title: 'Distributor Enquiry | Patel Material Handling Equipment',
  description: 'Become a reseller or authorized distributor for Patel material handling equipment. Submit your business profile to start B2B operations.',
};

export default function DistributorEnquiryPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Company', href: '/company' }, { label: 'Distributor Enquiry' }]} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-6">
          
          {/* Left instructions block */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              align="left"
              eyebrow="B2B Partnerships"
              title="Become a Distributor"
              subtitle="Expand your product offerings with our industrial moving machinery range. We support partners with drawings, load sheets, and trade pricing."
              className="!mb-6"
            />

            <div className="space-y-4 text-sm text-brand-muted leading-relaxed">
              <div className="flex items-start">
                <Network className="w-5 h-5 text-brand-red mr-3 mt-0.5 shrink-0" />
                <p>
                  We supply to resellers, dealers, and project consultants across India. Our Naroda facility ensures lead time adherence and consistent steel gauge dimensions.
                </p>
              </div>
              <div className="flex items-start">
                <FileCheck className="w-5 h-5 text-brand-red mr-3 mt-0.5 shrink-0" />
                <p>
                  Please submit your registered firm name, GST parameters, active regional markets, and the equipment categories you want to represent. Our partnership desk will follow up.
                </p>
              </div>
            </div>

            <div className="border border-brand-border bg-brand-soft p-5 text-xs text-brand-muted space-y-2">
              <h4 className="font-bold uppercase tracking-wider text-brand-dark">
                Distributor Support
              </h4>
              <p className="leading-relaxed">
                Dealers receive CAD dimensions worksheets, GIDC ex-works loading help, spare hydraulic seals supply kits, and direct model specifications confirmations.
              </p>
            </div>
          </div>

          {/* Right form container */}
          <div className="lg:col-span-7">
            <div className="border border-brand-border bg-white p-6 sm:p-8 shadow-sm">
              <div className="border-b border-brand-border pb-4 mb-6">
                <h3 className="text-lg font-black uppercase tracking-tight text-brand-dark">
                  B2B Partner Registration
                </h3>
                <span className="block text-[10px] text-brand-muted uppercase font-bold tracking-widest mt-1">
                  Submit business profile for evaluation
                </span>
              </div>
              <DistributorForm />
            </div>
          </div>

        </div>
      </div>
      <CtaSection />
    </>
  );
}
