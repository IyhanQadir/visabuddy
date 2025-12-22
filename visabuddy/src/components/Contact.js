import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Let’s Get Started</h2>
        <p style={{maxWidth: '700px', margin: '1.5rem auto'}}>Get a quick eligibility check or book a consultation today.</p>

        <p style={{ fontSize: '0.85rem', color: 'var(--gray)', marginBottom: '1rem' }}>We'll reply within 24 hours with your personalized guide.</p>
          {/* Subtle T&C Link */}
          <p style={{ fontSize: '0.8rem', color: 'var(--gray)', lineHeight: '1.4' }}>
            By inquiring, you agree to our{' '}
            <a href={`${process.env.PUBLIC_URL}/terms-and-conditions.pdf`} download target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline', fontWeight: 500 }}>
              Terms & Conditions
            </a>{' '},{' '}
            <a href={`${process.env.PUBLIC_URL}/refund-policy.pdf`} download target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline', fontWeight: 500 }}>
              Refund and Cancellation Policy
            </a>{' '}
            and{' '}
            <a href={`${process.env.PUBLIC_URL}/privacy-policy.pdf`} download target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline', fontWeight: 500 }}>
              Privacy Policy
            </a>.
          </p>
        {/* <form>
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
        </form> */}
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <p>+91-7511177777</p>
          </div>
          <div className="contact-item">
            <i className="fab fa-whatsapp"></i>
            <a href="https://wa.me/7511177777" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>connect@studiencollege.com</p>
          </div>
        </div>
        <div className="locations-grid">
              <div className="location-card">
                <i className="fas fa-map-marker-alt"></i>
                <h4>Head Quarters: Kashmir</h4>
                <div className="map-embed">
                  <iframe 
                    src="YOUR_MUMBAI_MAP_LINK"  // e.g., https://www.google.com/maps/embed?pb=... for Mumbai
                    width="100%" 
                    height="200" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kashmir Office Map"
                  ></iframe>
                </div>
              </div>
              <div className="location-card">
                <i className="fas fa-map-marker-alt"></i>
                <h4>Central: Mumbai</h4>
                <div className="map-embed">
                  <iframe 
                    src="YOUR_KERALA_MAP_LINK"  // e.g., for Kochi or Trivandrum
                    width="100%" 
                    height="200" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mumbai Office Map"
                  ></iframe>
                </div>
              </div>
              <div className="location-card">
                <i className="fas fa-map-marker-alt"></i>
                <h4>Base: Kerela</h4>
                <div className="map-embed">
                  <iframe 
                    src="YOUR_KASHMIR_MAP_LINK"  // e.g., for Srinagar
                    width="100%" 
                    height="200" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kerela Office Map"
                  ></iframe>
                </div>
              </div>
            </div>
        <p className='location'>We are stratergically located all accross the India to achive our goal to serve the entire subcontinent.</p>
      </div>
    </section>
  );
};

export default Contact;