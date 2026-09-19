import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProductBySlug, getRelatedProducts } from '@/services/productService';
import { getCategoryBySlug } from '@/services/categoryService';
import ProductDetailView from '@/components/products/ProductDetailView';
import CtaSection from '@/components/layout/CtaSection';

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found | Patel Material Handling Equipment',
    };
  }

  const titleText = `${product.name} | Patel Material Handling Equipment`;
  return {
    title: titleText,
    description: product.shortDescription,
    openGraph: {
      title: titleText,
      description: product.shortDescription,
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { category: categorySlug, slug } = await params;

  const product = await getProductBySlug(slug);
  const category = await getCategoryBySlug(categorySlug);

  if (!product || !category || product.category !== categorySlug) {
    notFound();
  }

  const related = await getRelatedProducts(product);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <ProductDetailView
          product={product}
          category={category}
          relatedProducts={related}
        />
      </div>
      <CtaSection />
    </>
  );
}
