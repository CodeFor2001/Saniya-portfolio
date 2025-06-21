import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Heart, Send, Sparkles, Palette, Brush, Star } from 'lucide-react';

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/CodeFor2001',
      color: 'hover:text-gray-800 hover:bg-gray-100',
      bgGradient: 'from-gray-400 to-gray-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/saniya-inamdar/',
      color: 'hover:text-blue-600 hover:bg-blue-50',
      bgGradient: 'from-blue-400 to-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:saniyainamdary2k@gmail.com',
      color: 'hover:text-pink-600 hover:bg-pink-50',
      bgGradient: 'from-pink-400 to-pink-600'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 relative overflow-hidden">
      {/* Interactive Mouse Trail */}
      <div 
        className="fixed w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 pointer-events-none z-50 transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
      />

      {/* Artistic Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-pink-300 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-300 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-20 w-24 h-24 bg-gradient-to-br from-blue-300 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-28 h-28 bg-gradient-to-br from-yellow-300 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>
      
      {/* Floating Art Elements */}
      <div className="absolute top-32 right-32 w-16 h-16 border-2 border-pink-200/50 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
      <div className="absolute bottom-40 left-32 w-12 h-12 bg-gradient-to-br from-purple-200/50 to-blue-200/50 transform rotate-45 animate-pulse"></div>
      <div className="absolute top-1/3 left-16 w-8 h-8 bg-gradient-to-r from-pink-300/60 to-purple-300/60 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>

      {/* Floating Creative Icons */}
      <Sparkles className="absolute top-32 right-1/4 h-8 w-8 text-pink-300 animate-bounce" style={{ animationDelay: '0s' }} />
      <Palette className="absolute bottom-40 left-1/4 h-7 w-7 text-purple-300 animate-bounce" style={{ animationDelay: '1s' }} />
      <Brush className="absolute top-40 left-16 h-6 w-6 text-blue-300 animate-bounce" style={{ animationDelay: '2s' }} />
      <Star className="absolute bottom-32 right-16 h-5 w-5 text-pink-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
      <Heart className="absolute top-1/2 right-32 h-6 w-6 text-purple-400 animate-bounce" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Artistic Header */}
        <div className="mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <div className="flex space-x-3">
              <Send className="h-6 w-6 text-pink-300 animate-pulse" />
              <Heart className="h-6 w-6 text-purple-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Sparkles className="h-6 w-6 text-blue-300 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-8 relative">
            Let's Connect
            <div className="absolute -top-3 -right-12 w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center animate-bounce">
              <span className="text-lg">💌</span>
            </div>
          </h2>
          
          {/* Artistic Divider */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-pink-400 animate-pulse"></div>
            <div className="w-4 h-4 bg-pink-400 rounded-full animate-bounce"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full"></div>
            <div className="w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-20 h-0.5 bg-gradient-to-r from-blue-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            I'm always excited to collaborate on <span className="text-pink-500 font-semibold">creative projects</span> and connect with fellow <span className="text-purple-500 font-semibold">developers & artists</span>. 
            Feel free to reach out if you'd like to work together or just chat about <span className="text-blue-500 font-semibold">tech & creativity</span>!
          </p>
        </div>

        {/* Location & Social Links */}
        <div className="mb-16">
          <div className="flex items-center justify-center space-x-3 mb-12 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-pink-200 inline-flex">
            <MapPin className="h-6 w-6 text-pink-500" />
            <span className="text-gray-700 font-medium">Based in India</span>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
          </div>
          
          {/* Artistic Social Links */}
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <div key={link.label} className="relative group">
                  {/* Artistic Background Ring */}
                  <div className="absolute -inset-4 border-2 border-pink-200/30 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                  
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center w-20 h-20 bg-white/70 backdrop-blur-sm rounded-3xl border border-pink-200 transition-all duration-500 hover:scale-125 hover:shadow-2xl ${link.color} relative overflow-hidden`}
                  >
                    {/* Artistic Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${link.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}></div>
                    
                    {/* Floating Particles */}
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{ animationDelay: '0.5s' }}></div>
                    
                    <Icon className="h-8 w-8 text-gray-600 group-hover:scale-125 transition-all duration-500 relative z-10" />
                  </a>
                  
                  {/* Label */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm text-gray-600 font-medium bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-pink-100">
                      {link.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Artistic CTA Card */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 border border-pink-200 relative overflow-hidden group hover:bg-white/80 transition-all duration-500">
          {/* Artistic Background Patterns */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-100/20 to-purple-100/20 rounded-full -translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-br from-blue-100/20 to-pink-100/20 rounded-full translate-y-14 translate-x-14 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-purple-100/10 to-blue-100/10 rounded-full transform -translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-500"></div>
          
          {/* Floating Art Elements */}
          <Palette className="absolute top-4 left-4 h-6 w-6 text-pink-300 opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" />
          <Brush className="absolute top-4 right-4 h-5 w-5 text-purple-300 opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '0.5s' }} />
          <Sparkles className="absolute bottom-4 left-4 h-4 w-4 text-blue-300 opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '1s' }} />
          
          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Heart className="h-6 w-6 text-pink-500 animate-pulse" />
              <span className="text-gray-700 font-semibold text-lg">Open to Creative Opportunities</span>
              <Star className="h-6 w-6 text-yellow-500 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Currently available for <span className="text-pink-500 font-semibold">freelance projects</span> and <span className="text-purple-500 font-semibold">full-time opportunities</span>. 
              Let's build something <span className="text-blue-500 font-semibold">amazing & beautiful</span> together!
            </p>
            
            <a
              href="https://www.linkedin.com/in/saniya-inamdar/"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white font-bold px-10 py-4 rounded-full hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-500 hover:scale-110 hover:shadow-2xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <Send className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>Get in touch</span>
              <Sparkles className="h-5 w-5 group-hover:scale-125 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Artistic Footer */}
        <div className="mt-16 pt-8 border-t border-pink-200 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-2 border-pink-200 flex items-center justify-center">
            <Heart className="h-4 w-4 text-pink-500" />
          </div>
          
          <p className="text-gray-500 flex items-center justify-center space-x-2 text-lg">
            <span>Made with</span>
            <span>lots of</span>
            <Heart className="inline h-5 w-5 text-pink-500 animate-pulse" />
            <span>and creative passion</span>
            <Palette className="inline h-5 w-5 text-purple-500 animate-pulse" style={{ animationDelay: '1s' }} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
