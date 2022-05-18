import { FormEventHandler, useState } from 'react';
import fetchDrinks from './fetchDrinks';

type TDrink = {
  idDrink: number;
  strDrinkThumb: string;
  strDrink: string;
  strInstructions: string;
  strIngredient1: string;
  [key: string]: string | number;
};

const DrinkSearch = () => {
  const [drinkQuery, setDrinkQuery] = useState<string>('');
  const [drinks, setDrinks] = useState<TDrink[] | null>([]);
  const [isError, setIsError] = useState(false);

  const handleDrinkQuery: FormEventHandler = async (e) => {
    e.preventDefault();

    try {
      if (drinkQuery && drinkQuery.trim() !== '') {
        const data = await fetchDrinks(drinkQuery.trim());
        setDrinks(data);
      } else {
        return;
      }
    } catch (error) {
      console.log('Error message', error);
      setIsError(true);
    }
  };

  const drinkResults = () => {
    const ingredientList = (drink: TDrink) => {
      const ingredients = [];
      const maxIngredients = 15;
      for (let i = 1; i <= maxIngredients; i++) {
        const ingredient = drink['strIngredient1' + i.toString()];
        if (ingredient) {
          ingredients.push(ingredient);
        }
      }
      return ingredients;
    };

    return drinks?.map((drink) => {
      return (
        <div
          key={drink.idDrink}
          className="card m-2"
          style={{ width: '20rem' }}
        >
          <img
            src={drink.strDrinkThumb}
            className="card-img-top"
            alt={drink.strDrink}
          />
          <div className="card-body">
            <h5 className="card-title text-center">{drink.strDrink}</h5>
            <h6 className="text-center font-weight-bold">Ingredients</h6>
            <div className="d-flex flex-wrap justify-content-center border-top">
              {ingredientList(drink).map((ingredient, index) => (
                <div className="p-1" key={ingredient + index.toString()}>
                  {ingredient}
                </div>
              ))}
            </div>
            <h6 className="text-center font-weight-bold">Instructions</h6>
            <p className="card-text border-top">{drink.strInstructions}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <form onSubmit={handleDrinkQuery}>
        <input
          placeholder="search for a drink..."
          type="search"
          value={drinkQuery}
          onChange={(event) => setDrinkQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {drinks && <div>{drinkResults()}</div>}
      {!drinks && <h5> No drinks found </h5>}
      {isError && <h5> Service unavailable </h5>}
    </>
  );
};

export default DrinkSearch;
