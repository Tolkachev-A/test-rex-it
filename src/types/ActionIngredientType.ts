import { INGREDIENT_KEY } from '../enums';
import { IngredientI } from '../interface';

export type ActionIngredientType = SetIngredientType;

export type SetIngredientType = {
  type: INGREDIENT_KEY.SET_INGREDIENT_VALUE;
  payload: IngredientI;
};
