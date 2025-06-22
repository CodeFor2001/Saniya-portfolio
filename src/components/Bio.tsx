import React, { useEffect, useRef, useState } from 'react';
import { Heart, Star, Coffee, Sparkles, Code2, Palette, Brush, Camera, Music, BookOpen } from 'lucide-react';

const Bio = () => {
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

  const artisticInterests = [
    { icon: Heart, label: 'Love for code', color: 'text-pink-500' },
    { icon: Star, label: 'Always learning', color: 'text-yellow-500' },
    { icon: Coffee, label: 'Food enthusiast', color: 'text-amber-600' },
    { icon: Palette, label: 'Art lover', color: 'text-purple-500' },
    { icon: Music, label: 'Music inspiration', color: 'text-blue-500' },
    { icon: BookOpen, label: 'Design thinking', color: 'text-green-500' },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Artistic Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-pink-300 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-300 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-300 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating Art Elements */}
      <div className="absolute top-20 right-1/4 w-16 h-16 border-2 border-pink-200/50 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-gradient-to-br from-purple-200/50 to-blue-200/50 transform rotate-45 animate-pulse"></div>
      
      <div className="max-w-5xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Artistic Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
              <div className="flex space-x-2">
                <Sparkles className="h-6 w-6 text-pink-300 animate-pulse" />
                <Brush className="h-6 w-6 text-purple-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <Palette className="h-6 w-6 text-blue-300 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6 relative">
              About Me
              <div className="absolute -top-2 -right-8 w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-sm">🎨</span>
              </div>
            </h2>
            
            <div className="flex justify-center items-center space-x-4 mb-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-pink-400 animate-pulse"></div>
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Artistic Text Section */}
            <div className="space-y-8 relative">
              {/* Decorative Quote */}
              <div className="absolute -left-8 -top-4 text-8xl text-pink-100 font-serif opacity-50">"</div>
              
              <div className="relative z-10 space-y-6">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-pink-400 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-100/30 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                  <p className="text-lg text-gray-700 leading-relaxed relative z-10">
                    Hey there! I'm a <span className="text-pink-500 font-semibold">tech-savvy artist</span> who believes that code can be both powerful and beautiful. 
                    With a passion for creating <span className="text-purple-500 font-semibold">intuitive user experiences</span> and solving complex problems, 
                    I've spent years turning <span className="text-blue-500 font-semibold">creative ideas</span> into digital reality.
                  </p>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-purple-400 relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-purple-100/30 to-transparent rounded-full translate-y-8 -translate-x-8"></div>
                  <p className="text-lg text-gray-700 leading-relaxed relative z-10">
                    When I'm not coding, you'll find me exploring the latest in <span className="text-purple-500 font-semibold">AI innovations</span>, 
                    training <span className="text-blue-500 font-semibold">machine learning models</span>, or sipping coffee while sketching out my next big project. 
                    I believe in the power of technology to create <span className="text-pink-500 font-semibold">meaningful connections</span> and positive change.
                  </p>
                </div>
              </div>

              {/* Artistic Interests Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {artisticInterests.map((interest, index) => {
                  const Icon = interest.icon;
                  return (
                    <div
                      key={interest.label}
                      className="group bg-white/60 backdrop-blur-sm rounded-xl p-4 hover:bg-white/80 transition-all duration-300 hover:scale-105 border border-pink-100 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-pink-100/20 to-purple-100/20 rounded-full -translate-y-6 translate-x-6 group-hover:scale-150 transition-transform duration-300"></div>
                      <div className="flex items-center space-x-3 relative z-10">
                        <Icon className={`h-5 w-5 ${interest.color} group-hover:scale-110 transition-transform duration-300`} />
                        <span className="text-sm text-gray-700 font-medium">{interest.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Artistic Profile Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-3xl p-1 relative group">
                {/* Floating Art Icons */}
                <Code2 className="absolute -top-4 -left-4 h-8 w-8 text-pink-400 animate-bounce" />
                <Palette className="absolute -top-3 -right-5 h-7 w-7 text-purple-400 animate-bounce" style={{ animationDelay: '1s' }} />
                <Camera className="absolute -bottom-3 -left-3 h-6 w-6 text-blue-400 animate-bounce" style={{ animationDelay: '2s' }} />
                <Brush className="absolute -bottom-2 -right-4 h-5 w-5 text-pink-500 animate-bounce" style={{ animationDelay: '0.5s' }} />
                
                {/* Artistic Rings */}
                <div className="absolute -inset-4 border-2 border-pink-200/30 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
                <div className="absolute -inset-6 border border-purple-200/20 rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
                
                <div className="bg-white rounded-3xl p-8 h-full relative overflow-hidden">
                  {/* Artistic Background Patterns */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100/20 to-purple-100/20 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-br from-blue-100/20 to-pink-100/20 rounded-full translate-y-14 -translate-x-14"></div>
                  <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-purple-100/10 to-blue-100/10 rounded-full transform -translate-x-12 -translate-y-12"></div>
                  
                  <div className="text-center space-y-6 relative z-10">
                    {/* Artistic Avatar */}
                    <div className="w-40 h-40 bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 rounded-full mx-auto flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
                      <div className="w-36 h-36 rounded-full overflow-hidden">
                        <img
                          src="/Saniya2.jpg"
                          alt="Saniya Inamdar"
                          className="w-full h-full object-cover"   /* fills & crops */
                        />
                      </div>
                      
                      {/* Floating Sparkles */}
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-lg">✨</span>
                      </div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                        <span className="text-sm">💖</span>
                      </div>
                      <div className="absolute top-2 -left-4 w-5 h-5 bg-purple-400 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '2s' }}>
                        <span className="text-xs">🎨</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">Saniya Inamdar</h3>
                      <p className="text-pink-600 font-semibold text-lg">Creative Developer & Digital Artist</p>
                      <p className="text-gray-600 text-sm mt-3 italic">
                        "Making the web a more beautiful place, one line of code at a time"
                      </p>
                      
                      {/* Artistic Signature */}
                      <div className="flex justify-center mt-4">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <div className="w-8 h-0.5 bg-gradient-to-r from-pink-300 to-purple-300"></div>
                          <Brush className="h-4 w-4" />
                          <div className="w-8 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300"></div>
                        </div>
                      </div>
                    </div>
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

export default Bio;
