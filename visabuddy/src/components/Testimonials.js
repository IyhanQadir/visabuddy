import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const slides = [
    { quote: "Thanks to their team I got my Polish work visa in just 3 weeks. Professional and transparent throughout!", author: "- Arjun S., Software Engineer" },
    { quote: "Best decision to go with them for Czech Republic residency. They handled everything perfectly.", author: "- Maria K., Entrepreneur" },
    { quote: "My Schengen visa was refused twice before. They fixed everything and I got it on the third attempt!", author: "- Rahul M., Tourist" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-slider">
          {slides.map((slide, index) => (
            <div key={index} className={`slide ${index === current ? 'active' : ''}`}>
              <p>{slide.quote}</p>
              <p className="author">{slide.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;