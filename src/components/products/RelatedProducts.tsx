import React from 'react';
import { Product } from '@/types';
import ProductCard from './ProductCard';

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <div className="w-full space-y-6">
      <div className="border-b border-brand-border pb-3">
        <h3 className="text-lg font-black uppercase tracking-widest text-brand-dark">
          Related Equipment
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
