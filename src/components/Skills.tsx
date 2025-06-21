import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Cpu, Brain, Wrench, Users, Palette, Sparkles } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'FastAPI','Flutter', 'Streamlit'],
      color: 'from-pink-400 to-rose-400',
      bgColor: 'from-pink-50 to-rose-50',
      hoverColor: 'from-pink-100 to-rose-100',
      iconBg: 'bg-pink-500'
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: ['Node.js', 'Python', 'Express', 'Django', 'SQL', 'MongoDB', 'React Native', 'Pinecone'],
      color: 'from-purple-400 to-indigo-400',
      bgColor: 'from-purple-50 to-indigo-50',
      hoverColor: 'from-purple-100 to-indigo-100',
      iconBg: 'bg-purple-500'
    },
    {
      title: 'IoT',
      icon: Cpu,
      skills: ['MQTT', 'Sensors', 'LoRaWAN', 'BLE'],
      color: 'from-blue-400 to-cyan-400',
      bgColor: 'from-blue-50 to-cyan-50',
      hoverColor: 'from-blue-100 to-cyan-100',
      iconBg: 'bg-blue-500'
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: ['TensorFlow', 'PyTorch',  'Transformers', 'LLMs', 'RAG','Agentic AI', 'MCP', 'NLP', 'Computer Vision', 'Time Series Classification'],
      color: 'from-green-400 to-emerald-400',
      bgColor: 'from-green-50 to-emerald-50',
      hoverColor: 'from-green-100 to-emerald-100',
      iconBg: 'bg-green-500'
    },
    {
      title: 'Tools & DevOps',
      icon: Wrench,
      skills: ['Git', 'Docker', 'Tableau', 'Power BI', 'SAPBW4HANA','AWS', 'Figma', 'VS Code'],
      color: 'from-yellow-400 to-orange-400',
      bgColor: 'from-yellow-50 to-orange-50',
      hoverColor: 'from-yellow-100 to-orange-100',
      iconBg: 'bg-yellow-500'
    },
    {
      title: 'Creative & Soft Skills',
      icon: Palette,
      skills: ['Knife Painting', 'Digital Art', 'Problem Solving', 'Team Leadership', 'Project Management', 'Communication', 'Mentoring', 'Creative Thinking'],
      color: 'from-red-400 to-pink-400',
      bgColor: 'from-red-50 to-pink-50',
      hoverColor: 'from-red-100 to-pink-100',
      iconBg: 'bg-red-500'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm relative overflow-hidden">
      {/* Artistic Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-pink-300 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-purple-300 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-300 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-32 right-1/4 w-16 h-16 border-2 border-pink-200/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-40 left-1/3 w-12 h-12 bg-gradient-to-br from-purple-200/40 to-blue-200/40 transform rotate-12 animate-pulse"></div>
      <div className="absolute top-1/3 right-16 w-8 h-8 bg-gradient-to-r from-pink-300/50 to-purple-300/50 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Artistic Header */}
          <div className="text-center mb-20 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
              <div className="flex space-x-3">
                <Sparkles className="h-6 w-6 text-pink-300 animate-pulse" />
                <Palette className="h-6 w-6 text-purple-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <Code className="h-6 w-6 text-blue-300 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-8 relative">
              Skills & Expertise
              <div className="absolute -top-3 -right-12 w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-lg">🎨</span>
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
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A diverse <span className="text-pink-500 font-semibold">creative toolkit</span> built through years of passionate learning and <span className="text-purple-500 font-semibold">hands-on experience</span>
            </p>
          </div>

          {/* Artistic Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              const isHovered = hoveredCard === categoryIndex;
              
              return (
                <div
                  key={category.title}
                  className={`transform transition-all duration-700 delay-${categoryIndex * 150} ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  onMouseEnter={() => setHoveredCard(categoryIndex)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`bg-white/70 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/90 transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-pink-100 h-full flex flex-col relative overflow-hidden group ${isHovered ? 'shadow-2xl scale-105' : ''}`}>
                    {/* Artistic Background Pattern */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.hoverColor} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100/20 to-purple-100/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                    
                    {/* Floating Particles */}
                    <div className="absolute top-6 left-6 w-2 h-2 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
                    <div className="absolute bottom-6 right-6 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-1/2 right-8 w-1 h-1 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500" style={{ animationDelay: '1s' }}></div>
                    
                    {/* Header */}
                    <div className="flex items-center space-x-4 mb-6 relative z-10">
                      <div className={`w-14 h-14 ${category.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">{category.title}</h3>
                    </div>
                    
                    {/* Artistic Progress Bar */}
                    <div className={`w-full h-1.5 bg-gradient-to-r ${category.color} rounded-full mb-6 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                    </div>
                    
                    {/* Skills */}
                    <div className="flex-1 relative z-10">
                      <div className="flex flex-wrap gap-3">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skill}
                            className={`bg-gradient-to-r ${category.bgColor} rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 hover:scale-110 transition-all duration-300 border border-white/50 shadow-sm hover:shadow-md cursor-pointer group-hover:animate-pulse`}
                            style={{
                              animationDelay: `${skillIndex * 0.1}s`
                            }}
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Artistic Border */}
                    <div className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:${category.color} rounded-3xl transition-all duration-500 opacity-0 group-hover:opacity-50`}></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Artistic Footer */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-full px-8 py-4 border border-pink-100">
              <Sparkles className="h-5 w-5 text-pink-500 animate-pulse" />
              <span className="text-gray-600 font-medium">Always learning, always creating</span>
              <Palette className="h-5 w-5 text-purple-500 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
