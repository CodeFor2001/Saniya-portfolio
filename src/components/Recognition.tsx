import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Award, Star, Sparkles, Trophy, Crown, Zap } from 'lucide-react';

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
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 relative overflow-hidden">
      {/* Artistic Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-yellow-300 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-orange-300 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-20 w-24 h-24 bg-gradient-to-br from-pink-300 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating Achievement Icons */}
      <Trophy className="absolute top-32 right-1/4 h-8 w-8 text-yellow-400 animate-bounce" style={{ animationDelay: '0s' }} />
      <Crown className="absolute bottom-40 left-1/4 h-7 w-7 text-orange-400 animate-bounce" style={{ animationDelay: '1s' }} />
      <Award className="absolute top-40 left-16 h-6 w-6 text-pink-400 animate-bounce" style={{ animationDelay: '2s' }} />
      <Star className="absolute bottom-32 right-16 h-5 w-5 text-yellow-500 animate-bounce" style={{ animationDelay: '0.5s' }} />
      <Zap className="absolute top-1/2 right-32 h-6 w-6 text-orange-500 animate-bounce" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-6xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Artistic Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
              <div className="flex space-x-3">
                <Trophy className="h-6 w-6 text-yellow-300 animate-pulse" />
                <Award className="h-6 w-6 text-orange-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <Crown className="h-6 w-6 text-pink-300 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent mb-8 relative">
              Recognition & Features
              <div className="absolute -top-3 -right-12 w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-lg">🏆</span>
              </div>
            </h2>
            
            {/* Artistic Divider */}
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-yellow-400 animate-pulse"></div>
              <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-full"></div>
              <div className="w-4 h-4 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-20 h-0.5 bg-gradient-to-r from-pink-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Proud to be <span className="text-yellow-500 font-semibold">recognized</span> for my contributions to the <span className="text-orange-500 font-semibold">tech community</span> and <span className="text-pink-500 font-semibold">innovative projects</span>
            </p>
          </div>

          {/* Featured Article Card */}
          <div className="relative group">
            {/* Glowing Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
              {/* Artistic Background Patterns */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-100/30 to-orange-100/30 rounded-full -translate-y-32 translate-x-32 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-pink-100/30 to-purple-100/30 rounded-full translate-y-24 -translate-x-24 group-hover:scale-150 transition-transform duration-500"></div>
              
              {/* Floating Achievement Icons */}
              <Trophy className="absolute top-6 left-6 h-8 w-8 text-yellow-400 opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" />
              <Crown className="absolute top-6 right-6 h-7 w-7 text-orange-400 opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '0.5s' }} />
              <Award className="absolute bottom-6 left-6 h-6 w-6 text-pink-400 opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '1s' }} />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Article Image */}
                <div className="relative group/image">
                  <div className="absolute -inset-2 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-2xl opacity-0 group-hover/image:opacity-50 transition-opacity duration-300 blur"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover/image:shadow-2xl transition-shadow duration-300">
                    <img
                      src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Featured Article"
                      className="w-full h-80 object-cover group-hover/image:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Floating Sparkles on Image */}
                    <Sparkles className="absolute top-4 right-4 h-6 w-6 text-white opacity-0 group-hover/image:opacity-100 animate-pulse transition-opacity duration-300" />
                    <Star className="absolute bottom-4 left-4 h-5 w-5 text-yellow-300 opacity-0 group-hover/image:opacity-100 animate-pulse transition-opacity duration-300" style={{ animationDelay: '1s' }} />
                  </div>
                </div>

                {/* Article Content */}
                <div className="space-y-6">
                  {/* Achievement Badge */}
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full px-6 py-3 border-2 border-yellow-200">
                    <Trophy className="h-5 w-5 text-yellow-600" />
                    <span className="text-yellow-700 font-semibold text-sm">FEATURED PROFILE</span>
                    <Sparkles className="h-4 w-4 text-orange-500 animate-pulse" />
                  </div>

                  {/* Article Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight group-hover:text-gray-900 transition-colors duration-300">
                    Rising Tech Innovator: 
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 mt-2">
                      Saniya Inamdar's Journey
                    </span>
                  </h3>

                  {/* Article Description */}
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Discover how this passionate <span className="text-yellow-600 font-semibold">full-stack developer</span> and 
                    <span className="text-orange-600 font-semibold"> AI enthusiast</span> is making waves in the tech industry with 
                    innovative projects spanning <span className="text-pink-600 font-semibold">machine learning</span>, 
                    <span className="text-purple-600 font-semibold"> IoT solutions</span>, and beautiful web experiences.
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <span className="font-semibold text-yellow-700">Innovation</span>
                      </div>
                      <p className="text-sm text-yellow-600">AI-powered solutions</p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className="h-5 w-5 text-orange-500" />
                        <span className="font-semibold text-orange-700">Impact</span>
                      </div>
                      <p className="text-sm text-orange-600">Real-world applications</p>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="pt-4">
                    <a
                      href="https://www.linkedin.com/in/saniya-inamdar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/cta inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 text-white font-bold px-8 py-4 rounded-full hover:from-yellow-500 hover:via-orange-500 hover:to-pink-500 transition-all duration-500 hover:scale-110 hover:shadow-2xl relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300 rounded-full"></div>
                      <span className="relative z-10">Read Full Feature</span>
                      <ExternalLink className="h-5 w-5 group-hover/cta:rotate-12 transition-transform duration-300 relative z-10" />
                      <Sparkles className="h-4 w-4 group-hover/cta:scale-125 transition-transform duration-300 relative z-10" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-300 rounded-full opacity-20 animate-ping"></div>
              <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-orange-400 rounded-full opacity-30 animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-25 animate-ping" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>

          {/* Additional Recognition Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Trophy, label: 'Featured Developer', value: '2024', color: 'text-yellow-500', bg: 'from-yellow-50 to-yellow-100' },
              { icon: Star, label: 'GitHub Projects', value: '15+', color: 'text-orange-500', bg: 'from-orange-50 to-orange-100' },
              { icon: Crown, label: 'Tech Innovation', value: 'Award', color: 'text-pink-500', bg: 'from-pink-50 to-pink-100' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`transform transition-all duration-700 delay-${index * 200} ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  <div className={`bg-gradient-to-br ${stat.bg} rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 border border-white/50 shadow-lg hover:shadow-xl`}>
                    <Icon className={`h-12 w-12 ${stat.color} mx-auto mb-4 animate-pulse`} />
                    <div className="text-2xl font-bold text-gray-800 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;