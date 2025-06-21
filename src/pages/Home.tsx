import React from 'react';
import Hero from '../components/Hero';
import Bio from '../components/Bio';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <Bio />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;