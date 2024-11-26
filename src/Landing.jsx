import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import '../src/styles/index.css'

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <AboutUs />
      <Footer />
    </>
  );
};

export default Landing;