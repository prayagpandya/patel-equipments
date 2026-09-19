'use client';

import React, { useState } from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import ResourcesSidebar from '@/components/layout/ResourcesSidebar';
import Button from '@/components/ui/Button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CtaSection from '@/components/layout/CtaSection';

const slides = [
  {
    title: 'Slide 1: Company Overview',
    content: (
      <div className="space-y-4">
        <h4 className="text-base font-bold text-brand-dark uppercase tracking-tight">Patel Material Handling Equipment</h4>
        <p className="text-sm text-brand-muted leading-relaxed">
          Established in 2017 in Ahmedabad, Gujarat, Patel Material Handling Equipment is a manufacturer of hydraulic handling equipment, drum handling systems, trolleys, platform trucks, ladders, and custom material handling systems.
        </p>
        <div className="border border-brand-border p-4 bg-brand-soft grid grid-cols-2 gap-4 text-xs">
          <div>
            <span className="block text-[9px] font-bold text-brand-muted uppercase tracking-wider">Business Type</span>
            <span className="font-extrabold text-brand-dark">Manufacturer</span>
          </div>
          <div>
            <span className="block text-[9px] font-bold text-brand-muted uppercase tracking-wider">GST Reg.</span>
            <span className="font-extrabold text-brand-dark">01-07-2017</span>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Slide 2: Product Categories',
    content: (
      <div className="space-y-4">
        <h4 className="text-base font-bold text-brand-dark uppercase tracking-tight">Machinery Range</h4>
        <p className="text-sm text-brand-muted leading-relaxed">
          We manufacture a broad range of material moving machines, including:
        </p>
        <ul className="grid grid-cols-2 gap-2 text-xs font-bold text-brand-dark list-disc list-inside">
          <li>Pallet Trucks</li>
          <li>Drum Lifters</li>
          <li>Hydraulic Stackers</li>
          <li>Battery Stackers</li>
          <li>Floor Cranes</li>
          <li>Aluminium Ladders</li>
          <li>Hydraulic Goods Lifts</li>
          <li>Platform Trucks</li>
        </ul>
      </div>
    )
  },
  {
    title: 'Slide 3: Manufacturing Capabilities',
    content: (
      <div className="space-y-4">
        <h4 className="text-base font-bold text-brand-dark uppercase tracking-tight">Ahmedabad Fab Unit</h4>
        <p className="text-sm text-brand-muted leading-relaxed">
          Our unit at Shreeji Estate, Naroda, handles cutting, forms fabrication, welding, cylinder seals assembly, and primer-paint finishing under strict quality checkpoints.
        </p>
        <ul className="space-y-1.5 text-xs text-brand-muted list-disc list-inside">
          <li>Custom capacities (up to 5 Ton models)</li>
          <li>BLUEPRINT-governed welding preparation</li>
          <li>Underload cylinder pressure and leak checks</li>
        </ul>
      </div>
    )
  },
  {
    title: 'Slide 4: Industries Catered',
    content: (
      <div className="space-y-4">
        <h4 className="text-base font-bold text-brand-dark uppercase tracking-tight">Sectors Served</h4>
        <p className="text-sm text-brand-muted leading-relaxed">
          Operational models are configured to match specific industrial working requirements:
        </p>
        <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-black uppercase tracking-wider text-brand-dark">
          <div className="border border-brand-border p-2 bg-brand-soft">Chemicals</div>
          <div className="border border-brand-border p-2 bg-brand-soft">Bulk Drugs</div>
          <div className="border border-brand-border p-2 bg-brand-soft">Food Proc.</div>
          <div className="border border-brand-border p-2 bg-brand-soft">Steel</div>
          <div className="border border-brand-border p-2 bg-brand-soft">Ceramic</div>
          <div className="border border-brand-border p-2 bg-brand-soft">Textiles</div>
        </div>
      </div>
    )
  },
  {
    title: 'Slide 5: Market Coverage',
    content: (
      <div className="space-y-4">
        <h4 className="text-base font-bold text-brand-dark uppercase tracking-tight">Pan-India Reach</h4>
        <p className="text-sm text-brand-muted leading-relaxed">
          Our supply covers major manufacturing regions in West, North, South, and Central India. Shipping and freight are managed from our Naroda unit.
        </p>
        <div className="text-xs text-brand-muted">
          <span className="font-bold text-brand-dark">Major States served:</span> Gujarat, Maharashtra, Rajasthan, Delhi NCR, Haryana, Punjab, Tamil Nadu, Karnataka, Telangana.
        </div>
      </div>
    )
  },
  {
    title: 'Slide 6: Contact Information',
    content: (
      <div className="space-y-4">
        <h4 className="text-base font-bold text-brand-dark uppercase tracking-tight">Get in Touch</h4>
        <div className="text-xs space-y-2 text-brand-muted">
          <div>
            <span className="font-bold text-brand-dark">Director:</span> Amit Patel
          </div>
          <div>
            <span className="font-bold text-brand-dark">Address:</span> D/25/2, Shreeji Estate, Near Naroda GIDC Gate No. 1, Ahmedabad - 382330, Gujarat, India.
          </div>
          <div>
            <span className="font-bold text-brand-dark">Phone:</span> +91-9825006343 / +91-9825485007
          </div>
          <div>
            <span className="font-bold text-brand-dark">Email:</span> sales@patelequipment.com
          </div>
        </div>
      </div>
    )
  }
];

export default function CorporatePresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Resources', href: '/company/corporate-brochure' }, { label: 'Corporate Presentation' }]} />

        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          <ResourcesSidebar />

          <div className="flex-1 space-y-6">
            <SectionHeading
              align="left"
              eyebrow="Media Center"
              title="Corporate Presentation"
              subtitle="View our slide presentation outlining Patel's business history, manufacturing scopes, and target markets."
              className="!mb-6"
            />

            {/* Slider Showcase Box */}
            <div className="border border-brand-border bg-white shadow-md max-w-2xl overflow-hidden flex flex-col justify-between min-h-[360px]">
              {/* Slide Header */}
              <div className="bg-brand-soft border-b border-brand-border px-6 py-3 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-brand-red">
                  {slides[currentSlide].title}
                </span>
                <span className="text-[10px] font-bold text-brand-muted">
                  Slide {currentSlide + 1} of {slides.length}
                </span>
              </div>

              {/* Slide Body */}
              <div className="p-8 flex-1 flex flex-col justify-center">
                {slides[currentSlide].content}
              </div>

              {/* Slide Footer / Controls */}
              <div className="border-t border-brand-border px-6 py-4 flex justify-between bg-brand-soft items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePrev}
                  disabled={currentSlide === 0}
                  className="bg-white text-xs py-2 uppercase font-bold tracking-wider"
                >
                  <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                  <span>Prev</span>
                </Button>
                <div className="flex gap-1.5">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors ${
                        currentSlide === idx ? 'bg-brand-red' : 'bg-brand-border hover:bg-brand-muted'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <Button
                  size="sm"
                  onClick={handleNext}
                  disabled={currentSlide === slides.length - 1}
                  className="text-xs py-2 uppercase font-bold tracking-wider"
                >
                  <span>Next</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
}
