import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/forms/ContactForm';
import QuoteForm from '@/components/forms/QuoteForm';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { company } from '@/data/company';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

interface PageProps {
  searchParams: Promise<{ product?: string; quote?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { product } = await searchParams;
  return {
    title: product ? `Request Quote for ${product} | Patel Equipment` : 'Contact Us | Patel Material Handling Equipment',
    description: 'Get in touch with Patel Material Handling Equipment in Naroda GIDC, Ahmedabad. Phone, email, Google map directions, and B2B quote requests.',
  };
}

export default async function ContactPage({ searchParams }: PageProps) {
  const { product = '', quote = '' } = await searchParams;
  const showQuoteForm = quote === 'true' || !!product;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Contact Us' }]} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-6">
        
        {/* Left Column: Contact details & Map */}
        <div className="lg:col-span-5 space-y-8">
          <SectionHeading
            align="left"
            eyebrow="Get In Touch"
            title="Contact Our Office"
            subtitle="Get in touch for machinery pricing, freight configuration, custom fabrication quotes, or dealer registrations."
            className="!mb-6"
          />

          {/* Details list */}
          <div className="space-y-6 text-sm">
            
            {/* Address */}
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-brand-red mr-4 mt-0.5 shrink-0" />
              <div className="space-y-1">
                <span className="block font-black uppercase tracking-wider text-brand-dark text-[10px]">
                  Registered Factory
                </span>
                <p className="text-brand-muted font-semibold leading-relaxed">
                  {company.name}<br />
                  {company.address.line1}, {company.address.line2},<br />
                  {company.address.city} - {company.address.pincode},<br />
                  {company.address.state}, India
                </p>
              </div>
            </div>

            {/* Direct Contacts */}
            <div className="flex items-start">
              <Phone className="w-5 h-5 text-brand-red mr-4 mt-0.5 shrink-0" />
              <div className="space-y-1">
                <span className="block font-black uppercase tracking-wider text-brand-dark text-[10px]">
                  Call / Sales Desk
                </span>
                <div className="space-y-1">
                  <a
                    href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-brand-dark hover:text-brand-red font-extrabold text-sm transition-colors block"
                  >
                    {company.phoneLabel} <span className="text-xs text-brand-muted font-normal">(Primary / WhatsApp)</span>
                  </a>
                  <a
                    href={`tel:${(company.phoneSecondary || '+919825485007').replace(/[^0-9+]/g, '')}`}
                    className="text-brand-dark hover:text-brand-red font-extrabold text-sm transition-colors block"
                  >
                    {company.phoneSecondaryLabel || '+91-9825485007'} <span className="text-xs text-brand-muted font-normal">(Sales & Support)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct */}
            <div className="flex items-start">
              <WhatsAppIcon className="w-5 h-5 text-[#25D366] mr-4 mt-0.5 shrink-0" />
              <div className="space-y-1">
                <span className="block font-black uppercase tracking-wider text-brand-dark text-[10px]">
                  WhatsApp Support
                </span>
                <a
                  href={`https://wa.me/${(company.whatsapp || '919825006343').replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-dark hover:text-[#25D366] font-extrabold text-sm transition-colors inline-flex items-center gap-2"
                >
                  <span>{company.whatsappLabel || '+91-9825006343'}</span>
                  <span className="text-[10px] bg-[#25D366]/15 text-[#128C7E] px-2 py-0.5 font-bold uppercase rounded-sm">
                    Chat Now
                  </span>
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="w-5 h-5 text-brand-red mr-4 mt-0.5 shrink-0" />
              <div className="space-y-1">
                <span className="block font-black uppercase tracking-wider text-brand-dark text-[10px]">
                  Email Address
                </span>
                <a href={`mailto:${company.email}`} className="text-brand-muted hover:text-brand-red font-semibold underline transition-colors">
                  {company.email}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start">
              <Clock className="w-5 h-5 text-brand-red mr-4 mt-0.5 shrink-0" />
              <div className="space-y-1 text-brand-muted font-semibold">
                <span className="block font-black uppercase tracking-wider text-brand-dark text-[10px]">
                  Business Hours
                </span>
                {company.businessHours.map((h, i) => (
                  <p key={i}>{h.day}: {h.hours}</p>
                ))}
                <p className="text-[10px] text-brand-muted italic mt-1 font-normal">
                  *{company.hoursNote}
                </p>
              </div>
            </div>

          </div>

          {/* Google Maps Iframe */}
          <div className="border border-brand-border bg-brand-soft p-2 aspect-video w-full relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.6975253818314!2d72.65825227589998!3d23.07153676648784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e876fa562b77d%3A0xe543ef88d5e89b2c!2sNaroda%20GIDC%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Patel Material Handling Equipment Location Map"
            />
          </div>
        </div>

        {/* Right Column: Lead Form */}
        <div className="lg:col-span-7">
          <div className="border border-brand-border bg-white p-6 sm:p-8 shadow-sm">
            <div className="border-b border-brand-border pb-4 mb-6 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-black uppercase tracking-tight text-brand-dark">
                  {showQuoteForm ? 'Request a Quotation' : 'Tell Us What You Need'}
                </h3>
                <span className="block text-[10px] text-brand-muted uppercase font-bold tracking-widest mt-1">
                  {showQuoteForm ? 'Specify equipment parameters' : 'Submit general business enquiry'}
                </span>
              </div>
              <div className="hidden sm:flex items-center text-[10px] font-black uppercase tracking-wider text-brand-yellow">
                <ShieldCheck className="w-5 h-5 text-brand-red mr-1.5" />
                <span>Verified GIDC Supplier</span>
              </div>
            </div>

            {showQuoteForm ? (
              <QuoteForm prefilledProductSlug={product} />
            ) : (
              <ContactForm />
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
