'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Settings, LogOut, Menu, Bell, Zap, BarChart2, Users } from 'lucide-react';
import { UserNav } from '@/components/dashboard/user-nav';
import { cn } from '@/lib/utils';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';

const navItems = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart2 },
  { href: '/dashboard/customers', label: 'Customers', icon: Users },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="flex h-screen bg-[#030712] overflow-hidden text-white font-sans">
      
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-[#0b0f1a] border-r border-white/5 transition-transform duration-300 lg:static lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Brand Logo */}
        <div className="h-16 flex items-center px-6 gap-2 border-b border-white/5 bg-[#0b0f1a]">
          <div className="bg-indigo-600 p-1 rounded-lg">
            <Zap className="h-5 w-5 text-white fill-white" />
          </div>
          <span className="font-bold text-xl tracking-tighter uppercase italic">Nexus</span>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-140px)]">
          <p className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Main Menu</p>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group",
                  isActive 
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" 
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className={cn("h-5 w-5", isActive ? "text-white" : "text-slate-400 group-hover:text-white")} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Logout at Bottom */}
        <div className="absolute bottom-0 w-full p-4 border-t border-white/5 bg-[#0b0f1a]">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-rose-400 transition-colors text-sm font-medium w-full group"
          >
            <LogOut className="h-5 w-5 group-hover:-translate-x-1 transition-transform" /> 
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#030712]">
        {/* Header */}
        <header className="h-16 border-b border-white/5 bg-[#030712]/50 backdrop-blur-xl flex items-center justify-between px-6 sticky top-0 z-30">
          <button 
            onClick={() => setSidebarOpen(true)} 
            className="lg:hidden p-2 text-slate-400 hover:bg-white/5 rounded-lg transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="flex items-center gap-4 ml-auto">
            {/* Notification Bell with Pulse */}
            <button className="p-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-full relative transition-all">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2.5 right-2.5 h-2 w-2 bg-indigo-500 rounded-full border-2 border-[#030712]" />
            </button>

            {/* Vertical Divider */}
            <div className="h-6 w-px bg-white/10 hidden sm:block" />
            
            {/* Dynamic User Profile */}
            <UserNav />
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}