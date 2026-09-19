'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Search, X } from 'lucide-react';
import { getCategories } from '@/services/categoryService';
import { Category } from '@/types';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CtaSection from '@/components/layout/CtaSection';

export default function ProductsPage() {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (err) {
        console.error('Failed to load categories', err);
      } finally {
        setLoading(false);
      }
    }
    loadCategories();
  }, []);

  const filteredCategories = categories.filter((category) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      category.name.toLowerCase().includes(query) ||
      (category.description && category.description.toLowerCase().includes(query))
    );
  });

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Products' }]} />

        {/* Header */}
        <SectionHeading
          align="left"
          eyebrow="Industrial Catalog"
          title="All Product Categories"
          subtitle="Explore our comprehensive range of material handling machinery. We design, fabricate, and test each category for heavy industrial cycles."
          className="mt-6"
        />

        {/* Search Bar */}
        <div className="my-8 max-w-md">
          <div className="relative flex items-center bg-white border border-brand-border hover:border-brand-red focus-within:border-brand-red transition-colors shadow-sm">
            <span className="pl-4 text-brand-muted">
              <Search className="w-5 h-5" />
            </span>
            <input
              type="text"
              maxLength={80}
              placeholder="Search product categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-3.5 text-sm focus:outline-none text-brand-dark font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="pr-4 text-brand-muted hover:text-brand-dark transition-colors cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="mt-2.5 text-xs text-brand-muted font-bold uppercase tracking-wider flex justify-between">
            <span>{searchQuery ? `Found ${filteredCategories.length} matching` : `${categories.length} categories total`}</span>
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-brand-red hover:underline cursor-pointer">
                Reset search
              </button>
            )}
          </div>
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-brand-red"></div>
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredCategories.length === 0 && (
          <div className="bg-brand-soft border border-brand-border p-12 text-center my-12">
            <div className="max-w-md mx-auto space-y-4">
              <Search className="w-12 h-12 text-brand-muted mx-auto" />
              <h3 className="text-lg font-black uppercase text-brand-dark">No categories found</h3>
              <p className="text-sm text-brand-muted">
                We couldn't find any categories matching "{searchQuery}". Try adjusting your keywords or search for a specific product directly.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="inline-block bg-brand-dark hover:bg-brand-red text-white font-black text-xs uppercase tracking-widest px-6 py-3 transition-colors cursor-pointer"
              >
                Reset Search Filter
              </button>
            </div>
          </div>
        )}

        {/* Categories Grid */}
        {!loading && filteredCategories.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => router.push(`/products/${category.slug}`)}
                className="bg-brand-soft border border-brand-border p-6 flex flex-col justify-between hover:bg-white hover:border-brand-red hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div>
                  {/* Image wrapper */}
                  <div className="w-full aspect-video bg-white border border-brand-border p-4 mb-6 flex items-center justify-center relative overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={240}
                      height={160}
                      className="w-auto h-auto max-h-[85%] object-contain group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-brand-dark uppercase tracking-tight mb-1 group-hover:text-brand-red transition-colors">
                    {category.name}
                  </h3>
                  {category.productCount && (
                    <span className="block text-[10px] font-black tracking-widest text-brand-red uppercase mb-3">
                      {category.productCount} Products
                    </span>
                  )}
                  <p className="text-brand-muted text-sm leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>

                {/* Action Link */}
                <div
                  className="inline-flex items-center text-xs font-black uppercase tracking-wider text-brand-dark group-hover:text-brand-red transition-colors border-t border-brand-border pt-4 mt-2"
                >
                  <span>View Products in Category</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <CtaSection />
    </>
  );
}
