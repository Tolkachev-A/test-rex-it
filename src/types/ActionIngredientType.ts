import { setIngredient, setPack } from 'store/actions';

export type ActionIngredientType =
  | ReturnType<typeof setIngredient>
  | ReturnType<typeof setPack>;
