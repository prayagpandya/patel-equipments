import React from 'react';
import Hero from '@/components/home/Hero';
import CompanyStats from '@/components/company/CompanyStats';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import AboutPatel from '@/components/home/AboutPatel';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyChoosePatel from '@/components/home/WhyChoosePatel';
import IndustriesSection from '@/components/home/IndustriesSection';
import InfrastructurePreview from '@/components/home/InfrastructurePreview';
import VideoSection from '@/components/home/VideoSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/layout/CtaSection';

import {
  getCompanyStats,
  getWhyChoose,
  getTestimonials,
  getIndustries,
} from '@/services/companyService';
import { getFeaturedProducts as fetchFeaturedProducts } from '@/services/productService';
import { getFeaturedCategories as fetchFeaturedCategories } from '@/services/categoryService';

export default async function HomePage() {
  // Fetch data on server
  const stats = await getCompanyStats();
  const categories = await fetchFeaturedCategories();
  const products = await fetchFeaturedProducts();
  const whyChoose = await getWhyChoose();
  const industries = await getIndustries();
  const testimonialsData = await getTestimonials();

  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Trust Metrics */}
      <CompanyStats stats={stats} />

      {/* 3. Featured Categories */}
      <FeaturedCategories categories={categories} />

      {/* 4. About Patel */}
      <AboutPatel />

      {/* 5. Featured Products */}
      <FeaturedProducts products={products} />

      {/* 6. Why Choose Patel */}
      <WhyChoosePatel items={whyChoose} />

      {/* 7. Industries We Serve */}
      <IndustriesSection industries={industries} />

      {/* 8. Manufacturing / Infrastructure */}
      <InfrastructurePreview />

      {/* 9. Product Video */}
      <VideoSection />

      {/* 10. Testimonials */}
      <TestimonialsSection 
        testimonials={testimonialsData.items} 
        note={testimonialsData.note} 
      />

      {/* 11. Final CTA */}
      <CtaSection />
    </>
  );
}
