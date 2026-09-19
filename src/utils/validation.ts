/**
 * Form Validation and Input Limitation Utilities
 * Patel Material Handling Equipment
 */

export const LIMITS = {
  NAME_MIN: 2,
  NAME_MAX: 60,
  COMPANY_MAX: 100,
  EMAIL_MAX: 100,
  PHONE_MIN_DIGITS: 10,
  PHONE_MAX_DIGITS: 15,
  PHONE_MAX_LENGTH: 16,
  CITY_MAX: 50,
  STATE_MAX: 50,
  COUNTRY_MAX: 50,
  EXPERIENCE_MAX: 30,
  PRODUCTS_INTEREST_MAX: 150,
  POSITION_MAX: 80,
  MESSAGE_MIN: 15,
  MESSAGE_MAX: 1000,
  QTY_MIN: 1,
  QTY_MAX: 10000,
  RESUME_MAX_MB: 5,
};

// Filter input to allow only valid phone characters (digits, +, spaces, hyphens)
export function sanitizePhoneInput(value: string): string {
  return value.replace(/[^0-9+\s-]/g, '').slice(0, LIMITS.PHONE_MAX_LENGTH);
}

// Validate Full Name
export function validateName(name: string, fieldName = 'Full name'): string | null {
  const trimmed = name.trim();
  if (!trimmed) {
    return `${fieldName} is required`;
  }
  if (trimmed.length < LIMITS.NAME_MIN) {
    return `${fieldName} must be at least ${LIMITS.NAME_MIN} characters`;
  }
  if (trimmed.length > LIMITS.NAME_MAX) {
    return `${fieldName} cannot exceed ${LIMITS.NAME_MAX} characters`;
  }
  // Allow letters, spaces, dots, hyphens, and apostrophes
  const nameRegex = /^[a-zA-Z\s.'-]+$/;
  if (!nameRegex.test(trimmed)) {
    return `${fieldName} can only contain letters and spaces`;
  }
  return null;
}

// Validate Company Name (optional or required)
export function validateCompanyName(company: string, required = false): string | null {
  const trimmed = company.trim();
  if (!trimmed) {
    return required ? 'Company name is required' : null;
  }
  if (trimmed.length < 2) {
    return 'Company name must be at least 2 characters';
  }
  if (trimmed.length > LIMITS.COMPANY_MAX) {
    return `Company name cannot exceed ${LIMITS.COMPANY_MAX} characters`;
  }
  return null;
}

// Validate Email Address
export function validateEmail(email: string): string | null {
  const trimmed = email.trim();
  if (!trimmed) {
    return 'Email address is required';
  }
  if (trimmed.length > LIMITS.EMAIL_MAX) {
    return `Email address cannot exceed ${LIMITS.EMAIL_MAX} characters`;
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(trimmed)) {
    return 'Please enter a valid email address (e.g. name@company.com)';
  }
  return null;
}

// Validate Phone Number
export function validatePhone(phone: string): string | null {
  const trimmed = phone.trim();
  if (!trimmed) {
    return 'Phone number is required';
  }
  const digits = trimmed.replace(/[^0-9]/g, '');
  if (digits.length < LIMITS.PHONE_MIN_DIGITS) {
    return `Phone number must contain at least ${LIMITS.PHONE_MIN_DIGITS} digits`;
  }
  if (digits.length > LIMITS.PHONE_MAX_DIGITS) {
    return `Phone number cannot exceed ${LIMITS.PHONE_MAX_DIGITS} digits`;
  }
  return null;
}

// Validate Textarea / Message
export function validateMessage(
  message: string,
  min = LIMITS.MESSAGE_MIN,
  max = LIMITS.MESSAGE_MAX,
  fieldName = 'Message details'
): string | null {
  const trimmed = message.trim();
  if (!trimmed) {
    return `${fieldName} are required`;
  }
  if (trimmed.length < min) {
    return `${fieldName} must be at least ${min} characters (currently ${trimmed.length})`;
  }
  if (trimmed.length > max) {
    return `${fieldName} cannot exceed ${max} characters`;
  }
  return null;
}

// Validate Quantity
export function validateQuantity(quantity: number | undefined): string | null {
  if (quantity === undefined || isNaN(quantity)) {
    return 'Quantity is required';
  }
  if (quantity < LIMITS.QTY_MIN) {
    return `Quantity must be at least ${LIMITS.QTY_MIN}`;
  }
  if (quantity > LIMITS.QTY_MAX) {
    return `Quantity cannot exceed ${LIMITS.QTY_MAX.toLocaleString()} units`;
  }
  if (!Number.isInteger(quantity)) {
    return 'Quantity must be a whole number';
  }
  return null;
}

// Validate Generic Short Text (City, State, Position, etc.)
export function validateShortText(
  value: string,
  fieldName: string,
  min = 2,
  max = 50,
  required = true
): string | null {
  const trimmed = value.trim();
  if (!trimmed) {
    return required ? `${fieldName} is required` : null;
  }
  if (trimmed.length < min) {
    return `${fieldName} must be at least ${min} characters`;
  }
  if (trimmed.length > max) {
    return `${fieldName} cannot exceed ${max} characters`;
  }
  return null;
}

// Validate Resume File Upload
export function validateResumeFile(file: File): string | null {
  const maxBytes = LIMITS.RESUME_MAX_MB * 1024 * 1024;
  if (file.size > maxBytes) {
    const sizeInMb = (file.size / (1024 * 1024)).toFixed(1);
    return `File size (${sizeInMb} MB) exceeds maximum allowed ${LIMITS.RESUME_MAX_MB} MB limit`;
  }
  const allowedExtensions = ['.pdf', '.doc', '.docx'];
  const fileName = file.name.toLowerCase();
  const hasValidExt = allowedExtensions.some((ext) => fileName.endsWith(ext));
  if (!hasValidExt) {
    return 'Only PDF, DOC, and DOCX document formats are allowed';
  }
  return null;
}
