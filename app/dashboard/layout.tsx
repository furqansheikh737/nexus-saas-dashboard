'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Settings, LogOut, Menu, Bell, Zap, BarChart2, Users } from 'lucide-react';
import { UserNav } from '@/components/dashboard/user-nav';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart2 },
  { href: '/dashboard/customers', label: 'Customers', icon: Users },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    // Body wrapper ko fix kiya: bg-[#030712]
    <div className="flex h-screen bg-[#030712] overflow-hidden text-white">
      
      {/* Sidebar - Same color as your landing page background */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-[#0b0f1a] border-r border-white/5 transition-transform duration-300 lg:static lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-16 flex items-center px-6 gap-2 border-b border-white/5">
          <Zap className="h-5 w-5 text-indigo-500 fill-indigo-500" />
          <span className="font-bold text-xl tracking-tighter">NEXUS</span>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                pathname === item.href ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" : "text-slate-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon className="h-5 w-5" /> {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-white/5">
          <Link href="/login" className="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-red-400 transition-colors text-sm">
            <LogOut className="h-5 w-5" /> Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header ko layout ke andar hi fix kiya taake alag component ka conflict na ho */}
        <header className="h-16 border-b border-white/5 bg-[#030712]/50 backdrop-blur-xl flex items-center justify-between px-6">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 text-slate-400">
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="flex items-center gap-4 ml-auto">
            <button className="p-2 text-slate-400 hover:text-white relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border border-[#030712]" />
            </button>
            {/* User Profile Component */}
            <UserNav />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 md:p-8 bg-[#030712]">
          {children}
        </main>
      </div>
    </div>
  );
}