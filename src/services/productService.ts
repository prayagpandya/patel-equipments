import { Product } from '@/types';
import { products } from '@/data/products';

export async function getProducts(): Promise<Product[]> {
  // Simulating api fetch
  return [...products];
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const allProducts = await getProducts();
  return allProducts.find((p) => p.slug === slug);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const allProducts = await getProducts();
  return allProducts.filter((p) => p.featured);
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  const allProducts = await getProducts();
  return allProducts.filter((p) => p.category === categorySlug);
}

export async function getRelatedProducts(product: Product): Promise<Product[]> {
  const allProducts = await getProducts();
  return allProducts.filter(
    (p) => product.relatedProducts.includes(p.id) || (p.category === product.category && p.id !== product.id)
  ).slice(0, 4);
}

export async function searchProducts(query: string): Promise<Product[]> {
  const allProducts = await getProducts();
  if (!query) return [];
  
  const q = query.toLowerCase().trim();
  return allProducts.filter((p) => {
    return (
      p.name.toLowerCase().includes(q) ||
      p.modelNumber?.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.keywords.some((k) => k.toLowerCase().includes(q))
    );
  });
}
