'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Github, Loader2, User } from 'lucide-react';

export default function SignupPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Setting real name in Firebase Profile
      await updateProfile(userCredential.user, {
        displayName: `${firstName} ${lastName}`
      });

      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
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
    <div className="min-h-screen bg-[#030712] flex items-center justify-center px-6 py-20 relative overflow-hidden text-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/[0.07] blur-[130px] rounded-full -z-10" />

      <div className="w-full max-w-[440px] animate-in fade-in zoom-in-95 duration-700">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black tracking-tighter bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
            Create Account
          </h1>
          <p className="text-slate-400 mt-3 text-sm font-medium tracking-wide">
            Join thousands of developers worldwide
          </p>
        </div>

        <div className="bg-white/[0.02] border border-white/10 backdrop-blur-3xl p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
          
          <form className="space-y-5" onSubmit={handleSignup}>
            {error && (
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[12px] p-3.5 rounded-xl text-center font-medium">
                {error}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">First Name</label>
                <input 
                  type="text" 
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all" 
                  placeholder="John" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
                <input 
                  type="text" 
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all" 
                  placeholder="Doe" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all"
                placeholder="name@company.com"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all"
                placeholder="••••••••"
              />
            </div>

            <Button 
              disabled={loading}
              className="w-full h-14 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-base shadow-xl shadow-indigo-600/20 transition-all mt-4"
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Start Building Now'}
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-black"><span className="bg-[#080c16] px-4 text-slate-600">Enterprise Ready</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="border-white/5 bg-white/[0.02] hover:bg-white/[0.07] text-white rounded-xl h-11 text-xs transition-all">
              <Github className="mr-2 h-4 w-4" /> Github
            </Button>
            <Button variant="outline" onClick={handleGoogleLogin} className="border-white/5 bg-white/[0.02] hover:bg-white/[0.07] text-white rounded-xl h-11 text-xs transition-all">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="mr-2 h-4 w-4" alt="Google" /> Google
            </Button>
          </div>
        </div>

        <p className="text-center text-slate-500 mt-10 text-[13px] font-medium">
          Already a member? <Link href="/login" className="text-indigo-400 font-black hover:text-indigo-300 transition-colors ml-1">Sign in here</Link>
        </p>
      </div>
    </div>
  );
}