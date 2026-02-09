'use client';

import { OverviewChart } from '@/components/dashboard/overview-chart'; // Ensure chart is also dark
import { Card } from '@/components/ui/card';
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  Activity, 
  ArrowUpRight, 
  ArrowDownRight,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { label: 'Total Revenue', value: '$45,231', change: '+20.1%', trend: 'up', icon: CreditCard },
  { label: 'Active Users', value: '+2,350', change: '+180.1%', trend: 'up', icon: Users },
  { label: 'Sales', value: '+12,234', change: '+19%', trend: 'up', icon: CreditCard },
  { label: 'Active Now', value: '+573', change: '-201', trend: 'down', icon: Activity },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white p-6 md:p-10 pt-24">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-slate-500 text-sm mt-1">Welcome back, here's what's happening today.</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl flex gap-2 shadow-[0_0_15px_rgba(79,70,229,0.4)]">
          <Plus className="h-4 w-4" /> New Project
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <Card key={i} className="bg-white/[0.03] border-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                <stat.icon className="h-5 w-5" />
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1 ${
                stat.trend === 'up' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
              }`}>
                {stat.change}
                {stat.trend === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
              </span>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold mt-1 tracking-tight text-white">{stat.value}</h3>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <Card className="lg:col-span-2 bg-white/[0.03] border-white/10 p-6 rounded-3xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-white">Revenue Overview</h3>
            <select className="bg-white/5 border border-white/10 rounded-lg text-xs p-2 outline-none">
              <option>Last 30 Days</option>
              <option>Last 6 Months</option>
            </select>
          </div>
          <div className="h-[350px] w-full">
            <OverviewChart />
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-white/[0.03] border-white/10 p-6 rounded-3xl">
          <h3 className="font-bold text-lg text-white mb-6">Recent Activity</h3>
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold">
                  U{item}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">New user signed up</p>
                  <p className="text-xs text-slate-500">2 minutes ago</p>
                </div>
                <div className="text-xs font-bold text-indigo-400">+$29</div>
              </div>
            ))}
          </div>
          <Button variant="ghost" className="w-full mt-6 text-slate-400 hover:text-white hover:bg-white/5">
            View All Activity
          </Button>
        </Card>
      </div>
    </div>
  );
}