'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, Zap } from 'lucide-react';
import { cn } from '@/lib/utils'; // Make sure this path is correct

const plans = [
  {
    name: 'Starter',
    price: { monthly: 0, yearly: 0 },
    features: ['Up to 2 team members', '1GB Storage', 'Community Support'],
    popular: false,
  },
  {
    name: 'Pro',
    price: { monthly: 29, yearly: 24 },
    features: ['Unlimited members', '50GB Storage', 'Priority Email', 'Advanced Analytics'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: 99, yearly: 79 },
    features: ['Custom SLA', 'Unlimited Storage', '24/7 Phone Support', 'SSO & SAML'],
    popular: false,
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-[#030712] text-white py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-center max-w-5xl mx-auto mb-20 px-4">
  {/* Single line heading with split colors */}
  <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight">
    <span className="text-white">Scale your </span>
    <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
      business.
    </span>
  </h1>
  
  <p className="text-slate-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto font-medium">
    Choose a plan that works for you. No hidden fees, just transparent pricing.
  </p>
</div>
          <p className="text-slate-400 text-lg">Choose a plan that works for you.</p>

          {/* Toggle */}
          <div className="mt-10 flex justify-center items-center gap-4">
            <span className={cn("text-sm", !isYearly ? "text-white" : "text-slate-500")}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-7 bg-white/10 rounded-full relative p-1 transition-colors hover:bg-white/20"
            >
              <div className={cn("w-5 h-5 bg-indigo-500 rounded-full transition-transform duration-200", isYearly ? "translate-x-7" : "translate-x-0")} />
            </button>
            <span className={cn("text-sm", isYearly ? "text-white" : "text-slate-500")}>Yearly <span className="text-indigo-400 font-bold">(-20%)</span></span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={cn(
                "relative p-8 rounded-3xl border transition-all duration-300",
                plan.popular 
                  ? "bg-white/[0.05] border-indigo-500/50 shadow-[0_0_40px_rgba(79,70,229,0.1)] scale-105 z-10" 
                  : "bg-white/[0.02] border-white/10 hover:border-white/20"
              )}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">${isYearly ? plan.price.yearly : plan.price.monthly}</span>
                <span className="text-slate-500 ml-2">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-slate-400">
                    <Check className="h-4 w-4 text-indigo-500" /> {f}
                  </li>
                ))}
              </ul>
              <Button className={cn("w-full rounded-xl h-12", plan.popular ? "bg-indigo-600 hover:bg-indigo-500" : "bg-white/5 hover:bg-white/10")}>
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}