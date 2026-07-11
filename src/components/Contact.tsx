import React from 'react';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';

const SOCIALS = [
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/CodeFor2001',            color: 'hover:text-ink-100 hover:border-ink-400/50' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/saniya-inamdar/', color: 'hover:text-violet-400 hover:border-violet-400/50' },
  { icon: Mail,     label: 'Email',    href: 'mailto:saniyainamdary2k@gmail.com',           color: 'hover:text-rose-400 hover:border-rose-400/50' },
];

export default function Contact() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,121,160,0.07) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)' }} />

      <div className="max-w-3xl mx-auto text-center space-y-12 relative z-10">
        {/* Header */}
        <div>
          <p className="mono-label mb-3">[ 04 / Contact ]</p>
          <h2 className="font-display text-5xl font-semibold text-ink-100 mb-4">Let's Connect</h2>
          <p className="text-ink-400 leading-relaxed text-[0.95rem] max-w-xl mx-auto">
            Open to new opportunities, collaborations, and conversations about AI, ML, or anything you're building.
            Feel free to reach out.
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-ink-400">
          <MapPin size={14} className="text-rose-400" />
          <span className="text-sm">Based in India</span>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-5">
          {SOCIALS.map(({ icon: Icon, label, href, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`arc-card w-16 h-16 flex flex-col items-center justify-center gap-1 text-ink-400 border border-arc-border transition-all duration-200 hover:scale-105 ${color}`}
            >
              <Icon size={20} />
              <span className="font-mono text-[10px]">{label}</span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="arc-card p-8 space-y-5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400/20 to-violet-500/20 border border-violet-400/30 flex items-center justify-center mx-auto">
            <Send size={16} className="text-violet-400" />
          </div>
          <div>
            <p className="text-ink-100 font-semibold text-lg">Open to opportunities</p>
            <p className="text-ink-400 text-sm mt-1">Full-time roles · Freelance projects · Research collaborations</p>
          </div>
          <a
            href="https://www.linkedin.com/in/saniya-inamdar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-400 to-violet-500 text-white font-semibold px-7 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-glow-rose"
          >
            <Send size={15} />
            Get in touch
          </a>
        </div>

        {/* Footer */}
        <p className="text-ink-600 font-mono text-xs">
          Built with React · Tailwind · a lot of curiosity
        </p>
      </div>
    </section>
  );
}
