import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    const icon = document.querySelector('#mobile-menu i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    }
  };

  const closeMenu = () => {
    if (isMenuActive) {
      setIsMenuActive(false);
      const icon = document.querySelector('#mobile-menu i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      }
    }
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
          <a href="#" className="logo" onClick={(e) => scrollToSection(e, 'home')}>
      <img src={`${process.env.PUBLIC_URL}/logovb.png`} alt="VisaBuddy Logo" />
      VisaBuddy
    </a>
        <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <div className={`nav-menu ${isMenuActive ? 'active' : ''}`} id="nav-menu">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
          <a href="#countries" onClick={(e) => scrollToSection(e, 'countries')}>Countries</a>
          <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')}>Testimonials</a>
          <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')}>FAQ</a>
          <a href="#contact" className="btn btn-primary" style={{padding: '0.8rem 2rem', margin: 0}} onClick={(e) => scrollToSection(e, 'contact')}>Start Application</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;