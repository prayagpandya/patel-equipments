'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-120px)] flex items-center bg-brand-soft border-b border-brand-border overflow-hidden py-16 lg:py-0">
      {/* Responsive Background Picture */}
      <picture className="absolute inset-0 w-full h-full select-none pointer-events-none">
        <source media="(min-width: 1280px)" srcSet="/hero_bg_xl.webp" />
        <source media="(min-width: 1024px)" srcSet="/hero_bg_lg.webp" />
        <source media="(min-width: 768px)" srcSet="/hero_bg_md.webp" />
        <source media="(min-width: 640px)" srcSet="/hero_bg_sm.webp" />
        <img 
          src="/hero_bg_xs.webp" 
          alt="Industrial Manufacturing Background" 
          className="w-full h-full object-cover object-center" 
        />
      </picture>

      {/* Light Overlay for Text Readability (Thicker on mobile due to dark background machinery) */}
      <div className="absolute inset-0 bg-white/80 lg:bg-white/20 z-0" />

      {/* Structural Industrial Grid Background */}
      <div className="absolute inset-0 industrial-grid opacity-15 z-0" />
      
      {/* Red Accent Graphic line */}
      <div className="absolute top-0 left-0 w-2 h-full bg-brand-red hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Text content */}
        <div className="lg:col-span-8 space-y-6">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-black uppercase tracking-widest text-brand-red border-l-2 border-brand-red pl-2.5"
          >
            Engineered for Material Movement
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tight leading-[1.1] break-words"
          >
            Reliable Material <br className="hidden md:inline" />
            Handling Equipment<br />
            Built for Industry.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-dark font-semibold text-base md:text-lg leading-relaxed max-w-xl"
          >
            Patel Material Handling Equipment manufactures premium hydraulic handling equipment, drum handling systems, pallet trucks, stackers, platform trolleys, ladders and custom B2B moving solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link href="/products" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto uppercase tracking-widest font-black py-4 px-6 flex items-center justify-center gap-2">
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto uppercase tracking-widest font-black py-4 px-6 bg-white flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-brand-red" />
                <span>Contact Us</span>
              </Button>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
