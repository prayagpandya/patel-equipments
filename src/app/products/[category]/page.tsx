import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getCategoryBySlug } from '@/services/categoryService';
import { getProductsByCategory } from '@/services/productService';
import CategoryView from '@/components/products/CategoryView';
import CtaSection from '@/components/layout/CtaSection';

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = await getCategoryBySlug(categorySlug);

  if (!category) {
    return {
      title: 'Category Not Found | Patel Material Handling Equipment',
    };
  }

  return {
    title: `${category.name} | Patel Material Handling Equipment`,
    description: category.shortDescription,
    openGraph: {
      title: `${category.name} | Heavy Duty Industrial Range`,
      description: category.shortDescription,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  
  const category = await getCategoryBySlug(categorySlug);
  if (!category) {
    notFound();
  }

  const products = await getProductsByCategory(categorySlug);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <CategoryView category={category} initialProducts={products} />
      </div>
      <CtaSection />
    </>
  );
}
