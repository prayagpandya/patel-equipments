import React from 'react';
import { Metadata } from 'next';
import { searchProducts } from '@/services/productService';
import ProductCard from '@/components/products/ProductCard';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CtaSection from '@/components/layout/CtaSection';

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { q } = await searchParams;
  return {
    title: q ? `Search results for "${q}" | Patel Equipment` : 'Search Machinery Catalog | Patel Equipment',
    description: 'Search our range of hydraulic pallet trucks, stackers, drum lifters, platform trucks, and ladders.',
  };
}

export default async function SearchPage({ searchParams }: PageProps) {
  const { q = '' } = await searchParams;
  const query = q.trim();
  const results = query ? await searchProducts(query) : [];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Search Results' }]} />

        {/* Header */}
        <SectionHeading
          align="left"
          eyebrow="Catalog Search"
          title={query ? `Search Results for "${query}"` : 'Catalog Search'}
          subtitle={
            query
              ? `We found ${results.length} equipment configurations matching your keywords.`
              : 'Enter a search term to scan our industrial catalog.'
          }
          className="mt-6"
        />

        {/* Results Area */}
        <div className="my-12">
          {query ? (
            results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {results.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-brand-soft border border-brand-border p-16 text-center max-w-2xl mx-auto">
                <h4 className="text-lg font-bold text-brand-dark uppercase tracking-wider mb-3">
                  No Products Found
                </h4>
                <p className="text-brand-muted text-sm leading-relaxed mb-6">
                  No equipment models matched your search query "{query}". Please check the spelling, use broader terms like "pallet" or "stacker", or check our category listings.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="/products" className="inline-block">
                    <button className="bg-brand-red text-white hover:bg-red-800 px-6 py-3 font-bold uppercase tracking-wider text-xs cursor-pointer focus-ring">
                      Browse All Categories
                    </button>
                  </a>
                  <a href="/contact" className="inline-block">
                    <button className="bg-transparent border border-brand-border hover:bg-white text-brand-dark px-6 py-3 font-bold uppercase tracking-wider text-xs cursor-pointer focus-ring">
                      Contact Sales Office
                    </button>
                  </a>
                </div>
              </div>
            )
          ) : (
            <div className="text-center bg-brand-soft border border-brand-border p-12 max-w-md mx-auto">
              <p className="text-brand-muted text-sm">
                Please enter a search query in the search bar above to query our product catalog.
              </p>
            </div>
          )}
        </div>
      </div>
      <CtaSection />
    </>
  );
}
