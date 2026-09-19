import React from 'react';

export const metadata = {
  title: 'Machinery Categories | Patel Material Handling Equipment',
  description: 'Browse our complete catalog of industrial pallet trucks, drum handlers, platform trolleys, warehouse stackers, and aluminium ladders.',
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
