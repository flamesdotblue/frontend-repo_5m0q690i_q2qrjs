import React from 'react';

const projects = [
  {
    name: 'Nova Commerce',
    tag: 'E‑commerce Platform',
    result: '↑ 38% conversion',
    image:
      'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'FlowOps',
    tag: 'Automation Suite',
    result: 'Saved 20+ hrs/week',
    image:
      'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'PeakFit',
    tag: 'Mobile App',
    result: '50k active users',
    image:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop',
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Selected Work</h2>
          <p className="mt-3 text-slate-300">A few projects that highlight our craft and outcomes.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.name} className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
              <div className="aspect-[16/11] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{p.tag}</span>
                  <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-emerald-300">{p.result}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">{p.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
