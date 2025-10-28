import React from 'react';
import { Rocket, Smartphone, Workflow, Globe } from 'lucide-react';

const services = [
  {
    title: 'Websites',
    description: 'Beautiful, fast, SEO-friendly sites that convert visitors into customers.',
    icon: Globe,
    color: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'Web & Mobile Apps',
    description: 'Robust apps with modern stacks and delightful user experiences.',
    icon: Smartphone,
    color: 'from-emerald-400 to-teal-500',
  },
  {
    title: 'Automation Systems',
    description: 'Streamline operations with custom workflows, integrations, and AI.',
    icon: Workflow,
    color: 'from-fuchsia-400 to-pink-500',
  },
  {
    title: 'Launch & Growth',
    description: 'Deploy, monitor, and iterate quickly — we help you scale with confidence.',
    icon: Rocket,
    color: 'from-amber-400 to-orange-500',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Services</h2>
          <p className="mt-3 text-slate-300">Strategy, design, development, and automation — crafted end‑to‑end.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ title, description, icon: Icon, color }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition overflow-hidden">
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-slate-900 shadow-lg shadow-black/30`}>
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
