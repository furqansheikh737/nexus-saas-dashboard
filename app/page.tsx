'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Zap, Shield, BarChart3, Globe, ArrowRight, Play } from 'lucide-react';

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

      {/* Hero Section - The "Developer" Look */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full -z-10" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full -z-10" />

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
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
      potential.
    </span>
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

          {/* Abstract Dashboard Mockup Container */}
          <div className="mt-20 relative max-w-5xl mx-auto">
             <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10" />
             <div className="rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
                <div className="rounded-xl border border-white/10 bg-[#0b0f1a] aspect-video flex items-center justify-center overflow-hidden">
                   {/* This represents where your real dashboard screenshot or video would go */}
                   <BarChart3 className="h-20 w-20 text-indigo-500/20" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features - Bento Box Style */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why developers love Nexus.</h2>
          <p className="text-slate-500">The most powerful toolset for modern engineering teams.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Blazing Fast", icon: Zap, color: "text-yellow-400", bg: "bg-yellow-400/10" },
            { title: "Deep Insights", icon: BarChart3, color: "text-indigo-400", bg: "bg-indigo-400/10" },
            { title: "Secure & Compliant", icon: Shield, color: "text-emerald-400", bg: "bg-emerald-400/10" },
          ].map((item, i) => (
            <div key={i} className="group p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
              <div className={`${item.bg} ${item.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Built on a global edge network for unparalleled speed and precision analytics that help you understand complex data.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold opacity-50">
            <Zap className="h-4 w-4" /> NEXUS
          </div>
          <div className="text-slate-600 text-sm">
            © 2026 Nexus Analytics Inc. Built with Next.js & Tailwind.
          </div>
          <div className="flex gap-6 text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}