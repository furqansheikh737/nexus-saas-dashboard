'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { User, Bell, Lock, CreditCard, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'billing', label: 'Billing', icon: CreditCard },
  ];

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
          Settings
        </h1>
        <p className="text-slate-500 text-sm mt-1">Manage your account settings and preferences.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Tabs */}
        <aside className="w-full md:w-64 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                activeTab === tab.id 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" 
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </aside>

        {/* Settings Content Area */}
        <div className="flex-1 space-y-6">
          {/* Profile Section Card */}
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <User className="h-5 w-5 text-indigo-500" /> Public Profile
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-white/5">
                <div className="h-20 w-20 bg-indigo-600 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-2xl">
                  AD
                </div>
                <div>
                  <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-xs h-9 rounded-lg">
                    Change Avatar
                  </Button>
                  <p className="text-[10px] text-slate-500 mt-2">JPG, GIF or PNG. Max size of 2MB.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    defaultValue="Alex Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    defaultValue="alex@nexus.ai"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50" 
                  />
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-xs font-semibold text-slate-400 ml-1">Bio</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none"
                  placeholder="Tell us a little about yourself..."
                ></textarea>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex justify-end gap-3">
              <Button variant="ghost" className="text-slate-400 hover:text-white hover:bg-white/5 rounded-xl">Cancel</Button>
              <Button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 rounded-xl shadow-lg shadow-indigo-600/20 transition-all">
                Save Changes
              </Button>
            </div>
          </div>

          {/* Security Summary Card */}
          <div className="bg-indigo-600/5 border border-indigo-500/20 rounded-3xl p-6 flex items-start gap-4">
            <div className="p-2 bg-indigo-500/20 rounded-xl text-indigo-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-white">Two-factor authentication</h4>
              <p className="text-sm text-slate-400 mt-1">Keep your account extra secure with a second step when logging in.</p>
              <button className="text-indigo-400 text-xs font-bold mt-3 hover:underline">Enable now →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}