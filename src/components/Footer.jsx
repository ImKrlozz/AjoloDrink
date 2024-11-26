import React, { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    const footer = document.querySelector('footer');
    footer.classList.add('visible');
  }, []);

  return (
    <footer
      className="footer-section py-4"
      style={{ backgroundColor: '#2D8A56', color: '#fff' }}
    >
      <div className="container text-center fade-in-up">
        <p className="mb-2" style={{ fontWeight: 'bold' }}>AJOLODRINK</p>
        <p className="text-muted small mb-2">
          © AjoloDrink 2024 | 
          <a href="#" className="text-white ms-2" style={{ textDecoration: 'none' }}>Privacy policy</a> | 
          <a href="#" className="text-white ms-2" style={{ textDecoration: 'none' }}>Cookies policy</a> | 
          <a href="#" className="text-white ms-2" style={{ textDecoration: 'none' }}>Terms of use</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;