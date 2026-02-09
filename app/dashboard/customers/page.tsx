'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Search, 
  MoreHorizontal, 
  UserPlus,
  Mail,
  ShieldCheck
} from 'lucide-react';

const users = [
  { name: 'Zeeshan Ali', email: 'zeeshan@nexus.ai', role: 'Admin', status: 'Active', date: 'Oct 24, 2023' },
  { name: 'Hamza Sheikh', email: 'hamza@example.com', role: 'Member', status: 'Active', date: 'Nov 12, 2023' },
  { name: 'Sara Khan', email: 'sara@design.co', role: 'Billing', status: 'Inactive', date: 'Dec 05, 2023' },
  { name: 'Raza Ahmed', email: 'raza@tech.com', role: 'Member', status: 'Pending', date: 'Jan 10, 2024' },
];

export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white p-6 md:p-10 pt-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
            Customer Directory
          </h1>
          <p className="text-slate-500 text-sm mt-1">Manage your users and their permissions.</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl flex gap-2 shadow-[0_0_15px_rgba(79,70,229,0.4)]">
          <UserPlus className="h-4 w-4" /> Add Customer
        </Button>
      </div>

      {/* Search & Filter Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
        <input 
          type="text" 
          placeholder="Search customers..." 
          className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
        />
      </div>

      {/* Customers Table Card */}
      <Card className="bg-white/[0.03] border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/[0.02] border-b border-white/5">
              <tr>
                <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-widest">User</th>
                <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Role</th>
                <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Joined Date</th>
                <th className="p-5"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {users.map((user, i) => (
                <tr key={i} className="hover:bg-white/[0.01] transition-colors group">
                  <td className="p-5">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center font-bold text-indigo-400">
                        {user.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">{user.name}</p>
                        <p className="text-xs text-slate-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-5 text-sm text-slate-300">
                    <div className="flex items-center gap-2">
                      {user.role === 'Admin' ? <ShieldCheck className="h-3 w-3 text-indigo-400" /> : <Mail className="h-3 w-3 text-slate-500" />}
                      {user.role}
                    </div>
                  </td>
                  <td className="p-5">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-tighter ${
                      user.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400' : 
                      user.status === 'Pending' ? 'bg-amber-500/10 text-amber-400' : 'bg-rose-500/10 text-rose-400'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-5 text-sm text-slate-400 font-medium">{user.date}</td>
                  <td className="p-5 text-right">
                    <button className="p-2 hover:bg-white/5 rounded-lg text-slate-500 hover:text-white transition-all">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}