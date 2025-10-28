import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-[88vh] overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 md:pt-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Tech • Portfolio • Interactive • Playful • Modern
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            We craft high-performance websites, apps, and automations
          </h1>
          <p className="mt-4 md:mt-6 text-slate-300 text-lg md:text-xl">
            WebCraft Agency designs and builds delightful digital products. From idea to launch, we combine design, code, and automation to grow your business.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-cyan-400 px-5 py-3 font-medium text-slate-900 hover:bg-cyan-300 transition">
              Get a Quote
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition">
              See Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
