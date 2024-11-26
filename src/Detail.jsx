import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavbarCatalog from './components/NavbarCatalog';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Detail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800 });

    const fetchCocktailDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        setCocktail(data.drinks[0]);
        const relatedResponse = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${data.drinks[0].strCategory}`
        );
        const relatedData = await relatedResponse.json();
        setRelated(relatedData.drinks.slice(0, 3));
      } catch {
        setError('Cocktail not found.');
      } finally {
        setLoading(false);
      }
    };

    fetchCocktailDetails();
  }, [id]);

  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail[`strIngredient${i}`];
      const measure = cocktail[`strMeasure${i}`];
      if (ingredient) ingredients.push({ name: ingredient, measure: measure || '' });
    }
    return ingredients;
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-danger">{error}</p>;

  return (
    <div>
      <NavbarCatalog />
      <div className="container mt-5">
        <div className="row" data-aos="fade-up">
          <div className="col-md-5">
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-7">
            <h1>{cocktail.strDrink}</h1>
            <p>
              <strong>Category:</strong> {cocktail.strCategory} <br />
              <strong>Type:</strong> {cocktail.strAlcoholic} <br />
              <strong>Glass:</strong> {cocktail.strGlass} <br />
              <strong>Ingredients:</strong> {getIngredients().length} items
            </p>
            <h3>Ingredients</h3>
            <ul>
              {getIngredients().map((ingredient, index) => (
                <li key={index} className="mb-2">
                  <img
                    src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.name}-Small.png`}
                    alt={ingredient.name}
                    style={{ width: '30px', marginRight: '10px' }}
                  />
                  {ingredient.measure} {ingredient.name}
                </li>
              ))}
            </ul>
            <h3>Instructions</h3>
            <p>{cocktail.strInstructions}</p>
            <Link
              to={`/catalog?filter=${cocktail.strCategory}`}
              className="btn btn-primary mt-3"
              style={{ backgroundColor: '#4379F2' }}
            >
              Find More {cocktail.strCategory} Cocktails
            </Link>
          </div>
        </div>
        {related.length > 0 && (
          <div className="mt-5" data-aos="fade-up">
            <h3 className="mb-4">You May Also Like</h3>
            <div className="row">
              {related.map((item) => (
                <div key={item.idDrink} className="col-md-4">
                  <div className="card shadow-sm">
                    <img
                      src={item.strDrinkThumb}
                      alt={item.strDrink}
                      className="card-img-top"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.strDrink}</h5>
                      <Link
                        to={`/cocktail/${item.idDrink}`}
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;