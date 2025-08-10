import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Star, Sparkles, Trophy } from 'lucide-react';

const RecognitionPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>

        {/* Floating Icons */}
        <Trophy className="absolute -top-3 -left-3 h-8 w-8 text-yellow-400 animate-bounce" />
        <Star className="absolute -top-2 -right-8 h-6 w-6 text-pink-400 animate-pulse" />
        <Sparkles className="absolute -bottom-3 -right-3 h-7 w-7 text-purple-400 animate-spin" style={{ animationDuration: '3s' }} />

        {/* Content */}
        <div className="text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-full px-4 py-2 border-2 border-yellow-200">
            <Trophy className="h-4 w-4 text-yellow-600" />
            <span className="text-yellow-700 font-semibold text-sm">🎉 EXCITING NEWS!</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            I've Been Featured!
          </h3>

          {/* Article Image */}
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/image.png"
                alt="Featured Article"
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm">
            Check out my latest feature highlighting my journey as a tech innovator!
          </p>

          {/* CTA Button */}
          <a
            href="https://www.dailyecho.co.uk/news/25300681.southampton-student-launches-ai-powered-food-safety-app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsVisible(false)}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold px-6 py-3 rounded-full hover:from-pink-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span>Read Article</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-4 w-2 h-2 bg-pink-300 rounded-full animate-ping opacity-50"></div>
        <div className="absolute bottom-8 right-8 w-1 h-1 bg-purple-300 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default RecognitionPopup;
