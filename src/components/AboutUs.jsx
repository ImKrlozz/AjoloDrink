import React, { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('.about-section');
      const sectionPosition = aboutSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (sectionPosition < screenPosition) {
        aboutSection.classList.add('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="about-section py-5"
      style={{
        backgroundColor: '#E8F5E9',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container d-flex flex-column flex-lg-row align-items-center">
        <div className="image-content mb-4 mb-lg-0">
          <img
            src="../../public/bg.jpg"
            alt="Cocktail"
            className="img-fluid rounded-3"
            style={{
              width: '800px',
              boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
        <div className="text-content ms-lg-5 text-center text-lg-start">
          <h2 className="fade-in-text">
            About <span style={{ color: '#2D8A56' }}>us</span>
          </h2>
          <p
            className="fade-in-text lead text-muted"
            style={{ fontSize: '1rem', lineHeight: '1.8' }}
          >
            Simplifying Cocktails for Everyone
          </p>
          <p className="fade-in-text text-muted" style={{ lineHeight: '1.6' }}>
            We’re a team passionate about making mixology easy and accessible. Our app offers
            simplified versions of classic cocktails, so you can craft delicious drinks with
            whatever ingredients you have at home. Enjoy great cocktails, hassle-free!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;