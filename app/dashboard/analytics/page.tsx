'use client';

import { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '@/components/ui/card';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  MousePointer2, 
  Download,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const data = [
  { name: 'Mon', views: 4000, conv: 2400 },
  { name: 'Tue', views: 3000, conv: 1398 },
  { name: 'Wed', views: 5000, conv: 9800 },
  { name: 'Thu', views: 2780, conv: 3908 },
  { name: 'Fri', views: 1890, conv: 4800 },
  { name: 'Sat', views: 2390, conv: 3800 },
  { name: 'Sun', views: 3490, conv: 4300 },
];

export default function AnalyticsPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#030712] text-white p-6 md:p-10 pt-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
            Analytics Overview
          </h1>
          <p className="text-slate-500 text-sm mt-1">Real-time performance of your platform.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="bg-white/5 border-white/10 text-white rounded-xl flex gap-2">
            <Calendar className="h-4 w-4" /> Filter
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl flex gap-2 shadow-[0_0_15px_rgba(79,70,229,0.4)]">
            <Download className="h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      {/* Analytics Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Page Views', value: '1,284,502', icon: MousePointer2, color: 'text-indigo-400' },
          { label: 'Conversion Rate', value: '3.24%', icon: TrendingUp, color: 'text-emerald-400' },
          { label: 'Session Duration', value: '4m 32s', icon: BarChart3, color: 'text-purple-400' },
          { label: 'Bounce Rate', value: '42.1%', icon: Users, color: 'text-rose-400' },
        ].map((stat, i) => (
          <Card key={i} className="bg-white/[0.03] border-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className={`p-3 bg-white/5 rounded-xl ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-widest">{stat.label}</p>
                <h3 className="text-xl font-bold text-white mt-1">{stat.value}</h3>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Main Chart Section */}
      <Card className="bg-white/[0.03] border-white/10 p-8 rounded-3xl">
        <h3 className="font-bold text-lg text-white mb-8">Traffic & Engagement</h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
              <XAxis dataKey="name" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} dy={10} />
              <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '12px', color: '#fff' }}
              />
              <Area 
                type="monotone" 
                dataKey="views" 
                stroke="#6366f1" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#chartGradient)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}