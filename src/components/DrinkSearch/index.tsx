import { useState } from "react";
import fetchDrinks from "./fetchDrinks";

const DrinkSearch = () => {
  const [
    drinkQuery,
    setDrinkQuery
  ] = useState("");

  const handleDrinkQuery = async (
    drinkQuery
  ) => {
    const results = await fetchDrinks(
      drinkQuery
    );
  };

  return (
    <form
      onSubmit={
        handleDrinkQuery
      }
    >
      <input
        placeholder="search for a drink..."
        type="search"
        value={drinkQuery}
        onChange={(event) =>
          setDrinkQuery(
            event.target.value
          )
        }
      />
      <button type="submit">
        Search
      </button>
    </form>
  );
};

export default DrinkSearch;
