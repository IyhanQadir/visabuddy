import React from 'react';

const Countries = () => {
  return (
    <section className="countries" id="countries">
      <div className="container">
        <h2>Specialized in Eastern Europe & Beyond</h2>
        <div className="flag-grid">
          <div className="flag-card">
            <img src="https://flagcdn.com/pl.svg" alt="Poland" />
            <p>Poland</p>
          </div>
          <div className="flag-card">
            <img src="https://flagcdn.com/cz.svg" alt="Czech Republic" />
            <p>Czech Republic</p>
          </div>
          <div className="flag-card">
            <img src="https://flagcdn.com/hu.svg" alt="Hungary" />
            <p>Hungary</p>
          </div>
          <div className="flag-card">
            <img src="https://flagcdn.com/ro.svg" alt="Romania" />
            <p>Romania</p>
          </div>
          <div className="flag-card">
            <img src="https://flagcdn.com/sk.svg" alt="Slovakia" />
            <p>Slovakia</p>
          </div>
          <div className="flag-card">
            <img src="https://flagcdn.com/bg.svg" alt="Bulgaria" />
            <p>Bulgaria</p>
          </div>
          <div className="flag-card">
            <img src="https://flagcdn.com/de.svg" alt="Germany" />
            <p>Germany</p>
          </div>
          <div className="flag-card">
            <img src="https://flagcdn.com/nl.svg" alt="Netherlands" />
            <p>Netherlands</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countries;