export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-indigo-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">Our Origin</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter">
              The future of SaaS is <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
      intelligent.
    </span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Founded in 2024, Nexus was born out of a frustration with clunky, slow analytics tools. We're on a mission to provide developers with the speed of light data processing.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-slate-500 text-sm">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">25ms</div>
                <div className="text-slate-500 text-sm">Avg. Latency</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-white/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <div className="text-8xl font-black text-white/5 select-none">NEXUS</div>
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 p-6 bg-[#0b0f1a] border border-white/10 rounded-2xl shadow-2xl">
                <p className="text-sm font-medium">"Best Tech Stack 2026"</p>
                <p className="text-xs text-slate-500">Developer Choice Awards</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}