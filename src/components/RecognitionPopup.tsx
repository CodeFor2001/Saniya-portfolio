import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Trophy } from 'lucide-react';

export default function RecognitionPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        className="arc-card max-w-sm w-full p-7 space-y-5 relative"
        style={{ animation: 'fadeUp 0.4s ease-out forwards' }}
      >
        {/* Close */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center text-ink-400 hover:text-ink-100 hover:bg-arc-hover transition-colors"
        >
          <X size={16} />
        </button>

        {/* Badge */}
        <div className="flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 rounded-full px-4 py-1.5 w-fit">
          <Trophy size={13} className="text-amber-400" />
          <span className="font-mono text-xs text-amber-400 font-semibold tracking-wider">IN THE NEWS</span>
        </div>

        {/* Heading */}
        <div>
          <h3 className="font-display text-2xl font-semibold gradient-text">I've Been Featured!</h3>
          <p className="text-ink-400 text-sm mt-1">Tech innovator spotlight — Daily Echo</p>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden rounded-xl h-36 group cursor-pointer">
          <img
            src="/image.png"
            alt="Featured Article"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-arc-surface/60 to-transparent" />
        </div>

        {/* CTA */}
        <a
          href="https://www.dailyecho.co.uk/news/25300681.southampton-student-launches-ai-powered-food-safety-app/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsVisible(false)}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-rose-400 to-violet-500 text-white font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity text-sm w-full"
        >
          Read Article <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
