import React from 'react';
import img1 from '../images/img-1.jpg';  // Relative import from components/ to images/
import img2 from '../images/img-2.jpg';
import img3 from '../images/img-3.jpg';
import img4 from '../images/img-4.jpg';
import img5 from '../images/img-5.jpg';
import img6 from '../images/img-6.jpg';

const WhyChooseUs = () => {
  const features = [
    { title: 'Expertise in Complex Visa Systems', image: img1 },
    { title: 'Fully Compliant Legal Guidance', image: img2 },
    { title: 'Multilingual Support', image: img3 },
    { title: 'Partnerships with Certified Immigration Lawyers', image: img4 },
    { title: 'End-to-End Application Management', image: img5 },
    { title: 'Internship & Education Support Services', image: img6 }
  ];

  return (
    <section className="whychooseus" id="whychooseus">
      <div className="container">
        <h2>Why Choose Us?</h2>
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