import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { company } from '@/data/company';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

export default function UtilityBar() {
  const cleanWhatsapp = (company.whatsapp || '919825006343').replace(/[^0-9]/g, '');
  const cleanPhone = company.phone.replace(/[^0-9+]/g, '');
  const cleanPhoneSecondary = (company.phoneSecondary || '+919825485007').replace(/[^0-9+]/g, '');

  return (
    <div className="w-full bg-brand-dark text-white py-1.5 sm:py-2 px-2 sm:px-4 border-b border-brand-charcoal text-[11px] sm:text-xs overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-1.5 sm:space-y-0 text-center sm:text-left">
        {/* Contact info */}
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-3 gap-y-1 sm:gap-4">
          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 text-gray-300">
            <Phone className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
            <a
              href={`tel:${cleanPhone}`}
              className="hover:text-brand-yellow transition-colors whitespace-nowrap"
              title="Call Primary Number"
            >
              {company.phoneLabel}
            </a>
            <span className="text-gray-500">/</span>
            <a
              href={`tel:${cleanPhoneSecondary}`}
              className="hover:text-brand-yellow transition-colors whitespace-nowrap"
              title="Call Secondary Number"
            >
              {company.phoneSecondaryLabel || '+91-9825485007'}
            </a>
          </div>
          <a
            href={`https://wa.me/${cleanWhatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-300 hover:text-[#25D366] transition-colors whitespace-nowrap"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 mr-1.5 text-[#25D366] shrink-0" />
            <span>WhatsApp Chat</span>
          </a>
          <a
            href={`mailto:${company.email}`}
            className="flex items-center text-gray-300 hover:text-brand-red transition-colors whitespace-nowrap"
            title="Email Sales Team"
          >
            <Mail className="w-3.5 h-3.5 mr-1.5 text-brand-yellow shrink-0" />
            <span>{company.email}</span>
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center text-gray-300">
            <MapPin className="w-3.5 h-3.5 mr-1.5 text-brand-yellow shrink-0" />
            <span className="whitespace-nowrap">Ahmedabad, Gujarat, India</span>
          </div>
        </div>
      </div>
    </div>
  );
}
