import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Sparkles, Palette, Music, BookOpen, Coffee } from 'lucide-react';

const INTERESTS = [
  { icon: Terminal, label: 'Agentic AI',    color: 'text-violet-400' },
  { icon: Sparkles, label: 'Always learning', color: 'text-rose-400'   },
  { icon: Palette,  label: 'Knife painting', color: 'text-amber-400'  },
  { icon: Coffee,   label: 'Food explorer', color: 'text-ice-400'     },
  { icon: Music,    label: 'Music',         color: 'text-violet-300'  },
  { icon: BookOpen, label: 'Research',      color: 'text-rose-300'    },
];

export default function Bio() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Subtle orb */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="mb-14"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'opacity 0.7s, transform 0.7s' }}
        >
          <p className="mono-label mb-3">[ 01 / About ]</p>
          <h2 className="font-display text-5xl font-semibold text-ink-100">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div
            className="space-y-6"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'opacity 0.7s 0.1s, transform 0.7s 0.1s' }}
          >
            <div className="arc-card p-6 border-l-2 border-rose-400">
              <p className="text-ink-200 leading-relaxed text-[0.95rem]">
                I'm a <span className="text-rose-400 font-semibold">Software Engineer</span> with a background spanning machine learning research,
                backend systems, and agentic AI. I've built everything from a{' '}
                <span className="text-violet-400 font-semibold">multitasking kernel in C</span> to LLM-orchestrated agent fleets —
                and I love finding the thread that connects low-level systems thinking with{' '}
                <span className="text-ice-400 font-semibold">high-level intelligence</span>.
              </p>
            </div>

            <div className="arc-card p-6 border-l-2 border-violet-500">
              <p className="text-ink-200 leading-relaxed text-[0.95rem]">
                Outside of work, I'm exploring the frontier of{' '}
                <span className="text-violet-400 font-semibold">agentic AI</span>, picking up knife painting
                (yes, with actual palette knives), or building something I've never tried before.
                I was <span className="text-rose-400 font-semibold">featured in the press</span> for launching an AI-powered
                food safety app — and that curiosity to solve real problems hasn't slowed down since.
              </p>
            </div>

            {/* Interest chips */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {INTERESTS.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="arc-card flex items-center gap-3 px-4 py-3 hover:bg-arc-hover transition-colors cursor-default"
                >
                  <Icon size={15} className={color} />
                  <span className="text-sm text-ink-200 font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Profile card */}
          <div
            className="flex justify-center lg:justify-end"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'opacity 0.7s 0.2s, transform 0.7s 0.2s' }}
          >
            <div className="arc-card p-8 max-w-xs w-full text-center space-y-6">
              {/* Photo */}
              <div className="relative mx-auto w-36 h-36">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-400 to-violet-500 blur-md opacity-40 animate-glow" />
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-violet-500/40">
                  <img src="/Saniya2.jpg" alt="Saniya Inamdar" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-display text-2xl font-semibold text-ink-100">Saniya Inamdar</h3>
                <p className="text-rose-400 font-medium text-sm">Software Engineer · AI & ML</p>
              </div>

              <p className="font-mono text-xs text-ink-400 italic leading-relaxed border-t border-arc-border pt-4">
                "From kernels to agent fleets —<br />curiosity is the constant"
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 text-center border-t border-arc-border pt-4">
                {[
                  { value: '3+', label: 'Years exp' },
                  { value: '10+', label: 'Projects' },
                  { value: '1', label: 'Press feature' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="font-display text-xl font-semibold gradient-text-rv">{value}</p>
                    <p className="text-xs text-ink-400 mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
