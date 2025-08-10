import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Star, Sparkles, Trophy } from 'lucide-react';

const Recognition = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-br from-pink-300 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-gradient-to-br from-purple-300 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Cute Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4 relative">
              In the News ✨
            </h2>
            <p className="text-gray-600">Recently featured for my tech innovations</p>
          </div>

          {/* Cute Framed Article */}
          <div className="flex justify-center">
            <div className="relative group max-w-sm">
              {/* Cute Frame */}
              <div className="absolute -inset-3 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
              
              <div className="relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                {/* Floating Decorative Icons */}
                <Trophy className="absolute -top-2 -left-2 h-6 w-6 text-yellow-400 animate-bounce" />
                <Star className="absolute -top-1 -right-3 h-5 w-5 text-pink-400 animate-pulse" />
                <Sparkles className="absolute -bottom-2 -right-2 h-5 w-5 text-purple-400 animate-spin" style={{ animationDuration: '3s' }} />
                
                {/* Badge */}
                <div className="text-center mb-4">
                  <span className="inline-flex items-center space-x-1 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full px-3 py-1 text-xs font-semibold text-pink-600 border border-pink-200">
                    <Trophy className="h-3 w-3" />
                    <span>FEATURED</span>
                  </span>
                </div>

                {/* Article Image */}
                <div className="relative overflow-hidden rounded-2xl mb-4 group/image">
                  <img
                    src="/image.png"
                    alt="Featured Article"
                    className="w-full h-48 object-cover group-hover/image:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
                  Rising Tech Innovator
                </h3>

                {/* Link Button */}
                <div className="text-center">
                  <a
                    href="https://www.dailyecho.co.uk/news/25300681.southampton-student-launches-ai-powered-food-safety-app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold px-4 py-2 rounded-full hover:from-pink-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 text-sm"
                  >
                    <span>Read Article</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
