'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
];

export function Navbar() {
  const pathname = usePathname();

  // Dashboard par Navbar nahi dikhani chahiye
  if (pathname.startsWith('/dashboard')) return null;

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030712]/70 backdrop-blur-xl">
      <div className="container mx-auto h-16 flex items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter text-white">
          <div className="bg-indigo-600 p-1 rounded-lg shadow-[0_0_15px_rgba(79,70,229,0.5)]">
            <Zap className="h-5 w-5 fill-white" />
          </div>
          NEXUS
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                pathname === link.href ? "text-white" : "text-slate-400"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-slate-400 hover:text-white">
            Login
          </Link>
          <Link href="/signup">
            <Button className="bg-white text-black hover:bg-slate-200 rounded-full px-6 text-xs h-9">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}