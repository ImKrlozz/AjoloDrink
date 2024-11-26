import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import featureIcon1 from '../../public/coctel1.png';
import featureIcon2 from '../../public/coctel2.png';
import featureIcon3 from '../../public/coctel3.png';

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      className="features-section py-5"
      style={{
        backgroundColor: '#6EC207',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4" data-aos="fade-up">
            <img
              src={featureIcon1}
              alt="Multiple Recipe Versions"
              className="img-fluid mb-3"
            />
            <h4>Multiple Recipe Versions</h4>
            <p className="text-muted">
              Choose from standard, simplified, and super-simple recipes for each drink.
            </p>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <img
              src={featureIcon2}
              alt="Ingredient Substitutions"
              className="img-fluid mb-3"
            />
            <h4>Ingredient Substitutions</h4>
            <p className="text-muted">
              No fancy ingredients? No problem!
            </p>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
            <img
              src={featureIcon3}
              alt="Step-by-Step Guidance"
              className="img-fluid mb-3"
            />
            <h4>Step-by-Step Guidance</h4>
            <p className="text-muted">
              Simple instructions tailored to your chosen recipe level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;