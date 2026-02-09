import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar'; // Navbar import karein
import { cn } from '@/lib/utils'; // Utility helper

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nexus Analytics - Scale Smarter',
  description: 'The all-in-one dashboard for SaaS growth.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={cn(
          inter.className, 
          "min-h-screen bg-[#030712] text-white antialiased selection:bg-indigo-500/30"
        )}
      >
        {/* Navbar yahan load hogi jo Dashboard ke ilawa har page par dikhegi */}
        <Navbar />
        
        <main className="relative flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}