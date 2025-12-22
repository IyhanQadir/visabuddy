import React, { useState } from 'react';

const Services = () => {
  const [openCards, setOpenCards] = useState({});  // Track open state per card

  const toggleCard = (index) => {
    setOpenCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const servicesData = [
    {
      title: 'Work Visas & Resident Permits',
      // shortDesc: 'Streamlined Schengen visa applications for Poland, Hungary, and Czech Republic—fast processing with full documentation support.',
      fullContent: 'VisaBuddy assists skilled, semi-skilled, and unskilled candidates with employment-based visa pathways and resident permit processes. For candidates requiring eligibility enhancement, structured preparation including language guidance and skill certification pathways is provided prior to application.',
      icon: 'fas fa-passport'
    },
    {
      title: 'Student Visas & Study-Related Immigration',
      // shortDesc: 'University admissions and student visas for Eastern Europe universities, plus legal internship opportunities in Warsaw and Prague.',
      fullContent: 'VisaBuddy also manages student visa applications, including: Study visa documentation support, Embassy and consulate appointment scheduling, Visa interview preparation and compliance review, Post-arrival and resident permit guidance (where applicable).',
      icon: 'fas fa-graduation-cap'
    },
    {
      title: 'Embassy Appointments & Consular Services',
      // shortDesc: 'Skilled worker and entrepreneur visas for IT jobs in Poland or business setup in Romania—98% success rate.',
      fullContent: 'VisaBuddy acts as a specialized service provider for embassy-related processes, including: Student visa embassy appointments, Work visa consular submissions, Biometric scheduling and documentation coordination, Visa-related procedural assistance for institutions and agencies. These services may be availed independently or as part of a broader application process.',
      icon: 'fas fa-briefcase'
    },
    {
      title: 'Structured Case Allocation',
      // shortDesc: 'Golden visa programs and family reunification for long-term stays in Slovakia and Bulgaria.',
      fullContent: 'As part of a defined operational framework: Studien College focuses exclusively on academic counselling, admissions, and higher-education consulting. All visa-related matters, including student visas, work visas, embassy appointments, and consular procedures, are formally routed to VisaBuddy. This separation ensures clarity of responsibility, process integrity, and regulatory alignment.',
      icon: 'fas fa-home'
    },
    {
      title: 'Agency, Sub-Agent & Institutional Engagement',
      // shortDesc: 'Apostille, translation, and attestation services for Indian documents accepted by Eastern European embassies.',
      fullContent: 'VisaBuddy also serves as a back-end visa processing partner for: Education consultancies, Training institutions, Sub-agents and freelance consultants, Corporate and institutional partners. In such engagements, VisaBuddy operates strictly as a process and compliance unit, without direct academic counselling or employment solicitation.',
      icon: 'fas fa-file-alt'
    },
    {
      title: 'Governance & Standards',
      // shortDesc: 'Compassionate support for asylum applications, including documentation, legal consultations, and procedural guidance to safe havens in Eastern Europe.',
      fullContent: 'VisaBuddy operates under: European compliance-oriented frameworks, Transparent, documented processes, Ethical, non-speculative advisory standards. VisaBuddy does not offer guarantees, shortcuts, or assurances of outcomes. All services are delivered in accordance with applicable embassy, consular, and regulatory requirements.',
      icon: 'fas fa-shield-alt'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container" style={{textAlign: 'center'}}>
        <h2>Visa & Immigration Services</h2>
        <div className="grid">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className={`card ${openCards[index] ? 'open' : ''}`}
              onClick={() => toggleCard(index)}
              style={{ cursor: 'pointer', position: 'relative' }}
            >
              <div className="card-header">
                <i className={service.icon} style={{ fontSize: '3.5rem', color: 'var(--primary)', marginBottom: '1rem' }}></i>
                <h3>{service.title}</h3>
                <p className="card-short-desc">{service.shortDesc}</p>
                <i className={`fas fa-chevron-down card-chevron ${openCards[index] ? 'rotate' : ''}`} style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'var(--gray)' }}></i>
              </div>
              <div className="card-content">
                <p>{service.fullContent}</p>
              </div>
            </div>
          ))}
        </div>

        <a href="#contact" className="btn btn-primary" style={{marginTop: '3rem'}}>Contact us to know more</a>
      </div>
    </section>
  );
};

export default Services;