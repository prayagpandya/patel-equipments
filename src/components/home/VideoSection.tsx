'use client';

import React from 'react';
import Link from 'next/link';
import { Play } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

export default function VideoSection() {
  return (
    <section className="w-full bg-brand-soft py-16 md:py-20 border-b border-brand-border" aria-labelledby="video-heading">
      <div className="max-w-7xl mx-auto px-4">
        
        <ScrollReveal
          delay={0.05}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-brand-border p-6 sm:p-10 lg:p-12 shadow-md relative"
        >
          {/* Tech layout markers */}
          <div className="absolute top-0 left-0 w-2 h-full bg-brand-red" />

          {/* Left info */}
          <div className="lg:col-span-5 pl-4 space-y-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-red">
              Corporate Video
            </span>
            <h2
              id="video-heading"
              className="text-2xl md:text-3xl font-black text-brand-dark uppercase tracking-tight leading-tight"
            >
              Discover Patel Material Handling Equipment
            </h2>
            <p className="text-brand-muted text-sm md:text-base leading-relaxed">
              A short walkthrough of the product range, the manufacturing unit, and how equipment is specified for an application.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="https://www.youtube.com/watch?v=l5M90H21Sns"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="uppercase tracking-widest text-xs font-bold py-3.5 px-6 flex items-center justify-center gap-2">
                  <Play className="w-4 h-4 text-white fill-current" />
                  <span>Watch on YouTube</span>
                </Button>
              </a>
              <Link href="/company/corporate-video">
                <Button variant="outline" className="uppercase tracking-widest text-xs font-bold py-3.5 px-6 bg-white">
                  <span>Facility Details</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right player embed */}
          <div className="lg:col-span-7 aspect-video w-full border border-brand-border bg-black relative overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/l5M90H21Sns"
              title="Patel Material Handling Equipment Corporate Video"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
}
