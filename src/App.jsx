import React from 'react';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Portfolio from './components/Portfolio.jsx';
import ContactCTA from './components/ContactCTA.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Simple top bar branding */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_30px_6px_rgba(34,211,238,0.6)]" />
            <span className="font-semibold tracking-tight">WebCraft Agency</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 px-4 py-2 text-sm font-medium transition">
            Start a Project
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <ContactCTA />
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} WebCraft Agency. All rights reserved.</p>
          <p className="mt-2 md:mt-0">We craft websites, apps, and automation systems.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
