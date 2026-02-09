'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { User, CreditCard, Settings, LogOut } from 'lucide-react';

export function UserNav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  return (
    <div className="relative" ref={menuRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 pl-4 focus:outline-none"
      >
        <div className="h-9 w-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm border border-indigo-200">
          AD
        </div>
        <div className="hidden md:flex flex-col items-start">
            <span className="text-sm font-medium text-slate-700">Alex Doe</span>
            <span className="text-xs text-slate-500">alex@nexus.com</span>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1">
            <div className="px-4 py-3 border-b border-slate-100 md:hidden">
              <p className="text-sm font-medium text-slate-900">Alex Doe</p>
              <p className="text-xs text-slate-500 truncate">alex@nexus.com</p>
            </div>
            
            <Link href="/dashboard/settings" className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600">
              <User className="mr-3 h-4 w-4" /> Profile
            </Link>
            <Link href="/dashboard/settings" className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600">
              <CreditCard className="mr-3 h-4 w-4" /> Billing
            </Link>
            <Link href="/dashboard/settings" className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600">
              <Settings className="mr-3 h-4 w-4" /> Settings
            </Link>
            
            <div className="border-t border-slate-100 mt-1 pt-1">
              <Link href="/" className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                <LogOut className="mr-3 h-4 w-4" /> Sign out
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}