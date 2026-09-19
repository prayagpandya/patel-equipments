'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { ArrowRight, FileText } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  // Format category slug to text
  const categoryName = product.category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const handleCardClick = () => {
    router.push(`/products/${product.category}/${product.slug}`);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="bg-white border border-brand-border flex flex-col justify-between hover:border-brand-red hover:shadow-lg transition-all duration-300 group cursor-pointer"
    >
      
      {/* Product Image */}
      <div className="w-full aspect-square bg-brand-soft border-b border-brand-border p-6 flex items-center justify-center relative overflow-hidden shrink-0">
        {product.modelNumber && (
          <div className="absolute top-3 left-3 bg-brand-dark text-white px-2 py-0.5 text-[9px] font-black uppercase tracking-widest border border-brand-border">
            {product.modelNumber}
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge variant="gray">{product.powerSource}</Badge>
        </div>
        <div className="relative w-full h-full flex items-center justify-center p-2">
          <Image
            src={product.image}
            alt={product.name}
            width={240}
            height={240}
            className="w-auto h-auto max-h-[85%] object-contain group-hover:scale-102 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <span className="block text-[10px] font-black text-brand-red uppercase tracking-wider">
            {categoryName}
          </span>
          <h3 className="text-base font-extrabold text-brand-dark uppercase tracking-tight line-clamp-1 group-hover:text-brand-red transition-colors">
            {product.name}
          </h3>
          <p className="text-brand-muted text-xs leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Quick Specifications */}
          <div className="pt-3.5 pb-2 border-t border-brand-soft grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-brand-dark font-semibold">
            <div>
              <span className="block text-[9px] font-bold text-brand-muted uppercase tracking-wider">Capacity</span>
              <span className="line-clamp-1">{product.capacity || 'Custom'}</span>
            </div>
            <div>
              <span className="block text-[9px] font-bold text-brand-muted uppercase tracking-wider">Power Source</span>
              <span className="line-clamp-1">{product.powerSource}</span>
            </div>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-4 border-t border-brand-soft mt-3 space-y-4">
          <div className="flex justify-between items-baseline">
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted">Approx. Price</span>
            <span className="text-base font-extrabold text-brand-dark">
              {product.price ? (
                <>
                  ₹{product.price.toLocaleString()}{' '}
                  <span className="text-xs font-normal text-brand-muted">/ {product.priceUnit || 'Piece'}*</span>
                </>
              ) : (
                <span className="text-xs font-bold text-brand-red">Get Latest Price</span>
              )}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="w-full">
              <Button variant="outline" size="sm" className="w-full text-xs font-black uppercase tracking-wider bg-white py-2.5">
                <span>Details</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
            <Link 
              href={`/contact?product=${product.slug}`} 
              className="w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Button size="sm" className="w-full text-xs font-black uppercase tracking-wider py-2.5">
                <FileText className="w-3 h-3 mr-1" />
                <span>Get Quote</span>
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
