import React from 'react';

const Hero = () => {
  return (
    <header id="home" className="hero">
      <div className="hero-content">
        <h1>The Dedicated Visa & Embassy Services Vertical of Studien College</h1> 
        {/* <p className="sub">
          Specialized immigration support for work visas, student placements, and tourist Schengen applications to Western world and beyond.
        </p> */}
        <p className="intro">
        VisaBuddy is a specialized visa and immigration services vertical established by Studien College – Higher Education Consultants to manage all visa-related processes with institutional precision, regulatory compliance, and diplomatic discretion.
        VisaBuddy functions as the centralized authority for visa processing within the Studien College ecosystem, ensuring that all visa matters are handled through a dedicated, structured, and compliant framework.
        </p>
        <a href="#contact" className="btn btn-primary">Get Free Eligibility Check</a> {/* Action-oriented CTA */}
        <a href="#services" className="btn btn-outline">Explore Visa Services</a> {/* Internal link for SEO flow */}
      </div>
    </header>
  );
};

export default Hero;