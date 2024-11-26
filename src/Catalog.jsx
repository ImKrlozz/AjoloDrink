import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarCatalog from './components/NavbarCatalog';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../src/styles/catalog.css'

const Catalog = () => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(null);

  const categories = [
    'Cocktail',
    'Ordinary Drink',
    'Punch / Party Drink',
    'Shake',
    'Other / Unknown',
    'Cocoa',
    'Shot',
    'Coffee / Tea',
    'Homemade Liqueur',
    'Beer',
    'Soft Drink',
  ];

  useEffect(() => {
    AOS.init({ duration: 800 });

    const fetchDefaultCocktails = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
        const data = await response.json();
        setCocktails(data.drinks || []);
      } catch {
        setError('Failed to load cocktails.');
      } finally {
        setLoading(false);
      }
    };

    fetchDefaultCocktails();
  }, []);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    try {
      setLoading(true);
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await response.json();
      setCocktails(data.drinks || []); 
    } catch {
      setError('Failed to search cocktails.');
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = async (category) => {
    setSelectedFilter(category);
    try {
      setLoading(true);
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
      const data = await response.json();
      setCocktails(data.drinks || []);
    } catch {
      setError('Failed to load cocktails for the selected category.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <NavbarCatalog />
      <div className="container mt-5">
        <h1 className="text-center mb-4">Cocktail Catalog</h1>
        <div className="mb-4">
          <div className="row justify-content-center mb-3">
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                placeholder="Search for a cocktail..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary w-100" onClick={handleSearch} style={{ backgroundColor: '#4379F2' }}>
                Search
              </button>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`btn ${selectedFilter === category ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => handleFilter(category)}
                  style={{  Color: '#4379F2' }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        {loading ? (
          <p className="text-center">Loading cocktails...</p>
        ) : error ? (
          <p className="text-center text-danger">{error}</p>
        ) : cocktails.length > 0 ? (
          <div className="row">
            {cocktails.map((cocktail, index) => (
              <div
                key={cocktail.idDrink}
                className="col-md-4 mb-4"
                data-aos="fade-up" 
                data-aos-delay={`${index * 100}`}
              >
                <div className="card shadow-sm">
                  <img
                    src={cocktail.strDrinkThumb}
                    alt={cocktail.strDrink}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{cocktail.strDrink}</h5>
                    <Link
                      to={`/cocktail/${cocktail.idDrink}`}
                      className="btn btn-primary"
                      style={{ backgroundColor: '#4379F2' }}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No cocktails found. Try a different search or filter.</p>
        )}
      </div>
    </div>
  );
};

export default Catalog;