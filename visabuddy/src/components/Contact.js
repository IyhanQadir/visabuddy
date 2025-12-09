import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Ready to Start Your Journey?</h2>
        <p style={{maxWidth: '700px', margin: '1.5rem auto'}}>Get a free eligibility check or book a consultation today.</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Full Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone (with country code)</label>
            <input type="tel" id="phone" placeholder="Phone (with country code)" required />
          </div>
          <div className="form-group">
            <label htmlFor="country">Interested Country</label>
            <input type="text" id="country" placeholder="Interested Country" />
          </div>
          <button type="submit" className="btn btn-primary">Submit & Get Free Assessment</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;