import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Trophy } from 'lucide-react';

export default function Recognition() {
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
    <section ref={ref} className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <div
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'opacity 0.7s, transform 0.7s' }}
        >
          <p className="mono-label mb-3 text-center">[ In the Press ]</p>

          <div className="arc-card overflow-hidden group hover:bg-arc-hover transition-colors">
            {/* Image */}
            <div className="relative overflow-hidden h-52">
              <img
                src="/image.png"
                alt="Featured Article"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0C0820, transparent)' }} />
              {/* Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-amber-400/15 border border-amber-400/40 rounded-full px-3 py-1">
                <Trophy size={11} className="text-amber-400" />
                <span className="font-mono text-xs text-amber-400 font-semibold">FEATURED</span>
              </div>
            </div>

            <div className="p-6 space-y-3">
              <h3 className="font-display text-xl font-semibold text-ink-100">Rising Tech Innovator</h3>
              <p className="text-ink-400 text-sm leading-relaxed">
                Featured for launching an AI-powered food safety app — Southampton student recognised as a tech innovator.
              </p>
              <a
                href="https://www.dailyecho.co.uk/news/25300681.southampton-student-launches-ai-powered-food-safety-app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-violet-400 hover:text-rose-400 transition-colors text-sm font-medium"
              >
                Read Article <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
