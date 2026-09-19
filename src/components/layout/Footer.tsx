import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ShieldCheck, FileText, Network } from 'lucide-react';
import { footerNav } from '@/data/navigation';
import { company, companyIntro } from '@/data/company';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

export default function Footer() {
  return (
    <footer className="w-full bg-brand-dark text-white pt-16 pb-8 border-t border-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-6">
          <Link href="/" className="flex items-center space-x-3 group min-w-0">
            <div className="bg-white p-1.5 shrink-0 rounded border border-gray-700">
              <Image
                src="/patel_equipments_logo.webp"
                alt="Patel Material Handling Equipment Logo"
                width={150}
                height={96}
                className="w-16 sm:w-20 md:w-24 h-auto object-contain shrink-0"
              />
            </div>
            <div className="flex flex-col justify-center border-l border-brand-charcoal pl-3 min-w-0">
              <span className="text-xs sm:text-sm font-black text-white leading-tight tracking-tight uppercase group-hover:text-brand-red transition-colors duration-200 break-words">
                {company.name}
              </span>
              <span className="text-[10px] text-gray-400 font-bold tracking-wider uppercase mt-0.5 truncate">
                {company.tagline}
              </span>
            </div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            {companyIntro}
          </p>
          <div className="flex items-center space-x-3 text-xs text-brand-yellow font-bold uppercase tracking-wider">
            <ShieldCheck className="w-5 h-5 text-brand-red" />
            <span>ISO 9001:2015 Standards Compliant</span>
          </div>
        </div>

        {/* Dynamic Nav Columns */}
        {footerNav.map((column, idx) => (
          <div key={idx} className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-red border-b border-brand-charcoal pb-2">
              {column.title}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {column.links.map((link, lIdx) => (
                <li key={lIdx}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="mr-1 text-transparent group-hover:text-brand-yellow transition-colors">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Column */}
        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-brand-red border-b border-brand-charcoal pb-2">
            Contact Details
          </h4>
          <ul className="space-y-3.5 text-sm text-gray-400">
            <li className="flex items-start">
              <MapPin className="w-4 h-4 mr-2.5 shrink-0 text-brand-yellow mt-0.5" />
              <span>
                {company.address.line1},<br />
                {company.address.line2},<br />
                {company.address.city} - {company.address.pincode},<br />
                {company.address.state}, India
              </span>
            </li>
            <li className="flex items-start">
              <Phone className="w-4 h-4 mr-2.5 shrink-0 text-brand-yellow mt-0.5" />
              <div className="flex flex-col space-y-1">
                <a
                  href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-white transition-colors"
                  title="Call Primary Number"
                >
                  <span>{company.phoneLabel} (Primary)</span>
                </a>
                <a
                  href={`tel:${(company.phoneSecondary || '+919825485007').replace(/[^0-9+]/g, '')}`}
                  className="hover:text-white transition-colors"
                  title="Call Secondary Number"
                >
                  <span>{company.phoneSecondaryLabel || '+91-9825485007'} (Sales)</span>
                </a>
              </div>
            </li>
            <li className="flex items-center">
              <WhatsAppIcon className="w-4 h-4 mr-2.5 shrink-0 text-[#25D366]" />
              <a
                href={`https://wa.me/${(company.whatsapp || '919825006343').replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>Chat on WhatsApp</span>
                <span className="text-[10px] bg-[#25D366]/20 text-[#25D366] px-1.5 py-0.5 rounded font-bold">Online</span>
              </a>
            </li>
            <li className="flex items-center">
              <Mail className="w-4 h-4 mr-2.5 shrink-0 text-brand-yellow" />
              <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 border-t border-brand-charcoal pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 text-center md:text-left">
        <div>
          © {new Date().getFullYear()} Patel Material Handling Equipment. All rights reserved.
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link href="/company/quality-standards" className="hover:text-white transition-colors flex items-center">
            <FileText className="w-3.5 h-3.5 mr-1" />
            Quality Commitment
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors flex items-center">
            <Mail className="w-3.5 h-3.5 mr-1" />
            Enquire Now
          </Link>
          <Link href="/sitemap" className="hover:text-white transition-colors flex items-center">
            <Network className="w-3.5 h-3.5 mr-1" />
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}
