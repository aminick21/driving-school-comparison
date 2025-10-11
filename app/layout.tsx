import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ComparisonBar } from '@/components/comparison-bar';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Simple - Compare Driving Schools in Dubai',
  description: 'Find and compare the best driving schools in Dubai. Make an informed decision for your driver training with comprehensive comparisons of prices, ratings, and courses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-24">{children}</main>
        <Footer />
        <ComparisonBar />
        <Toaster />
      </body>
    </html>
  );
}
