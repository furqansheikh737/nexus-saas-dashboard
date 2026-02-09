'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center px-4 pt-32 pb-12 relative overflow-hidden text-white">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />

      <div className="w-full max-w-md animate-in fade-in zoom-in duration-500">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
            Welcome back
          </h1>
          <p className="text-slate-400 mt-3 text-sm font-medium">
            Enter your credentials to access your account
          </p>
        </div>

        <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-50" />
          
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5 ml-1">Email Address</label>
              <input
                type="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-200"
                placeholder="name@company.com"
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-1.5 ml-1">
                <label className="text-sm font-medium text-slate-300">Password</label>
                <Link href="#" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">Forgot password?</Link>
              </div>
              <input
                type="password"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-200"
                placeholder="••••••••"
              />
            </div>

            <Button className="w-full h-12 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all duration-300 active:scale-[0.98] mt-2">
              Sign In
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#030712] px-2 text-slate-500 font-medium">Or continue with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-xl h-11 transition-all">
              <Github className="mr-2 h-4 w-4" /> Github
            </Button>
            <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-xl h-11 transition-all">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="mr-2 h-4 w-4" alt="Google" /> Google
            </Button>
          </div>
        </div>

        <p className="text-center text-slate-500 mt-8 text-sm">
          Don&apos;t have an account? <Link href="/signup" className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors">Create one</Link>
        </p>
      </div>
    </div>
  );
}