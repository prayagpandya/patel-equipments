'use client';

import React, { useState } from 'react';
import { QuoteRequest } from '@/types';
import { submitQuoteRequest } from '@/services/enquiryService';
import { company } from '@/data/company';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { CheckCircle, Mail, Phone } from 'lucide-react';
import {
  LIMITS,
  sanitizePhoneInput,
  validateName,
  validateCompanyName,
  validateEmail,
  validatePhone,
  validateMessage
} from '@/utils/validation';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const finalValue = id === 'phone' ? sanitizePhoneInput(value) : value;
    setFormData((prev) => ({ ...prev, [id]: finalValue }));
    // Clear error
    if (errors[id]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    const nameErr = validateName(formData.name, 'Your name');
    if (nameErr) newErrors.name = nameErr;

    const companyErr = validateCompanyName(formData.company);
    if (companyErr) newErrors.company = companyErr;

    const emailErr = validateEmail(formData.email);
    if (emailErr) newErrors.email = emailErr;

    const phoneErr = validatePhone(formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    const messageErr = validateMessage(
      formData.message,
      LIMITS.MESSAGE_MIN,
      LIMITS.MESSAGE_MAX,
      'Message details'
    );
    if (messageErr) newErrors.message = messageErr;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Format all details line by line for WhatsApp
    const lines = [
      '*New Website Enquiry - Patel Material Handling Equipment*',
      '',
      `*Name:* ${formData.name.trim()}`,
      `*Company:* ${formData.company.trim() || 'N/A'}`,
      `*Email:* ${formData.email.trim()}`,
      `*Phone:* ${formData.phone.trim()}`,
      '',
      '*Message / Enquiry Details:*',
      formData.message.trim(),
      '',
      `*Dispatched To:* ${company.email}`
    ];
    const formattedMessage = lines.join('\n');
    const cleanPhone = (company.whatsapp || '919825006343').replace(/[^0-9]/g, '');
    const targetUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(formattedMessage)}`;

    // Open WhatsApp with pre-written message in the input field
    if (typeof window !== 'undefined') {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }

    try {
      const payload: QuoteRequest = {
        ...formData,
        product: 'General Contact Enquiry',
        quantity: 1
      };
      await submitQuoteRequest(payload);
      setWhatsappUrl(targetUrl);
      setSuccessMsg(`Your message has been formatted line by line and routed to our sales desk (${company.email}). WhatsApp has also been opened with the pre-written message.`);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } catch {
      setWhatsappUrl(targetUrl);
      setSuccessMsg('WhatsApp has been opened with your pre-written message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (successMsg) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 p-6 sm:p-8 text-center space-y-4">
        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
          <CheckCircle className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-emerald-900 uppercase tracking-wider mb-2">
            Enquiry Dispatched & WhatsApp Ready
          </h4>
          <p className="text-emerald-800 text-sm leading-relaxed max-w-md mx-auto">
            {successMsg}
          </p>
        </div>
        {whatsappUrl && (
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3 text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Click to Re-open WhatsApp</span>
            </a>
          </div>
        )}
        <div className="pt-2 text-xs text-brand-muted">
          Sales Desk: <a href={`mailto:${company.email}`} className="text-brand-dark underline font-bold">{company.email}</a> | Tel: <a href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`} className="text-brand-dark underline font-bold">{company.phoneLabel}</a>
        </div>
        <button
          type="button"
          onClick={() => {
            setSuccessMsg('');
            setWhatsappUrl('');
          }}
          className="text-xs text-brand-muted hover:text-brand-dark underline block mx-auto pt-3 cursor-pointer"
        >
          Submit another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errors.global && (
        <div className="bg-red-50 text-red-600 text-sm p-3 border border-red-200">
          {errors.global}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Your Name"
          id="name"
          type="text"
          maxLength={LIMITS.NAME_MAX}
          placeholder="e.g. Rajesh Patel"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Input
          label="Company Name"
          id="company"
          type="text"
          maxLength={LIMITS.COMPANY_MAX}
          placeholder="e.g. Patel Engineering Ltd"
          value={formData.company}
          onChange={handleChange}
          error={errors.company}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Email Address"
          id="email"
          type="email"
          maxLength={LIMITS.EMAIL_MAX}
          placeholder="name@company.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        <Input
          label="Phone Number"
          id="phone"
          type="tel"
          maxLength={LIMITS.PHONE_MAX_LENGTH}
          placeholder="+91 98765 43210"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          helperText="10 to 15 digits with country code"
          required
        />
      </div>

      <Input
        label="Message / Enquiry Details"
        id="message"
        textarea
        rows={5}
        maxLength={LIMITS.MESSAGE_MAX}
        showCount={true}
        placeholder="Type your message here. For product requirements, please describe your specifications..."
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        helperText="Min. 15 characters, max. 1000 characters"
        required
      />

      <Button
        type="submit"
        className="w-full uppercase tracking-widest font-bold py-3.5 flex items-center justify-center gap-2"
        disabled={isSubmitting}
      >
        <WhatsAppIcon className="w-4 h-4 text-white" />
        <span>{isSubmitting ? 'Opening WhatsApp...' : 'Submit Message'}</span>
      </Button>
      
      <div className="pt-2 border-t border-brand-border/60 text-center space-y-1">
        <p className="text-[11px] text-brand-muted">
          *Your details are formatted line by line and WhatsApp opens with the pre-written message ready to send.
        </p>
        <p className="text-xs text-brand-muted">
          Direct Sales Email: <a href={`mailto:${company.email}`} className="text-brand-red hover:underline font-semibold">{company.email}</a>
          <span className="mx-2 text-gray-300">|</span>
          Call: <a href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`} className="text-brand-dark hover:text-brand-red font-semibold">{company.phoneLabel}</a>
          <span className="mx-1 text-gray-300">/</span>
          <a href={`tel:${(company.phoneSecondary || '+919825485007').replace(/[^0-9+]/g, '')}`} className="text-brand-dark hover:text-brand-red font-semibold">{company.phoneSecondaryLabel || '+91-9825485007'}</a>
        </p>
      </div>
    </form>
  );
}
