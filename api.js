export async function fetchCocktails() {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.error('Error fetching Cocktails:', error);
    return [];
  }
}
