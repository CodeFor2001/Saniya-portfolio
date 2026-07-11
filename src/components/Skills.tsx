import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Cpu, Brain, Wrench, Palette } from 'lucide-react';

const CATEGORIES = [
  {
    title: 'Machine Learning',
    icon: Brain,
    accent: '#E879A0',
    skills: ['TensorFlow', 'PyTorch', 'Transformers', 'LLMs', 'RAG', 'Agentic AI', 'MCP', 'NLP', 'Computer Vision', 'Time Series'],
  },
  {
    title: 'Frontend Development',
    icon: Code,
    accent: '#A78BFA',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Flutter', 'Streamlit', 'FastAPI (UI)', 'Bootstrap'],
  },
  {
    title: 'Backend & Data',
    icon: Database,
    accent: '#67E8F9',
    skills: ['Python', 'Node.js', 'FastAPI', 'Django', 'Express', 'SQL', 'MongoDB', 'Pinecone', 'React Native'],
  },
  {
    title: 'IoT & Systems',
    icon: Cpu,
    accent: '#FBBF24',
    skills: ['C / NASM', 'MQTT', 'LoRaWAN', 'BLE', 'Sensors', 'Kernel Dev'],
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    accent: '#34D399',
    skills: ['Git', 'Docker', 'AWS', 'Tableau', 'Power BI', 'SAP BW/4HANA', 'Figma', 'VS Code'],
  },
  {
    title: 'Creative',
    icon: Palette,
    accent: '#F472B6',
    skills: ['Knife Painting', 'Digital Art', 'Design Thinking', 'Creative Problem Solving', 'Team Leadership', 'Mentoring'],
  },
];

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 relative circuit-bg">
      {/* Orb */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(103,232,249,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="mb-14"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'opacity 0.7s, transform 0.7s' }}
        >
          <p className="mono-label mb-3">[ 02 / Expertise ]</p>
          <h2 className="font-display text-5xl font-semibold text-ink-100">Skills & Stack</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map(({ title, icon: Icon, accent, skills }, i) => (
            <div
              key={title}
              className="arc-card p-6 group hover:bg-arc-hover transition-all duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(24px)',
                transition: `opacity 0.6s ${i * 0.07}s ease, transform 0.6s ${i * 0.07}s ease`,
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${accent}18`, border: `1px solid ${accent}40` }}
                >
                  <Icon size={16} style={{ color: accent }} />
                </div>
                <h3 className="font-semibold text-ink-100 text-sm">{title}</h3>
              </div>

              {/* Accent line */}
              <div className="h-px mb-5 rounded-full" style={{ background: `linear-gradient(90deg, ${accent}60, transparent)` }} />

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p
          className="text-center mono-label mt-12"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.7s 0.5s' }}
        >
          always learning · always building
        </p>
      </div>
    </section>
  );
}
