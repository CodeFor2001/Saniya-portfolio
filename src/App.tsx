import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-arc-base">
        <Navigation />
        {/* md:pl-16 = sidebar width on desktop; pb-16 = mobile bottom bar clearance */}
        <div className="md:pl-16 pb-16 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;