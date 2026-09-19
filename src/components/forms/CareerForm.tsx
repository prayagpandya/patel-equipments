'use client';

import React, { useState } from 'react';
import { CareerRequest } from '@/types';
import { submitCareerRequest } from '@/services/enquiryService';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import {
  LIMITS,
  sanitizePhoneInput,
  validateName,
  validateEmail,
  validatePhone,
  validateShortText,
  validateMessage,
  validateResumeFile
} from '@/utils/validation';

export default function CareerForm() {
  const [formData, setFormData] = useState<Partial<CareerRequest>>({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resumeName: ''
  });
  const [fileSizeText, setFileSizeText] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      const fileErr = validateResumeFile(file);
      if (fileErr) {
        setErrors((prev) => ({ ...prev, resume: fileErr }));
        setFormData((prev) => ({ ...prev, resumeName: '' }));
        setFileSizeText('');
        e.target.value = ''; // Reset input
        return;
      }

      const sizeInMb = (file.size / (1024 * 1024)).toFixed(2);
      setFormData((prev) => ({ ...prev, resumeName: file.name }));
      setFileSizeText(`${sizeInMb} MB`);
      if (errors.resume) {
        setErrors((prev) => {
          const copy = { ...prev };
          delete copy.resume;
          return copy;
        });
      }
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    const nameErr = validateName(formData.name || '', 'Your name');
    if (nameErr) newErrors.name = nameErr;

    const emailErr = validateEmail(formData.email || '');
    if (emailErr) newErrors.email = emailErr;

    const phoneErr = validatePhone(formData.phone || '');
    if (phoneErr) newErrors.phone = phoneErr;

    const positionErr = validateShortText(formData.position || '', 'Position applied for', 2, LIMITS.POSITION_MAX, true);
    if (positionErr) newErrors.position = positionErr;

    if (!formData.resumeName) {
      newErrors.resume = 'Resume file is required (PDF, DOC, DOCX - max 5MB)';
    }

    const messageErr = validateMessage(
      formData.message || '',
      LIMITS.MESSAGE_MIN,
      LIMITS.MESSAGE_MAX,
      'Cover message'
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
      const response = await submitCareerRequest(formData as CareerRequest);
      if (response.success) {
        setSuccessMsg(response.message);
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          message: '',
          resumeName: ''
        });
        setFileSizeText('');
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
          Application Submitted
        </h4>
        <p className="text-green-700 text-sm leading-relaxed">
          {successMsg}
        </p>
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
          placeholder="e.g. Rahul Sharma"
          value={formData.name || ''}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Input
          label="Email Address"
          id="email"
          type="email"
          maxLength={LIMITS.EMAIL_MAX}
          placeholder="rahul@example.com"
          value={formData.email || ''}
          onChange={handleChange}
          error={errors.email}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        <Input
          label="Position Applied For"
          id="position"
          type="text"
          maxLength={LIMITS.POSITION_MAX}
          placeholder="e.g. Mechanical Welder, Sales Engineer"
          value={formData.position || ''}
          onChange={handleChange}
          error={errors.position}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Years of Experience"
          id="experience"
          type="text"
          maxLength={LIMITS.EXPERIENCE_MAX}
          placeholder="e.g. 3 Years"
          value={formData.experience || ''}
          onChange={handleChange}
        />
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
              Upload Resume (PDF, DOCX) <span className="text-brand-red">*</span>
            </label>
            <span className="text-[11px] text-brand-muted font-medium">
              Max {LIMITS.RESUME_MAX_MB} MB
            </span>
          </div>
          <div className="relative">
            <input
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className={`border p-3 text-center text-sm font-medium transition-colors ${
              errors.resume 
                ? 'border-red-500 bg-red-50/20 text-red-700' 
                : formData.resumeName
                ? 'border-emerald-500 bg-emerald-50/30 text-emerald-800'
                : 'border-brand-border text-brand-muted hover:bg-brand-soft'
            }`}>
              {formData.resumeName ? (
                <span>{formData.resumeName} <span className="text-xs text-brand-muted">({fileSizeText})</span></span>
              ) : (
                'Select PDF / DOCX Resume (Max 5MB)'
              )}
            </div>
          </div>
          {errors.resume ? (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.resume}</p>
          ) : (
            <p className="mt-1 text-[11px] text-brand-muted">Allowed formats: PDF, DOC, DOCX up to 5MB</p>
          )}
        </div>
      </div>

      <Input
        label="Cover Message / Brief Introduction"
        id="message"
        textarea
        rows={4}
        maxLength={LIMITS.MESSAGE_MAX}
        showCount={true}
        placeholder="Introduce yourself, summarize your experience or background, and let us know why you want to work with Patel Material Handling Equipment..."
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
        {isSubmitting ? 'Submitting Application...' : 'Send Profile'}
      </Button>
    </form>
  );
}
