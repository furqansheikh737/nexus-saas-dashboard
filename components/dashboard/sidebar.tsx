'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  Settings, 
  Menu, 
  X, 
  Zap,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { name: 'Customers', href: '/dashboard/customers', icon: Users },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* --- Mobile Top Bar (Sirf Mobile par dikhega) --- */}
      <div className="lg:hidden fixed top-0 left-0 w-full h-16 bg-[#030712]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6 z-[100]">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-indigo-500 fill-indigo-500" />
          <span className="font-bold text-white tracking-tighter">NEXUS</span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-slate-400 hover:text-white transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- Sidebar Desktop & Mobile Overlay --- */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-[90] w-64 bg-[#030712] border-r border-white/5 transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full p-6">
          {/* Logo Section (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-3 mb-10 px-2">
            <div className="bg-indigo-600 p-1.5 rounded-xl">
              <Zap className="h-5 w-5 fill-white text-white" />
            </div>
            <span className="text-xl font-black tracking-tighter text-white">NEXUS</span>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 space-y-2 pt-16 lg:pt-0">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all group",
                  pathname === item.href 
                    ? "bg-indigo-600/10 text-indigo-400 border border-indigo-600/20" 
                    : "text-slate-500 hover:bg-white/[0.03] hover:text-slate-200 border border-transparent"
                )}
              >
                <item.icon size={18} className={cn(
                  pathname === item.href ? "text-indigo-400" : "text-slate-500 group-hover:text-slate-200"
                )} />
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Bottom Logout Section */}
          <div className="pt-6 border-t border-white/5">
            <button className="flex items-center gap-3 px-4 py-3 w-full text-slate-500 hover:text-rose-400 transition-colors text-sm font-medium">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Backdrop (Jab menu khula ho tab screen blur karne ke liye) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}