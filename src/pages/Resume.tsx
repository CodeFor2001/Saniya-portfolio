import React, { useState } from 'react';
import { Download, Eye, X as XIcon, Award, Briefcase, GraduationCap, User } from 'lucide-react';

const Resume = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const pdfUrl = '/Saniya_resume__Copy_.pdf';

  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Header and Actions */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Resume
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 mb-8">
              My professional journey and achievements
            </p>

            <div className="flex justify-center space-x-4">
              {/* Download PDF */}
              <a
                href={pdfUrl}
                download
                className="flex items-center space-x-2 bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold px-6 py-3 rounded-full
                           hover:from-pink-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Download className="h-5 w-5" />
                <span>Download PDF</span>
              </a>

              {/* Toggle Preview Inline */}
              <button
                onClick={() => setPreviewOpen(prev => !prev)}
                className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm text-gray-700 font-semibold px-6 py-3 rounded-full
                           hover:bg-white/80 transition-all duration-300 border border-pink-200"
              >
                <Eye className="h-5 w-5" />
                <span>{previewOpen ? 'Hide Preview' : 'View Preview'}</span>
              </button>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pink-100">
            <div className="flex items-center space-x-3 mb-4">
              <User className="h-6 w-6 text-pink-500" />
              <h2 className="text-2xl font-bold text-gray-800">Professional Summary</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Results-driven software engineer and data specialist pursuing an MSc in Computer Science at the University of Southampton, with 3 years of hands-on experience delivering production-grade solutions for high-growth startups and a global semiconductor leader. Blend deep full-stack expertise (Node.js, React, Flutter, Docker) with enterprise-scale data engineering and analytics (SAP BW/4HANA, Hadoop, Tableau) to build scalable platforms, lead cost-saving migrations, and translate complex datasets into decisive business insights. Comfortable operating across the ML lifecycle from RAG-powered LLM applications to GPU-accelerated time-series models and known for shipping features that raise efficiency, compliance, and user satisfaction. Recognised for cross-functional leadership, rapid prototyping, and fast learner; now seeking a role where advanced software craftsmanship and data-driven thinking can accelerate product innovation and growth.
            </p>
          </div>
          
          {/* Inline PDF Preview Section */}
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-pink-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Resume Preview</h2>
            {previewOpen ? (
              <div className="w-full h-[60vh] rounded-lg overflow-hidden shadow-inner">
                <iframe
                  // hide default PDF toolbar/sidebar via URL hash params
                  src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                  title="Résumé preview"
                  className="w-full h-full border-none"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[60vh] text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 2v6h6" />
                </svg>
                <p className="text-lg">PDF preview will be displayed here</p>
                <p className="text-sm">Click “View Preview” to load the resume</p>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Resume;
