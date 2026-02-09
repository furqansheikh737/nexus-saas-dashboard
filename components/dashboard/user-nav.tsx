'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { User as UserIcon, CreditCard, Settings, LogOut, Loader2 } from 'lucide-react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';

export function UserNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Firebase Auth Listener: User ka real data fetch karne ke liye
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Click Outside logic
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (loading) return <Loader2 className="h-5 w-5 animate-spin text-slate-500" />;
  if (!user) return null;

  // Name handling: Agar user ka name nahi hai to email ka start use karein
  const displayName = user.displayName || user.email?.split('@')[0] || 'User';
  const initials = displayName.substring(0, 2).toUpperCase();

  return (
    <div className="relative" ref={menuRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 pl-4 focus:outline-none group"
      >
        {/* Profile Avatar with Glow */}
        <div className="h-9 w-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm border border-white/10 shadow-[0_0_15px_rgba(79,70,229,0.3)] group-hover:scale-105 transition-transform">
          {initials}
        </div>
        
        {/* Dynamic Name & Email */}
        <div className="hidden md:flex flex-col items-start text-left">
            <span className="text-sm font-bold text-white capitalize leading-none">{displayName}</span>
            <span className="text-[10px] text-slate-500 mt-1">{user.email}</span>
        </div>
      </button>

      {/* Elite Dark Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-56 origin-top-right rounded-2xl bg-[#0b0f1a] border border-white/10 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50 animate-in fade-in zoom-in-95 duration-200">
          <div className="py-2">
            <div className="px-4 py-3 border-b border-white/5 md:hidden">
              <p className="text-sm font-bold text-white capitalize">{displayName}</p>
              <p className="text-[10px] text-slate-500 truncate">{user.email}</p>
            </div>
            
            <Link href="/dashboard/settings" className="flex items-center px-4 py-2.5 text-sm text-slate-400 hover:bg-white/5 hover:text-white transition-colors">
              <UserIcon className="mr-3 h-4 w-4 text-indigo-400" /> Profile
            </Link>
            <Link href="/dashboard/settings" className="flex items-center px-4 py-2.5 text-sm text-slate-400 hover:bg-white/5 hover:text-white transition-colors">
              <CreditCard className="mr-3 h-4 w-4 text-indigo-400" /> Billing
            </Link>
            <Link href="/dashboard/settings" className="flex items-center px-4 py-2.5 text-sm text-slate-400 hover:bg-white/5 hover:text-white transition-colors">
              <Settings className="mr-3 h-4 w-4 text-indigo-400" /> Settings
            </Link>
            
            <div className="border-t border-white/5 mt-2 pt-2">
              <button 
                onClick={handleSignOut}
                className="w-full flex items-center px-4 py-2.5 text-sm text-rose-400 hover:bg-rose-500/10 transition-colors"
              >
                <LogOut className="mr-3 h-4 w-4" /> Sign out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}