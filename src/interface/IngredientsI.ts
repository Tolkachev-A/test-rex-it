import { IngredientKeyType } from '../types';

export interface IngredientsStateI {
  ingredients: IngredientsI;
  pack: string;
}

export interface IngredientsI {
  soybean: number;
  sesame: number;
  wheat: number;
  corn: number;
}

export interface ChangeIngredientI {
  name: IngredientKeyType;
  value: number;
}
