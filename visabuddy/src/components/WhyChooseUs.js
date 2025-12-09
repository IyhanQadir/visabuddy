import React from 'react';

const WhyChooseUs = () => {
  const features = [
    'Expertise in Complex Visa Systems',
    'Fully Compliant Legal Guidance',
    'Multilingual Support',
    'Partnerships with Certified Immigration Lawyers',
    'End-to-End Application Management',
    'Internship & Education Support Services'
  ];

  return (
    <section className="whychooseus" id="whychooseus">
      <div className="container">
        <h2>Why Choose Us</h2>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;