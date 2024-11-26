import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: '#2D8A56' }}
    >
      <div className="container">
        <Link className="navbar-brand text-white fw-bold" to="/">
          AJOLODRINK
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarContent"
        >
          <ul className="navbar-nav mx-auto gap-4">
            <li className="nav-item">
              <Link className="nav-link text-warning fw-bold" href="/">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" href="/">
                Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" href="/">
                Liquors
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-3">
            <Link to="/login" className="text-white">
              <i
                className="bi bi-person-circle"
                style={{ fontSize: '1.5rem' }}
              ></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;