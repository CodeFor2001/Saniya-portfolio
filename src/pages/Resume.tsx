import React from 'react';
import { Download, User } from 'lucide-react';

const pdfUrl = '/SaniyaInamdar_resume.pdf';

export default function Resume() {
  return (
    <div className="min-h-screen circuit-bg">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* Header */}
          <div>
            <p className="mono-label mb-3">[ CV ]</p>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <h1 className="font-display text-5xl md:text-6xl font-semibold text-ink-100">Resume</h1>
              <a
                href={pdfUrl}
                download
                className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-400 to-violet-500 text-white font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity shadow-glow-violet text-sm"
              >
                <Download size={15} />
                Download PDF
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="arc-card p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(232,121,160,0.12)', border: '1px solid rgba(232,121,160,0.3)' }}>
                <User size={15} className="text-rose-400" />
              </div>
              <h2 className="font-display text-xl font-semibold text-ink-100">Professional Summary</h2>
            </div>
            <div className="h-px w-full mb-5" style={{ background: 'linear-gradient(90deg, rgba(232,121,160,0.4), transparent)' }} />
            <p className="text-ink-400 leading-relaxed text-[0.9rem]">
              Results-driven software engineer and data specialist with an{' '}
              <span className="text-ink-200 font-medium">MSc in Computer Science from the University of Southampton</span>,
              and 3+ years of hands-on experience delivering production-grade solutions for high-growth startups and a global semiconductor leader.
              Blends deep full-stack expertise (Node.js, React, Flutter, Docker) with enterprise-scale data engineering (SAP BW/4HANA, Hadoop, Tableau)
              to build scalable platforms, lead cost-saving migrations, and translate complex datasets into decisive business insights.
              Comfortable operating across the ML lifecycle — from{' '}
              <span className="text-violet-400 font-medium">RAG-powered LLM applications</span>{' '}
              and{' '}
              <span className="text-rose-400 font-medium">agentic AI systems</span>{' '}
              to GPU-accelerated time-series models.
              Recognised for cross-functional leadership, rapid prototyping, and a fast-learner mindset;
              seeking a role where advanced software craftsmanship and data-driven thinking accelerate product innovation and growth.
            </p>
          </div>

          {/* PDF Preview */}
          <div className="arc-card p-6">
            <h2 className="font-display text-xl font-semibold text-ink-100 mb-5">Preview</h2>
            <div className="w-full rounded-xl overflow-hidden" style={{ height: '65vh', border: '1px solid rgba(167,139,250,0.15)' }}>
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                title="Résumé preview"
                className="w-full h-full border-none bg-white"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
