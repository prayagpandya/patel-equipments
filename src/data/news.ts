import { NewsItem } from '@/types';

/**
 * NOTE: No confirmed press coverage is available from the reference website.
 * These are structured placeholder entries — replace with real articles
 * (or a CMS/database feed) without changing the UI.
 */
export const news: NewsItem[] = [
  {
    id: 'n-001',
    slug: 'product-range-update',
    title: 'Product range update',
    summary:
      'Placeholder entry for an announcement covering additions to the material handling equipment range.',
    date: '2026-06-18',
    source: 'Company update',
    category: 'Products',
    placeholder: true
  },
  {
    id: 'n-002',
    slug: 'manufacturing-capacity-note',
    title: 'Manufacturing capacity note',
    summary:
      'Placeholder entry for an update on fabrication and assembly capacity at the Naroda unit.',
    date: '2026-03-04',
    source: 'Company update',
    category: 'Manufacturing',
    placeholder: true
  },
  {
    id: 'n-003',
    slug: 'distributor-network-note',
    title: 'Distributor network note',
    summary:
      'Placeholder entry for an update on distributor appointments across Indian states.',
    date: '2025-11-21',
    source: 'Company update',
    category: 'Network',
    placeholder: true
  },
  {
    id: 'n-004',
    slug: 'exhibition-participation',
    title: 'Exhibition participation',
    summary:
      'Placeholder entry for participation in an industrial or material handling exhibition.',
    date: '2025-08-09',
    source: 'Company update',
    category: 'Events',
    placeholder: true
  }
];

export const newsNote =
  'These entries are placeholders held in the data layer. Confirmed press coverage will replace them as it becomes available.';
