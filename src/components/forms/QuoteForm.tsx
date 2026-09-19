'use client';

import React, { useEffect, useState } from 'react';
import { QuoteRequest, Product } from '@/types';
import { getProducts } from '@/services/productService';
import { submitQuoteRequest } from '@/services/enquiryService';
import { company } from '@/data/company';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { CheckCircle } from 'lucide-react';
import {
  LIMITS,
  sanitizePhoneInput,
  validateName,
  validateCompanyName,
  validateEmail,
  validatePhone,
  validateQuantity,
  validateMessage
} from '@/utils/validation';

interface QuoteFormProps {
  prefilledProductSlug?: string;
  onSuccess?: () => void;
}

export default function QuoteForm({ prefilledProductSlug, onSuccess }: QuoteFormProps) {
  const [productList, setProductList] = useState<Product[]>([]);
  const [formData, setFormData] = useState<Partial<QuoteRequest>>({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    quantity: 1,
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  // Fetch product list for dropdown
  useEffect(() => {
    getProducts().then((data) => {
      setProductList(data);
      // Pre-fill if slug is supplied
      if (prefilledProductSlug) {
        const matchingProd = data.find((p) => p.slug === prefilledProductSlug);
        if (matchingProd) {
          setFormData((prev) => ({ ...prev, product: matchingProd.name }));
        }
      }
    });
  }, [prefilledProductSlug]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    let finalValue: string | number = value;

    if (id === 'phone') {
      finalValue = sanitizePhoneInput(value);
    } else if (id === 'qty') {
      const parsed = parseInt(value, 10);
      if (isNaN(parsed)) {
        finalValue = 1;
      } else {
        // Enforce quantity bounds
        finalValue = Math.max(LIMITS.QTY_MIN, Math.min(LIMITS.QTY_MAX, parsed));
      }
    }

    setFormData((prev) => ({
      ...prev,
      [id === 'qty' ? 'quantity' : id]: finalValue
    }));

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

    const nameErr = validateName(formData.name || '', 'Your name');
    if (nameErr) newErrors.name = nameErr;

    const companyErr = validateCompanyName(formData.company || '');
    if (companyErr) newErrors.company = companyErr;

    const emailErr = validateEmail(formData.email || '');
    if (emailErr) newErrors.email = emailErr;

    const phoneErr = validatePhone(formData.phone || '');
    if (phoneErr) newErrors.phone = phoneErr;

    if (!formData.product || formData.product.trim() === '') {
      newErrors.product = 'Please select an equipment model or solution';
    }

    const qtyErr = validateQuantity(formData.quantity);
    if (qtyErr) newErrors.qty = qtyErr;

    const messageErr = validateMessage(
      formData.message || '',
      LIMITS.MESSAGE_MIN,
      LIMITS.MESSAGE_MAX,
      'Requirement details'
    );
    if (messageErr) newErrors.message = messageErr;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Format quote request line by line for WhatsApp
    const lines = [
      '*Machinery Quotation Request - Patel Equipment*',
      '',
      `*Product:* ${formData.product || 'Standard Machinery Model'}`,
      `*Quantity:* ${formData.quantity || 1} Unit(s)`,
      `*Name:* ${formData.name?.trim() || ''}`,
      `*Company:* ${formData.company?.trim() || 'N/A'}`,
      `*Email:* ${formData.email?.trim() || ''}`,
      `*Phone:* ${formData.phone?.trim() || ''}`,
      '',
      '*Requirements / Specifications:*',
      formData.message?.trim() || 'Please share technical specifications and best quotation.',
      '',
      `*Sales Office:* ${company.email} | +91-9825006343 / +91-9825485007`
    ];
    const formattedMessage = lines.join('\n');
    const cleanPhone = (company.whatsapp || '919825006343').replace(/[^0-9]/g, '');
    const targetUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(formattedMessage)}`;

    // Open WhatsApp directly
    if (typeof window !== 'undefined') {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }

    try {
      await submitQuoteRequest(formData as QuoteRequest);
      setWhatsappUrl(targetUrl);
      setSuccessMsg(`Your quotation request has been routed to our sales desk (${company.email}). WhatsApp has also been opened with your pre-written message.`);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        product: formData.product, // Keep selected product
        quantity: 1,
        message: ''
      });
      if (onSuccess) {
        setTimeout(onSuccess, 3000);
      }
    } catch {
      setWhatsappUrl(targetUrl);
      setSuccessMsg('WhatsApp has been opened with your pre-written quotation request.');
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
            Quote Request Dispatched to Sales
          </h4>
          <p className="text-emerald-800 leading-relaxed text-sm max-w-md mx-auto">
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
          Sales Desk: <a href={`mailto:${company.email}`} className="text-brand-dark underline font-bold">{company.email}</a> | Phones: <a href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`} className="text-brand-dark underline font-bold">{company.phoneLabel}</a> / <a href={`tel:${(company.phoneSecondary || '+919825485007').replace(/[^0-9+]/g, '')}`} className="text-brand-dark underline font-bold">{company.phoneSecondaryLabel || '+91-9825485007'}</a>
        </div>
        <button
          type="button"
          onClick={() => {
            setSuccessMsg('');
            setWhatsappUrl('');
          }}
          className="text-xs text-brand-muted hover:text-brand-dark underline block mx-auto pt-3 cursor-pointer"
        >
          Submit another quotation request
        </button>
      </div>
    );
  }

  const productOptions = [
    { value: '', label: '-- Select Equipment --' },
    ...productList.map((p) => ({ value: p.name, label: `${p.name} (${p.modelNumber || 'Custom'})` })),
    { value: 'Custom Solution', label: 'Custom Material Handling Solution' }
  ];

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
          placeholder="e.g. Vikram Patel"
          value={formData.name || ''}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Input
          label="Company Name"
          id="company"
          type="text"
          maxLength={LIMITS.COMPANY_MAX}
          placeholder="e.g. Apex Warehousing Pvt Ltd"
          value={formData.company || ''}
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
          placeholder="procurement@company.com"
          value={formData.email || ''}
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
          value={formData.phone || ''}
          onChange={handleChange}
          error={errors.phone}
          helperText="10 to 15 digits"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <Select
            label="Requirement Type / Product"
            id="product"
            options={productOptions}
            value={formData.product || ''}
            onChange={handleChange}
            error={errors.product}
            required
          />
        </div>
        <Input
          label="Quantity (Units)"
          id="qty"
          type="number"
          min={LIMITS.QTY_MIN}
          max={LIMITS.QTY_MAX}
          value={formData.quantity || 1}
          onChange={handleChange}
          error={errors.qty}
          helperText="1 to 10,000 units"
          required
        />
      </div>

      <Input
        label="Requirement Details & Specifications"
        id="message"
        textarea
        rows={4}
        maxLength={LIMITS.MESSAGE_MAX}
        showCount={true}
        placeholder="Please describe your application, required load capacity (e.g. 2.5T), fork length, or custom requirements..."
        value={formData.message || ''}
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
        <span>{isSubmitting ? 'Opening WhatsApp...' : 'Get Quotation'}</span>
      </Button>

      <div className="pt-2 border-t border-brand-border/60 text-center space-y-1">
        <p className="text-xs text-brand-muted">
          *Your quotation request opens directly in WhatsApp and is simultaneously dispatched to <a href={`mailto:${company.email}`} className="text-brand-red font-semibold hover:underline">{company.email}</a>.
        </p>
        <p className="text-xs text-brand-muted">
          Need immediate assistance? Call <a href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`} className="text-brand-dark hover:text-brand-red font-semibold">{company.phoneLabel}</a> or <a href={`tel:${(company.phoneSecondary || '+919825485007').replace(/[^0-9+]/g, '')}`} className="text-brand-dark hover:text-brand-red font-semibold">{company.phoneSecondaryLabel || '+91-9825485007'}</a>
        </p>
      </div>
    </form>
  );
}
