'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { company } from '@/data/company';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

export default function FloatingContact() {
  const cleanWhatsapp = (company.whatsapp || '919825006343').replace(/[^0-9]/g, '');
  const cleanPhone = company.phone.replace(/[^0-9+]/g, '');

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3 select-none pointer-events-auto">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${cleanWhatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-end gap-2 cursor-pointer focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <span className="bg-brand-dark text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 border border-brand-border shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden md:inline-block">
          Chat on WhatsApp ({company.whatsappLabel || '+91-9825006343'})
        </span>
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300">
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
      </a>

      {/* Direct Call Button */}
      <a
        href={`tel:${cleanPhone}`}
        className="group flex items-center justify-end gap-2 cursor-pointer focus:outline-none"
        aria-label="Call Sales Office"
      >
        <span className="bg-brand-dark text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 border border-brand-border shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden md:inline-block">
          Call Sales Office
        </span>
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-red hover:bg-[#A60D25] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300">
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
        </div>
      </a>
    </div>
  );
}
