import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Zap, House, FolderOpen, FileText, Github, Linkedin, Mail } from 'lucide-react';

const PAGES = [
  { to: '/',         icon: House,      label: 'Home'     },
  { to: '/projects', icon: FolderOpen, label: 'Projects' },
  { to: '/resume',   icon: FileText,   label: 'Resume'   },
];

const SOCIALS = [
  { href: 'https://github.com/CodeFor2001',             icon: Github,   label: 'GitHub'   },
  { href: 'https://www.linkedin.com/in/saniya-inamdar/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:saniyainamdary2k@gmail.com',           icon: Mail,     label: 'Email'    },
];

/* ─── Desktop sidebar ─────────────────────────────────────── */
function DesktopSidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-16 z-50 hidden md:flex flex-col items-center py-5 gap-2"
      style={{ background: 'rgba(12,8,32,0.85)', backdropFilter: 'blur(12px)', borderRight: '1px solid rgba(167,139,250,0.12)' }}>

      {/* Logo */}
      <NavLink to="/" className="mb-6 flex items-center justify-center">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform hover:scale-110"
          style={{ background: 'linear-gradient(135deg, #E879A0, #A78BFA)', boxShadow: '0 0 16px rgba(232,121,160,0.35)' }}>
          <Zap size={16} className="text-white" />
        </div>
      </NavLink>

      {/* Mono label */}
      <p style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-600 mb-4 select-none">
        navigate
      </p>

      {/* Page links */}
      <nav className="flex flex-col items-center gap-1 flex-1">
        {PAGES.map(({ to, icon: Icon, label }) => {
          const active = location.pathname === to;
          return (
            <div key={to} className="relative group">
              <NavLink
                to={to}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
                  active
                    ? 'text-white'
                    : 'text-ink-600 hover:text-ink-100 hover:bg-arc-hover'
                }`}
                style={active ? {
                  background: 'linear-gradient(135deg, rgba(232,121,160,0.2), rgba(167,139,250,0.2))',
                  border: '1px solid rgba(232,121,160,0.4)',
                  boxShadow: '0 0 12px rgba(232,121,160,0.15)',
                } : {}}
              >
                <Icon size={17} />
              </NavLink>

              {/* Tooltip */}
              <div className="absolute left-[calc(100%+10px)] top-1/2 -translate-y-1/2 pointer-events-none
                              opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50">
                <div className="px-2.5 py-1.5 rounded-lg whitespace-nowrap font-mono text-xs text-ink-100"
                  style={{ background: 'rgba(12,8,32,0.95)', border: '1px solid rgba(167,139,250,0.2)', backdropFilter: 'blur(8px)' }}>
                  {label}
                  {/* Arrow */}
                  <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent"
                    style={{ borderRightColor: 'rgba(167,139,250,0.2)' }} />
                </div>
              </div>
            </div>
          );
        })}
      </nav>

      {/* Divider */}
      <div className="w-6 h-px my-2" style={{ background: 'rgba(167,139,250,0.2)' }} />

      {/* Social links */}
      <div className="flex flex-col items-center gap-1">
        {SOCIALS.map(({ href, icon: Icon, label }) => (
          <div key={label} className="relative group">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-ink-600 hover:text-rose-400 transition-colors hover:bg-arc-hover"
            >
              <Icon size={14} />
            </a>
            <div className="absolute left-[calc(100%+10px)] top-1/2 -translate-y-1/2 pointer-events-none
                            opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50">
              <div className="px-2.5 py-1.5 rounded-lg whitespace-nowrap font-mono text-xs text-ink-100"
                style={{ background: 'rgba(12,8,32,0.95)', border: '1px solid rgba(167,139,250,0.2)' }}>
                {label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

/* ─── Mobile bottom bar ───────────────────────────────────── */
function MobileBar() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex items-center justify-around px-4 py-2"
      style={{ background: 'rgba(12,8,32,0.92)', backdropFilter: 'blur(16px)', borderTop: '1px solid rgba(167,139,250,0.15)' }}>
      {PAGES.map(({ to, icon: Icon, label }) => {
        const active = location.pathname === to;
        return (
          <NavLink
            key={to}
            to={to}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-200 ${
              active ? 'text-rose-400' : 'text-ink-600 hover:text-ink-200'
            }`}
          >
            <Icon size={18} strokeWidth={active ? 2.5 : 1.8} />
            <span className="font-mono text-[9px] tracking-wider uppercase">{label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}

export default function Navigation() {
  return (
    <>
      <DesktopSidebar />
      <MobileBar />
    </>
  );
}
