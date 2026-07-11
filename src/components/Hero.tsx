import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Github, Linkedin, Brain, Cpu, Code, FileText } from 'lucide-react';

const EXPERTISE = [
  { icon: Brain, label: 'Machine Learning', color: 'text-rose-400',   border: 'border-rose-400/30',   bg: 'bg-rose-400/8' },
  { icon: Cpu,   label: 'Agentic AI',       color: 'text-violet-400', border: 'border-violet-400/30', bg: 'bg-violet-400/8' },
  { icon: Code,  label: 'Full-Stack Dev',   color: 'text-ice-400',    border: 'border-ice-400/30',    bg: 'bg-ice-400/8' },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center circuit-bg overflow-hidden">

      {/* Atmospheric orbs — GPU-composited, no JS */}
      <div
        className="absolute top-[-15%] right-[-8%] w-[600px] h-[600px] rounded-full pointer-events-none animate-drift"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)', willChange: 'transform' }}
      />
      <div
        className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none animate-drift-r"
        style={{ background: 'radial-gradient(circle, rgba(232,121,160,0.10) 0%, transparent 70%)', willChange: 'transform' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Left: text ── */}
        <div
          className="space-y-8"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}
        >
          <div className="space-y-1">
            <p className="mono-label">[ Software Engineer · AI & ML ]</p>
            <h1 className="font-display text-6xl md:text-7xl font-semibold text-ink-100 leading-tight tracking-tight mt-3">
              Hello, I'm<br />
              <span className="gradient-text italic">Saniya</span>
            </h1>
          </div>

          <p className="text-ink-400 text-lg leading-relaxed max-w-md">
            I build intelligent systems — from ML-powered computer vision to agentic AI platforms that govern enterprise agent fleets.
            Low-level to high-level, kernels to LLMs.
          </p>

          {/* Expertise chips */}
          <div className="flex flex-wrap gap-3">
            {EXPERTISE.map(({ icon: Icon, label, color, border, bg }) => (
              <div
                key={label}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${border} ${bg} transition-all duration-200 hover:scale-105`}
              >
                <Icon size={14} className={color} />
                <span className={`text-sm font-medium ${color}`}>{label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-400 to-violet-500 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-glow-rose"
            >
              Projects <ArrowRight size={15} />
            </a>
            <a
              href="/resume"
              className="inline-flex items-center gap-2 arc-card text-ink-200 font-semibold px-6 py-3 rounded-xl hover:text-violet-400 hover:border-violet-400/40 transition-colors"
            >
              <FileText size={15} /> Resume
            </a>
            <div className="flex items-center gap-2 ml-1">
              <a href="https://github.com/CodeFor2001" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl arc-card flex items-center justify-center text-ink-400 hover:text-violet-400 transition-colors">
                <Github size={17} />
              </a>
              <a href="https://www.linkedin.com/in/saniya-inamdar/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl arc-card flex items-center justify-center text-ink-400 hover:text-rose-400 transition-colors">
                <Linkedin size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* ── Right: profile image ── */}
        <div
          className="flex justify-center lg:justify-end"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s' }}
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-rose-400/20 to-violet-500/20 blur-xl animate-glow" />
            {/* Violet ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-rose-400 to-violet-500 p-[2px]">
              <div className="w-full h-full rounded-full bg-arc-base" />
            </div>
            {/* Photo */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
              <img
                src="/Saniya1.jpg"
                alt="Saniya Inamdar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #060311)' }} />
    </section>
  );
}
