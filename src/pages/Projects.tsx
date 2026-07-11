import React, { useState } from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Define all filter categories including 'All'
  const categories = ['All', 'Web Development', 'Machine Learning','Kernel Development', 'Agentic AI'];

  // Each project can belong to multiple categories
  const projects = [
    {
      id: 11,
      title: 'Agent Command Center',
      description: 'An AI fleet observability platform for monitoring and governing enterprise-scale AI agent deployments. Features real-time step tracing via SSE, an LLM-as-judge pipeline for silent failure detection, human-in-the-loop escalation workflows, and a conversational analytics agent for natural language ROI queries.',
      categories: ['Agentic AI', 'Web Development'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['FastAPI', 'Claude API', 'React 18', 'Tailwind CSS', 'SQLite', 'SSE', 'asyncio', 'Recharts'],
      github: 'https://github.com/CodeFor2001'
    },
    {
      id: 1,
      title: 'Matrix Profile based feature Extraction for EEG signal classification',
      description: 'A feature extraction method exploration based on in phase matrix profile vs HFD for EEG signal classification using MRHydra and HC2 models.',
      categories: ['Machine Learning'],
      image: 'https://images.pexels.com/photos/8879116/pexels-photo-8879116.jpeg',

      technologies: ['Python', 'scikit-learn', 'MRHydra', 'HC2', 'aeon-toolkit'],
      github: 'https://github.com/CodeFor2001/In-Phase-Matrix-Profile-for-Major-Depressive-Disorder.git'
    },
    {
      id: 6,
      title: 'Custom Agentic IDE',
      description: 'A custom IDE for agentic AI development which edits your code in real time locally.',
      categories: ['Machine Learning','Agentic AI'],
      image: 'https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg',
      technologies: ['Python', 'OpenAI'],
      github: 'https://github.com/CodeFor2001/Custom-Agentic-IDE.git'
    },
    {
      id: 5,
      title: 'AI outfit stylist',
      description: 'An AI stylist that suggests outfits based on your wardrobe, occasion, personal style and colours. It also suggests outfits from Pinterest. And if you dont have a particular clothing it\'ll also give you links from where you can buy Italic.(work in progress)',
    categories: ['Machine Learning','Agentic AI'],
      image: 'https://images.pexels.com/photos/5418896/pexels-photo-5418896.jpeg',
      technologies: ['Python','OpenAI', 'React'],
      github: 'https://github.com/CodeFor2001/AI-Fashion-Assistant.git'},
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
      id: 7,
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
      categories: ['Kernel Development'],
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      technologies: ['C', 'NASM'],
      github: 'https://github.com/CodeFor2001/kernel-c.git'
    },
    {
      id: 8,
      title: 'TB Detection on CT-Scan',
      description: 'Deep learning model to detect TB infections from chest CT scans with high accuracy.',
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
      title: 'Audio Classification: Leakage Detection in Water pipelines',
      description: 'Classifies audio clips into categories using LSTM/CNN models and MFCC features.',
      categories: ['Machine Learning'],
      image: 'https://images.pexels.com/photos/586019/pexels-photo-586019.jpeg',
      technologies: ['Python', 'TensorFlow', 'Librosa', 'NumPy'],
      github: 'https://github.com/CodeFor2001/pipeline-leakage-detection.git'
    },
    {
      id: 4,
      title: 'AI Research Assistant',
      description: 'Assistant to summarize research papers, generate literature reviews, and manage references.',
      categories: ['Machine Learning', 'Web Development', 'Agentic AI'],
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
      technologies: ['Python', 'LangChain', 'MLflow', 'OpenAI', 'Pinecone', 'FastAPI'],
      github: 'https://github.com/CodeFor2001/AI-research-assistant.git'
    },
    
      
  ];

  // Filter by selected category, or show all
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.categories.includes(selectedCategory));

  return (
    <div className="pt-16 min-h-screen circuit-bg">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="mono-label mb-3">[ 03 / Work ]</p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-ink-100 mb-4">
              My Projects
            </h1>
            <p className="text-ink-400 max-w-xl">
              A collection of things I've built — spanning ML research, systems programming, and agentic AI.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-xl font-mono text-xs tracking-wider uppercase font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-rose-400 to-violet-500 text-white shadow-glow-violet'
                    : 'arc-card text-ink-400 hover:text-ink-100 hover:border-violet-400/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="arc-card group overflow-hidden hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-44">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0C0820 0%, transparent 60%)' }} />
                  {/* Category badges on image */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {project.categories.map((cat) => (
                      <span key={cat} className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded-md bg-arc-base/80 border border-violet-400/30 text-violet-300">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="font-display text-lg font-semibold text-ink-100 leading-snug">{project.title}</h3>
                  <p className="text-ink-400 text-sm leading-relaxed line-clamp-3">{project.description}</p>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-chip text-[11px]">{tech}</span>
                    ))}
                  </div>

                  {/* Code link */}
                  <div className="pt-2 border-t border-arc-border">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-violet-400 hover:text-rose-400 transition-colors text-sm font-medium"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub profile card */}
          <div className="flex justify-center mt-10">
            <a
              href="https://github.com/CodeFor2001"
              target="_blank"
              rel="noopener noreferrer"
              className="arc-card group flex items-center gap-4 px-8 py-5 hover:bg-arc-hover transition-colors hover:border-violet-400/40"
            >
              <Github className="h-6 w-6 text-ink-400 group-hover:text-violet-400 transition-colors" />
              <div>
                <p className="text-ink-100 font-semibold">All Mini Personal Projects</p>
                <p className="text-ink-400 text-sm">Explore everything on GitHub</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
