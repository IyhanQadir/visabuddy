import React from 'react';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container" style={{textAlign: 'center'}}>
        <h2>Our Core Services</h2>
        <p style={{maxWidth: '800px', margin: '1.5rem auto', color: 'var(--gray)'}}>Complete support from eligibility check to visa grant</p>
        <div className="grid">
          <div className="card">
            <i className="fas fa-passport"></i>
            <h3>Tourist & Visit Visas</h3>
            <p>Fast processing for Schengen, UK, USA, Canada & more</p>
          </div>
          <div className="card">
            <i className="fas fa-briefcase"></i>
            <h3>Work & Business Visas</h3>
            <p>Job seeker, intra-company transfer, entrepreneur visas</p>
          </div>
          <div className="card">
            <i className="fas fa-graduation-cap"></i>
            <h3>Student Visas</h3>
            <p>University admission + visa + pre-departure support</p>
          </div>
          <div className="card">
            <i className="fas fa-home"></i>
            <h3>Permanent Residency & Citizenship</h3>
            <p>Golden visas, investment programs, family reunification</p>
          </div>
          <div className="card">
            <i className="fas fa-gavel"></i>
            <h3>Appeals & Refusals</h3>
            <p>Professional representation for rejected applications</p>
          </div>
          <div className="card">
            <i className="fas fa-file-alt"></i>
            <h3>Document Legalization</h3>
            <p>Apostille, attestation, translation services</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;