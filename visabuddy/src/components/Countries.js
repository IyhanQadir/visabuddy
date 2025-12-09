import React from 'react';

const Countries = () => {
  const countries = [
    { flag: 'https://flagcdn.com/pl.svg', name: 'Poland', alt: 'Poland' },
    { flag: 'https://flagcdn.com/cz.svg', name: 'Czech Republic', alt: 'Czech Republic' },
    { flag: 'https://flagcdn.com/rs.svg', name: 'Serbia', alt: 'Serbia' },
    { flag: 'https://flagcdn.com/hu.svg', name: 'Hungary', alt: 'Hungary' },
    { flag: 'https://flagcdn.com/ro.svg', name: 'Romania', alt: 'Romania' },
    { flag: 'https://flagcdn.com/lv.svg', name: 'Latvia', alt: 'Latvia' },
    { flag: 'https://flagcdn.com/lt.svg', name: 'Lithuania', alt: 'Lithuania' },
    { flag: 'https://flagcdn.com/sk.svg', name: 'Slovakia', alt: 'Slovakia' },
    { flag: 'https://flagcdn.com/bg.svg', name: 'Bulgaria', alt: 'Bulgaria' }
  ];

  return (
    <section className="countries" id="countries">
      <div className="container">
        <h2>Immigration Expertise Across Eastern Europe</h2>
        <div className="flag-grid">
          {countries.map((country, index) => (
            <div key={index} className="flag-card">
              <img src={country.flag} alt={country.alt} />
              <p>{country.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;