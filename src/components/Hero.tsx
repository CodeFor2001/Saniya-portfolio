import React, { useEffect, useState } from 'react';
import { Sparkles, Code, Cpu, Brain, Heart, Star, Zap, Palette, Brush, Camera } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const expertiseAreas = [
    { icon: Code, label: 'Development', color: 'text-pink-500', bgGradient: 'from-pink-400/20 to-rose-400/20' },
    { icon: Brain, label: 'Machine Learning', color: 'text-blue-500', bgGradient: 'from-blue-400/20 to-cyan-400/20' },
    { icon: Cpu, label: 'IoT', color: 'text-purple-500', bgGradient: 'from-purple-400/20 to-indigo-400/20' },
  ];

  const FloatingArtElement = ({ children, delay = 0, className = "", duration = "6s" }) => (
    <div 
      className={`absolute animate-bounce ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: duration,
        animationIterationCount: 'infinite'
      }}
    >
      {children}
    </div>
  );

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Interactive Mouse Trail */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-30 pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'scale(0.8)',
        }}
      />

      {/* Artistic Floating Elements */}
      <FloatingArtElement delay={0} className="top-20 left-10 text-pink-400" duration="4s">
        <div className="relative">
          <Palette className="h-10 w-10" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
        </div>
      </FloatingArtElement>
      
      <FloatingArtElement delay={1} className="top-32 right-20 text-purple-400" duration="5s">
        <Brush className="h-8 w-8 transform rotate-45" />
      </FloatingArtElement>
      
      <FloatingArtElement delay={2} className="bottom-40 left-20 text-blue-400" duration="6s">
        <Camera className="h-9 w-9" />
      </FloatingArtElement>
      
      <FloatingArtElement delay={0.5} className="top-40 right-10 text-pink-300" duration="7s">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </FloatingArtElement>
      
      <FloatingArtElement delay={1.5} className="bottom-32 right-32 text-purple-300" duration="8s">
        <div className="relative">
          <Star className="h-7 w-7" />
          <Sparkles className="absolute -top-2 -right-2 h-4 w-4 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
        </div>
      </FloatingArtElement>

      {/* Artistic Background Patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-pink-200/40 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-200/40 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-10 w-48 h-48 bg-gradient-to-br from-blue-200/40 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Geometric Art Shapes */}
      <div className="absolute top-20 right-1/4 w-16 h-16 border-2 border-pink-300/50 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-purple-300/50 to-blue-300/50 transform rotate-12 animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-8 h-8 bg-gradient-to-r from-pink-400/60 to-purple-400/60 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div
          className={`transform transition-all duration-1500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {/* Artistic Header */}
          <div className="mb-12 relative">
            <div className="relative mb-8">
              <div className="w-40 h-40 mx-auto mb-8 relative group">
                {/* Artistic Avatar Container */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 rounded-full animate-pulse group-hover:animate-spin transition-all duration-1000"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-white to-pink-50 rounded-full flex items-center justify-center shadow-inner">
                  <div className="w-36 h-36 rounded-full overflow-hidden">
                    <img
                      src="/Saniya1.jpg"
                      alt="Saniya Inamdar"
                      className="w-full h-full object-cover"   /* fills & crops */
                    />
                  </div>
                </div>
                
                {/* Floating Art Icons */}
                <Sparkles className="absolute -top-3 -right-3 h-8 w-8 text-pink-400 animate-pulse" />
                <Palette className="absolute -bottom-2 -left-3 h-6 w-6 text-purple-500 animate-pulse" style={{ animationDelay: '1s' }} />
                <Brush className="absolute top-2 -right-6 h-5 w-5 text-blue-500 animate-pulse" style={{ animationDelay: '2s' }} />
                <Heart className="absolute -bottom-1 right-2 h-4 w-4 text-pink-600 animate-pulse" style={{ animationDelay: '0.5s' }} />
                
                {/* Artistic Rings */}
                <div className="absolute -inset-4 border-2 border-pink-200/50 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                <div className="absolute -inset-6 border border-purple-200/30 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Artistic Title */}
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6 relative">
                Hello, I'm Saniya
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-lg">✨</span>
                </div>
              </h1>
              
              {/* Artistic Subtitle with Creative Typography */}
              <div className="relative mb-8">
                <p className="text-2xl md:text-3xl text-gray-600 font-light mb-2">
                  A passionate <span className="text-pink-500 font-semibold">artist</span> & <span className="text-purple-500 font-semibold">developer</span>
                </p>
                <p className="text-lg md:text-xl text-gray-500 italic">
                  crafting beautiful digital experiences with code & creativity
                </p>
                
                {/* Decorative Line Art */}
                <div className="flex justify-center mt-4 space-x-2">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-pink-400 animate-pulse"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Artistic Expertise Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.label}
                  className={`transform transition-all duration-1000 delay-${index * 300} ${
                    isVisible ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-12 opacity-0 rotate-6'
                  }`}
                >
                  <div className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/90 transition-all duration-500 hover:scale-110 hover:shadow-2xl border border-pink-100 relative overflow-hidden">
                    {/* Artistic Background Pattern */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${area.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-100/30 to-purple-100/30 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>
                    
                    {/* Floating Particles */}
                    <div className="absolute top-4 left-4 w-2 h-2 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
                    
                    <Icon className={`h-14 w-14 ${area.color} mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10`} />
                    <h3 className="text-xl font-bold text-gray-800 relative z-10 group-hover:text-gray-900 transition-colors duration-300">{area.label}</h3>
                    
                    {/* Artistic Border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-200/50 rounded-3xl transition-all duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Artistic Description */}
          <div
            className={`transform transition-all duration-1000 delay-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="relative max-w-3xl mx-auto">
              {/* Decorative Quote Marks */}
              <div className="absolute -left-8 -top-4 text-6xl text-pink-200 font-serif">"</div>
              <div className="absolute -right-8 -bottom-4 text-6xl text-purple-200 font-serif">"</div>
              
              {/* Artistic Text */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pink-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"></div>
                
                <p className="text-lg text-gray-700 leading-relaxed relative z-10">
                  I blend <span className="text-pink-500 font-semibold">creativity</span> with <span className="text-purple-500 font-semibold">technology</span> to build innovative solutions that make a difference. 
                  From elegant web applications to intelligent systems, I love bringing <span className="text-blue-500 font-semibold">ideas to life</span> through the art of code.
                </p>
                
                {/* Artistic Signature */}
                <div className="flex justify-end mt-4">
                  <div className="flex items-center space-x-2 text-gray-500 italic">
                    <Brush className="h-4 w-4" />
                    <span className="text-sm">- Saniya</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
