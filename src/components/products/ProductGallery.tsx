'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  name: string;
  images: string[];
}

export default function ProductGallery({ name, images }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const gallery = images.length > 0 ? images : [''];

  return (
    <div className="space-y-4">
      {/* Main Display Image */}
      <div className="w-full aspect-square bg-brand-soft border border-brand-border p-8 flex items-center justify-center relative overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={gallery[activeIndex]}
            alt={`${name} product photograph`}
            width={450}
            height={450}
            className="w-auto h-auto max-h-[90%] object-contain"
            priority
          />
        </div>
      </div>

      {/* Thumbnails */}
      {gallery.length > 1 && (
        <div className="flex flex-wrap gap-3">
          {gallery.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`w-20 h-20 bg-white border p-2 flex items-center justify-center hover:border-brand-red transition-all cursor-pointer rounded-none focus-ring ${
                activeIndex === i ? 'border-brand-red ring-1 ring-brand-red' : 'border-brand-border'
              }`}
              aria-label={`View image ${i + 1}`}
            >
              <Image
                src={src}
                alt={`${name} thumbnail ${i + 1}`}
                width={60}
                height={60}
                className="w-auto h-auto max-h-full object-contain"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
