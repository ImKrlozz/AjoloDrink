import React, { useEffect } from 'react';
import cocktailGif from '../../public/cocktail.gif';
import { Link } from 'react-router-dom';

const Hero = () => {
  useEffect(() => {
    const heroSection = document.querySelector('.hero-section');
    heroSection.classList.add('visible');
  }, []);

  return (
    <section
      className="hero-section text-white py-5"
      style={{ backgroundColor: '#2D8A56', overflow: 'hidden' }}
    >
      <div className="container d-flex flex-column flex-lg-row align-items-center">
        <div className="text-content text-center text-lg-start mb-4 mb-lg-0 fade-in-left">
          <h1 className="fw-bold" style={{ fontSize: '3rem' }}>
            Simplify Your <span style={{ color: '#FFCC00' }}>Cocktails</span>
          </h1>
          <p
            className="lead text-muted"
            style={{ color: '#000', lineHeight: '1.8' }}
          >
            Discover easy-to-follow recipes for your favorite drinks with alternative versions to suit any skill level and ingredients on hand.
          </p>
          <Link
            className="btn btn-warning btn-lg mt-3 bounce-button"
            style={{ backgroundColor: '#FFCC00', color: '#000', border: 'none' }}
            to='/login'
          >
            Get started
          </Link>
        </div>
        <div className="image-content position-relative mt-5 mt-lg-0 fade-in-right">
          <img
            src={cocktailGif}
            alt="Cocktail GIF"
            className="img-fluid rounded-circle"
            style={{
              width: '350px',
              height: '350px',
              objectFit: 'cover',
            }}
          />
          <div
            className="badge badge-custom position-absolute bounce-badge"
            style={{ top: '10%', left: '70%' }}
          >
            Cocktail
          </div>
          <div
            className="badge badge-custom position-absolute bounce-badge"
            style={{ top: '40%', left: '85%' }}
          >
            4.8 ⭐
          </div>
          <div
            className="badge badge-custom position-absolute bounce-badge"
            style={{ bottom: '15%', left: '70%' }}
          >
            18K
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;