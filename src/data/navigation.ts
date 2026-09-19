import { NavItem } from '@/types';

export const primaryNav: NavItem[] = [
  {
    label: 'Products',
    href: '/products'
  },
  {
    label: 'Company',
    href: '/company'
  },
  {
    label: 'Resources',
    href: '/company/corporate-brochure'
  },
  { label: 'Contact', href: '/contact' }
];

export const footerNav: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Products',
    links: [
      { label: 'Pallet Trucks', href: '/products/pallet-trucks' },
      { label: 'Drum Lifters', href: '/products/drum-lifters' },
      { label: 'Hydraulic Stackers', href: '/products/hydraulic-stackers' },
      { label: 'Platform Trucks', href: '/products/platform-trucks' },
      { label: 'Aluminium Ladders', href: '/products/aluminium-ladders' },
      { label: 'All Categories', href: '/products' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Patel', href: '/company' },
      { label: 'Quality Standards', href: '/company/quality-standards' },
      { label: 'Infrastructure', href: '/company/infrastructure' },
      { label: 'Milestones', href: '/company/milestones' },
      { label: 'Director', href: '/company/director' },
      { label: 'Our Team', href: '/company/team' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Corporate Video', href: '/company/corporate-video' },
      { label: 'Corporate Brochure', href: '/company/corporate-brochure' },
      { label: 'Corporate Presentation', href: '/company/corporate-presentation' },
      { label: 'News Coverage', href: '/company/news' },
      { label: 'Careers', href: '/company/careers' },
      { label: 'Industries', href: '/company/industries' },
      { label: 'Website Sitemap', href: '/sitemap' }
    ]
  }
];
