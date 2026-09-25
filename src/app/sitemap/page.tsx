import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  sitemapCorporatePages, 
  sitemapCategories, 
  LIVE_VERCEL_URL, 
  ORIGINAL_DOMAIN_URL 
} from '@/data/sitemapData';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import CtaSection from '@/components/layout/CtaSection';
import { 
  Building2, 
  Layers, 
  ExternalLink, 
  Globe, 
  CheckCircle2, 
  FileText, 
  Package, 
  ChevronRight,
  Info
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sitemap | Patel Material Handling Equipment',
  description: 'Complete directory and sitemap for Patel Material Handling Equipment. Browse corporate profile pages, 37 equipment categories, and 360+ industrial machinery products.',
  openGraph: {
    title: 'Sitemap | Patel Material Handling Equipment',
    description: 'Complete directory and sitemap for Patel Material Handling Equipment.',
    url: `${LIVE_VERCEL_URL}/sitemap`,
  },
};

export default function SitemapPage() {
  const totalProducts = sitemapCategories.reduce((acc, cat) => acc + cat.productCount, 0);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Sitemap' }
          ]}
        />

        {/* Section Heading */}
        <SectionHeading
          align="left"
          eyebrow="Website Information Architecture"
          title="Complete Website Sitemap"
          subtitle="A comprehensive directory of corporate information, quality standards, 37 specialized machinery categories, and our complete industrial material handling equipment catalog."
          className="mt-6 mb-8"
        />

        {/* Live Domain Reference Notice */}
        <div className="border border-brand-border bg-brand-soft p-6 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-brand-red shrink-0" />
              <span className="text-xs font-black uppercase tracking-wider text-brand-dark">
                Official Production Domain
              </span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 border border-emerald-300 uppercase">
                Active Domain
              </span>
            </div>
            <p className="text-sm text-brand-muted leading-relaxed">
              Official Production Domain:{' '}
              <a 
                href={LIVE_VERCEL_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono text-brand-red font-bold hover:underline inline-flex items-center gap-1"
              >
                {LIVE_VERCEL_URL}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </p>
            <p className="text-xs text-brand-muted">
              Reference catalog legacy domain:{' '}
              <span className="font-mono text-brand-dark font-medium">{ORIGINAL_DOMAIN_URL}</span>
              {' '}(All canonical paths seamlessly map to production on patelequipments.in).
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a 
              href="/sitemap.xml" 
              target="_blank"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-white border border-brand-border px-4 py-2.5 text-brand-dark hover:border-brand-red hover:text-brand-red transition-colors shadow-sm"
            >
              <FileText className="w-4 h-4 text-brand-red" />
              <span>View XML Sitemap</span>
            </a>
          </div>
        </div>

        {/* Summary Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="border border-brand-border p-4 bg-white">
            <span className="block text-2xl md:text-3xl font-black text-brand-dark">
              {sitemapCorporatePages.length}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">
              Corporate & Info Pages
            </span>
          </div>
          <div className="border border-brand-border p-4 bg-white">
            <span className="block text-2xl md:text-3xl font-black text-brand-red">
              {sitemapCategories.length}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">
              Machinery Categories
            </span>
          </div>
          <div className="border border-brand-border p-4 bg-white">
            <span className="block text-2xl md:text-3xl font-black text-brand-dark">
              {totalProducts}+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">
              Indexed Equipment Models
            </span>
          </div>
          <div className="border border-brand-border p-4 bg-white">
            <span className="block text-2xl md:text-3xl font-black text-brand-yellow">
              100%
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">
              Coverage of Reference Site
            </span>
          </div>
        </div>

        {/* Quick Jump Links */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-brand-border">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-dark py-1.5 mr-2 self-center">
            Jump to Section:
          </span>
          <a 
            href="#corporate-pages" 
            className="text-xs font-bold bg-brand-soft border border-brand-border px-3 py-1.5 text-brand-dark hover:border-brand-red hover:text-brand-red transition-colors"
          >
            Corporate & Profile Pages ({sitemapCorporatePages.length})
          </a>
          <a 
            href="#categories-directory" 
            className="text-xs font-bold bg-brand-soft border border-brand-border px-3 py-1.5 text-brand-dark hover:border-brand-red hover:text-brand-red transition-colors"
          >
            Equipment Categories ({sitemapCategories.length})
          </a>
          <a 
            href="#full-catalog" 
            className="text-xs font-bold bg-brand-soft border border-brand-border px-3 py-1.5 text-brand-dark hover:border-brand-red hover:text-brand-red transition-colors"
          >
            Full Product Directory ({totalProducts} Items)
          </a>
        </div>

        {/* SECTION 1: CORPORATE & PROFILE PAGES */}
        <section id="corporate-pages" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 pb-3 mb-6 border-b-2 border-brand-dark">
            <Building2 className="w-5 h-5 text-brand-red" />
            <h2 className="text-xl font-black uppercase tracking-tight text-brand-dark">
              Corporate, Profile & Regulatory Pages
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {sitemapCorporatePages.map((page, idx) => (
              <div 
                key={page.path}
                className="border border-brand-border bg-white p-4 hover:border-brand-red transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-sm font-bold text-brand-dark group-hover:text-brand-red transition-colors">
                      <Link href={page.path} className="focus:outline-none">
                        {page.title}
                      </Link>
                    </h3>
                    <span className="text-[10px] font-mono text-brand-muted">
                      #{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs text-brand-muted line-clamp-2 mb-3">
                    {page.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-brand-soft flex items-center justify-between text-[11px]">
                  <Link 
                    href={page.path} 
                    className="font-mono text-brand-dark font-medium hover:text-brand-red inline-flex items-center gap-1"
                  >
                    <span>{page.path}</span>
                    <ChevronRight className="w-3 h-3 text-brand-red" />
                  </Link>
                  <a 
                    href={page.originalUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-brand-muted hover:text-brand-dark" 
                    title="Original reference URL"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: EQUIPMENT CATEGORIES */}
        <section id="categories-directory" className="mb-16 scroll-mt-24">
          <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-brand-dark">
            <div className="flex items-center gap-3">
              <Layers className="w-5 h-5 text-brand-red" />
              <h2 className="text-xl font-black uppercase tracking-tight text-brand-dark">
                Industrial Machinery Categories ({sitemapCategories.length})
              </h2>
            </div>
            <Link 
              href="/products" 
              className="text-xs font-bold uppercase tracking-wider text-brand-red hover:underline inline-flex items-center gap-1"
            >
              <span>Explore All</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sitemapCategories.map((cat, idx) => (
              <div 
                key={cat.slug} 
                className="border border-brand-border bg-white p-4 hover:border-brand-red transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-red">
                      Category {idx + 1}
                    </span>
                    <span className="text-[10px] font-bold bg-brand-soft border border-brand-border px-2 py-0.5 text-brand-dark">
                      {cat.productCount} models
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-brand-dark group-hover:text-brand-red transition-colors mb-2">
                    <Link href={cat.path}>
                      {cat.name}
                    </Link>
                  </h3>
                </div>

                <div className="pt-2.5 border-t border-brand-soft flex items-center justify-between text-xs">
                  <Link 
                    href={cat.path} 
                    className="font-bold uppercase tracking-wider text-[11px] text-brand-dark group-hover:text-brand-red inline-flex items-center gap-1"
                  >
                    <span>View Category</span>
                    <ChevronRight className="w-3 h-3 text-brand-red" />
                  </Link>
                  <a 
                    href={`#cat-${cat.slug}`} 
                    className="text-brand-muted hover:text-brand-dark text-[11px]"
                    title="Jump to product models"
                  >
                    List ({cat.productCount})
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: FULL PRODUCT DIRECTORY */}
        <section id="full-catalog" className="mb-16 scroll-mt-24">
          <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-brand-dark">
            <div className="flex items-center gap-3">
              <Package className="w-5 h-5 text-brand-red" />
              <h2 className="text-xl font-black uppercase tracking-tight text-brand-dark">
                Complete Machinery Products Directory ({totalProducts} Items)
              </h2>
            </div>
          </div>

          <div className="space-y-8">
            {sitemapCategories.map((cat) => (
              <div 
                key={`section-${cat.slug}`} 
                id={`cat-${cat.slug}`}
                className="border border-brand-border bg-white scroll-mt-24"
              >
                {/* Category Subheader */}
                <div className="bg-brand-soft border-b border-brand-border p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-black uppercase tracking-tight text-brand-dark">
                      {cat.name}
                    </h3>
                    <span className="text-xs font-bold text-brand-muted">
                      ({cat.productCount} models)
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs">
                    <Link 
                      href={cat.path} 
                      className="font-bold uppercase tracking-wider text-brand-red hover:underline inline-flex items-center gap-1"
                    >
                      <span>Go to Category Page</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Product List */}
                <div className="p-4">
                  {cat.products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {cat.products.map((prod, pIdx) => (
                        <div 
                          key={`${prod.url}-${pIdx}`}
                          className="border border-brand-border/70 p-3 hover:border-brand-red hover:bg-brand-soft/40 transition-colors flex flex-col justify-between"
                        >
                          <div>
                            <h4 className="text-xs font-bold text-brand-dark leading-snug line-clamp-2 mb-1.5">
                              <Link href={prod.url} className="hover:text-brand-red transition-colors">
                                {prod.name}
                              </Link>
                            </h4>
                            {prod.price && (
                              <p className="text-xs font-bold text-brand-red mb-2">
                                {prod.price}
                              </p>
                            )}
                          </div>

                          <div className="pt-2 border-t border-brand-border/40 flex items-center justify-between text-[10px]">
                            <Link 
                              href={prod.url} 
                              className="font-bold uppercase tracking-wider text-brand-muted hover:text-brand-red inline-flex items-center gap-1"
                            >
                              <span>Specs & Details</span>
                              <ChevronRight className="w-2.5 h-2.5" />
                            </Link>
                            <Link 
                              href={`/contact?product=${encodeURIComponent(prod.name)}`}
                              className="text-brand-red font-bold hover:underline"
                            >
                              Quote
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-brand-muted italic py-2">
                      Standard configurations available on request.{' '}
                      <Link href={cat.path} className="text-brand-red underline">
                        View Category Series
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CtaSection />
    </>
  );
}
