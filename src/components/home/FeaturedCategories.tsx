'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Category } from '@/types';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

interface FeaturedCategoriesProps {
  categories: Category[];
}

export default function FeaturedCategories({ categories }: FeaturedCategoriesProps) {
  const router = useRouter();
  return (
    <section className="w-full bg-white py-16 md:py-24 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <SectionHeading
          eyebrow="Product Categories"
          title="Heavy-Duty Equipment Built for Performance"
          subtitle="Explore our range of material handling systems engineered for warehouse logistics, manufacturing lines, and heavy industrial operations."
        />

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {categories.map((category, idx) => (
              <ScrollReveal
                key={category.id}
                delay={idx * 0.05}
                onClick={() => router.push(`/products/${category.slug}`)}
                className="bg-brand-soft border border-brand-border p-6 flex flex-col justify-between hover:bg-white hover:border-brand-red hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div>
                  {/* Image */}
                  <div className="w-full aspect-square bg-white border border-brand-border p-4 mb-6 flex items-center justify-center relative overflow-hidden">
                    <Image
                      src={category.image}
                      alt={`${category.name} Category`}
                      width={200}
                      height={200}
                      className="w-auto h-auto max-h-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Info */}
                  <h3 className="text-lg font-bold text-brand-dark uppercase tracking-tight mb-1 group-hover:text-brand-red transition-colors">
                    {category.name}
                  </h3>
                  {category.productCount && (
                    <span className="block text-[10px] font-black tracking-widest text-brand-red uppercase mb-2">
                      {category.productCount} Products
                    </span>
                  )}
                  <p className="text-brand-muted text-sm leading-relaxed mb-4">
                    {category.shortDescription}
                  </p>
                </div>

                {/* Action Link */}
                <div
                  className="inline-flex items-center text-xs font-black uppercase tracking-wider text-brand-dark group-hover:text-brand-red transition-colors pt-2"
                >
                  <span>Explore Category</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </ScrollReveal>
            ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/products">
            <Button variant="outline" className="font-bold uppercase tracking-widest px-8 py-3 bg-white">
              <span>View All Categories</span>
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
