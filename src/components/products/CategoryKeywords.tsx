'use client';

import React, { useState } from 'react';

interface CategoryKeywordsProps {
  keywords: string[];
  categoryName?: string;
  activeKeyword?: string;
  onSelectKeyword?: (keyword: string) => void;
}

export default function CategoryKeywords({
  keywords,
}: CategoryKeywordsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!keywords || keywords.length === 0) {
    return null;
  }

  return (
    <div className="mb-6 -mt-1">
      <p
        className={`text-xs md:text-sm text-brand-muted leading-relaxed ${
          !isExpanded ? 'line-clamp-2 md:line-clamp-3' : ''
        }`}
      >
        {keywords.join(', ')}
      </p>
      {keywords.length > 5 && (
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs md:text-sm font-semibold text-brand-red hover:underline mt-1.5 inline-block cursor-pointer focus:outline-none"
        >
          {isExpanded ? 'View less' : 'View more...'}
        </button>
      )}
    </div>
  );
}
