import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { path: '/',         label: 'Home'     },
  { path: '/projects', label: 'Projects' },
  { path: '/resume',   label: 'Resume'   },
];

export default function Navigation() {
  const [isOpen, setIsOpen]       = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-arc-base/90 backdrop-blur-md border-b border-arc-border'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-rose-400 to-violet-500 flex items-center justify-center shadow-glow-rose">
              <Zap size={14} className="text-white" />
            </div>
            <span className="font-display font-semibold text-ink-100 text-lg tracking-tight group-hover:text-rose-400 transition-colors">
              Saniya
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(({ path, label }) => {
              const active = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`relative text-sm font-medium transition-colors duration-200 pb-0.5 ${
                    active ? 'text-rose-400' : 'text-ink-400 hover:text-ink-100'
                  }`}
                >
                  {label}
                  {active && <span className="nav-underline" />}
                </Link>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-ink-400 hover:text-ink-100 hover:bg-arc-hover transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 mobile-nav-enter border-t border-arc-border mt-1 pt-3">
            {NAV_ITEMS.map(({ path, label }) => {
              const active = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'text-rose-400 bg-arc-hover'
                      : 'text-ink-400 hover:text-ink-100 hover:bg-arc-hover'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
