import React from 'react';
import Link from 'next/link';
import { ShieldAlert, ArrowRight, Home } from 'lucide-react';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Page Not Found | Patel Material Handling Equipment',
  description: 'The requested page was not found in our catalog.',
};

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center bg-brand-soft py-16 px-4 relative overflow-hidden">
      {/* Tech grid markings */}
      <div className="absolute inset-0 industrial-grid opacity-10" />

      <div className="relative z-10 text-center max-w-md space-y-6 bg-white border border-brand-border p-8 md:p-12 shadow-xl">
        <div className="mx-auto w-16 h-16 bg-red-50 border border-red-100 flex items-center justify-center text-brand-red">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="block text-xs font-black uppercase tracking-widest text-brand-red">
            Error 404
          </span>
          <h1 className="text-2xl font-black text-brand-dark uppercase tracking-tight">
            Machinery Page Not Found
          </h1>
          <p className="text-brand-muted text-sm leading-relaxed">
            Looks like this page moved somewhere else, or the specific equipment model URL has been restructured.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
          <Link href="/">
            <Button variant="outline" className="w-full uppercase font-bold tracking-wider text-xs bg-white py-3">
              <Home className="w-4 h-4 mr-2" />
              <span>Return Home</span>
            </Button>
          </Link>
          <Link href="/products">
            <Button className="w-full uppercase font-bold tracking-wider text-xs py-3 flex items-center justify-center gap-1.5">
              <span>View Products</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
