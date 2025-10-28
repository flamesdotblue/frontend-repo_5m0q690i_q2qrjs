import React, { useState } from 'react';

const ContactCTA = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We\'ll be in touch shortly.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Let’s build something great</h2>
            <p className="mt-3 text-slate-300">
              Tell us about your idea — website, app, or automation — and we\'ll propose a clear plan, timeline, and budget.
            </p>
            <ul className="mt-6 space-y-2 text-slate-300 text-sm">
              <li>• Typical projects start within 1–2 weeks</li>
              <li>• Fixed-price or sprint-based engagements</li>
              <li>• Dedicated PM, transparent progress</li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-300">Name</label>
                <input required type="text" className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-slate-300">What are you building?</label>
              <select className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-slate-200 outline-none focus:ring-2 focus:ring-cyan-400">
                <option>Website</option>
                <option>Web App</option>
                <option>Mobile App</option>
                <option>Automation</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="text-sm text-slate-300">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Share a few details about your project" />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-cyan-400 px-5 py-2.5 font-medium text-slate-900 hover:bg-cyan-300 transition">
                Request Proposal
              </button>
              {status && <span className="text-sm text-emerald-300">{status}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
