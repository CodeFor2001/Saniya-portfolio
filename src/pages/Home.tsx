import React from 'react';
import Hero from '../components/Hero';
import RecognitionPopup from '../components/RecognitionPopup';
import Recognition from '../components/Recognition';
import Bio from '../components/Bio';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <RecognitionPopup />
      <div className="pt-16">
      <Hero />
      <Recognition />
      <Bio />
      <Skills />
      <Contact />
      </div>
    </>
  );
};

export default Home;
