'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import ProductCard from '@/components/products/ProductCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  // Limit to 6-8 products for homepage
  const featured = products.slice(0, 8);

  return (
    <section className="w-full bg-white py-16 md:py-24 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <SectionHeading
          eyebrow="Featured Machinery"
          title="Engineered Products Ready for Dispatch"
          subtitle="Explore our top-selling, standard configurations of industrial stackers, hand pallet trucks, and specialized drum handling equipment."
        />

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {featured.map((product, idx) => (
            <ScrollReveal
              key={product.id}
              delay={idx * 0.05}
            >
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>

        {/* Price disclaimer */}
        <p className="text-center text-xs text-brand-muted mb-8 italic">
          *Approximate price. Final pricing depends on capacity, dimensions, wheel material configurations and customer requirements.
        </p>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/products">
            <Button variant="outline" className="font-bold uppercase tracking-widest px-8 py-3 bg-white">
              <span>View All Products</span>
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
