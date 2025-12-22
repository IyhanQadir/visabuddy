import React from 'react';

const About = () => {
  const subsections = [
    // {
    //   title: 'Work Visas & Resident Permits',
    //   content: 'VisaBuddy assists skilled, semi-skilled, and unskilled candidates with employment-based visa pathways and resident permit processes. For candidates requiring eligibility enhancement, structured preparation including language guidance and skill certification pathways is provided prior to application.'
    // },
    // {
    //   title: 'Student Visas & Study-Related Immigration',
    //   content: 'VisaBuddy also manages student visa applications, including: Study visa documentation support, Embassy and consulate appointment scheduling, Visa interview preparation and compliance review, Post-arrival and resident permit guidance (where applicable).'
    // },
    // {
    //   title: 'Embassy Appointments & Consular Services',
    //   content: 'VisaBuddy acts as a specialized service provider for embassy-related processes, including: Student visa embassy appointments, Work visa consular submissions, Biometric scheduling and documentation coordination, Visa-related procedural assistance for institutions and agencies. These services may be availed independently or as part of a broader application process.'
    // },
    // {
    //   title: 'Structured Case Allocation',
    //   content: 'As part of a defined operational framework: Studien College focuses exclusively on academic counselling, admissions, and higher-education consulting. All visa-related matters, including student visas, work visas, embassy appointments, and consular procedures, are formally routed to VisaBuddy. This separation ensures clarity of responsibility, process integrity, and regulatory alignment.'
    // },
    // {
    //   title: 'Agency, Sub-Agent & Institutional Engagement',
    //   content: 'VisaBuddy also serves as a back-end visa processing partner for: Education consultancies, Training institutions, Sub-agents and freelance consultants, Corporate and institutional partners. In such engagements, VisaBuddy operates strictly as a process and compliance unit, without direct academic counselling or employment solicitation.'
    // },
    // {
    //   title: 'Governance & Standards',
    //   content: 'VisaBuddy operates under: European compliance-oriented frameworks, Transparent, documented processes, Ethical, non-speculative advisory standards. VisaBuddy does not offer guarantees, shortcuts, or assurances of outcomes. All services are delivered in accordance with applicable embassy, consular, and regulatory requirements.'
    // },
    {
      title: 'Position Within the Studien College Ecosystem',
      content: 'VisaBuddy is an independent operational vertical of Studien College, with its own workflows, specialists, and service structures, while remaining aligned with Studien College’s institutional governance, ethics, and professional standards.'
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        {/* Centered Main Heading */}
        <div className="about-hero">
          <h2 className="about-main-title">
            VisaBuddy: A Dedicated Visa & Embassy Services Vertical of Studien College
          </h2>
          <p className="about-main-subtitle">For Work Visas, Student Visas, Embassy Appointments & Residency Pathways</p>
        </div>

        {/* Subsections in Two-Column Grid */}
        <div className="about-grid">
          {subsections.map((subsection, index) => (
            <div key={index} className="about-card">
              <h3>{subsection.title}</h3>
              <p>{subsection.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;