'use client';

import React, { useState, useMemo } from 'react';
import { Category, Product, PowerSource } from '@/types';
import ProductCard from '@/components/products/ProductCard';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import CategoryKeywords from '@/components/products/CategoryKeywords';
import { getCategoryKeywords } from '@/data/categoryKeywords';
import { SlidersHorizontal, Search, RefreshCw, X } from 'lucide-react';

interface CategoryViewProps {
  category: Category;
  initialProducts: Product[];
}

export default function CategoryView({ category, initialProducts }: CategoryViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedKeyword, setSelectedKeyword] = useState<string>('');
  const [powerFilter, setPowerFilter] = useState<string>('');
  const [capacityFilter, setCapacityFilter] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('default');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Extract unique capacities and power sources from product data for filter dropdowns
  const capacities = useMemo(() => {
    const caps = initialProducts
      .map((p) => p.capacity)
      .filter((c): c is string => !!c);
    return ['', ...Array.from(new Set(caps))];
  }, [initialProducts]);

  const powerSources = useMemo(() => {
    const sources = initialProducts.map((p) => p.powerSource);
    return ['', ...Array.from(new Set(sources))];
  }, [initialProducts]);

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedKeyword('');
    setPowerFilter('');
    setCapacityFilter('');
    setSortBy('default');
  };

  const keywords = useMemo(() => {
    if (category.keywords && category.keywords.length > 0) {
      return category.keywords;
    }
    return getCategoryKeywords(category.slug);
  }, [category]);

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...initialProducts];

    // 1. Text Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.modelNumber?.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.keywords.some((k) => k.toLowerCase().includes(q))
      );
    }

    // 2. Power Source Filter
    if (powerFilter) {
      result = result.filter((p) => p.powerSource === powerFilter);
    }

    // 3. Capacity Filter
    if (capacityFilter) {
      result = result.filter((p) => p.capacity === capacityFilter);
    }

    // 4. Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [initialProducts, searchQuery, powerFilter, capacityFilter, sortBy]);

  const sortOptions = [
    { value: 'default', label: 'Recommended' },
    { value: 'name-asc', label: 'Name: A to Z' },
    { value: 'name-desc', label: 'Name: Z to A' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' }
  ];

  const powerOptions = [
    { value: '', label: 'All Power Sources' },
    ...powerSources.filter(Boolean).map((src) => ({ value: src, label: src }))
  ];

  const capacityOptions = [
    { value: '', label: 'All Capacities' },
    ...capacities.filter(Boolean).map((cap) => ({ value: cap, label: cap }))
  ];

  const hasActiveFilters = searchQuery || selectedKeyword || powerFilter || capacityFilter || sortBy !== 'default';

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: category.name }
        ]}
      />

      {/* Header */}
      <SectionHeading
        align="left"
        eyebrow="Equipment Series"
        title={category.name}
        className="mt-6 !mb-3"
      />

      {/* Category Industry Keywords & Search Terms with View More... */}
      {keywords && keywords.length > 0 && (
        <CategoryKeywords
          keywords={keywords}
          categoryName={category.name}
          activeKeyword={selectedKeyword}
          onSelectKeyword={(kw) => {
            setSelectedKeyword(kw);
            setSearchQuery(kw);
          }}
        />
      )}

      {/* Controls Bar */}
      <div className="border border-brand-border bg-brand-soft p-4 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Live Search Field */}
        <div className="relative flex-1 max-w-md">
          <Input
            label=""
            id="search"
            maxLength={80}
            placeholder="Search within this category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="!mb-0"
          />
          <Search className="absolute right-3 top-[50%] -translate-y-1/2 w-4 h-4 text-brand-muted" />
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Sorting Dropdown */}
          <div className="w-48 shrink-0">
            <Select
              label=""
              id="sort"
              options={sortOptions}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            />
          </div>

          {/* Filter toggle on mobile */}
          <Button
            variant="outline"
            className="md:hidden flex items-center gap-2 py-3 bg-white"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
          </Button>

          {/* Reset Filters icon */}
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="p-3 text-brand-muted hover:text-brand-red transition-colors bg-white border border-brand-border cursor-pointer focus-ring"
              title="Reset Filters"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12 items-start">
        {/* Filters Sidebar - Desktop */}
        <aside className="hidden lg:block space-y-6 border border-brand-border p-6 bg-brand-soft lg:sticky lg:top-24 lg:self-start z-10 max-h-[calc(100vh-7rem)] overflow-y-auto">
          <div className="flex justify-between items-center border-b border-brand-border pb-3">
            <h3 className="text-xs font-black uppercase tracking-widest text-brand-dark flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-brand-red" />
              <span>Filter Catalog</span>
            </h3>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-[10px] font-black uppercase tracking-widest text-brand-red hover:underline cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Power Source Filter */}
          {powerSources.length > 2 && (
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                Power Source
              </label>
              <Select
                label=""
                id="power"
                options={powerOptions}
                value={powerFilter}
                onChange={(e) => setPowerFilter(e.target.value)}
              />
            </div>
          )}

          {/* Capacity Filter */}
          {capacities.length > 2 && (
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                Load Capacity
              </label>
              <Select
                label=""
                id="capacity"
                options={capacityOptions}
                value={capacityFilter}
                onChange={(e) => setCapacityFilter(e.target.value)}
              />
            </div>
          )}
        </aside>

        {/* Mobile Filters Drawer */}
        {showMobileFilters && (
          <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowMobileFilters(false)} />
            <div className="relative w-80 bg-white p-6 border-l border-brand-border flex flex-col justify-between h-full z-10">
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-brand-border pb-3">
                  <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-brand-red" />
                    Filter Options
                  </h3>
                  <button onClick={() => setShowMobileFilters(false)} className="text-brand-dark hover:text-brand-red p-1 cursor-pointer">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark">Power Source</label>
                  <Select
                    label=""
                    options={powerOptions}
                    value={powerFilter}
                    onChange={(e) => setPowerFilter(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark">Load Capacity</label>
                  <Select
                    label=""
                    options={capacityOptions}
                    value={capacityFilter}
                    onChange={(e) => setCapacityFilter(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-brand-border bg-brand-soft p-4 -mx-6 -mb-6">
                {hasActiveFilters && (
                  <Button variant="outline" className="w-full uppercase font-bold tracking-wider py-2.5 bg-white" onClick={resetFilters}>
                    Clear Filters
                  </Button>
                )}
                <Button className="w-full uppercase font-bold tracking-wider py-2.5" onClick={() => setShowMobileFilters(false)}>
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid Area */}
        <div className="lg:col-span-3">
          {/* Result Stats */}
          <div className="mb-4 text-xs font-bold uppercase tracking-wider text-brand-muted flex justify-between items-center">
            <span>Showing {filteredProducts.length} of {initialProducts.length} Equipment Models</span>
            {hasActiveFilters && (
              <span className="text-brand-red">Active Filters Applied</span>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-brand-soft border border-brand-border p-12 text-center my-6 space-y-4">
              <h4 className="text-lg font-bold text-brand-dark uppercase tracking-tight">No machinery matched your filter criteria</h4>
              <p className="text-brand-muted text-sm max-w-sm mx-auto">
                Try refining your text search or resetting the capacity/power filters to see standard equipment catalog models.
              </p>
              <Button variant="outline" className="uppercase font-bold tracking-wider px-6 py-2.5 bg-white" onClick={resetFilters}>
                Reset Search Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
