import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "How long does it take to get a visa?", answer: "Processing time varies from 7 days (express) to 90 days depending on country and visa type." },
    { question: "Do you guarantee visa approval?", answer: "No ethical company can guarantee approval, but our 98% success rate speaks for itself." },
    { question: "What documents do I need?", answer: "We provide a personalized checklist after your eligibility assessment." }
  ];

  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="accordion">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item">
              <div 
                className={`accordion-header ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
              </div>
              <div className={`accordion-body ${openIndex === index ? 'open' : ''}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;