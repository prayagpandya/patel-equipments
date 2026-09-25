import { MetadataRoute } from 'next';
import { sitemapCorporatePages, sitemapCategories, LIVE_VERCEL_URL } from '@/data/sitemapData';
import { products } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || LIVE_VERCEL_URL || 'https://patelequipments.in';
  const currentDate = new Date();

  // 1. Corporate / Main Pages
  const corporateEntries: MetadataRoute.Sitemap = sitemapCorporatePages.map((page) => ({
    url: `${baseUrl}${page.path === '/' ? '' : page.path}`,
    lastModified: currentDate,
    changeFrequency: page.path === '/' ? 'daily' : 'weekly',
    priority: page.path === '/' ? 1.0 : 0.8,
  }));

  // 2. Category Pages (All 37 categories)
  const categoryEntries: MetadataRoute.Sitemap = sitemapCategories.map((cat) => ({
    url: `${baseUrl}${cat.path}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // 3. Product Pages
  const productEntries: MetadataRoute.Sitemap = products.map((prod) => ({
    url: `${baseUrl}/products/${prod.category}/${prod.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...corporateEntries, ...categoryEntries, ...productEntries];
}
