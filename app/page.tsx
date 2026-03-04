'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  BarChart2, 
  Users, 
  Shield,
  BarChart3,
  Play,
  Settings, 
  Zap 
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LandingPage() {
  return (
    <div className="bg-[#030712] text-white min-h-screen selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* Navbar - Glassmorphism */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030712]/70 backdrop-blur-xl">
        <div className="container mx-auto h-16 flex items-center justify-between px-6">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="bg-indigo-600 p-1 rounded-lg shadow-[0_0_15px_rgba(79,70,229,0.5)]">
              <Zap className="h-5 w-5 fill-white" />
            </div>
            NEXUS
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <Link href="/features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-slate-400 hover:text-white">Login</Link>
            <Link href="/signup">
              <Button className="bg-white text-black hover:bg-slate-200 rounded-full px-6">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full -z-10" />
        
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-medium text-indigo-400 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            v2.0 is now live — Read more
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
            Unlock your SaaS <br /> 
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">potential.</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Nexus provides AI-powered analytics and infrastructure you need to scale from zero to enterprise. Built for developers, by developers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full px-8 h-14 text-lg shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                Start Free Trial
              </Button>
            </Link>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/5 rounded-full px-8 h-14 text-lg gap-2">
              <Play className="h-4 w-4 fill-white" /> Watch Demo
            </Button>
          </div>

          {/* Responsive Dashboard Mockup Container */}
          <div className="relative mt-20 group perspective-1000">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-[40px] blur-3xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative rounded-[24px] border border-white/10 bg-[#0b0f1a]/80 backdrop-blur-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] transform transition-all duration-700 md:group-hover:scale-[1.01] group-hover:border-white/20">
              
              {/* Window Header */}
              <div className="h-12 border-b border-white/5 bg-white/[0.02] flex items-center px-5 justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                {/* Mobile par address hide kar di */}
                <div className="hidden sm:flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-lg border border-white/5">
                  <Zap size={10} className="text-indigo-400" />
                  <span className="text-[10px] text-slate-400 font-medium">nexus.ai/dashboard/analytics</span>
                </div>
                <div className="w-8 md:w-12"></div>
              </div>

              {/* Mockup Body */}
              <div className="flex overflow-hidden min-h-[400px] md:aspect-video">
                {/* Sidebar (Hidden on Mobile) */}
                <div className="w-56 border-r border-white/5 p-4 space-y-6 hidden lg:block bg-white/[0.01]">
                  <div className="space-y-2">
                    {[
                      { icon: LayoutDashboard, label: 'Overview', active: true },
                      { icon: BarChart2, label: 'Analytics', active: false },
                      { icon: Users, label: 'Customers', active: false },
                      { icon: Settings, label: 'Settings', active: false },
                    ].map((item, i) => (
                      <div key={i} className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-lg text-[12px] font-medium",
                        item.active ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20" : "text-slate-500"
                      )}>
                        <item.icon size={14} /> {item.label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Panel - Responsive Grid */}
                <div className="flex-1 p-4 md:p-8 bg-gradient-to-br from-transparent to-indigo-500/[0.02] overflow-y-auto">
                  {/* Stats Cards - Grid changed to 1 column on mobile, 3 on desktop */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {[
                      { label: 'Total Revenue', value: '$45,231', trend: '+12.5%', color: 'text-emerald-400' },
                      { label: 'Active Users', value: '12,402', trend: '+8.2%', color: 'text-indigo-400' },
                      { label: 'Conversion', value: '3.24%', trend: '-1.4%', color: 'text-rose-400' },
                    ].map((stat, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                        <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">{stat.label}</p>
                        <h4 className="text-xl font-bold text-white mb-1">{stat.value}</h4>
                        <span className={cn("text-[10px] font-medium", stat.color)}>{stat.trend}</span>
                      </div>
                    ))}
                  </div>

                  {/* Chart Area - Responsive Height */}
                  <div className="relative h-48 md:h-64 w-full bg-white/[0.02] border border-white/10 rounded-3xl p-4 md:p-6 overflow-hidden">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h5 className="text-xs md:text-sm font-bold text-white">Revenue Growth</h5>
                        <p className="text-[10px] text-slate-500">Real-time data</p>
                      </div>
                    </div>
                    
                    {/* SVG Chart - viewBox adds responsiveness */}
                    <svg className="w-full h-full" viewBox="0 0 800 120" preserveAspectRatio="none">
                      <path 
                        d="M0 80 Q 100 20, 200 60 T 400 30 T 600 70 T 800 10" 
                        fill="none" 
                        stroke="url(#lineGradient)" 
                        strokeWidth="3" 
                        className="animate-dash"
                        style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                      />
                      <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Grid Overlay */}
                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none opacity-10">
                      {[...Array(24)].map((_, i) => (
                        <div key={i} className="border-[0.5px] border-white/10"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why developers love Nexus.</h2>
          <p className="text-slate-500">The most powerful toolset for modern engineering teams.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Blazing Fast", icon: Zap, color: "text-yellow-400", bg: "bg-yellow-400/10" },
            { title: "Deep Insights", icon: BarChart3, color: "text-indigo-400", bg: "bg-indigo-400/10" },
            { title: "Secure & Compliant", icon: Shield, color: "text-emerald-400", bg: "bg-emerald-400/10" },
          ].map((item, i) => (
            <div key={i} className="group p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
              <div className={`${item.bg} ${item.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-6`}>
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Built on a global edge network for unparalleled speed and precision analytics.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold opacity-50">
            <Zap className="h-4 w-4" /> NEXUS
          </div>
          <div className="text-slate-600 text-sm text-center">
            © 2026 Nexus Analytics Inc. Built with Next.js & Tailwind.
          </div>
          <div className="flex gap-6 text-slate-500">
            <Link href="#" className="hover:text-white">Twitter</Link>
            <Link href="#" className="hover:text-white">GitHub</Link>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
        .animate-dash {
          animation: dash 3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}