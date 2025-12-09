import React from 'react';

const Hero = () => {
  return (
<header id="home" className="hero">
  <video
    className="hero-video"
    src="/plane.mp4"
    autoPlay
    loop
    muted
    playsInline
  ></video>

  {/* Overlay (keeps your gradient look) */}
  <div className="hero-overlay"></div>

  <div className="hero-content">
    <h1>Your Gateway to Global Immigration Success</h1>
    <p className="sub">
      Expert Visa Assistance, Legal Immigration Support & Professional Guidance for Eastern European Countries and Beyond.
    </p>
    <p className="intro">
    We are a trusted immigration facilitation and visa assistance company specializing in complex visa regulations and immigration laws, particularly across Eastern European countries where procedures can be challenging and compliance-heavy. With a qualified team of immigration experts and certified legal partners, we provide end-to-end guidance — from documentation to legal submission and follow-through.
    </p>
    <a href="#contact" className="btn btn-primary">Start Your Application</a>
  </div>
</header>

  );
};

export default Hero;