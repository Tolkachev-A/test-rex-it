import { IngredientsI } from '../interface';

export type IngredientKeyType = keyof IngredientsI;

export type IngredientI = {
  [key in IngredientKeyType]: number;
};
