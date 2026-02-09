import { Zap, Shield, BarChart3, Globe, Code, Cpu } from 'lucide-react';

const features = [
  { title: "Edge Analytics", icon: Zap, desc: "Process data at the speed of light using our global edge network." },
  { title: "Military Security", icon: Shield, desc: "Bank-grade encryption for every single data packet." },
  { title: "AI Forecasting", icon: Cpu, desc: "Predict future growth with our built-in machine learning models." },
  { title: "Global Deploy", icon: Globe, desc: "Deploy your analytics clusters in over 50+ regions worldwide." },
  { title: "Developer API", icon: Code, desc: "Full-featured REST and GraphQL APIs for seamless integration." },
  { title: "Real-time Dash", icon: BarChart3, desc: "Zero-latency dashboards that update as events happen." },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter">
            Engineered for <br /><span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
      Performance.
    </span>
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed">
            We've built the world's most advanced analytics infrastructure so you don't have to.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-500 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-[0_0_20px_rgba(79,70,229,0)] group-hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}