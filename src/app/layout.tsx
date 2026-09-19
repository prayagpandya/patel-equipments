import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/layout/FloatingContact';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Patel Material Handling Equipment | Reliable Industrial Handling Solutions',
  description:
    'Patel Material Handling Equipment manufactures premium hydraulic pallet trucks, drum lifters, manual stackers, platform trolleys, and aluminium ladders in Ahmedabad, Gujarat, India.',
  keywords:
    'Material Handling Equipment, Pallet Trucks, Drum Lifter, Hydraulic Stacker, Platform Trolley, Aluminium Ladder, Patel Equipment, Ahmedabad, GIDC Naroda',
  openGraph: {
    title: 'Patel Material Handling Equipment | Industrial Moving Systems',
    description:
      'Premium industrial material handling equipment. Built for strength, durability, and safety.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased overflow-x-clip max-w-full`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-clip max-w-full">
        <Header />
        <main className="flex-1 bg-white w-full max-w-full">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
