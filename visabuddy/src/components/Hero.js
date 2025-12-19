import React from 'react';

const Hero = () => {
  return (
    <header id="home" className="hero">
      <div className="hero-content">
        <h1>Expert Visa Assistance for Global Immigration</h1> {/* H1 with primary keywords */}
        <p className="sub">
          Specialized immigration support for work visas, student placements, and tourist Schengen applications to Eastern Europe and beyond.
        </p>
        <p className="intro">
          VisaBuddy is your trusted partner for navigating complex visa regulations in Poland, Hungary, Romania, and more. VisaBuddy is a vertical of Studiencollege, with 15+ years of experience and a 98% approval rate, our certified experts handle everything—from eligibility checks and document preparation to embassy submissions and appeals. Whether you're seeking a Poland work visa, Czech student visa, or family reunification in Slovakia, we provide end-to-end guidance. Start your journey to global mobility today.
        </p>
        <a href="#contact" className="btn btn-primary">Get Free Eligibility Check</a> {/* Action-oriented CTA */}
        <a href="#services" className="btn btn-outline">Explore Visa Services</a> {/* Internal link for SEO flow */}
      </div>
    </header>
  );
};

export default Hero;