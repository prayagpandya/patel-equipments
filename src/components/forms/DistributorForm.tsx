'use client';

import React, { useState } from 'react';
import { DistributorRequest } from '@/types';
import { submitDistributorRequest } from '@/services/enquiryService';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import {
  LIMITS,
  sanitizePhoneInput,
  validateName,
  validateCompanyName,
  validateEmail,
  validatePhone,
  validateShortText,
  validateMessage
} from '@/utils/validation';

export default function DistributorForm() {
  const [formData, setFormData] = useState<Partial<DistributorRequest>>({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    country: 'India',
    businessType: 'Dealer',
    productsInterested: '',
    yearsInBusiness: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

    const nameErr = validateName(formData.name || '', 'Your name');
    if (nameErr) newErrors.name = nameErr;

    const companyErr = validateCompanyName(formData.companyName || '', true);
    if (companyErr) newErrors.companyName = companyErr;

    const emailErr = validateEmail(formData.email || '');
    if (emailErr) newErrors.email = emailErr;

    const phoneErr = validatePhone(formData.phone || '');
    if (phoneErr) newErrors.phone = phoneErr;

    const cityErr = validateShortText(formData.city || '', 'City', 2, LIMITS.CITY_MAX, true);
    if (cityErr) newErrors.city = cityErr;

    const stateErr = validateShortText(formData.state || '', 'State', 2, LIMITS.STATE_MAX, true);
    if (stateErr) newErrors.state = stateErr;

    const productsErr = validateShortText(
      formData.productsInterested || '',
      'Products of interest',
      3,
      LIMITS.PRODUCTS_INTEREST_MAX,
      true
    );
    if (productsErr) newErrors.productsInterested = productsErr;

    const messageErr = validateMessage(
      formData.message || '',
      LIMITS.MESSAGE_MIN,
      LIMITS.MESSAGE_MAX,
      'Business Profile & Details'
    );
    if (messageErr) newErrors.message = messageErr;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await submitDistributorRequest(formData as DistributorRequest);
      if (response.success) {
        setSuccessMsg(response.message);
        setFormData({
          name: '',
          companyName: '',
          email: '',
          phone: '',
          city: '',
          state: '',
          country: 'India',
          businessType: 'Dealer',
          productsInterested: '',
          yearsInBusiness: '',
          message: ''
        });
      }
    } catch {
      setErrors({ global: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (successMsg) {
    return (
      <div className="bg-green-50 border border-green-200 p-6 text-center">
        <h4 className="text-lg font-bold text-green-800 uppercase tracking-wider mb-2">
          Enquiry Received
        </h4>
        <p className="text-green-700 text-sm leading-relaxed">
          {successMsg}
        </p>
      </div>
    );
  }

  const businessTypes = [
    { value: 'Dealer', label: 'Dealer / Reseller' },
    { value: 'Distributor', label: 'Authorized Distributor' },
    { value: 'Agent', label: 'Commission Agent' },
    { value: 'OEM Partner', label: 'OEM Partner' },
    { value: 'End User', label: 'B2B End User' }
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
          placeholder="e.g. Anand Patel"
          value={formData.name || ''}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Input
          label="Company Name"
          id="companyName"
          type="text"
          maxLength={LIMITS.COMPANY_MAX}
          placeholder="e.g. Patel Industrial Solutions"
          value={formData.companyName || ''}
          onChange={handleChange}
          error={errors.companyName}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Email Address"
          id="email"
          type="email"
          maxLength={LIMITS.EMAIL_MAX}
          placeholder="dealer@company.com"
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
        <Input
          label="City"
          id="city"
          type="text"
          maxLength={LIMITS.CITY_MAX}
          placeholder="e.g. Ahmedabad"
          value={formData.city || ''}
          onChange={handleChange}
          error={errors.city}
          required
        />
        <Input
          label="State"
          id="state"
          type="text"
          maxLength={LIMITS.STATE_MAX}
          placeholder="e.g. Gujarat"
          value={formData.state || ''}
          onChange={handleChange}
          error={errors.state}
          required
        />
        <Input
          label="Country"
          id="country"
          type="text"
          maxLength={LIMITS.COUNTRY_MAX}
          value={formData.country || 'India'}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <Select
            label="Business Type"
            id="businessType"
            options={businessTypes}
            value={formData.businessType || 'Dealer'}
            onChange={handleChange}
          />
        </div>
        <Input
          label="Years In Business"
          id="yearsInBusiness"
          type="text"
          maxLength={LIMITS.EXPERIENCE_MAX}
          placeholder="e.g. 8 Years"
          value={formData.yearsInBusiness || ''}
          onChange={handleChange}
        />
      </div>

      <Input
        label="Products of Interest"
        id="productsInterested"
        type="text"
        maxLength={LIMITS.PRODUCTS_INTEREST_MAX}
        placeholder="e.g. Pallet Trucks, Stackers, Drum Lifters, Scissor Lifts"
        value={formData.productsInterested || ''}
        onChange={handleChange}
        error={errors.productsInterested}
        helperText="List machinery categories you wish to distribute"
        required
      />

      <Input
        label="Business Profile & Details"
        id="message"
        textarea
        rows={4}
        maxLength={LIMITS.MESSAGE_MAX}
        showCount={true}
        placeholder="Please describe your current business model, target industries, territory reach, warehouse setup, or distribution network..."
        value={formData.message || ''}
        onChange={handleChange}
        error={errors.message}
        helperText="Min. 15 characters, max. 1000 characters"
        required
      />

      <Button
        type="submit"
        className="w-full uppercase tracking-widest font-bold py-3.5"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending Request...' : 'Submit B2B Enquiry'}
      </Button>
    </form>
  );
}
