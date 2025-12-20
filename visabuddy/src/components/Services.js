import React from 'react';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container" style={{textAlign: 'center'}}>
        <h2>Visa & Immigration Services</h2>
        <p style={{maxWidth: '800px', margin: '1.5rem auto', color: 'var(--gray)'}}>Complete support from eligibility check to visa grant</p>
        <div className="grid">
          <div className="card">
            <i className="fas fa-passport"></i>
            <h3>Tourist & Visit Visas</h3>
            <p>Assistance with short-term visas including documentation, submission & embassy requirements</p>
          </div>
          <div className="card">
            <i className="fas fa-graduation-cap"></i>
            <h3>Study Visa & Internship Placement</h3>
            <p>Support for students applying to accredited universities and placement in legal internships</p>
          </div>
          <div className="card">
            <i className="fas fa-briefcase"></i>
            <h3>Work & Business Visas</h3>
            <p>Specialized support for skilled workers, entrepreneurs, and company-sponsored migration</p>
          </div>
          <div className="card">
            <i className="fas fa-home"></i>
            <h3>Permanent Residency & Citizenship Routes</h3>
            <p>Consultation and legal processing for long-term immigration pathways</p>
          </div>
          <div className="card">
            <i className="fas fa-file-alt"></i>
            <h3>Document Support & Compliance</h3>
            <p>Apostille, notarization, embassy processing, translation, attestation</p>
          </div>
          <div className="card">
            <i className="fas fa-shield-alt"></i>
            <h3>Asylum Seekers and Refugees</h3>
            <p>Compassionate support for asylum applications, including documentation, legal consultations, and procedural guidance to safe havens in Eastern Europe.</p>
          </div>
        </div>
        <a href="#contact" className="btn btn-primary" style={{marginTop: '2rem'}}>➡️ View All Services</a>
      </div>
    </section>
  );
};

export default Services;