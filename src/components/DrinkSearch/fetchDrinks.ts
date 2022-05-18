const fetchDrinks = async (drinkQuery: string | undefined) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkQuery}`
  );

  if (!response.ok) {
    const message = `An error occurred: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();

  return data.drinks;
};

export default fetchDrinks;
