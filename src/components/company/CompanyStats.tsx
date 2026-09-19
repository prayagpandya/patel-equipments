'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Stat } from '@/types';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface CompanyStatsProps {
  stats: Stat[];
}

function StatCounter({ value }: { value: string }) {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  // Parse the value to check for numbers, ranges, prefixes/suffixes
  const parsed = useMemo(() => {
    if (!/\d/.test(value)) {
      return { isNumeric: false, staticValue: value };
    }

    // Match range like "26–50" or "26-50"
    const rangeMatch = value.match(/^(\d+)[–-](\d+)$/);
    if (rangeMatch) {
      return {
        isNumeric: true,
        type: 'range',
        startTarget: parseInt(rangeMatch[1], 10),
        endTarget: parseInt(rangeMatch[2], 10),
      };
    }

    // Match single number with optional prefix and suffix (e.g. "30,000+")
    const cleanNumStr = value.replace(/,/g, '');
    const numberMatch = cleanNumStr.match(/^([^\d]*)(\d+)([^\d]*)$/);
    if (numberMatch) {
      return {
        isNumeric: true,
        type: 'single',
        prefix: numberMatch[1],
        target: parseInt(numberMatch[2], 10),
        suffix: numberMatch[3],
      };
    }

    return { isNumeric: false, staticValue: value };
  }, [value]);

  useEffect(() => {
    if (!parsed.isNumeric) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000; // 2 seconds animation
          let startTimestamp: number | null = null;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            if (parsed.type === 'range' && parsed.startTarget !== undefined && parsed.endTarget !== undefined) {
              setVal1(Math.floor(progress * parsed.startTarget));
              setVal2(Math.floor(progress * parsed.endTarget));
            } else if (parsed.type === 'single' && parsed.target !== undefined) {
              setVal1(Math.floor(progress * parsed.target));
            }

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              if (parsed.type === 'range' && parsed.startTarget !== undefined && parsed.endTarget !== undefined) {
                setVal1(parsed.startTarget);
                setVal2(parsed.endTarget);
              } else if (parsed.type === 'single' && parsed.target !== undefined) {
                setVal1(parsed.target);
              }
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [parsed]);

  if (!parsed.isNumeric) {
    return <span ref={elementRef}>{parsed.staticValue}</span>;
  }

  if (parsed.type === 'range') {
    return (
      <span ref={elementRef}>
        {val1}–{val2}
      </span>
    );
  }

  const formattedVal = val1 >= 1000 ? val1.toLocaleString() : val1;
  return (
    <span ref={elementRef}>
      {parsed.prefix}
      {formattedVal}
      {parsed.suffix}
    </span>
  );
}

export default function CompanyStats({ stats }: CompanyStatsProps) {
  return (
    <section className="w-full bg-brand-dark text-white border-y border-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y-2 md:divide-y-0 md:divide-x divide-brand-charcoal">
          {stats.map((stat, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 0.1}
              className="text-center flex flex-col justify-center items-center px-4 py-4 md:py-0"
            >
              <span className="block text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-brand-yellow mb-2">
                <StatCounter value={stat.value} />
              </span>
              <span className="block text-xs font-bold uppercase tracking-widest text-gray-400">
                {stat.label}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
