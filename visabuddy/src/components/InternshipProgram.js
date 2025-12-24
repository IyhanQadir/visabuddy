import React from 'react';
import { FaBookOpen, FaFileAlt, FaGavel, FaCertificate } from 'react-icons/fa'; // npm install react-icons

const InternshipProgram = () => {
  return (
    <section className="internship-timeline-section">
      <h2>Training Future Immigration Professionals</h2>
      <p className="internship-intro">
        We are proud to collaborate with licensed immigration lawyers and legal experts across multiple jurisdictions. 
        In addition to providing visa services, we offer structured internship programs designed for law graduates 
        and legal professionals across the Indian subcontinent.
      </p>

      <div className="timeline">
        {/* Stage 1 - Weeks 1-6 */}
        <div className="timeline-container left">
          <div className="timeline-content">
            <div className="stage-icon"><FaBookOpen /></div>
            <h3>Foundations</h3>
            <ul>
              <p>Immigration Law Training</p>
            </ul>
          </div>
        </div>

        {/* Stage 2 - Weeks 7-12 */}
        <div className="timeline-container right">
          <div className="timeline-content">
            <div className="stage-icon"><FaFileAlt /></div>
            <h3>Compliance</h3>
            <ul>
              <p>Compliance & Documentation Workshops</p>
            </ul>
          </div>
        </div>

        {/* Stage 3 - Weeks 13-18 */}
        <div className="timeline-container left">
          <div className="timeline-content">
            <div className="stage-icon"><FaGavel /></div>
            <h3>Practical Exposure</h3>
            <ul>
              <p>Exposure to real case filing & embassy procedures</p>
            </ul>
          </div>
        </div>

        {/* Stage 4 - Weeks 19-24 */}
        <div className="timeline-container right">
          <div className="timeline-content">
            <div className="stage-icon"><FaCertificate /></div>
            <h3>Completion</h3>
            <ul>
              <p>Certification upon completion</p>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipProgram;