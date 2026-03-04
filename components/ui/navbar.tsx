'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap, Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (pathname.startsWith('/dashboard')) return null;

  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-[#030712] h-16">
      <div className="container mx-auto h-full flex items-center justify-between px-6 relative">
        
        {/* LEFT: Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter text-white z-10">
          <div className="bg-indigo-600 p-1 rounded-lg">
            <Zap className="h-5 w-5 fill-white" />
          </div>
          <span className="font-bold text-xl tracking-tighter uppercase italic">Nexus</span>
        </Link>

        {/* CENTER: Nav Links (Desktop Only) */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
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

        {/* RIGHT: Desktop Auth & Mobile Toggle */}
        <div className="flex items-center gap-4 z-10">
          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-slate-400 hover:text-white">
              Login
            </Link>
            <Link href="/signup">
              <Button className="bg-white text-black hover:bg-slate-200 rounded-full px-6 text-xs h-9">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY (MyPerfectResume Style) */}
      <div className={cn(
        "fixed inset-0 top-16 bg-[#030712] z-[90] md:hidden transition-all duration-300 ease-in-out border-t border-white/5",
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      )}>
        <div className="flex flex-col p-6 h-full bg-[#030712]">
          
          {/* Nav Links List */}
          <div className="flex flex-col divide-y divide-white/5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-5 text-sm font-bold uppercase tracking-widest text-white hover:text-indigo-400 transition-colors"
              >
                {link.name}
                <ChevronRight size={18} className="text-slate-500" />
              </Link>
            ))}
          </div>

          {/* Action Buttons at Bottom */}
          <div className="mt-auto flex flex-col gap-4 pb-10">
            <Link href="/signup" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-full py-7 text-base font-bold uppercase tracking-tighter shadow-lg shadow-indigo-600/20">
                Get Started
              </Button>
            </Link>
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full border-white/10 bg-transparent text-white rounded-full py-7 text-base font-bold uppercase tracking-tighter hover:bg-white/5 transition-all">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}