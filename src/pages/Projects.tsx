import React, { useState } from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Define all filter categories including 'All'
  const categories = ['All', 'Web Development', 'Machine Learning'];

  // Each project can belong to multiple categories
  const projects = [
    {
      id: 2,
      title: 'AI-Powered Recipe Generator',
      description: 'Snap a photo of your ingredients and get TensorFlow-powered recipe ideas from a Flask API.',
      categories: ['Machine Learning', 'Web Development'],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'Celery', 'Redis', 'OpenCV'],
      github: 'https://github.com/CodeFor2001/AI-recipe-generator.git'
    },
    {
      id: 6,
      title: 'Sentiment Analysis Tool',
      description: 'Hands-on PyTorch notebooks that build BoW, RNN, CNN and Transformer models to classify movie-review sentiment.',
      categories: ['Machine Learning'],
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'PyTorch', 'HuggingFace Transformers', 'TorchText'],
      github: 'https://github.com/CodeFor2001/Sentiment-analysis-pytorch.git'
    },
    {
      id: 3,
      title: 'Multi-tasking Kernel from Scratch',
      description: 'A kernel written in C that supports multitasking, memory management, and basic I/O.',
      categories: ['Web Development'],
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      technologies: ['C', 'GRUB Bootloader', 'NASM'],
      github: 'https://github.com/CodeFor2001/kernel-c.git'
    },
    {
      id: 8,
      title: 'COVID Detection on CT-Scan',
      description: 'Deep learning model to detect COVID-19 infections from chest CT scans with high accuracy.',
      categories: ['Machine Learning'],
      image: 'https://images.pexels.com/photos/8395815/pexels-photo-8395815.jpeg',
      technologies: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Streamlit', 'OpenCV'],
      github: 'https://github.com/CodeFor2001/CT-Scan-Classification-for-Covid-Testing-App.git'
    },
    {
      id: 9,
      title: 'Emotional Analysis on Tweets',
      description: 'NLP application analyzing emotions from tweets using transformer models.',
      categories: ['Machine Learning'],
      image: 'https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg',
      technologies: ['Python', 'PyTorch', 'NRCLex', 'Vader'],
      github: 'https://github.com/CodeFor2001/-Covid-Vaccine-Sentiment-and-Emotion-Analysis.git'
    },
    {
      id: 10,
      title: 'Audio Classification',
      description: 'Classifies audio clips into categories using LSTM/CNN models and MFCC features.',
      categories: ['Machine Learning'],
      image: 'https://images.pexels.com/photos/586019/pexels-photo-586019.jpeg',
      technologies: ['Python', 'TensorFlow', 'Librosa', 'NumPy'],
      github: 'https://github.com/CodeFor2001/pipeline-leakage-detection.git'
    },
    {
      id: 1,
      title: 'AI Research Assistant',
      description: 'Assistant to summarize research papers, generate literature reviews, and manage references.',
      categories: ['Machine Learning', 'Web Development'],
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
      technologies: ['Python', 'LangChain', 'MLflow', 'OpenAI', 'Pinecone', 'FastAPI'],
      github: 'https://github.com/CodeFor2001/AI-research-assistant.git'
    }
  ];

  // Filter by selected category, or show all
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.categories.includes(selectedCategory));

  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
              My Projects
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A collection of projects that showcase my passion for creating innovative solutions
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-lg'
                    : 'bg-white/60 backdrop-blur-sm text-gray-600 hover:bg-white/80 border border-pink-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-pink-100"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Multi-category badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="text-sm font-medium text-pink-600 bg-pink-50 px-3 py-1 rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                  {/* Technologies 

*/}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Code Link */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
                    >
                      <Github className="h-5 w-5" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All Mini Personal Projects Card */}
          <div className="flex justify-center mt-12">
            <div className="group w-full sm:w-1/2 md:w-1/3 bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-pink-100">
              <a
                href="https://github.com/CodeFor2001"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 text-center"
              >
                <div className="flex items-center justify-center space-x-3">
                  <Github className="h-6 w-6 text-gray-600" />
                  <span className="text-lg font-semibold text-gray-800">All Mini Personal Projects</span>
                </div>
                <p className="text-gray-600 text-sm mt-2">
                  Explore all my side and mini projects on my GitHub profile.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
