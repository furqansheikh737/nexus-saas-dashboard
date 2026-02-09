'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Github, Loader2, Mail, Lock } from 'lucide-react';
import { auth } from '@/lib/firebase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard'); 
    } catch (err: any) {
      if (err.code === 'auth/user-not-found') setError('No user found with this email.');
      else if (err.code === 'auth/wrong-password') setError('Wrong password. Please try again.');
      else setError('Failed to login. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  // Function to handle Google Login
const handleGoogleLogin = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    // User info mil gayi
    console.log(result.user);
    router.push('/dashboard');
  } catch (error: any) {
    console.error("Google Sign-In Error:", error.message);
  }
};

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center px-6 pt-24 pb-12 relative overflow-hidden text-white">
      {/* Background Glow - Made softer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />

      <div className="w-full max-w-[420px] animate-in fade-in slide-in-from-bottom-6 duration-700">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black tracking-tight bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
            Welcome back
          </h1>
          <p className="text-slate-400 mt-3 text-sm tracking-wide">Enter your details to access your workspace</p>
        </div>

        <div className="bg-white/[0.02] border border-white/10 backdrop-blur-2xl p-8 rounded-[2rem] shadow-2xl relative">
          <form className="space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[13px] py-3 px-4 rounded-xl text-center font-medium animate-shake">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300 ml-1">Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/50 transition-all"
                  placeholder="name@company.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-semibold text-slate-300">Password</label>
                <Link href="#" className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors">Forgot?</Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/50 transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <Button 
              disabled={loading}
              className="w-full h-[52px] bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-base shadow-lg shadow-indigo-600/20 transition-all active:scale-[0.98] mt-2"
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Sign In'}
            </Button>
          </form>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-black"><span className="bg-[#0b101d] px-4 text-slate-500">Secure Authentication</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="border-white/5 bg-white/[0.03] hover:bg-white/[0.08] text-white rounded-xl h-12 text-xs font-bold transition-all">
              <Github className="mr-2 h-4 w-4" /> Github
            </Button>
            <Button variant="outline" onClick={handleGoogleLogin} className="border-white/5 bg-white/[0.03] hover:bg-white/[0.08] text-white rounded-xl h-12 text-xs font-bold transition-all">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="mr-2 h-4 w-4" alt="Google" /> Google
            </Button>
          </div>
        </div>

        <p className="text-center text-slate-500 mt-10 text-[13px] font-medium">
          New to the platform? <Link href="/signup" className="text-indigo-400 font-black hover:text-indigo-300 transition-colors ml-1">Create an account</Link>
        </p>
      </div>
    </div>
  );
}