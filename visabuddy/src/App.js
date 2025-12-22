import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TrustBar from './components/TrustBar';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import InternshipProgram from './components/InternshipProgram';
import Countries from './components/Countries';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <TrustBar />
      <WhyChooseUs />
      <Services />
      <InternshipProgram />
      <Countries />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;