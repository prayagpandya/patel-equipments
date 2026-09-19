import { Category } from '@/types';
import { categories } from '@/data/categories';
import { products } from '@/data/products';

export async function getCategories(): Promise<Category[]> {
  // Simulating api fetch with dynamically computed productCount
  return categories.map((category) => {
    const count = products.filter((p) => p.category === category.slug).length;
    return {
      ...category,
      productCount: count
    };
  });
}

export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
  const allCategories = await getCategories();
  return allCategories.find((c) => c.slug === slug);
}

export async function getFeaturedCategories(): Promise<Category[]> {
  const allCategories = await getCategories();
  return allCategories.filter((c) => c.featured);
}
