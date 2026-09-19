import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import ResourcesSidebar from '@/components/layout/ResourcesSidebar';
import CareerForm from '@/components/forms/CareerForm';
import { UserCheck, ShieldAlert } from 'lucide-react';
import CtaSection from '@/components/layout/CtaSection';

export const metadata: Metadata = {
  title: 'Careers & Openings | Patel Material Handling Equipment',
  description: 'Join our team. Send your resume for mechanical design, steel welding, or sales openings at Patel Material Handling Equipment.',
};

export default function CareersPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Resources', href: '/company/corporate-brochure' }, { label: 'Careers' }]} />

        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          <ResourcesSidebar />

          <div className="flex-1 space-y-8">
            <SectionHeading
              align="left"
              eyebrow="Work With Us"
              title="Careers at Patel"
              subtitle="We build reliable machinery because we have competent hands on the shop floor. Explore our current vacancy status."
              className="!mb-6"
            />

            {/* Current Openings Status */}
            <div className="border border-brand-border bg-brand-soft p-6 space-y-4 max-w-2xl">
              <div className="flex items-start gap-4">
                <ShieldAlert className="w-8 h-8 text-brand-red shrink-0" />
                <div className="space-y-1">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-brand-dark">
                    Current Openings Status
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Currently, no specific openings are listed. You can still send us your profile for future considerations in fabrication, design, sales, or logistics.
                  </p>
                </div>
              </div>
            </div>

            {/* Why work with us */}
            <div className="space-y-4">
              <h3 className="text-lg font-black uppercase tracking-widest text-brand-dark border-b border-brand-border pb-2">
                Why Work With Us
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="border border-brand-border p-6 bg-white space-y-2">
                  <h4 className="font-extrabold text-brand-dark uppercase tracking-tight">Structured Shop Floor</h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Our Naroda GIDC fabrication unit operates with clear workflows. Teams are organized into Design, Cut, Weld, Assemble, and Quality Inspection.
                  </p>
                </div>
                <div className="border border-brand-border p-6 bg-white space-y-2">
                  <h4 className="font-extrabold text-brand-dark uppercase tracking-tight">Skill Growth</h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Work on heavy mechanical machinery: hydraulic pump assemblies, high-load linkages, custom drawings conversion, and quality checks.
                  </p>
                </div>
              </div>
            </div>

            {/* Job Enquiry Form */}
            <div className="space-y-6 max-w-2xl">
              <div className="border-b border-brand-border pb-2">
                <h3 className="text-lg font-black uppercase tracking-widest text-brand-dark flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-brand-red shrink-0" />
                  <span>Send Your Profile</span>
                </h3>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                If you are a welder, design draftsman, assembly technician, or B2B sales professional, submit your profile details below.
              </p>
              <div className="border border-brand-border bg-white p-6 shadow-sm">
                <CareerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
}
