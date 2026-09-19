export type PowerSource = 'Manual' | 'Hydraulic' | 'Battery / Electric';

export interface Specification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  shortDescription: string;
  image: string;
  images?: string[];
  price?: number;
  priceUnit?: string;
  modelNumber?: string;
  capacity?: string;
  capacityTons?: number;
  powerSource: PowerSource;
  productType: string;
  keywords: string[];
  specifications: Specification[];
  features: string[];
  applications: string[];
  relatedProducts: string[];
  featured?: boolean;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  image: string;
  featured?: boolean;
  productCount?: number;
  keywords?: string[];
}

export interface Industry {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  verified: boolean;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  date: string;
  source: string;
  category: string;
  placeholder: boolean;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  confirmed: boolean;
}

export interface TeamGroup {
  name: string;
  description: string;
  focus: string[];
}

export interface CompanyFact {
  label: string;
  value: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  mega?: boolean;
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  company?: string;
  product?: string;
  quantity?: number;
  message: string;
}

export interface DistributorRequest {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  country: string;
  businessType: string;
  productsInterested: string;
  yearsInBusiness: string;
  message: string;
}

export interface CareerRequest {
  name: string;
  email: string;
  phone: string;
  position?: string;
  experience?: string;
  message: string;
  resumeName?: string;
}
