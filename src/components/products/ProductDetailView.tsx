'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Product, Category } from '@/types';
import { ArrowRight, Phone, FileText, CheckCircle, ShieldCheck } from 'lucide-react';
import ProductGallery from './ProductGallery';
import ProductSpecifications from './ProductSpecifications';
import RelatedProducts from './RelatedProducts';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Modal from '@/components/ui/Modal';
import QuoteForm from '@/components/forms/QuoteForm';

interface ProductDetailViewProps {
  product: Product;
  category: Category;
  relatedProducts: Product[];
}

export default function ProductDetailView({
  product,
  category,
  relatedProducts
}: ProductDetailViewProps) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const galleryImages = product.images || [product.image];

  return (
    <div className="space-y-12">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: category.name, href: `/products/${category.slug}` },
          { label: product.name }
        ]}
      />

      {/* Main product summary block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-6">
          <ProductGallery name={product.name} images={galleryImages} />
        </div>

        {/* Right Column: Key Details & Quick Actions */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-black text-brand-red uppercase tracking-widest">
                {category.name}
              </span>
              <Badge variant="gray">{product.powerSource}</Badge>
            </div>
            
            <h1 className="text-3xl font-black text-brand-dark uppercase tracking-tight">
              {product.name}
            </h1>
            
            {product.modelNumber && (
              <p className="text-xs font-extrabold uppercase tracking-widest text-brand-muted">
                Model: {product.modelNumber}
              </p>
            )}
          </div>

          <p className="text-brand-muted text-base leading-relaxed border-t border-brand-soft pt-4">
            {product.shortDescription}
          </p>

          {/* Pricing Box */}
          <div className="bg-brand-soft border border-brand-border p-6 space-y-2">
            <span className="block text-[10px] font-black uppercase tracking-widest text-brand-muted">
              Estimated Pricing
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-brand-dark">
                {product.price ? (
                  <>
                    ₹{product.price.toLocaleString()}
                    <span className="text-sm font-normal text-brand-muted"> / {product.priceUnit || 'Piece'}*</span>
                  </>
                ) : (
                  'Contact for Price'
                )}
              </span>
            </div>
            <p className="text-[10px] text-brand-muted italic leading-normal">
              *Approximate price. Final pricing depends on customized capacity, lift heights, wheel materials, and GIDC freight charges.
            </p>
          </div>

          {/* Technical Specs Summary */}
          <div className="space-y-3">
            <h3 className="text-xs font-black uppercase tracking-widest text-brand-dark">
              Quick Specifications
            </h3>
            <div className="grid grid-cols-2 gap-4 border border-brand-border p-4 text-xs font-semibold text-brand-dark">
              {product.specifications.slice(0, 4).map((spec, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="block text-[9px] font-bold text-brand-muted uppercase tracking-wider">
                    {spec.label}
                  </span>
                  <span>{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Generation CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-brand-soft">
            <Button
              onClick={() => setQuoteModalOpen(true)}
              className="uppercase tracking-widest font-black py-4 px-6 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-white" />
              <span>Request Quote</span>
            </Button>
            <a href="tel:+910000000000" className="w-full">
              <Button
                variant="outline"
                className="w-full bg-white border-brand-border uppercase tracking-widest font-black py-4 px-6 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-red" />
                <span>Call Sales Office</span>
              </Button>
            </a>
          </div>

        </div>

      </div>

      {/* Tabbed / Structured Detailed Specifications Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-brand-border">
        
        {/* Left Side: Technical Data Sheet */}
        <div className="lg:col-span-7 space-y-8">
          {/* Overview */}
          <div className="space-y-4">
            <h3 className="text-lg font-black uppercase tracking-widest text-brand-dark border-b border-brand-border pb-2">
              Equipment Overview
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Detailed Specs Table */}
          <ProductSpecifications specs={product.specifications} />
        </div>

        {/* Right Side: Features, Applications, Quality */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-black uppercase tracking-widest text-brand-dark border-b border-brand-border pb-2">
              Key Features
            </h3>
            <ul className="space-y-2 text-sm text-brand-dark font-semibold">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-brand-red mr-2.5 mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div className="space-y-4">
            <h3 className="text-lg font-black uppercase tracking-widest text-brand-dark border-b border-brand-border pb-2">
              Applications
            </h3>
            <ul className="space-y-2 text-sm text-brand-muted">
              {product.applications.map((app, idx) => (
                <li key={idx} className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-brand-red mr-2.5 mt-0.5 shrink-0" />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Manufacturing Standard Note */}
          <div className="border border-brand-border bg-brand-soft p-6 space-y-3">
            <div className="flex items-center text-xs font-bold text-brand-dark uppercase tracking-wider gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-red" />
              <span>Patel Manufacturing Commitment</span>
            </div>
            <p className="text-xs text-brand-muted leading-relaxed">
              All equipment is fabricated to fixed internal blueprints. Masts, chassis welds, and cylinder seals undergo quality checkpoint check-in prior to final primer coating.
            </p>
          </div>

        </div>

      </div>

      {/* Related Products Grid */}
      <div className="pt-8 border-t border-brand-border">
        <RelatedProducts products={relatedProducts} />
      </div>

      {/* Quote request modal overlay */}
      <Modal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        title="Request Machinery Quotation"
      >
        <QuoteForm
          prefilledProductSlug={product.slug}
          onSuccess={() => setQuoteModalOpen(false)}
        />
      </Modal>
    </div>
  );
}
