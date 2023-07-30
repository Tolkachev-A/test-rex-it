import { ChangeIngredientI, IngredientsI } from '../interface';
import { IngredientKeyType } from '../types';

const MAX_VALUE_INGREDIENT = 100;

export const getNewValueIngredients = (
  ingredient: ChangeIngredientI,
  prevDataIngredients: IngredientsI,
) => {
  const ingredientsKey = Object.keys(prevDataIngredients) as IngredientKeyType[];

  const newStateIngredients = {
    ...prevDataIngredients,
    [ingredient.name]: ingredient.value,
  };

  const newIngredientsValue = ingredientsKey.reduce((acc, item) => {
    if (item === 'corn') {
      return acc;
    }

    return acc + newStateIngredients[item];
  }, 0);

  if (newIngredientsValue <= MAX_VALUE_INGREDIENT) {
    return { ...newStateIngredients, corn: MAX_VALUE_INGREDIENT - newIngredientsValue };
  }

  return prevDataIngredients;
};
