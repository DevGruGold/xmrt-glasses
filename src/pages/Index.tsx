
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import UseCases from '../components/UseCases';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <UseCases />
      <HowItWorks />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
