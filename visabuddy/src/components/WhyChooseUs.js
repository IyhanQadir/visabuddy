import React from 'react';

const WhyChooseUs = () => {
  const features = [
    { title: 'Expertise in Complex Visa Systems', image: './img-1.jpg' },
    { title: 'Fully Compliant Legal Guidance', image: './img-2.jpg' },
    { title: 'Multilingual Support', image: './img-3.jpg' },
    { title: 'Partnerships with Certified Immigration Lawyers', image: './img-4.jpg' },
    { title: 'End-to-End Application Management', image: './img-5.jpg' },
    { title: 'Internship & Education Support Services', image: './img-6.jpg' }
  ];

  return (
    <section className="whychooseus" id="whychooseus">
      <div className="container">
        <h2>Why Choose Us</h2>
        <div className="why-grid">
          {features.map((feature, index) => (
            <div key={index} className="why-card">
              <div 
                className="why-card-inner" 
                style={{ backgroundImage: `url(${feature.image})` }}
              >
                <div className="why-card-content">
                  <h3>{feature.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;