import React from 'react';
import { Specification } from '@/types';

interface ProductSpecificationsProps {
  specs: Specification[];
}

export default function ProductSpecifications({ specs }: ProductSpecificationsProps) {
  return (
    <div className="w-full border border-brand-border bg-white overflow-hidden">
      <div className="bg-brand-soft border-b border-brand-border px-6 py-4">
        <h4 className="text-sm font-black uppercase tracking-widest text-brand-dark">
          Technical Specifications
        </h4>
      </div>
      <table className="w-full text-left text-sm divide-y divide-brand-border">
        <tbody>
          {specs.map((spec, idx) => (
            <tr
              key={idx}
              className={`flex flex-col sm:table-row divide-y sm:divide-y-0 sm:divide-x divide-brand-border ${
                idx % 2 === 0 ? 'bg-white' : 'bg-brand-soft/30'
              }`}
            >
              <td className="px-6 py-3.5 font-bold uppercase tracking-wider text-brand-muted text-[10px] w-full sm:w-1/3 shrink-0">
                {spec.label}
              </td>
              <td className="px-6 py-3.5 font-semibold text-brand-dark w-full sm:w-2/3">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
